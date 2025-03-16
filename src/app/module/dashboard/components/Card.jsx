import Icons from "../../../utils/Icons";

const Card = ({ title, total, type }) => {
  const formattedTotal = total.toFixed(2);
  
  return (
    <div className="p-[20px] relative rounded-md bg-[#f8f8f8] flex items-center gap-x-[30px]">
      <div className="absolute top-0 left-0 w-full h-full shadow-[0px_0px_8px_rgba(0,0,0,0.07)] rounded-md"></div>{" "}
      <Icons type={type} />
      <div>
        <span className="text-[#696969] text-[14px]">{title}</span>
        <h2 className="text-[24px] text-[#3a3a3a] font-semibold">${formattedTotal}</h2>
      </div>
    </div>
  );
};

export default Card;
