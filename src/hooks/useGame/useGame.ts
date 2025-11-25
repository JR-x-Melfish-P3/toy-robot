import { useState } from "react";
import minmax from "../../utils/minmax";
import turn from "./utils/turn";

const useGame = (
  initialPosition: { x: number; y: number; facing: number },
  board: { cols: number; rows: number }
) => {
  const [x, setX] = useState(initialPosition.x);
  const [y, setY] = useState(initialPosition.y);
  const [facing, setFacing] = useState(initialPosition.facing);

  const move = () => {
    const deltaX = [0, 1, 0, -1][facing];
    const deltaY = [-1, 0, 1, 0][facing];

    setX((previousX) => minmax(previousX + deltaX, 0, board.cols - 1));
    setY((previousY) => minmax(previousY + deltaY, 0, board.rows - 1));
  };

  const left = () => {
    setFacing((previousFacing) => turn(3, previousFacing));
  };

  const right = () => {
    setFacing((previousFacing) => turn(1, previousFacing));
  };

  const newGame = () => {
    setX(initialPosition.x);
    setY(initialPosition.y);
    setFacing(initialPosition.facing);
  };

  const position = { x, y, facing };
  return { position, move, left, right, newGame };
};

export default useGame;
