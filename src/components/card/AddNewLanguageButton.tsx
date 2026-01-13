import { useStore } from "../../store";

export function AddNewLanguageButton() {
  const { editLanguagesMode: edit, setEditLanguagesMode: setEdit } = useStore();

  if (edit) {
    return (
      <button className="add-new-btn" onClick={() => setEdit(false)}>
        Done
      </button>
    );
  }

  return (
    <button className="add-new-btn" onClick={() => setEdit(true)}>
      Change language
    </button>
  );
}
