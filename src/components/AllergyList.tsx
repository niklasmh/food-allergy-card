import { useRecoilState } from "recoil";
import { allAllergies, Allergies, Allergy } from "../allergies";
import { currentCardStore } from "../store";

export function AllergyList() {
  const [card, setCard] = useRecoilState(currentCardStore);

  const handleAllergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const id = event.target.id as Allergies;
    if (isChecked) {
      if (!card.allergies.includes(id)) {
        setCard((c) => ({ ...c, allergies: [...c.allergies, id] }));
      }
    } else {
      setCard((c) => ({ ...c, allergies: c.allergies.filter((e) => e !== id) }));
    }
  };

  const labelStyle = "flex flex-row items-center px-3 py-1 gap-2 cursor-pointer";
  const selectedStyle = " rounded-md green-btn";

  return (
    <div className="flex flex-col gap-4">
      <h1>Allergies</h1>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-1 items-center gap-1">
        {Object.entries(allAllergies).map(([id, { name }]) => {
          const allergy = id as Allergies;
          const checked = card.allergies.includes(allergy);
          return (
            <label key={id} className={labelStyle + (checked ? selectedStyle : "")}>
              <input type="checkbox" id={id} defaultChecked={checked} onChange={handleAllergyChange} />
              <img src={id + ".png"} alt={name.EN} className="w-5 h-5 blend-img" />{" "}
              <span className="overflow-x-hidden text-ellipsis capitalize">
                {name[card.languages.length ? card.languages[0] : "EN"]}
              </span>
              {checked ? <span className="ml-auto">{card.allergies.indexOf(allergy) + 1}.</span> : null}
            </label>
          );
        })}
      </div>
    </div>
  );
}
