import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import React from "react";
import { cn } from "../../../lib/utils";

interface IGoToButton extends React.PropsWithChildren {
  direction: "left" | "right" | "up" | "down";
}

const GoToButton: React.FC<IGoToButton> = ({ children, direction }) => {
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
        return "hover:-translate-x-3";
      case "right":
        return "hover:translate-x-3";
      case "up":
        return "hover:-translate-y-3";
      case "down":
        return "hover:translate-y-3";
      default:
        return "hover:-translate-x-3";
    }
  }, [direction]);

  return (
    <div className="flex justify-around">
      <button
        className={cn(
          "flex items-center gap-2 text-xl text-app border rounded-md p-2 transition-all duration-200 hover:translate-x-4 hover:bg-slate-800 mx-2",
          translate
        )}
      >
        <Arrow />
        <p className="text-md md:text-xl lg:text-2xl 2xl:text-3xl">
          {children}
        </p>
      </button>
    </div>
  );
};

export default GoToButton;
