import { useRecoilValue } from "recoil";
import { allLanguages } from "../../allergies";
import { colorMap, currentCardState, editState } from "../../store";
import { Cards } from "./Cards";
import { ColorPicker } from "./ColorPicker";
import { EditCardButton } from "./EditCardButton";
import { RemoveCardButton } from "./RemoveCardButton";
import { SaveToCards } from "./SaveToCards";
import { AllergyItem } from "./AllergyItem";

export function Card() {
  const card = useRecoilValue(currentCardState);
  const editMode = useRecoilValue(editState);

  const beautifyGrid = (elementCount: number): string => {
    const gridCols = [[1], [1], [2], [2, 3], [2, 4], [2, 3, 5], [2, 3], [2, 3, 4], [2, 3, 4], [2, 3, 5]];
    gridCols.push([2, 3, 4, 5]);
    const l = gridCols.length;
    const gridStyles = ["", "grid-cols-1", "grid-cols-2", "xs:grid-cols-3", "sm:grid-cols-4", "md:grid-cols-5"];
    return " " + gridCols[Math.min(elementCount, l - 1)].map((c) => gridStyles[c]).join(" ");
  };

  return (
    <div className={"flex flex-col justify-center items-center mb-8 gap-16 min-h-screen" + (editMode ? " edit" : "")}>
      <div
        className="card relative"
        style={{ backgroundImage: `linear-gradient(120deg, ${(colorMap[card.color || "purple"] || []).join(",")})` }}
      >
        <h1 className="title capitalize mb-8">
          {(card.name || allLanguages.find((l) => l.id === card.languages[0])?.translations["allergies"]) ??
            "Allergies"}
        </h1>
        <div className={"items gap-3 w-full grid" + beautifyGrid(card.allergies.length)}>
          {card.allergies
            .filter((id) => !!id)
            .map((id) => (
              <AllergyItem key={id} id={id} languages={card.languages} />
            ))}
          {card.allergies.length === 0 && "(Add allergies on the bottom of the site)"}
        </div>
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
