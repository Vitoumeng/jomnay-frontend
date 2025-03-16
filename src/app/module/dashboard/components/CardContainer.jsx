import Card from "./Card";

const CardContainer = ({ balance, expense, income }) => {
  return (
    <div className="p-[40px] grid grid-cols-3 gap-x-[20px]">
      <Card title="Total Balance" total={balance} type={"balance"} />
      <Card title="Total Income" total={income} type={"income"} />
      <Card title="Total Expense" total={expense} type={"expense"} />
    </div>
  );
};

export default CardContainer;
