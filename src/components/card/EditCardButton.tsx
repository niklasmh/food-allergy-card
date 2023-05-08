import { useRecoilState } from "recoil";
import { editState } from "../../store";

export function EditCardButton() {
  const [edit, setEdit] = useRecoilState(editState);

  if (edit) {
    return (
      <button className="success-btn" onClick={() => setEdit(false)}>
        💾 Save card
      </button>
    );
  }

  return <button onClick={() => setEdit(true)}>🖊️ Edit card</button>;
}
