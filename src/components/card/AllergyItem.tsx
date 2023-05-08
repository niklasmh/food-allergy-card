import { Allergies, Languages, allAllergies } from "../../allergies";

type AllergyItemProps = {
  id: Allergies;
  languages: Languages[];
};

export function AllergyItem({ id, languages }: AllergyItemProps) {
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
