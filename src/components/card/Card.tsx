import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { allLanguages } from "../../allergies";
import { cardsState, colorMap, currentCardState, editAllergiesState, editLanguagesState, editState } from "../../store";
import { Cards } from "./Cards";
import { ColorPicker } from "./ColorPicker";
import { EditCardButton } from "./EditCardButton";
import { RemoveCardButton } from "./RemoveCardButton";
import { SaveToCards } from "./SaveToCards";
import { AllergyItem } from "./AllergyItem";
import { AddNewAllergyButton } from "./AddNewAllergyButton";
import { AllergyList } from "../AllergyList";
import { Languages } from "../Languages";
import { AddNewLanguageButton } from "./AddNewLanguageButton";
import { DoneButton } from "./DoneButton";

export function Card() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [, setCards] = useRecoilState(cardsState);
  const editMode = useRecoilValue(editState);
  const editAllergyMode = useRecoilValue(editAllergiesState);
  const editLanguages = useRecoilValue(editLanguagesState);

  const beautifyGrid = (elementCount: number): string => {
    const gridCols = [[1], [1], [2], [2, 3], [2, 4], [2, 3, 5], [2, 3], [2, 3, 4], [2, 3, 4], [2, 3, 5]];
    gridCols.push([2, 3, 4, 5]);
    const l = gridCols.length;
    const gridStyles = ["", "grid-cols-1", "grid-cols-2", "xs:grid-cols-3", "sm:grid-cols-4", "md:grid-cols-5"];
    return " " + gridCols[Math.min(elementCount, l - 1)].map((c) => gridStyles[c]).join(" ");
  };

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 300,
        tolerance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = card.allergies.indexOf(active.id);
      const newIndex = card.allergies.indexOf(over.id);
      const updatedCard = { ...card, allergies: arrayMove(card.allergies, oldIndex, newIndex) };
      setCard(updatedCard);
      setCards((cards) => cards.map((c) => (c.id === card.id ? updatedCard : c)));
    }
  }

  return (
    <div className={"flex flex-col justify-center items-center mb-8 gap-16 min-h-screen" + (editMode ? " edit" : "")}>
      <div
        className={"card relative" + (editMode ? " !pb-20 gap-4" : "")}
        style={{ backgroundImage: `linear-gradient(120deg, ${(colorMap[card.color || "dark"] || []).join(",")})` }}
      >
        <h1 className="title capitalize mb-8">
          {(card.name || allLanguages.find((l) => l.id === card.languages[0])?.translations["allergies"]) ??
            "Allergies"}
        </h1>
        {!editAllergyMode && !editLanguages && (
          <div className={"items gap-3 w-full grid" + beautifyGrid(card.allergies.length)}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext disabled={!editMode} items={card.allergies} strategy={rectSortingStrategy}>
                {card.allergies
                  .filter((id) => !!id)
                  .map((id) => (
                    <SortableItem key={id} id={id} disabled={!editMode}>
                      <AllergyItem key={id} id={id} languages={card.languages} />
                    </SortableItem>
                  ))}
              </SortableContext>
            </DndContext>
            {card.allergies.length === 0 && `(Click on "🖊️ Edit card" to add allergies)`}
          </div>
        )}
        {editAllergyMode && (
          <div className="h-full w-full flex flex-col justify-center">
            <AllergyList />
          </div>
        )}
        {editLanguages && (
          <div className="h-full w-full flex flex-col justify-center gap-2">
            <h2 className="text-xl">Choose languages</h2>
            <Languages />
          </div>
        )}
        {editMode && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4">
            {!editLanguages && <AddNewAllergyButton />}
            {!editAllergyMode && <AddNewLanguageButton />}
            {editAllergyMode && editLanguages && <DoneButton />}
          </div>
        )}
        {editMode && <ColorPicker />}
      </div>

      <div className="flex flex-row w-full items-start gap-4">
        <EditCardButton />
        <div className="flex-1" />
        <RemoveCardButton />
      </div>
      {card.isFromLink && <SaveToCards />}
      <Cards />
    </div>
  );
}

type SortableItemProps = {
  id: string;
  children: ReactNode;
  disabled: boolean;
};

export function SortableItem(props: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={props.disabled ? "disabled" : ""} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}
