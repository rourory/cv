import React from "react";
import { cn } from "../../../lib/utils";

export type KnowledgeLevel = "beginner" | "intermediate" | "advanced";

interface IKnowledgeLevelBagde extends IComponentWithClassName {
  level: KnowledgeLevel;
}

const KnowledgeLevelBadge: React.FC<IKnowledgeLevelBagde> = ({
  className,
  level,
}) => {
  const color = React.useMemo(() => {
    switch (level) {
      case "beginner":
        return "green";
      case "intermediate":
        return "orange";
      case "advanced":
        return "blue";
    }
  }, [level]);

  return (
    <div className={cn("w-full flex justify-around items-center", className)}>
      <div
        className="w-[110px] sm:w-[130px] lg:w-[150px] h-[23px] rounded-md text-center text-white font-medium text-sm items-center"
        style={{ backgroundColor: color }}
      >
        {level.toLocaleUpperCase()}
      </div>
    </div>
  );
};

export default KnowledgeLevelBadge;
