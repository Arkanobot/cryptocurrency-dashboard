import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  const data = {
    labels: [
      "Bitcoin",
      "Ethereum",
      "Tether",
      "Dogecoin",
      "Binance Coin",
      "Polygon",
    ],
    datasets: [
      {
        label: "Total",
        data: [119, 81, 500, 211, 103, 192],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white h-full rounded-md shadow-lg col-span-1 p-5">
      <div className="flex justify-between">
        <div className="font-bold text-xl">Portfolio</div>
        <div className="font-bold text-lg text-gray-400">
          Total value:{" "}
          <span className="font-bold text-xl text-black">$1000</span>
        </div>
      </div>
      <div className="grid place-content-center my-5 max-h-[25vh] max-w-[25vw] ">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Portfolio;
