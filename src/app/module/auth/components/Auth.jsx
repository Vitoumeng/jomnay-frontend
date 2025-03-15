import { useState } from "react";
import Logo from "../../../../template/assets/big_logo.png";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <div className="overflow-hidden w-full min-h-screen grid grid-cols-2">
      <div className="flex bg-[#f8f8f8] items-center justify-center">
        <img className="w-[245px]" src={Logo} alt="Jomnay Logo" />
      </div>

      <div
        className={`flex ${show ? "-order-1" : ""} justify-center items-center`}
      >
        {show ? (
          <Register handleShow={handleShow} />
        ) : (
          <Login handleShow={handleShow} />
        )}
      </div>
    </div>
  );
};

export default Auth;
