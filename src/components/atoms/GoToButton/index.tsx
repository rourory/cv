import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import React from "react";
import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";

interface IGoToButton extends React.PropsWithChildren, IComponentWithClassName {
  direction: "left" | "right" | "up" | "down";
  onClick?: () => void;
}

const GoToButton: React.FC<IGoToButton> = ({
  className,
  children,
  direction,
  onClick,
}) => {
  const Arrow = React.useMemo(
    () => () => {
      switch (direction) {
        case "left":
          return <ArrowLeft />;
        case "right":
          return <ArrowRight />;
        case "up":
          return <ArrowUp />;
        case "down":
          return <ArrowDown />;
        default:
          return <ArrowLeft />;
      }
    },
    [direction]
  );

  const translate = React.useMemo(() => {
    switch (direction) {
      case "left":
        return "hover:-translate-x-1";
      case "right":
        return "hover:translate-x-1";
      case "up":
        return "hover:-translate-y-1";
      case "down":
        return "hover:translate-y-1";
      default:
        return "hover:-translate-x-1";
    }
  }, [direction]);

  return (
    <div className={cn("flex justify-between", className)}>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-between gap-2 text-xl text-app border rounded-md p-2 transition-all duration-200 hover:translate-x-4 hover:bg-slate-800 mx-2 w-[130px]",
          translate
        )}
      >
        {direction === "left" && <Arrow />}
        <p className="text-md md:text-xl lg:text-2xl 2xl:text-3xl">
          {children}
        </p>
        {direction === "right" && <Arrow />}
      </button>
    </div>
  );
};

export default GoToButton;
