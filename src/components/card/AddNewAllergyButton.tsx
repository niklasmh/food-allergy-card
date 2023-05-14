import { useRecoilState } from "recoil";
import { editAllergiesState } from "../../store";

export function AddNewAllergyButton() {
  const [edit, setEdit] = useRecoilState(editAllergiesState);

  if (edit) {
    return (
      <button className="add-new-btn" onClick={() => setEdit(false)}>
        Done
      </button>
    );
  }

  return (
    <button className="add-new-btn" onClick={() => setEdit(true)}>
      + Add allergy
    </button>
  );
}
