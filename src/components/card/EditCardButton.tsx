import { useStore } from "../../store";

export function EditCardButton() {
  const { 
    editMode: edit, 
    setEditMode: setEdit, 
    setEditAllergiesMode: setEditAllergy, 
    setEditLanguagesMode: setEditLanguage 
  } = useStore();

  if (edit) {
    return (
      <button
        className="success-btn"
        onClick={() => {
          setEdit(false);
          setEditAllergy(false);
          setEditLanguage(false);
        }}
      >
        💾 Save card
      </button>
    );
  }

  return <button onClick={() => setEdit(true)}>🖊️ Edit card</button>;
}
