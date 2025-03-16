import Card from "./Card";

const CardContainer = ({ data }) => {
  const { totalBalance, totalIncome, totalExpense } = data;

  return (
    <section className="p-[40px] grid grid-cols-3 gap-x-[20px] pb-0">
      <Card title="Total Balance" total={totalBalance} type={"balance"} />
      <Card title="Total Income" total={totalIncome} type={"income"} />
      <Card title="Total Expense" total={totalExpense} type={"expense"} />
    </section>
  );
};

export default CardContainer;
