import { useCallback, useState } from "react";

export const useGameOver = () => {
  const [GameOver, setGameOver] = useState(true);
  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);
  return [GameOver, setGameOver, resetGameOver];
};
