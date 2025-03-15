import React from "react";

const Button = ({ text, style }) => {
  if (style === "first") {
    return <button className="rounded-md bg-[#EFBB5E] w-full text-[#fff] p-[10px] transition duration-300 hover:bg-[#E5B35A] cursor-pointer">{text}</button>;
  }

  return <button>{text}</button>;
};

export default Button;
