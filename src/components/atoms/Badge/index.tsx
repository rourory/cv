import React from "react";
import { cn } from "../../../lib/utils";

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
    <div
      className={cn("w-full flex justify-around items-center", className)}
    >
      <div
        className="w-[110px] sm:w-[130px] lg:w-[150px] h-[23px] rounded-md flex items-center justify-around shadow-md border border-slate-600"
        style={{ backgroundColor: color }}
      >
        <p className="text-white font-medium text-sm">
          {level.toLocaleUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default KnowledgeLevelBadge;
