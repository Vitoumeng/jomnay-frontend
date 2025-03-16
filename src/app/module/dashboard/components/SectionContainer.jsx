import React from "react";
import Transaction from "./Transaction";
import Financial from "./Financial";
import LastExpense from "./LastExpense";

const SectionContainer = ({ data }) => {
  const { recentTransactions, totalExpense, totalIncome, totalBalance, last30daysExpense } = data;

  return (
    <section className="p-[40px] grid grid-cols-2 gap-[20px]">
      <Transaction data={recentTransactions} />

      <Financial
        balance={totalBalance}
        expense={totalExpense}
        income={totalIncome}
      />

      <LastExpense data={last30daysExpense} />

    </section>
  );
};

export default SectionContainer;
