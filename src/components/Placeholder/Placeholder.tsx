import type { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"div"> {
  x: number;
  y: number;
  facing?: number;
  isStatic?: boolean;
}

export const SIZE = 50;

const Placeholder: FC<Props> = ({
  x,
  y,
  facing = 0,
  isStatic = false,
  ...rest
}) => (
  <div
    {...rest}
    role="region"
    aria-label="Placeholder"
    aria-description={`X: ${x}, Y: ${y}, Facing: ${facing}`}
    style={{
      height: `${SIZE}px`,
      width: `${SIZE}px`,
      transform: `rotate(${facing * 90}deg)`,
      position: isStatic ? "static" : "absolute",
      left: `${x * SIZE}px`,
      top: `${y * SIZE}px`,
    }}
  />
);
export default Placeholder;
