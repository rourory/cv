import React from "react";
import Scene from "../Scene";

interface IMainProps {
  connectors: Array<IShuffleObject>;
}

const Main: React.FC<IMainProps> = ({ connectors }) => {
  return (
    <main className="absolute top-0 left-0 w-[100vw] h-[100vh]">
      <Scene connectors={connectors} />
    </main>
  );
};

export default Main;
