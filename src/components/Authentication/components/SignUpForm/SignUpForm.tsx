import { zodResolver } from "@hookform/resolvers/zod";
import { type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import api from "../../../../utils/api";
import Button from "../../../Button";
import ErrorMessage from "../../../ErrorMessage";
import Input from "../../../Input";
import getAuthToken from "../../../../utils/getAuthToken";

const schema = z
  .object({
    email: z
      .email("Please enter a valid email address")
      .nonempty("Please enter your email"),
    password: z
      .string()
      .nonempty("Please enter your password")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().nonempty("Please enter confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

interface Props {
  onSuccess: (token: string | null) => void;
  onSignIn: () => void;
}

const SignUpForm: FC<Props> = ({ onSuccess, onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      noValidate
      className="space-y-2"
      onSubmit={handleSubmit(async (data) => {
        const authToken = await getAuthToken(() =>
          api.post("/auth/sign-up", data)
        );

        onSuccess(authToken);
      })}
    >
      <h1 className="text-md text-center font-medium mb-12">
        Sign up to play Toy Robot
      </h1>
      <div>
        <Input
          label="Email"
          type="email"
          className="w-2xs"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          label="Password"
          type="password"
          minLength={8}
          className="w-2xs"
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          label="Confirm Password"
          type="password"
          className="w-2xs"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}
      </div>
      <div className="my-10">
        <Button className="w-full">Sign Up</Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="border-t -mt-[1px] flex-1" />
        <span>or</span>
        <div className="border-t -mt-[1px] flex-1" />
      </div>
      <div className="text-center">
        <span>Already have an account?</span>
        <button
          type="button"
          className="ml-2 text-blue-600 underline"
          onClick={onSignIn}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
