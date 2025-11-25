import type { FC } from "react";
import Board from "./components/Board";
import Robot from "./components/Robot";
import Controller from "./components/Controller";
import useGame from "./hooks/useGame";

export const COLS = 5;
export const ROWS = 5;

const Game: FC = () => {
  const { position, move, left, right, newGame } = useGame(
    { x: 0, y: 0, facing: 0 },
    { cols: COLS, rows: ROWS }
  );

  return (
    <div className="flex gap-12">
      <div className="relative">
        <Board cols={COLS} rows={ROWS} />
        <Robot x={position.x} y={position.y} facing={position.facing} />
      </div>
      <Controller
        onNewGame={newGame}
        onLeft={left}
        onRight={right}
        onMove={move}
      />
    </div>
  );
};

export default Game;
