import React from "react";
import { useLogin } from "../core/action";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import toast from "react-hot-toast";

const Login = ({ handleShow }) => {
  const { handleChangeLogin, onLogin, login } = useLogin();
  const { email, password } = login;

  const onSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin();
    } else if (!email) {
      toast.error("Email are required");
    } else {
      toast.error("Passowrd are required");
    }
  };

  return (
    <div className="w-[320px]">
      <h3 className="text-[34px] font-semibold text-center mb-[40px]">Login</h3>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-[20px] mb-[30px]">
          <Input
            value={email}
            type={"email"}
            event={handleChangeLogin}
            label={"Email"}
            name={"email"}
          />

          <Input
            value={password}
            type={"password"}
            event={handleChangeLogin}
            label={"Password"}
            name={"password"}
          />
        </div>

        <Button text={"Login"} style={"first"} />

        <p className="text-center mt-[30px] text-[14px]">
          Don't have an account?{" "}
          <span onClick={handleShow} className="text-[#EFBB5E] cursor-pointer">
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
