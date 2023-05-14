import { CSSProperties } from "react";
import { Allergies, Languages, allAllergies } from "../../allergies";

type AllergyItemProps = {
  id: Allergies;
  languages: Languages[];
};

const calcPrintFontSize = (text: string): string => {
  const count = text.length;
  return Math.max(6, Math.min(9, 18 - count)) + "px";
};

const calcFontSize = (text: string): string => {
  const count = text.length;
  return Math.max(10, Math.min(16, 26 - count)) + "px";
};

export function AllergyItem({ id, languages }: AllergyItemProps) {
  if (id in allAllergies) {
    return (
      <div className="item">
        <img src={id + ".png"} alt={allAllergies[id].name.EN} className="blend-img" />
        {(languages.length ? languages : (["EN"] as Languages[])).map((language, i) => (
          <span
            key={language}
            className={i !== 0 ? "dimmed-text" : ""}
            style={
              {
                "--print-font-size": calcPrintFontSize(allAllergies[id].name[language]),
                "--font-size": calcFontSize(allAllergies[id].name[language]),
              } as CSSProperties
            }
          >
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
