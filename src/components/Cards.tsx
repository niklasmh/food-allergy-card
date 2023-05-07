import { useRecoilState } from "recoil";
import { allAllergies, allLanguages } from "../allergies";
import { cardsState, currentCardState } from "../store";

export function Cards() {
  const [card, setCard] = useRecoilState(currentCardState);
  const cardId = card?.id;
  const [cards] = useRecoilState(cardsState);

  if (cards.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      Your cards:
      <div className="flex flex-row items-start flex-wrap gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className={
              "small-card flex flex-col justify-between rounded-md bg-black p-3 gap-1 cursor-pointer hover:scale-105 transition-all" +
              (cardId && card.id === cardId ? " selected" : "")
            }
            style={{ minWidth: 120, maxWidth: 120, aspectRatio: 1.59 }}
            onClick={() => {
              setCard(card);
            }}
          >
            <div
              className="flex flex-row flex-wrap items-center flex-1 gap-1"
              style={{
                fontSize: Math.max(12, Math.min(21, (96 - 4 * (card.allergies.length - 1)) / card.allergies.length)),
              }}
            >
              {card.allergies.map((id) => (
                <img
                  key={id}
                  src={id + ".png"}
                  alt={allAllergies[id].name.EN}
                  className="blend-img"
                  style={{ width: "1em", height: "1em" }}
                />
              ))}
            </div>
            <div className="flex flex-row gap-1">
              {card.languages.map((l) => (
                <div key={l}>{allLanguages.find((l2) => l2.id === l)?.icon}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
