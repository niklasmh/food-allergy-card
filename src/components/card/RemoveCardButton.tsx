import { useRecoilState } from "recoil";
import { currentCardState, cardsState } from "../../store";

export function RemoveCardButton() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [cards, setCards] = useRecoilState(cardsState);

  return (
    <button
      className="danger-btn"
      onClick={() => {
        const updatedCards = cards.filter((c) => c.id !== card.id);
        setCards(updatedCards);
        if (updatedCards.length > 0) {
          setCard(updatedCards[0]);
        } else {
          setCard({
            allergies: [],
            languages: [],
            color: "purple",
            id: Math.random().toString(16).slice(2),
            name: "",
            saved: false,
            isFromLink: false,
          });
        }
      }}
    >
      🗑️ Remove card
    </button>
  );
}
