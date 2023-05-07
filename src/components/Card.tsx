import { useRecoilState } from "recoil";
import { Allergies, Languages, allAllergies, allLanguages } from "../allergies";
import { cardsState, currentCardState } from "../store";
import { Cards } from "./Cards";

export function Card() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [, setCards] = useRecoilState(cardsState);

  const beautifyGrid = (elementCount: number): string => {
    const gridCols = [[1], [1], [2], [2, 3], [2, 4], [2, 3, 5], [2, 3], [2, 3, 4], [2, 3, 4], [2, 3, 5]];
    gridCols.push([2, 3, 4, 5]);
    const l = gridCols.length;
    const gridStyles = ["", "grid-cols-1", "grid-cols-2", "xs:grid-cols-3", "sm:grid-cols-4", "md:grid-cols-5"];
    return " " + gridCols[Math.min(elementCount, l - 1)].map((c) => gridStyles[c]).join(" ");
  };

  return (
    <div className="flex flex-col justify-center items-center mb-8 gap-16 min-h-screen">
      <div className="card">
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
