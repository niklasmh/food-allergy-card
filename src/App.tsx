import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";
import { Allergies, allergies, allLanguages, Languages } from "./allergies";

// TODO: Add better images
// TODO: Make it look like a card
// TODO: Test it IRL
// TODO: Make a printable version
// TODO: Add information about how severe the allergy is

const paramsFromUrl = new URLSearchParams(window.location.search);
const paramA = paramsFromUrl
  .get("a")
  ?.split(",")
  .map((s) => (Object.entries(allergies).find((a) => a[1].shortname === s) ?? ["unknown"])[0])
  .join(",");
const paramL = paramsFromUrl.get("l");

const initialAllergies = (paramA ?? localStorage.getItem("allergies") ?? "nut").toLowerCase().split(",") as Allergies[];
const initialLanguages = (paramL ?? localStorage.getItem("languages") ?? "EN").toUpperCase().split(",") as Languages[];
const storeAllergies = (allergies: Allergies[]) => localStorage.setItem("allergies", allergies.join(","));
const storeLanguages = (languages: Languages[]) => localStorage.setItem("languages", languages.join(","));

function App() {
  const [myAllergies, setMyAllergies] = useState<Allergies[]>(initialAllergies);
  const [myAllergiesShort, setMyAllergiesShort] = useState<string[]>([]);
  const [languages, setLanguages] = useState<Languages[]>(initialLanguages);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const languageCode = event.target.id as Languages;
    if (isChecked) {
      if (!languages.includes(languageCode)) {
        setLanguages((l) => [...l, languageCode]);
      }
    } else {
      setLanguages((l) => l.filter((e) => e !== languageCode));
    }
  };

  useEffect(() => {
    storeLanguages(languages);
  }, [languages]);

  const handleAllergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const id = event.target.id as Allergies;
    if (isChecked) {
      if (!myAllergies.includes(id)) {
        setMyAllergies((l) => [...l, id]);
      }
    } else {
      setMyAllergies((l) => l.filter((e) => e !== id));
    }
  };

  useEffect(() => {
    storeAllergies(myAllergies);
    setMyAllergiesShort(myAllergies.map((a) => allergies[a].shortname));
  }, [myAllergies]);

  const languageInput = (
    <div>
      {allLanguages.map(({ id, longName }) => (
        <div key={id} className="language-choice">
          <input type="checkbox" id={id} defaultChecked={languages.includes(id)} onChange={handleLanguageChange} />
          <label htmlFor={id}>{longName}</label>
        </div>
      ))}
    </div>
  );

  const allergyInput = (
    <div>
      {Object.entries(allergies)
        .filter((a) => a[0] !== "unknown")
        .map(([id, { name }]) => (
          <div key={id} className="allergy-choice">
            <input
              type="checkbox"
              id={id}
              defaultChecked={myAllergies.includes(id as Allergies)}
              onChange={handleAllergyChange}
            />
            <label htmlFor={id}>
              {name[languages.length ? languages[0] : "EN"]} <img src={id + ".png"} alt={name.EN} />
            </label>
          </div>
        ))}
    </div>
  );

  return (
    <div className="App">
      <h1>Food Allergy Card</h1>
      <div className="items">
        {myAllergies.map((id) => (
          <AllergyItem key={id} id={id} languages={languages} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Share with the chef</h2>
      <div className="qr-code">
        <QRCode
          value={location.origin + "?a=" + myAllergiesShort.join(",") + "&l=" + languages.join(",").toLowerCase()}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        />
      </div>
      <br />
      <br />
      <h2>Languages (shown on the card)</h2>
      <p className="dimmed-text">(The order you select matters)</p>
      {languageInput}
      <br />
      <h2>Allergies</h2>
      <p className="dimmed-text">(The order you select matters here as well)</p>
      {allergyInput}
    </div>
  );
}

type AllergyItemProps = {
  id: Allergies;
  languages: Languages[];
};

function AllergyItem({ id, languages }: AllergyItemProps) {
  return (
    <div className="item">
      <img src={id + ".png"} alt={allergies[id].name.EN} />
      {(languages.length ? languages : (["EN"] as Languages[])).map((language) => (
        <span key={language}>{allergies[id].name[language]}</span>
      ))}
    </div>
  );
}

export default App;
