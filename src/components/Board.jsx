
import Square from "./Square.jsx";
import calculateWinner from "../lib/calculateWinner.js";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);

  function handleClick(i) {
    if (squares[i] || winner) return;

 import Square from "./Square.jsx";
import calculateWinner from "../lib/calculateWinner.js";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    onPlay(next);
  }

  function renderSquare(i) {
    return (

      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
      />

      <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />

    );
  }

  return (
    <>

      <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </>
  );
}
