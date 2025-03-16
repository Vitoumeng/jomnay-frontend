import React from "react";
import FinanChart from "../../../chart/FinanChart";

const Financial = ({ balance = 0, expense = 0, income = 0 }) => {
  return (
    <div className="p-[20px] bg-[#f8f8f8] border-[2px] border-[#69696905] rounded-md">
      <h2 className="text-[18px] font-medium text-[#3a3a3a]">
        Financial Overview
      </h2>

      <div className="h-full flex items-center justify-center">
        <FinanChart balance={balance} expense={expense} income={income} />
      </div>
    </div>
  );
};

export default Financial;
