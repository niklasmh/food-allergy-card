import { useRecoilState } from "recoil";
import { Allergies, Languages, allAllergies } from "../allergies";
import { currentCardStore } from "../store";

export function Card() {
  const [card, setCard] = useRecoilState(currentCardStore);

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <div className="card">
        <h1 className="title">{card.name || "Allergies"}</h1>
        <div className="items">
          {card.allergies
            .filter((id) => !!id)
            .map((id) => (
              <AllergyItem key={id} id={id} languages={card.languages} />
            ))}
        </div>
      </div>
      {card.isFromLink && (
        <div className="flex flex-col gap-4">
          This card is not in your collection.
          <button onClick={() => setCard((card) => ({ ...card, isFromLink: false }))}>
            + Add card to your collection
          </button>
        </div>
      )}
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
        {(languages.length ? languages : (["EN"] as Languages[])).map((language) => (
          <span key={language}>{allAllergies[id].name[language]}</span>
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
