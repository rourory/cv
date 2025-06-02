/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { cn } from "../../../lib/utils";

interface ISocialMediaLink {
  icon: string;
  link: string;
  name: string;
  disabled: boolean;
}

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
        "flex justify-center items-center gap-2 text-xl border rounded-md w-[200px] py-1 hover:bg-slate-800 transition-all duration-200",
        disabled ? "cursor-not-allowed scale-75 opacity-30" : ""
      )}
    >
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}`}
        width={50}
        height={50}
        alt={`${name}-icon`}
      />
      <p>{name}</p>
    </a>
  );
};

export default SocialMediaLink;
