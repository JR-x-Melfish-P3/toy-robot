import type { FC } from "react";
import type { ZodError } from "zod";
import ErrorMessage from "../ErrorMessage";

interface Props {
  name: string;
  error?: ZodError;
}

const ZodErrorMessage: FC<Props> = ({ name, error }) => {
  const errorMessage = error?.format()[name]?._errors[0];

  if (!errorMessage) {
    return null;
  }

  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};

export default ZodErrorMessage;
