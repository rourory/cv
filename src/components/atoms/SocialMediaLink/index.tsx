/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { cn } from "../../../lib/utils";

const SocialMediaLink: React.FC<ISocialMediaLink> = ({
  icon,
  link,
  name,
  disabled,
}) => {
  return (
    <a
      href={disabled ? `#` : link}
      target={disabled ? "_self" : "_blank"}
      rel={disabled ? "" : "noopener noreferrer"}
      className={cn(
        "flex justify-center items-center gap-2 text-lg border rounded-md min-w-[40px] max-w-[150px] h-[45px] py-2 px-3 hover:bg-slate-800 transition-all duration-200",
        disabled ? "cursor-not-allowed scale-75 opacity-30" : ""
      )}
    >
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}`}
        width={38}
        height={38}
        alt={`${name}-icon`}
      />
      <p className="hidden lg:block">{name}</p>
    </a>
  );
};

export default SocialMediaLink;
