import { zodResolver } from "@hookform/resolvers/zod";
import { type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import api from "../../../../utils/api";
import getAuthToken from "../../../../utils/getAuthToken";
import Button from "../../../Button";
import ErrorMessage from "../../../ErrorMessage";
import Input from "../../../Input";

interface Props {
  onSuccess: (token: string | null) => void;
  onSignUp: () => void;
}

const schema = z.object({
  email: z.string().nonempty("Please enter your email"),
  password: z.string().nonempty("Please enter your password"),
});

const SignInForm: FC<Props> = ({ onSuccess, onSignUp }) => {
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
          api.post("/auth/sign-in", data)
        );

        onSuccess(authToken);
      })}
    >
      <h1 className="text-md text-center font-medium mb-12">Sign in</h1>
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
          className="w-2xs"
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
      <div className="my-10">
        <Button className="w-full">Sign In</Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="border-t -mt-[1px] flex-1" />
        <span>or</span>
        <div className="border-t -mt-[1px] flex-1" />
      </div>
      <div className="text-center">
        <span>Don't have an account yet?</span>
        <button
          type="button"
          className="ml-2 text-blue-600 underline"
          onClick={onSignUp}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
