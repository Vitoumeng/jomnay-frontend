import { RiExchangeDollarLine, RiWallet3Line } from "react-icons/ri";

const IconInfo = ({ icon }) => {
  if (icon === "RiExchangeDollarLine") {
    return (
      <div className="w-[50px] text-xl bg-[#DC2626BF]/15 text-[#DC2626BF] h-[50px] rounded-full flex justify-center items-center">
        <RiExchangeDollarLine />
      </div>
    );
  }

  if (icon === "RiWallet3Line") {
    return (
      <div className="w-[50px] text-xl bg-[#16A34ABF]/15 text-[#16A34ABF] h-[50px] rounded-full flex justify-center items-center">
        <RiWallet3Line />
      </div>
    );
  }
};

export default IconInfo;
