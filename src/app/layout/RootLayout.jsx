import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLogin } from "../module/auth/core/action";
import Loader from "./Loader";

const RootLayout = () => {
  const { onLogout } = useLogin();
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      RootLayout
      {show ? (
        <div className="fixed top-0 w-screen h-screen flex items-center justify-center left-0 z-50">
          <Loader />
        </div>
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default RootLayout;
