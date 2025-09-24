import { useState } from "react";
import Board from "./components/Board.jsx";
import calculateWinner from "./lib/calculateWinner.js";
import "./App.css";

const EMPTY = Array(9).fill(null);

export default function App() {
  const [history, setHistory] = useState([EMPTY]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const squares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const moves = history.map((_, move) => {
    const label = move ? `Go to move #${move}` : "Go to game start";
    const isCurrent = move === currentMove;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} disabled={isCurrent}>
          {isCurrent ? <strong>{label}</strong> : label}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
