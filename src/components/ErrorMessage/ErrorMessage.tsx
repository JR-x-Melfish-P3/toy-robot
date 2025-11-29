import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorMessage: FC<Props> = ({ children }) => (
  <div className="text-sm text-red-500">{children}</div>
);

export default ErrorMessage;
