import type { FC } from "react";
import type { Direction } from "../../../../types/robot";
import { Navigation } from "lucide-react";
import { BOARD_SIZE } from "../../../../utils/robot";

interface Props {
  x: number;
  y: number;
  direction: Direction;
}

const CELL_SIZE = 64;

const DIRECTION_DEGREES: Record<Direction, number> = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

const Robot: FC<Props> = ({ x, y, direction }) => (
  <div
    role="img"
    aria-label="robot"
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      left: x * CELL_SIZE,
      top: (BOARD_SIZE - 1 - y) * CELL_SIZE,
    }}
  >
    <Navigation
      size={30}
      className="text-emerald-600 transition-transform duration-200"
      style={{ transform: `rotate(${DIRECTION_DEGREES[direction]}deg)` }}
    />
  </div>
);

export default Robot;
