import { useStore } from "../../store";

export function AddNewAllergyButton() {
  const { editAllergiesMode: edit, setEditAllergiesMode: setEdit } = useStore();

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
