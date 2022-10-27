import { useState } from "react";
import { buildBoard } from "../bussiness/Board";


const useBoard = ({ rows, columns }) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  return [board];
};


export default useBoard