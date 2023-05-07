import { useRecoilState } from "recoil";
import { Allergies, Languages, allAllergies, allLanguages } from "../allergies";
import { cardsState, currentCardState } from "../store";
import { Cards } from "./Cards";

export function Card() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [, setCards] = useRecoilState(cardsState);

  return (
    <div className="flex flex-col justify-center items-center mb-8 gap-16 min-h-screen">
      <div className="card">
        <h1 className="title capitalize mb-8">
          {(card.name || allLanguages.find((l) => l.id === card.languages[0])?.translations["allergies"]) ??
            "Allergies"}
        </h1>
        <div
          className={
            "items gap-3 w-full grid" +
            (card.allergies.length >= 2 ? " grid-cols-2" : " grid-cols-1") +
            (card.allergies.length >= 3 ? " xs:grid-cols-3" : "") +
            (card.allergies.length >= 4 ? " sm:grid-cols-4" : "") +
            (card.allergies.length >= 5 ? " md:grid-cols-5" : "")
          }
        >
          {card.allergies
            .filter((id) => !!id)
            .map((id) => (
              <AllergyItem key={id} id={id} languages={card.languages} />
            ))}
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
