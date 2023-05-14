import { useRecoilState } from "recoil";
import { editAllergiesState, editLanguagesState, editState } from "../../store";

export function DoneButton() {
  const [, setEdit] = useRecoilState(editState);
  const [, setEditAllergy] = useRecoilState(editAllergiesState);
  const [, setEditLanguage] = useRecoilState(editLanguagesState);

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
