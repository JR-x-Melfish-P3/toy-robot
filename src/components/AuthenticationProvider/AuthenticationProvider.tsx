import { useEffect, useState, type FC, type ReactNode } from "react";
import AuthenticationContext from "./AuthenticationContext";

interface Props {
  children: ReactNode;
}

const AuthenticationProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const handleGetAuthenticated = async () => {
      const headers = new Headers();
      if (authToken) {
        headers.append("X-AUTH-TOKEN", authToken);
      }

      const res = await fetch("http://localhost:8000/auth", { headers });

      if (!res.ok) {
        setIsAuthenticated(false);

        return;
      }

      setIsAuthenticated(true);
    };

    void handleGetAuthenticated();
  }, [authToken]);

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, setAuthToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
