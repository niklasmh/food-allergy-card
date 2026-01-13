import { useStore, colorMap } from "../../store";

export function ColorPicker() {
  const { currentCard: card, setCard, cards, setCards } = useStore();
  const allColors = Object.entries(colorMap).map(([id, colors]) => ({ id, colors }));

  return (
    <div className="w-full flex flex-row justify-center gap-2">
      <div className="flex flex-row gap-2">
        {allColors.map(({ id, colors }) => (
          <div
            key={id}
            className={
              "color w-8 h-6 rounded-md cursor-pointer hover:scale-105 transition-all" +
              (card?.color === id ? " selected" : "")
            }
            style={{ backgroundImage: `linear-gradient(120deg, ${colors.join(",")})` }}
            onClick={() => {
              const modifiedCard = { ...card, color: id };
              setCard(modifiedCard);
              setCards(cards.map((c) => (c.id === card.id ? modifiedCard : c)));
            }}
          />
        ))}
      </div>
    </div>
  );
}
