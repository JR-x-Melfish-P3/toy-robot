import type { FC } from "react";
import Button from "../Button";

interface Props {
  onNewGame: () => void;
  onLeft: () => void;
  onRight: () => void;
  onMove: () => void;
}

const Controller: FC<Props> = ({ onNewGame, onLeft, onRight, onMove }) => (
  <div className="space-y-8" role="group" aria-label="Controller">
    <div>
      <Button onClick={onNewGame}>New Game</Button>
    </div>

    <div>
      <Button onClick={onLeft}>Left</Button>
    </div>
    <div>
      <Button onClick={onRight}>Right</Button>
    </div>
    <div>
      <Button onClick={onMove}>Move</Button>
    </div>
  </div>
);

export default Controller;
