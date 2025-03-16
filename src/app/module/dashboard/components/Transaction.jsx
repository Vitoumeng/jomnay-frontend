import React from "react";
import InfoCard from "../../../utils/InfoCard";

const RecentTransaction = ({ data }) => {
  // console.log(data.slice(0, 5));

  return (
    <div className="p-[20px] bg-[#f8f8f8] border-[2px] border-[#69696905] rounded-md">
      <h2 className="text-[18px] text-[#3a3a3a] font-medium">Recent Transaction</h2>

      <div className="mt-[20px]">
        {data.slice(0, 5).map((item, index) => (
          <InfoCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;
