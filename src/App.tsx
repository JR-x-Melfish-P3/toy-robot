import { type FC } from "react";
import Authentication from "./components/Authentication";
import AuthenticationProvider from "./components/AuthenticationProvider";
import Game from "./components/Game";

const App: FC = () => {
  return (
    <AuthenticationProvider>
      <div className="min-h-dvh flex items-center">
        <div className="mx-auto">
          <Authentication />
          <Game />
        </div>
      </div>
    </AuthenticationProvider>
  );
};

export default App;
