import React from "react";
import Divider from "../Divider";
import { FormattedMessage } from "react-intl";

const BlockTitle: React.FC<IBlockTitle> = ({
  icon,
  localizedTitleId,
  title,
  rightSideIcon,
}) => {
  return (
    <>
      <div className="flex align-center">
        {icon && (
          <img
            src={`${process.env.PUBLIC_URL}/${icon}`}
            width={30}
            height={30}
            alt={localizedTitleId}
            className="object-contain w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] ml-2 mr-4"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <p className="text-base sm:text-xl lg:text-2xl font-bold">
            {title ? title : <FormattedMessage id={localizedTitleId} />}
          </p>
          {rightSideIcon && (
            <img
              src={`${process.env.PUBLIC_URL}/${rightSideIcon}`}
              width={30}
              height={30}
              alt={localizedTitleId}
              className="object-contain w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] ml-2 mr-4"
            />
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default BlockTitle;
