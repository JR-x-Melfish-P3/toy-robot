import type { ComponentProps, FC } from "react";

const Button: FC<ComponentProps<"button">> = ({ ...rest }) => {
  return <button {...rest} />;
};

export default Button;
