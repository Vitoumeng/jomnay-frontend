import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../core/action";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Register = () => {
  const [show, setShow] = useState(false);
  const { register, handleChangeRegister, onRegister } = useLogin();

  const { fullName, email, password, cpassword } = register;

  // console.log(register);

  const onSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && password === cpassword) {
      onRegister();
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[768px] bg-container shadow-card rounded-xl py-[60px] px-[40px]">
        <h3 className="text-4xl uppercase mb-[30px]">Register</h3>

        <form className="flex flex-col gap-y-[20px]" onSubmit={onSubmit}>
          <div className="grid grid-cols-[320px_1fr] gap-[20px]">
            <div className="flex flex-col gap-y-1">
              <label className="text-lg" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="w-full h-[50px] p-4 border-[2px] rounded-md outline-0 border-slate-500 focus:border-slate-900"
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={handleChangeRegister}
                placeholder="jonh doe"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="w-full h-[50px] p-4 border-[2px] rounded-md outline-0 border-slate-500 focus:border-slate-900"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeRegister}
                placeholder="example@example.com"
              />
            </div>

            <div className="flex relative flex-col gap-y-1">
              <label className="text-lg" htmlFor="password">
                Password
              </label>
              <input
                className="w-full h-[50px] p-4 border-[2px] rounded-md outline-0 border-slate-500 focus:border-slate-900"
                type={show ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleChangeRegister}
                placeholder="password$123"
              />

              {password && (
                <div
                  onClick={() => setShow(!show)}
                  className="absolute bottom-1 right-2 cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
                >
                  {show ? <RiEyeOffLine /> : <RiEyeLine />}
                </div>
              )}
            </div>

            <div className="flex relative flex-col gap-y-1">
              <label className="text-lg" htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                className="w-full h-[50px] p-4 border-[2px] rounded-md outline-0 border-slate-500 focus:border-slate-900"
                type={show ? "text" : "password"}
                id="cpassword"
                name="cpassword"
                value={cpassword}
                onChange={handleChangeRegister}
                placeholder="password$123"
              />

              {cpassword && (
                <div
                  onClick={() => setShow(!show)}
                  className="absolute bottom-1 right-2 cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
                >
                  {show ? <RiEyeOffLine /> : <RiEyeLine />}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <button
              className="w-full h-[50px] rounded-md cursor-pointer bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
              type="submit"
            >
              Register
            </button>

            <p className="text-center text-[14px]">
              Already have an account?{" "}
              <Link className="text-purple-600" to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
