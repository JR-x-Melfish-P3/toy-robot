import type { FC } from "react";
import Board from "./components/Board";
import Button from "./components/Button";
import Robot from "./components/Robot";

const App: FC = () => {
  return (
    <div>
      <Board />
      <Robot x={0} y={0} facing="NORTH" />
      <div>
        <Button>New Game</Button>
        <Button>Left</Button>
        <Button>Right</Button>
        <Button>Move</Button>
      </div>
    </div>
  );
};

export default App;
