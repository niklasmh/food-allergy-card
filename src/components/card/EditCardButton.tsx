import { useRecoilState } from "recoil";
import { editAllergiesState, editLanguagesState, editState } from "../../store";

export function EditCardButton() {
  const [edit, setEdit] = useRecoilState(editState);
  const [, setEditAllergy] = useRecoilState(editAllergiesState);
  const [, setEditLanguage] = useRecoilState(editLanguagesState);

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
