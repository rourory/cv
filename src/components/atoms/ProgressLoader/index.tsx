import React from "react";
import { SvgLoader } from "./SvgLoader";
interface ProgressLoaderProps {
  progress: number;
}
const ProgressLoader: React.FC<ProgressLoaderProps> = ({ progress }) => {
  return (
    <div className="relative text-white text-4xl">
      <SvgLoader width={256} height={256} />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {Math.round(progress)}
      </p>
    </div>
  );
};

export default ProgressLoader;
