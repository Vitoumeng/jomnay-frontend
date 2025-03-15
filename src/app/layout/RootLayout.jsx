import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      RootLayout
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
