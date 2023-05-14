import { useRecoilState } from "recoil";
import { editAllergiesState, editState } from "../../store";

export function EditCardButton() {
  const [edit, setEdit] = useRecoilState(editState);
  const [, setEditAllergy] = useRecoilState(editAllergiesState);

  if (edit) {
    return (
      <button
        className="success-btn"
        onClick={() => {
          setEdit(false);
          setEditAllergy(false);
        }}
      >
        💾 Save card
      </button>
    );
  }

  return <button onClick={() => setEdit(true)}>🖊️ Edit card</button>;
}
