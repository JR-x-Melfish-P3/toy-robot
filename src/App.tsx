import type { FC } from "react";
import Board from "./components/Board";
import Button from "./components/Button";
import Robot from "./components/Robot";

const App: FC = () => {
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="flex gap-12">
        <div>
          <Board />
          <Robot x={0} y={0} facing="WEST" />
        </div>
        <div className="space-y-8">
          <div>
            <Button>New Game</Button>
          </div>
          <div>
            <Button>Left</Button>
          </div>
          <div>
            <Button>Right</Button>
          </div>
          <div>
            <Button>Move</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
