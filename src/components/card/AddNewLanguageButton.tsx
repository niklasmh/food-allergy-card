import { useRecoilState } from "recoil";
import { editLanguagesState } from "../../store";

export function AddNewLanguageButton() {
  const [edit, setEdit] = useRecoilState(editLanguagesState);

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
