import { Html, useProgress } from "@react-three/drei";
import React from "react";
import ProgressLoader from "../../atoms/ProgressLoader";

export default function ModelLoader() {
  const { progress } = useProgress();

  return (
    <Html center className="w-[100vw] h-[100vh] flex flex-col gap-3">
      <div className="w-full h-full bg-[#141622] flex justify-around items-center">
        <ProgressLoader progress={progress} />
      </div>
    </Html>
  );
}
