import React, { useEffect } from "react";
import Header from "../../layout/components/Header";
import { useDashboard } from "./core/action";
import CardContainer from "./components/CardContainer";
import SectionContainer from "./components/SectionContainer";

function Dashboard() {
  const { dashboard, fetchDashboard } = useDashboard();

  useEffect(() => {
    fetchDashboard();
  }, []); // eslint-disable-line

  // console.log(dashboard);

  return (
    <>
      <Header title={"Dashboard"} />

      <CardContainer data={dashboard} />

      <SectionContainer data={dashboard} />
    </>
  );
}

export default Dashboard;
