import { useEffect, useState, type FC } from "react";
import Game from "./components/Game";
import SignUpForm from "./components/SignUpForm/SignUpForm";

const App: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);

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
    <div className="min-h-dvh flex items-center">
      <div className="mx-auto">
        {isAuthenticated ? <Game /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default App;
