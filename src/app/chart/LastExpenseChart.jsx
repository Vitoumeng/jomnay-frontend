import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LastExpenseChart = () => {
  const data = {
    labels: ["Drink", "Foods", "Cloths", "Foods", "Drink", "Drink", "Drink"],
    datasets: [
      {
        label: "Amount Spent",
        data: [80, 120, 120, 80, 50, 60, 80], 
        backgroundColor: "#8884d8", 
        borderColor: "#8884d8",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
      };

  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default LastExpenseChart;
