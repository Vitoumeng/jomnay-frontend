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
          collap ? "ml-[260px]" : "ml-0"
        } transition-[margin] duration-300`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
