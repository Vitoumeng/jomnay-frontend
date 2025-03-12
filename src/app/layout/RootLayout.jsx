import React from "react";
import { Outlet } from "react-router-dom";
import { useLogin } from "../module/auth/core/action";

const RootLayout = () => {
  const { onLogout } = useLogin();

  return (
    <>
      RootLayout
      <button onClick={onLogout}>Logout</button>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
