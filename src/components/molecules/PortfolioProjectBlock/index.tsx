import React from "react";
import { Technology } from "../InfoBlock";
import BlockTitle from "../../atoms/BlockTitle";
import { motion } from "framer-motion";
interface IPortfolioProjectBlock
  extends React.PropsWithChildren,
    AnimationPresenceSectionProps {
  icon?: string;
  title: string;
  language: string;
  technologies: Array<Technology>;
  order: number;
}

const PortfolioProjectBlock: React.FC<IPortfolioProjectBlock> = ({
  children,
  title,
  language,
  technologies,
  animate,
  initial,
  exit,
  order,
}) => {
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
      className="w-full bg-slate-800 hover:scale-[103%] rounded-lg px-3 sm:px-10 pb-10 pt-5"
    >
      <BlockTitle title={title} icon="apps/printique.webp" />
      <p>{children}</p>
    </motion.div>
  );
};

export default PortfolioProjectBlock;
