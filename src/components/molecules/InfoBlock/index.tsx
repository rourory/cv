import React from "react";
import { cn } from "../../../lib/utils";
import KnowledgeLevelBadge from "../../atoms/Badge";
import BlockTitle from "../../atoms/BlockTitle";
import { FormattedMessage } from "react-intl";

const InfoBlock: React.FC<IInfoBlock> = ({
  className,
  children,
  icon,
  localizedTitleId,
  techlologies: data,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative min-w-[250px] max-w-[750px] col-span-1 px-3 sm:px-10 pb-10 pt-5 rounded-3xl shadow-[1px_0px_15px_rgba(255,255,255,0.1)] transition-all duration-200 pointer-events-auto bg-slate-800 hover:scale-[103%]",
        className
      )}
    >
      <BlockTitle icon={icon} localizedTitleId={localizedTitleId} />
      <p className="text-sm sm:text-base lg:text-lg">{children}</p>
      {data && (
        <table className="mt-5">
          <thead>
            <tr>
              <th className="text-center p-[5px] text-sm md:text-lg">
                <FormattedMessage id={"table.header.technology"} />
              </th>
              <th className="text-center p-[5px]">
                <FormattedMessage id={"table.header.knowledge"} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.technology.technology}
                className="border-b border-[#c4c7ca] border-opacity-30 text-sm sm:text-base lg:text-lg"
              >
                <th className="text-center p-[5px] pl-[15px] flex">
                  {item.technology.icon ? (
                    <img
                      className="object-contain w-[30px] h-[30px]"
                      src={`${process.env.PUBLIC_URL}/${item.technology.icon}`}
                      width={30}
                      height={30}
                      alt={item.technology.technology}
                    />
                  ) : (
                    <div className="w-[30px]" />
                  )}
                  <p className="ml-4">{item.technology.technology}</p>
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
