import React from "react";
import { motion } from "framer-motion";
import PortfolioProjectBlock from "../../molecules/PortfolioProjectBlock";

const Frontend: React.FC<AnimationPresenceSectionProps> = ({
  initial,
  animate,
  exit,
}) => {
  return (
    <motion.section
      key={"frontend"}
      // initial={initial}
      // animate={animate}
      // exit={exit}
      className="relative z-20 h-[calc(100vh-280px)] min-w-[375px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10 flex flex-col gap-5"
    >
      <PortfolioProjectBlock
        title="Printique"
        language="JavaScript"
        technologies={[]}
        animate={animate}
        initial={initial}
        exit={exit}
        order={1}
      >
        sdaddasd
      </PortfolioProjectBlock>
      <PortfolioProjectBlock
        title="Printique"
        language="JavaScript"
        technologies={[]}
        animate={animate}
        initial={initial}
        exit={exit}
        order={2}
      >
        sdaddasd
      </PortfolioProjectBlock>
      <PortfolioProjectBlock
        title="Printique"
        language="JavaScript"
        technologies={[]}
        animate={animate}
        initial={initial}
        exit={exit}
        order={3}
      >
        sdaddasd
      </PortfolioProjectBlock>
    </motion.section>
  );
};

export default Frontend;
