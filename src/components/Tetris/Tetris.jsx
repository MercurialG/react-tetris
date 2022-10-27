import "./Tetris.css";
import React from "react";
import Board from "../Board";
import useBoard from "../../hooks/useBoard"

const Tetris = ({ rows, columns, setGameOver }) => {
  return (
    <div className="Tetris">
      <Board />
      <p>Tetris</p>
    </div>
  );
};

export default Tetris;
