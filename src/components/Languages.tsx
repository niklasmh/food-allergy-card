import { useRecoilState } from "recoil";
import { allLanguages, type Languages as LanguagesType } from "../allergies";
import { currentCardStore } from "../store";

export function Languages() {
  const [card, setCard] = useRecoilState(currentCardStore);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const languageCode = event.target.id as LanguagesType;
    if (isChecked) {
      if (!card.languages.includes(languageCode)) {
        setCard((c) => ({ ...c, languages: [...c.languages, languageCode] }));
      }
    } else {
      setCard((c) => ({ ...c, languages: c.languages.filter((e) => e !== languageCode) }));
    }
  };

  const labelStyle = "language-choice flex flex-row w-40 px-3 py-1 gap-2 cursor-pointer";
  const selectedStyle = " green-btn";

  return (
    <div className="flex flex-col gap-4">
      <h1>Languages</h1>
      <p className="dimmed-text">(The order you select matters)</p>
      <div className="flex flex-col items-center gap-1">
        {allLanguages.map(({ id, longName, icon }) => {
          const checked = card.languages.includes(id);
          return (
            <label key={id} className={labelStyle + (checked ? selectedStyle : "")}>
              <input type="checkbox" id={id} defaultChecked={checked} onChange={handleLanguageChange} />
              {icon}
              <span className="overflow-x-hidden text-ellipsis capitalize">{longName}</span>
              {checked ? <span className="ml-auto">{card.languages.indexOf(id) + 1}.</span> : null}
            </label>
          );
        })}
      </div>
    </div>
  );
}
