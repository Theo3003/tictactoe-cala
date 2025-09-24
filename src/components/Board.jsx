import Square from "./Square.jsx";
import calculateWinner from "../lib/calculateWinner.js";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const winningLine = winner?.line ?? [];

  function handleClick(i) {
    if (squares[i] || winner) return;
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    onPlay(next);
  }

  function renderSquare(i) {
    const isWinning = winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        className={isWinning ? "square square--win" : "square"}
      />
    );
  }

  return (
    <>
      <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </>
  );
}
