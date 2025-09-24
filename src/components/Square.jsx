export default function Square({ value, onClick, className = "square" }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
