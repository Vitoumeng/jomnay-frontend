import React, { useEffect } from "react";
import Header from "../../layout/components/Header";
import { useDashboard } from "./core/action";

function Dashboard() {
  const { dashboard, fetchDashboard } = useDashboard();

  useEffect(() => {
    fetchDashboard();
  }, []); // eslint-disable-line

  console.log(dashboard);

  return (
    <>
      <Header title={"Dashboard"} />

      
    </>
  );
}

export default Dashboard;
