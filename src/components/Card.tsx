import { useRecoilState } from "recoil";
import { Allergies, Languages, allAllergies, allLanguages } from "../allergies";
import { allColors, cardsState, colorMap, currentCardState } from "../store";
import { Cards } from "./Cards";
import { useState } from "react";

export function Card() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [cards, setCards] = useRecoilState(cardsState);
  const [editMode, setEditMode] = useState<boolean>(false);

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
        {editMode && (
          <div className="w-full flex flex-row justify-center gap-2 absolute left-0" style={{ bottom: -32 }}>
            <div className="flex flex-row gap-2">
              {allColors.map(({ id, colors }) => (
                <div
                  key={id}
                  className={
                    "color w-8 h-6 rounded-md cursor-pointer hover:scale-105 transition-all" +
                    (card?.color === id ? " selected" : "")
                  }
                  style={{ backgroundImage: `linear-gradient(120deg, ${colors.join(",")})` }}
                  onClick={() => {
                    const modifiedCard = { ...card, color: id };
                    setCard(modifiedCard);
                    setCards((cards) => cards.map((c) => (c.id === card.id ? modifiedCard : c)));
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-row w-full items-start gap-4">
        {editMode ? (
          <button className="success-btn" onClick={() => setEditMode(false)}>
            💾 Save card
          </button>
        ) : (
          <button onClick={() => setEditMode(true)}>🖊️ Edit card</button>
        )}
        <div className="flex-1" />
        <button
          className="danger-btn"
          onClick={() => {
            const updatedCards = cards.filter((c) => c.id !== card.id);
            setCards(updatedCards);
            if (updatedCards.length > 0) {
              setCard(updatedCards[0]);
            } else {
              setCard({
                allergies: [],
                languages: [],
                color: "purple",
                id: Math.random().toString(16).slice(2),
                name: "",
                saved: false,
                isFromLink: false,
              });
            }
          }}
        >
          🗑️ Remove card
        </button>
      </div>
      {card.isFromLink && (
        <div className="flex flex-col gap-4">
          This card is not in your cards.
          <button
            onClick={() => {
              const modifiedCard = { ...card, isFromLink: false, saved: true, id: Math.random().toString(16).slice(2) };
              history.replaceState({}, "Food Allergy Card", "/");
              setCard(modifiedCard);
              setCards((cards) => [modifiedCard, ...cards]);
            }}
          >
            + Add to your cards
          </button>
        </div>
      )}
      <Cards />
    </div>
  );
}

type AllergyItemProps = {
  id: Allergies;
  languages: Languages[];
};

function AllergyItem({ id, languages }: AllergyItemProps) {
  if (id in allAllergies) {
    return (
      <div className="item">
        <img src={id + ".png"} alt={allAllergies[id].name.EN} className="blend-img" />
        {(languages.length ? languages : (["EN"] as Languages[])).map((language, i) => (
          <span key={language} className={i !== 0 ? "dimmed-text" : ""}>
            {allAllergies[id].name[language]}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="item">
      <img src={"unknown.png"} alt={id} className="blend-img" />
      <span>{id}</span>
    </div>
  );
}
