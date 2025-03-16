import React from "react";
import LastExpenseChart from "../../../chart/LastExpenseChart";

const LastExpense = ({ data }) => {
  return (
    <div className="p-[20px] bg-[#f8f8f8] border-[2px] border-[#69696905] rounded-md">
      <h2 className="text-[18px] font-medium text-[#3a3a3a]">
        Last 30 Days Expense
      </h2>

      <LastExpenseChart />
    </div>
  );
};

export default LastExpense;
