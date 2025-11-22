import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<ComponentProps<"button">> = ({ className, ...rest }) => {
  return (
    <button
      {...rest}
      className={twMerge(className, "border cursor-pointer px-4 py-1 rounded")}
    />
  );
};

export default Button;
