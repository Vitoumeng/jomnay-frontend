import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Input = ({ type, label, name, event, value }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-y-[5px]">
      <label className="text-[16px] font-medium text-[#3a3a3a]" htmlFor={name}>
        {label}
      </label>

      <div className="h-[44px] relative">
        <input
          onChange={event}
          className="text-[14px] w-full h-full border-[2px] border-[#696969] rounded-md px-[12px] outline-0 pr-[40px]"
          type={show ? "text" : type}
          name={name}
          id={name}
          value={value}
          placeholder="Input value here..."
        />

        {type === "password" && value && (
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
