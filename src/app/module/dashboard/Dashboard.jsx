import React, { useEffect } from "react";
import Header from "../../layout/components/Header";
import { useDashboard } from "./core/action";
import CardContainer from "./components/CardContainer";

function Dashboard() {
  const { dashboard, fetchDashboard } = useDashboard();

  useEffect(() => {
    fetchDashboard();
  }, []); // eslint-disable-line

  console.log(dashboard);

  const { totalBalance, totalIncome, totalExpense } = dashboard;

  return (
    <>
      <Header title={"Dashboard"} />

      <CardContainer
        balance={totalBalance}
        expense={totalExpense}
        income={totalIncome}
      />
    </>
  );
}

export default Dashboard;
