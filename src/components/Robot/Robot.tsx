import { Bot } from "lucide-react";
import { type FC } from "react";
import Placeholder from "../Placeholder";

type Facing = "NORTH" | "EAST" | "SOUTH" | "WEST";

interface Props {
  x: number;
  y: number;
  facing: Facing;
}

const FACING = ["NORTH", "EAST", "SOUTH", "WEST"] as const;

const Robot: FC<Props> = ({ x, y, facing }) => {
  return (
    <Placeholder
      className="flex justify-center items-center"
      style={{
        transform: `rotate(${FACING.indexOf(facing) * 90}deg)`,
      }}
    >
      <Bot />
    </Placeholder>
  );
};

export default Robot;
