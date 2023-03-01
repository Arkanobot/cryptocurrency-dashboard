import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Chart() {
  const { currency } = useSelector((store) => store.currency);
  const [coinData, setCoinData] = useState();
  const crypto = "bitcoin";
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=365&interval=bi-weekly`
      );
      setCoinData(response.data);
    } catch (error) {
      //logs the error
      console.log(error);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      //function to call axios to get the Crypto data.
      fetchData();
    });
    return () => clearTimeout(timer);
  }, [currency]);
  let options;
  let data;

  if (coinData !== undefined) {
    const coinPrice = coinData.prices.map((data) => ({
      x: data[0],
      y: data[1].toFixed(2),
    }));
    options = {
      responsive: true,
      maintainAspectRatio: false,
    };
    data = {
      labels: coinPrice.map((value) => moment(value.x).format("DD MMM YY")),
      datasets: [
        {
          fill: true,
          label: crypto.toUpperCase(),
          data: coinPrice.map((value) => value.y),
          borderColor: "rgb(53, 152, 235)",
          backgroundColor: "rgba(53,152, 235, 0.2",
        },
      ],
    };
  }
  return (
    <div className=" my-5 w-[98.5%] h-[100%] overflow-hidden border-2 border-solid border-slate-50 rounded-lg shadow-md bg-white">
      {coinData !== undefined ? (
        <Line option={options} data={data} height={"80%"} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
