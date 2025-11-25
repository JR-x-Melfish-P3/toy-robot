import { useMemo, useState, type FC } from "react";
import z from "zod";
import Button from "../Button";
import Input from "../Input";
import ZodErrorMessage from "../ZodErrorMessage";

const schema = z
  .object({
    email: z
      .string("Please enter your email")
      .email("Please enter a valid email address"),
    password: z
      .string("Please enter your password")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string("Please enter confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name: keyof typeof data, value: string): void => {
    setData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const result = useMemo(() => schema.safeParse(data), [data]);

  return (
    <form
      noValidate
      className="space-y-2"
      onSubmit={(event) => {
        event.preventDefault();
        setIsSubmitted(true);

        if (!result.success) {
          console.error("Validation failed");

          return;
        }

        console.log(data);
      }}
    >
      <h1 className="text-md text-center font-medium mb-12">
        Sign up to play Toy Robot
      </h1>
      <div>
        <Input
          label="Email"
          type="email"
          onChange={(event) => handleChange("email", event.target.value)}
        />
        {isSubmitted && <ZodErrorMessage name="email" error={result.error} />}
      </div>
      <div>
        <Input
          label="Password"
          type="password"
          minLength={8}
          onChange={(event) => handleChange("password", event.target.value)}
        />
        {isSubmitted && (
          <ZodErrorMessage name="password" error={result.error} />
        )}
      </div>
      <div>
        <Input
          label="Confirm Password"
          type="password"
          minLength={8}
          onChange={(event) =>
            handleChange("confirmPassword", event.target.value)
          }
        />
        {isSubmitted && (
          <ZodErrorMessage name="confirmPassword" error={result.error} />
        )}
      </div>
      <div className="mt-10">
        <Button className="w-full">Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
