import { useStore } from "../../store";

export function DoneButton() {
  const { setEditMode: setEdit, setEditAllergiesMode: setEditAllergy, setEditLanguagesMode: setEditLanguage } = useStore();

  return (
    <button
      className="add-new-btn"
      onClick={() => {
        setEdit(false);
        setEditAllergy(false);
        setEditLanguage(false);
      }}
    >
      Done
    </button>
  );
}
