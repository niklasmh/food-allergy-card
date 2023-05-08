import { useRecoilState } from "recoil";
import { allAllergies, allLanguages } from "../allergies";
import { type Card as CardType, cardsState, currentCardState, colorMap } from "../store";

export function Cards() {
  const [card] = useRecoilState(currentCardState);
  const cardId = card?.id;
  const [cards] = useRecoilState(cardsState);

  return (
    <div className="flex flex-col gap-4 w-full">
      Your cards:
      <div
        className="grid gap-4 justify-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}
      >
        <Card card={card} newCard={true} />
        {cards.map((card, i) => (
          <Card key={i} card={card} selected={cardId === card.id} />
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  card: CardType;
  newCard?: boolean;
  selected?: boolean;
};

function Card({ card, newCard = false, selected = false }: CardProps) {
  const [, setCard] = useRecoilState(currentCardState);
  const [, setCards] = useRecoilState(cardsState);

  return (
    <div
      className={
        "small-card flex flex-col justify-between bg-black p-3 gap-1 cursor-pointer hover:scale-105 transition-all" +
        (selected ? " selected" : "")
      }
      style={{
        minWidth: 120,
        maxWidth: 120,
        aspectRatio: 1.59,
        backgroundImage: `linear-gradient(120deg, ${colorMap[card.color || "purple"].join(",")})`,
      }}
      onClick={() => {
        if (newCard) {
          const modifiedCard: CardType = {
            allergies: [],
            languages: [],
            color: card.color,
            isFromLink: false,
            saved: true,
            id: Math.random().toString(16).slice(2),
            name: "",
          };
          history.replaceState({}, "Food Allergy Card", "/");
          setCard(modifiedCard);
          setCards((cards) => [modifiedCard, ...cards]);
        } else {
          setCard(card);
        }
      }}
    >
      {newCard ? (
        <>
          <div style={{ fontSize: "2.5em" }} className="flex items-center justify-center">
            +
          </div>
          <div style={{ fontSize: "1em" }} className="flex items-center justify-center">
            New card
          </div>
        </>
      ) : (
        <>
          <div
            className="flex flex-row flex-wrap items-center justify-center flex-1 gap-1"
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
          <div className="flex flex-row justify-center gap-1">
            {card.languages.map((l) => (
              <div key={l}>{allLanguages.find((l2) => l2.id === l)?.icon}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
