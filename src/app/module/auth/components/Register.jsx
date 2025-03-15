import React from "react";
import { useLogin } from "../core/action";
import toast from "react-hot-toast";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";

const Register = ({ handleShow }) => {
  const { register, handleChangeRegister, onRegister } = useLogin();

  const { fullName, email, password, cpassword } = register;

  // console.log(register);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !cpassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    onRegister();
  };

  return (
    <div className="w-[550px]">
      <h3 className="text-[34px] font-semibold text-center mb-[40px]">
        Register
      </h3>

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-[20px] mb-[30px]">
          <Input
            value={fullName}
            type={"text"}
            event={handleChangeRegister}
            label={"Full Name"}
            name={"fullName"}
          />

          <Input
            value={email}
            type={"email"}
            event={handleChangeRegister}
            label={"Email"}
            name={"email"}
          />

          <Input
            value={password}
            type={"password"}
            event={handleChangeRegister}
            label={"Password"}
            name={"password"}
          />

          <Input
            value={cpassword}
            type={"password"}
            event={handleChangeRegister}
            label={"Confirm Password"}
            name={"cpassword"}
          />
        </div>

        <Button text={"Register"} style={"first"} />

        <p className="text-center mt-[30px] text-[14px]">
          Already have an account?{" "}
          <span onClick={handleShow} className="text-[#EFBB5E] cursor-pointer">
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
