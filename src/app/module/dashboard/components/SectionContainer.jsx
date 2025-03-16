import React from "react";
import Transaction from "./Transaction";

const SectionContainer = ({ data }) => {
  const { recentTransactions } = data;

  return (
    <section className="p-[40px] grid grid-cols-2 gap-x-[20px]">
      <Transaction data={recentTransactions} />
    </section>
  );
};

export default SectionContainer;
