import type { ComponentProps, FC } from "react";
import Placeholder from "../../../Placeholder";

type Props = Pick<ComponentProps<typeof Placeholder>, "x" | "y">;

const Cell: FC<Props> = ({ x, y }) => {
  return <Placeholder x={x} y={y} isStatic className="border" />;
};

export default Cell;
