import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

const FinanChart = ({ balance, income, expense }) => {
  ChartJS.register(ArcElement, Tooltip, Legend, Title);

  const data = {
    labels: ["Total Balance", "Total Income", "Total Expense"],
    datasets: [
      {
        data: [balance, income, expense],
        backgroundColor: ["#2563EBBF", "#16A34ABF", "#DC2626BF"],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#3a3a3a",
          font: {
            size: 14,
          },
        },
        onClick: null,
      },
    },
  };

  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      <Doughnut data={data} options={options} />

      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] text-center">
        <p className="text-[14px] text-[#696969]">Total Balance</p>
        <p className="text-[24px] font-semibold text-[#3a3a3a]">${balance}</p>
      </div>
    </div>
  );
};

export default FinanChart;
