import { CSSProperties, Fragment, ReactNode, useState } from "react";
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
import { darkenHexColor } from "../../utils/colors";
import { allLanguages } from "../../allergies";
import { useStore } from "../../store";
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
import { PrintCardButton } from "./PrintCardButton";

export function Card() {
  const {
    currentCard: card,
    setCard,
    cards,
    setCards,
    editMode,
    setEditMode,
    editAllergiesMode,
    setEditAllergiesMode,
    editLanguagesMode: editLanguages,
    setEditLanguagesMode: setEditLanguages
  } = useStore();
  const [printMode, setPrintMode] = useState<boolean>(false);

  const beautifyPrintGridCols = (elementCount: number): number => {
    const printGridCols = [1, 1, 2, 3, 4, 5, 3, 4, 4, 5];
    const l = printGridCols.length;
    const cols = printGridCols[Math.min(elementCount, l - 1)];
    return cols;
  };

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
      const oldIndex = card.allergies.findIndex((a) => a.id === active.id);
      const newIndex = card.allergies.findIndex((a) => a.id === over.id);
      const updatedCard = { ...card, allergies: arrayMove(card.allergies, oldIndex, newIndex) };
      setCard(updatedCard);
      setCards(cards.map((c) => (c.id === card.id ? updatedCard : c)));
    }
  }

  const cardElement = (
    <div
      className={"card relative overflow-visible" + (editMode ? " !pb-20 gap-4" : "")}
      style={{ backgroundImage: `linear-gradient(120deg, ${card.color}, ${darkenHexColor(card.color, 50)})` }}
    >      <h1 className="title capitalize mb-8">
        {(card.name || (card.languages.length > 0 && allLanguages.find((l) => l.id === card.languages[0])?.translations["allergies"])) ?? "Allergies"}
      </h1>
      {!editAllergiesMode && !editLanguages && (
        <div
          className={"items gap-3 w-full grid" + beautifyGrid(card.allergies.length)}
          style={{ "--print-cols": beautifyPrintGridCols(card.allergies.length) } as CSSProperties}
        >
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext disabled={!editMode} items={card.allergies.map(a => a.id)} strategy={rectSortingStrategy}>
              {card.allergies
                .filter((a) => !!a.id)
                .map((allergy) => (
                  <SortableItem key={allergy.id} id={allergy.id} disabled={!editMode}>
                    <AllergyItem key={allergy.id} id={allergy.id} languages={card.languages} />
                  </SortableItem>
                ))}
            </SortableContext>
          </DndContext>
          {card.allergies.length === 0 && `(Click on "🖊️ Edit card" to add allergies)`}
        </div>
      )}
      {editAllergiesMode && (
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
          {!editAllergiesMode && <AddNewLanguageButton />}
          {editAllergiesMode && editLanguages && <DoneButton />}
        </div>
      )}
    </div>
  );

  if (printMode) {
    return (
      <div className={"flex flex-col justify-center items-center mb-8 gap-16 min-h-screen" + (editMode ? " edit" : "")}>
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Fragment key={i}>{cardElement}</Fragment>
          ))}
      </div>
    );
  }

  return (
    <div className={"flex flex-col justify-center items-center mb-8 gap-16 min-h-screen" + (editMode ? " edit" : "")}>
      {cardElement}
      {editMode && <ColorPicker />}
      <div className="flex flex-row w-full items-start justify-between flex-wrap gap-4">
        <EditCardButton />
        <PrintCardButton
          onClick={() => {
            setEditMode(false);
            setEditAllergiesMode(false);
            setEditLanguages(false);
            setPrintMode(true);
            setTimeout(() => {
              print();
              setPrintMode(false);
            }, 100);
          }}
        />
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
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={props.disabled ? "disabled" : ""} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}
