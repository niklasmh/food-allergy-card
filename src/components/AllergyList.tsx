import { allAllergies, Allergies } from "../allergies";
import { useStore } from "../store";

export function AllergyList() {
  const { currentCard: card, setAllergies } = useStore();

  const handleAllergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const id = event.target.id as Allergies;
    let allergies = card.allergies.slice(0);
    if (isChecked) {
      if (!card.allergies.find((a) => a.id === id)) {
        allergies.push({ id, severity: allAllergies[id].severity || 1 });
      }
    } else {
      allergies = allergies.filter((a) => a.id !== id);
    }
    setAllergies(allergies);
  };

  const labelStyle = "allergy-item flex flex-row items-center px-3 py-1 gap-2 cursor-pointer";
  const selectedStyle = " rounded-md selected-btn";

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-1 items-center gap-1">
      {Object.entries(allAllergies).map(([id, { name }]) => {
        const allergyId = id as Allergies;
        const checked = card.allergies.some((a) => a.id === allergyId);
        return (
          <label key={id} className={labelStyle + (checked ? selectedStyle : "")}>
            <input type="checkbox" id={id} checked={checked} onChange={handleAllergyChange} />
            <img src={id + ".png"} alt={name.EN} className="w-5 h-5 blend-img" />{" "}
            <span className="overflow-x-hidden text-ellipsis capitalize">{name["EN"]}</span>
            {checked ? (
              <span className="ml-auto">{card.allergies.findIndex((a) => a.id === allergyId) + 1}.</span>
            ) : null}
          </label>
        );
      })}
    </div>
  );
}
