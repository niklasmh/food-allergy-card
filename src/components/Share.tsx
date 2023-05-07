import QRCode from "react-qr-code";
import { useRecoilState, useRecoilValue } from "recoil";
import { allergiesShortNamesState, currentCardState } from "../store";

let prevUrlData = "";

export function Share() {
  const [card] = useRecoilState(currentCardState);
  const allergiesShortNames = useRecoilValue(allergiesShortNamesState);

  const allergiesParam = allergiesShortNames.join(",");
  const languagesParam = card.languages.join(",").toLowerCase();
  const urlData = "?a=" + allergiesParam + "&l=" + languagesParam;
  const url = location.origin + urlData;

  if (!card.saved && !card.isFromLink && url !== prevUrlData) {
    prevUrlData = url;
    history.replaceState({ a: allergiesParam, l: languagesParam }, "Food Allergy Card | " + allergiesParam, urlData);
  }

  return (
    <div className="mb-16">
      <h1>Share with chef</h1>
      <div className="qr-code m-6">
        <QRCode value={url} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
      </div>
      <div>
        Link: <a href={url}>{url}</a>
      </div>
      <br />
      <button onClick={() => navigator.clipboard.writeText(url)} className="cursor-pointer">
        Copy link from QR code
      </button>
    </div>
  );
}
