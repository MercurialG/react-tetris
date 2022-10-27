import { Menu } from "./Menu/Menu";
import React from "react";
import { useGameOver } from "../hooks/useGameOver";
import Tetris from "./Tetris/Tetris";
export function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => resetGameOver();

  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
