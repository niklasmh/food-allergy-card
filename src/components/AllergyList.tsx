import { useRecoilState } from "recoil";
import { allAllergies, Allergies } from "../allergies";
import { cardsState, currentCardState } from "../store";

export function AllergyList() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [, setCards] = useRecoilState(cardsState);

  const handleAllergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const id = event.target.id as Allergies;
    const allergies = card.allergies.slice(0);
    if (isChecked) {
      if (!card.allergies.includes(id)) {
        allergies.push(id);
      }
    } else {
      if (allergies.indexOf(id) !== -1) {
        allergies.splice(allergies.indexOf(id), 1);
      }
    }
    const updatedCard = { ...card, allergies };
    setCard(updatedCard);
    setCards((cards) => cards.map((c) => (c.id === card.id ? updatedCard : c)));
  };

  const labelStyle = "allergy-item flex flex-row items-center px-3 py-1 gap-2 cursor-pointer";
  const selectedStyle = " rounded-md selected-btn";

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-1 items-center gap-1">
      {Object.entries(allAllergies).map(([id, { name }]) => {
        const allergy = id as Allergies;
        const checked = card.allergies.includes(allergy);
        return (
          <label key={id} className={labelStyle + (checked ? selectedStyle : "")}>
            <input type="checkbox" id={id} checked={checked} onChange={handleAllergyChange} />
            <img src={id + ".png"} alt={name.EN} className="w-5 h-5 blend-img" />{" "}
            <span className="overflow-x-hidden text-ellipsis capitalize">{name["EN"]}</span>
            {checked ? <span className="ml-auto">{card.allergies.indexOf(allergy) + 1}.</span> : null}
          </label>
        );
      })}
    </div>
  );
}
