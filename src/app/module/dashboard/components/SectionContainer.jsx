import React from "react";
import Transaction from "./Transaction";
import Financial from "./Financial";

const SectionContainer = ({ data }) => {
  const { recentTransactions, totalExpense, totalIncome, totalBalance } = data;

  return (
    <section className="p-[40px] grid grid-cols-2 gap-x-[20px]">
      <Transaction data={recentTransactions} />

      <Financial
        balance={totalBalance}
        expense={totalExpense}
        income={totalIncome}
      />
    </section>
  );
};

export default SectionContainer;
