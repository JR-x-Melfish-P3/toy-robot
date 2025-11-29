import { createContext, type Dispatch } from "react";

const AuthenticationContext = createContext<{
  isAuthenticated: boolean;
  setAuthToken: Dispatch<React.SetStateAction<string | null>>;
}>({
  isAuthenticated: false,
  setAuthToken: () => {
    throw new Error();
  },
});

export default AuthenticationContext;
