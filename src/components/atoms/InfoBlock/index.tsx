import React from "react";
import Devider from "../Devider";

interface IInfoBlock extends React.PropsWithChildren {
  title: string;
}

const InfoBlock: React.FC<IInfoBlock> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-w-[300px] max-w-[600px] col-span-1 backdrop-blur p-10 rounded-3xl shadow-[1px_0px_15px_rgba(255,255,255,0.1)] transition-all duration-200 pointer-events-auto cursor-help hover:backdrop-blur-none hover:bg-slate-800">
      <h2 className="text-2xl">{title}</h2>
      <Devider />
      <p>{children}</p>
    </div>
  );
};

export default InfoBlock;
