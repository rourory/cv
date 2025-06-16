import React, { Suspense } from "react";
import BlockTitle from "../../atoms/BlockTitle";
import { motion } from "framer-motion";
import Divider from "../../atoms/Divider";
import { cn } from "../../../lib/utils";

const PortfolioProjectBlock: React.FC<IPortfolioProjectBlock> = ({
  children,
  title,
  language,
  technologies,
  animate,
  initial,
  exit,
  order,
  icon,
  projectLink,
}) => {
  const rightSideIcon = React.useMemo(() => {
    switch (language) {
      case "JavaScript":
        return "icons/javascript.svg";
      case "Java":
        return "icons/java.svg";
      case "C#":
        return "icons/csharp.svg";
      default:
        return "";
    }
  }, [language]);

  return (
    <motion.div
      exit={exit}
      initial={{
        ...initial,
        transition: { delay: initial.transition.delay + order / 10 },
      }}
      animate={{
        ...animate,
        transition: { delay: animate.transition.delay + order / 10 },
      }}
      className="z-20 bg-slate-800 rounded-lg px-3 sm:px-10 pb-5 pt-5 pointer-events-auto shadow-[1px_0px_15px_rgba(255,255,255,0.1) max-w-[900px] mx-auto"
    >
      <div>
        <BlockTitle
          localizedTitleId={title}
          icon={icon}
          rightSideIcon={rightSideIcon}
        />
      </div>
      <p className="mb-4">{children}</p>

      <Divider />
      <div className="w-full flex justify-between mt-1">
        <div className="flex items-center ">
          <div className="border rounded-md p-2 gap-2 max-h-[60px] overflow-scroll grid grid-cols-4 sm:grid-cols-9 lg:grid-cols-12 xl:grid-cols-[20]">
            {technologies?.map((item) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/${item.icon}`}
                  alt={item.technology}
                  width={30}
                  height={30}
                  className="object-contain w-[30px] h-[30px]"
                />
              </a>
            ))}
          </div>
        </div>
        <a
          className={cn(
            "cursor-pointer flex justify-around items-center font-bold text-md border rounded-md p-2 transition-all duration-200 hover:bg-slate-700 mx-2 w-[140px]",
            projectLink
              ? ""
              : "pointer-events-none cursor-not-allowed opacity-30"
          )}
          target="_blank"
          rel="noopener noreferrer"
          href={projectLink}
        >
          {projectLink ? "View Project" : "Private"}
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectBlock;
