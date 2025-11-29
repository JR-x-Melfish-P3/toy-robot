import { useState, type FormEvent } from "react";
import z from "zod";

const useForm = ({
  schema,
  initialData,
  onSubmit,
}: {
  schema: z.ZodSchema<typeof initialData>;
  initialData: Record<string, string>;
  onSubmit: (data: Record<string, string>) => Promise<void> | void;
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState(initialData);

  const result = schema.safeParse(data);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!result.success) {
      return;
    }

    void onSubmit(data);
  };

  const handleChange = (name: keyof typeof data, value: string): void => {
    setData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return { handleChange, handleSubmit, isSubmitted, result };
};

export default useForm;
