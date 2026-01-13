import { allLanguages, type Languages as LanguagesType } from "../allergies";
import { useStore } from "../store";

export function Languages() {
  const { currentCard: card, setCard, cards, setCards } = useStore();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const languageCode = event.target.id as LanguagesType;
    const languages = card.languages.slice(0);
    if (isChecked) {
      if (!card.languages.includes(languageCode)) {
        languages.push(languageCode);
      }
    } else {
      if (languages.indexOf(languageCode) !== -1) {
        languages.splice(languages.indexOf(languageCode), 1);
      }
    }
    const updatedCard = { ...card, languages };
    setCard(updatedCard);
    setCards(cards.map((c) => (c.id === card.id ? updatedCard : c)));
  };

  const labelStyle = "language-choice flex flex-row w-40 px-3 py-1 gap-2 cursor-pointer";
  const selectedStyle = " selected-btn";

  return (
    <div className="flex flex-col items-center gap-1">
      {allLanguages.map(({ id, longName, icon }) => {
        const checked = card.languages.includes(id);
        return (
          <label key={id} className={labelStyle + (checked ? selectedStyle : "")}>
            <input type="checkbox" id={id} checked={checked} onChange={handleLanguageChange} />
            {icon}
            <span className="overflow-x-hidden text-ellipsis capitalize">{longName}</span>
            {checked ? <span className="ml-auto">{card.languages.indexOf(id) + 1}.</span> : null}
          </label>
        );
      })}
    </div>
  );
}
