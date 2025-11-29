import { useContext, useState, type FC } from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { AuthenticationContext } from "../AuthenticationProvider";

const Authentication: FC = () => {
  const [type, setType] = useState<"sign-up" | "sign-in">("sign-in");
  const { setAuthToken, isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      {type === "sign-up" && (
        <SignUpForm
          onSuccess={(token) => setAuthToken(token)}
          onSignIn={() => setType("sign-in")}
        />
      )}
      {type === "sign-in" && (
        <SignInForm
          onSuccess={(token) => setAuthToken(token)}
          onSignUp={() => setType("sign-up")}
        />
      )}
    </>
  );
};

export default Authentication;
