import React from "react";
import { motion } from "framer-motion";
const Backend: React.FC<AnimationPresenceSectionProps> = ({
  animate,
  initial,
  exit,
}) => {
  return (
    <motion.section
      key={"backend"}
      initial={initial}
      animate={animate}
      exit={exit}
      className="relative z-20 h-[calc(100vh-280px)] min-w-[375px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10"
    >
      Backend Backend Backend Backend Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Veniam iusto numquam perspiciatis. Neque similique
      excepturi maiores, soluta quisquam odio in quia a natus obcaecati
      suscipit, ut dolores nostrum distinctio non!
    </motion.section>
  );
};

export default Backend;
