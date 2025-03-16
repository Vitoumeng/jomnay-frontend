import Icons from "../../../utils/Icons";

const Card = ({ title, total, type }) => {
  const formattedTotal = total.toFixed(2);
  
  return (
    <div className="p-[20px] border-[2px] border-[#69696905] rounded-md bg-[#f8f8f8] flex items-center gap-x-[30px]">
      <Icons type={type} />
      <div>
        <span className="text-[#696969] text-[14px]">{title}</span>
        <h2 className="text-[24px] text-[#3a3a3a] font-semibold">${formattedTotal}</h2>
      </div>
    </div>
  );
};

export default Card;
