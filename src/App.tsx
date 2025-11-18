import { useState, type FC } from "react";
import Board from "./components/Board";
import Button from "./components/Button";
import Robot from "./components/Robot";
import minmax from "./utils/minmax";

const COLS = 5;
const ROWS = 5;

const App: FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [facing, setFacing] = useState(0);

  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="flex gap-12">
        <div className="relative">
          <Board cols={COLS} rows={ROWS} />
          <Robot x={x} y={y} facing={facing} />
        </div>
        <div className="space-y-8">
          <div>
            <Button
              onClick={() => {
                setX(0);
                setY(0);
                setFacing(0);
              }}
            >
              New Game
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                setFacing(
                  (previousFacing) => (((previousFacing - 1) % 4) + 4) % 4
                );
              }}
            >
              Left
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                setFacing((previousFacing) => (previousFacing + 1) % 4);
              }}
            >
              Right
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                const deltaX = [0, 1, 0, -1][facing];
                const deltaY = [-1, 0, 1, 0][facing];

                setX((previousX) => minmax(previousX + deltaX, 0, COLS - 1));

                setY((previousY) => minmax(previousY + deltaY, 0, ROWS - 1));
              }}
            >
              Move
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
