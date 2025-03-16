import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { useLayout } from "../core/action";

const Header = ({ title }) => {
  const { handleCollapse } = useLayout();

  return (
    <header className="p-[40px] bg-[#f8f8f8] h-[90px] flex items-center gap-x-[15px]">
      <div onClick={handleCollapse} className="text-[28px] cursor-pointer">
        <RiMenuLine />
      </div>

      <h2 className="text-[#3a3a3a] text-[24px] font-semibold">{title}</h2>
    </header>
  );
};

export default Header;
