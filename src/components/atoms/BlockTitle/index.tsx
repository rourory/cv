import React from "react";
import Divider from "../Divider";
import { FormattedMessage } from "react-intl";

const BlockTitle: React.FC<IBlockTitle> = ({
  icon,
  localizedTitleId,
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
            className="object-contain w-[30px] h-[30px] ml-2 mr-4"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl font-bold">
            <FormattedMessage id={localizedTitleId} />
          </p>
          {rightSideIcon && (
            <img
              src={`${process.env.PUBLIC_URL}/${rightSideIcon}`}
              width={30}
              height={30}
              alt={localizedTitleId}
              className="object-contain w-[30px] h-[30px] ml-2 mr-4"
            />
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default BlockTitle;
