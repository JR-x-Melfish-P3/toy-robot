import { type FC } from "react";

type Facing = "NORTH" | "EAST" | "SOUTH" | "WEST";

interface Props {
  x: number;
  y: number;
  facing: Facing;
}

const Robot: FC<Props> = ({ x, y, facing }) => {
  return (
    <div>
      Robot is at ({x}, {y}) facing {facing}
    </div>
  );
};

export default Robot;
