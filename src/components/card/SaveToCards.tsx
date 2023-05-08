import { useRecoilState } from "recoil";
import { currentCardState, cardsState } from "../../store";

export function SaveToCards() {
  const [card, setCard] = useRecoilState(currentCardState);
  const [, setCards] = useRecoilState(cardsState);

  return (
    <div className="flex flex-col gap-4">
      This card is not in your cards.
      <button
        onClick={() => {
          const modifiedCard = { ...card, isFromLink: false, saved: true, id: Math.random().toString(16).slice(2) };
          history.replaceState({}, "Food Allergy Card", "/");
          setCard(modifiedCard);
          setCards((cards) => [modifiedCard, ...cards]);
        }}
      >
        + Add to your cards
      </button>
    </div>
  );
}
