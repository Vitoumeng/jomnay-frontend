import React from "react";
import IconInfo from "./IconInfo";
import { RiCornerDownLeftFill, RiCornerDownRightFill } from "react-icons/ri";

const InfoCard = ({ data }) => {
  // console.log(data);

  return (
    <div className="p-[10px] flex items-center justify-between transition duration-300 hover:bg-[#fff] md:rounded-md">
      <div className="flex items-center gap-x-[20px]">
        <IconInfo icon={data.icon} />

        <div>
          {data.source && <h3 className="text-[#3a3a3a]">{data.source}</h3>}
          {data.category && <h3 className="text-[#3a3a3a">{data.category}</h3>}

          <span className="text-[#696969] text-[14px]">
            {new Date(data.date).toISOString().split("T")[0]}
          </span>
        </div>
      </div>

      {data.source && (
        <div className="px-[8px] py-[5px] rounded-md flex items-center gap-x-[8px] bg-[#16A34ABF]/15 text-[#16A34ABF]">
          +{data.amount} <RiCornerDownLeftFill />
        </div>
      )}

      {data.category && (
        <div className="px-[8px] py-[5px] rounded-md flex items-center gap-x-[8px] bg-[#DC2626BF]/15 text-[#DC2626BF]">
          -{data.amount} <RiCornerDownRightFill />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
