import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

const Placeholder: FC<ComponentProps<"div">> = ({
  children,
  className,
  ...rest
}) => (
  <div className={twMerge(className, "size-[50px]")} {...rest}>
    {children}
  </div>
);

export default Placeholder;
