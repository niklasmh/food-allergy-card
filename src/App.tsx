import { useEffect, useRef, useState } from "react";
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
  .map((s) => (Object.entries(allergies).find((a) => a[1].shortname === s) ?? [s])[0])
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
  const lastAllergyInputRef = useRef<any>();

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
    setMyAllergiesShort(myAllergies.map((a) => (a in allergies ? allergies[a].shortname : a)));
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
      {myAllergies
        .map((id) => (id in allergies ? null : id))
        .map((id, i) =>
          id === null ? null : (
            <div key={"custom-" + i} className="allergy-choice">
              <input
                value={id}
                ref={lastAllergyInputRef}
                onChange={(event) => {
                  const prevValue = id;
                  const value = event.target.value;
                  setMyAllergies((allergies) => allergies.map((a) => (a === prevValue ? value : a)) as Allergies[]);
                }}
              />{" "}
              <button
                onClick={() => {
                  setMyAllergies((allergies) => [...allergies.slice(0, i), ...allergies.slice(i + 1)]);
                }}
              >
                Remove
              </button>
            </div>
          )
        )}
      {
        <div className="allergy-choice">
          <input
            key={"custom-" + myAllergies.filter((id) => !(id in allergies)).length}
            placeholder="+ Add more ..."
            onFocus={() => {
              setMyAllergies((allergies) => [...allergies, "" as any]);
              setTimeout(() => lastAllergyInputRef.current?.focus(), 100);
            }}
          />{" "}
        </div>
      }
    </div>
  );

  const url = location.origin + "?a=" + myAllergiesShort.join(",") + "&l=" + languages.join(",").toLowerCase();

  return (
    <div className="App">
      <div className="card">
        <h1 className="title">Food Allergy Card</h1>
        <div className="items">
          {myAllergies
            .filter((id) => !!id)
            .map((id) => (
              <AllergyItem key={id} id={id} languages={languages} />
            ))}
        </div>
      </div>
      <h2>Share with the chef</h2>
      <div className="qr-code">
        <QRCode value={url} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
      </div>
      <br />
      <button onClick={() => navigator.clipboard.writeText(url)}>Copy link from QR code</button>
      <br />
      <br />
      <h2>Languages (shown on the card)</h2>
      <p className="dimmed-text">(The order you select matters)</p>
      {languageInput}
      <br />
      <h2>Allergies</h2>
      <p className="dimmed-text">(The order you select matters here as well)</p>
      {allergyInput}
      <h4>(All changes made are stored in this browser until next time you visit this site.)</h4>
      <p>
        DISCLAIMER: I do not take any responsibility for the use of this site. Also, I discourage using this site if you
        have specific request to your meal that this site cannot provide.
      </p>
    </div>
  );
}

type AllergyItemProps = {
  id: Allergies;
  languages: Languages[];
};

function AllergyItem({ id, languages }: AllergyItemProps) {
  if (id in allergies) {
    return (
      <div className="item">
        <img src={id + ".png"} alt={allergies[id].name.EN} />
        {(languages.length ? languages : (["EN"] as Languages[])).map((language) => (
          <span key={language}>{allergies[id].name[language]}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="item">
      <img src={"unknown.png"} alt={id} />
      <span>{id}</span>
    </div>
  );
}

export default App;
