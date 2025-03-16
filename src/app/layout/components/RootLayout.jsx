import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useLayout } from "../core/action";

const RootLayout = () => {
  const { collap } = useLayout();

  return (
    <>
      <Sidebar collap={collap} />

      <main
        className={`${
          collap ? "ml-0" : "ml-[260px]"
        } transition-[margin] duration-300`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
