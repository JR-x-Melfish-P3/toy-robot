import { Bot } from "lucide-react";
import { type ComponentProps, type FC } from "react";
import Placeholder from "../Placeholder";

type Props = Pick<ComponentProps<typeof Placeholder>, "x" | "y" | "facing">;

const Robot: FC<Props> = ({ x, y, facing }) => {
  return (
    <Placeholder
      className="flex justify-center items-center"
      x={x}
      y={y}
      facing={facing}
    >
      <Bot />
    </Placeholder>
  );
};

export default Robot;
