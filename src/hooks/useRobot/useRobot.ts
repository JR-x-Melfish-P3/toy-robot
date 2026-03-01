import { useState } from "react";
import type { Direction, RobotState } from "../../types/robot";
import {
  placeRobot,
  moveRobot,
  rotateLeft,
  rotateRight,
} from "../../utils/robot";

interface UseRobot {
  state: RobotState | undefined;
  place: (x: number, y: number, direction: Direction) => void;
  move: () => void;
  turnLeft: () => void;
  turnRight: () => void;
}

const useRobot = (): UseRobot => {
  const [state, setState] = useState<RobotState | undefined>(undefined);

  const place = (x: number, y: number, direction: Direction): void => {
    const next = placeRobot(x, y, direction);

    if (!next) {
      return;
    }

    setState(next);
  };

  const move = (): void => {
    setState((prev) => (prev ? moveRobot(prev) : prev));
  };

  const turnLeft = (): void => {
    setState((prev) =>
      prev ? { ...prev, direction: rotateLeft(prev.direction) } : prev,
    );
  };

  const turnRight = (): void => {
    setState((prev) =>
      prev ? { ...prev, direction: rotateRight(prev.direction) } : prev,
    );
  };

  return { state, place, move, turnLeft, turnRight };
};

export default useRobot;
