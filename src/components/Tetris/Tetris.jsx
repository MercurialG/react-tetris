import "./Tetris.css";
import React from "react";
import Board from "../Board/Board";
import useBoard from "../../hooks/useBoard";
import {useGameStats} from "../../hooks/useGameStats";
import GameStats  from "./../GameStats/GameStats";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });
  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </div>
  );
};

export default Tetris;
