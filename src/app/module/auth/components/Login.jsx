import React from "react";
import { useLogin } from "../core/action";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleChangeLogin, onLogin, login } = useLogin();
  const { email, password } = login;

  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[468px] bg-container shadow-card rounded-xl py-[60px] px-[40px]">
        <h3 className="text-4xl uppercase mb-[30px]">Login</h3>

        <form className="flex flex-col gap-y-[20px]" onSubmit={onSubmit}>
          <div className="flex flex-col gap-y-[10px]">
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
                onChange={handleChangeLogin}
                placeholder="example@example.com"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-lg" htmlFor="password">
                Password
              </label>
              <input
                className="w-full h-[50px] p-4 border-[2px] rounded-md outline-0 border-slate-500 focus:border-slate-900"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChangeLogin}
                placeholder="password$123"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <button
              className="w-full h-[50px] rounded-md cursor-pointer bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
              type="submit"
            >
              Login
            </button>

            <p className="text-center text-[14px]">
              Don't have an account?{" "}
              <Link className="text-primary" to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
