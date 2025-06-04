import React from "react";
import { motion } from "framer-motion";

const Frontend: React.FC<AnimationPresenceSectionProps> = ({
  initial,
  animate,
  exit,
}) => {
  return (
    <motion.section
      key={"frontend"}
      initial={initial}
      animate={animate}
      exit={exit}
      className="relative z-20 h-[calc(100vh-280px)] min-w-[375px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10"
    >
      Frontend Frontend Frontend Frontend Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolorem optio quaerat totam, accusantium provident
      consequuntur tempore quidem, itaque aliquid quas cumque ipsa? Aperiam
      illum esse reprehenderit ad hic veniam quas?
    </motion.section>
  );
};

export default Frontend;
