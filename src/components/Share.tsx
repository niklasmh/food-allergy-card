import QRCode from "react-qr-code";
import { useStore } from "../store";
import { useMemo, useEffect } from "react";

export function Share() {
  const card = useStore((state) => state.currentCard);
  const allergiesShortNames = useStore((state) => state.allergiesShortNames);

  const url = useMemo(() => {
    const allergiesParam = allergiesShortNames().join(",");
    const languagesParam = card.languages.join(",").toLowerCase();
    const urlData = "?a=" + allergiesParam + "&l=" + languagesParam;
    return location.origin + urlData;
  }, [allergiesShortNames, card.languages]);

  useEffect(() => {
    const urlData = url.replace(location.origin, "");
    if (!card.saved && !card.isFromLink) {
      history.replaceState({ a: urlData }, "Food Allergy Card | " + urlData, urlData);
    }
  }, [url, card.saved, card.isFromLink]);

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
