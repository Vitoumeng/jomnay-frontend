import { RiBarChart2Line, RiExchangeDollarLine, RiWallet3Line } from "react-icons/ri";

const Icons = ({ type }) => {
  if (type === "balance") {
    return (
      <div className="w-[60px] text-2xl bg-[#2563EB]/15 text-[#2563EBBF] h-[60px] rounded-full flex justify-center items-center">
        <RiBarChart2Line />
      </div>
    );
  }
  if (type === "income") {
    return (
      <div className="w-[60px] text-2xl bg-[#16A34ABF]/15 text-[#16A34ABF] h-[60px] rounded-full flex justify-center items-center">
        <RiWallet3Line />
      </div>
    );
  }
  if (type === "expense") {
    return (
      <div className="w-[60px] text-2xl bg-[#DC2626BF]/15 text-[#DC2626BF] h-[60px] rounded-full flex justify-center items-center">
        <RiExchangeDollarLine />
      </div>
    );
  }
};

export default Icons;
