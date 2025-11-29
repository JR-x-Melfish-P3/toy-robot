import type { FC } from "react";
import type { ZodError } from "zod";

interface Props {
  name: string;
  error?: ZodError;
}

const ZodErrorMessage: FC<Props> = ({ name, error }) => {
  const errorMessage = error?.format()[name]?._errors[0];

  if (!errorMessage) {
    return null;
  }

  return <div className="text-sm text-red-500">{errorMessage}</div>;
};

export default ZodErrorMessage;
