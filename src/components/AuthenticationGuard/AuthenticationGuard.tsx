import { useContext, type FC, type ReactNode } from "react";
import { AuthenticationContext } from "../AuthenticationProvider";

interface Props {
  children: ReactNode;
}

const AuthenticationGuard: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default AuthenticationGuard;
