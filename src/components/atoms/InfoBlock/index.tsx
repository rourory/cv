import React from "react";
import Devider from "../Devider";
import { cn } from "../../../lib/utils";
import KnowledgeLevelBadge from "../Badge";

export interface InfoBlockData {
  icon?: string;
  technology: string;
  level: "beginner" | "intermediate" | "advanced";
}

interface IInfoBlock extends React.PropsWithChildren, IComponentWithClassName {
  icon?: string;
  title: string;
  techlologies?: Array<InfoBlockData>;
}

const InfoBlock: React.FC<IInfoBlock> = ({
  className,
  children,
  icon,
  title,
  techlologies: data,
}) => {
  return (
    <div
      className={cn(
        "bg-opacity-80 flex flex-col relative min-w-[300px] max-w-[700px] col-span-1 px-3 sm:px-10 pb-10 pt-5 rounded-3xl shadow-[1px_0px_15px_rgba(255,255,255,0.1)] transition-all duration-200 pointer-events-auto backdrop-blur-3xl hover:bg-slate-800",
        className
      )}
    >
      <div className="flex align-center">
        {icon && (
          <img
            src={`${process.env.PUBLIC_URL}/icons/${icon}`}
            width={30}
            height={30}
            alt={title}
            className="object-contain w-[30px] h-[30px] mr-5"
          />
        )}
        <h2 className="text-2xl">{title}</h2>
      </div>
      <Devider />
      <p>{children}</p>
      {data && (
        <table className="mt-5">
          <thead>
            <tr>
              <th className="text-center p-[5px]">Technology</th>
              <th className="text-center p-[5px]">Knowledge</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.technology}
                className="border-b border-[#c4c7ca] border-opacity-30"
              >
                <th className="text-center p-[5px] pl-[15px] flex">
                  {item.icon ? (
                    <img
                      className="object-contain w-[30px] h-[30px]"
                      src={`${process.env.PUBLIC_URL}/icons/${item.icon}`}
                      width={30}
                      height={30}
                      alt={item.technology}
                    />
                  ) : (
                    <div className="w-[30px]" />
                  )}
                  <p className="ml-4">{item.technology}</p>
                </th>
                <th className="text-center p-[5px]">
                  <KnowledgeLevelBadge level={item.level} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InfoBlock;
