import React from "react";
import Divider from "../Divider";

interface IBlockTitle {
  icon?: string;
  title: string;
}

const BlockTitle: React.FC<IBlockTitle> = ({ icon, title }) => {
  return (
    <>
      <div className="flex align-center">
        {icon && (
          <img
            src={`${process.env.PUBLIC_URL}/${icon}`}
            width={30}
            height={30}
            alt={title}
            className="object-contain w-[30px] h-[30px] ml-2 mr-4"
          />
        )}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <Divider />
    </>
  );
};

export default BlockTitle;
