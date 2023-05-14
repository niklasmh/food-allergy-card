type Props = {
  onClick: () => void;
};

export function PrintCardButton({ onClick }: Props) {
  return (
    <button className="success-btn" onClick={onClick}>
      🖨️ Print card
    </button>
  );
}
