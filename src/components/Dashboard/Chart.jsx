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
  const { cryptoName } = useSelector((store) => store.coins);
  const { days, dataDuration } = useSelector((store) => store.days);
  const [coinData, setCoinData] = useState();
  // const crypto = "bitcoin";
  // const duration = 365;
  // const interval = "daily";
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=${currency}&days=${days}&interval=${dataDuration}`
      );
      setCoinData(response.data);
    } catch (error) {
      //logs the error
      console.log(error);
    }
  }
  useEffect(() => {
    //function to call axios to get the Crypto data.
    fetchData();
  }, [currency, cryptoName, days, dataDuration]);
  let options;
  let data;

  if (coinData !== undefined) {
    const coinPrice = coinData.prices.map((data) => ({
      x: data[0],
      y: data[1].toFixed(2),
    }));
    // const months = coinPrice.map((item) => moment(item.x).format("MMM YY"));
    // const filteredMonths = [...new Set(months)];
    // console.log(filteredMonths);
    options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          align: "end",
          title: {
            position: "end",
          },
        },
      },
    };
    if (days === 1) {
      data = {
        labels: coinPrice.map((value) =>
          moment(value.x).format("MMM Do, h:mm a")
        ),
        datasets: [
          {
            fill: true,
            label: cryptoName.toUpperCase(),
            data: coinPrice.map((value) => value.y),
            borderWidth: 2,
            borderColor: "rgb(53, 152, 235)",
            backgroundColor: "rgba(53,152, 235, 0.2)",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
          },
        ],
      };
    } else {
      data = {
        labels: coinPrice.map((value) => moment(value.x).format("MMM Do YY")),
        datasets: [
          {
            fill: true,
            label: cryptoName.toUpperCase(),
            data: coinPrice.map((value) => value.y),
            borderWidth: 2,
            borderColor: "rgb(53, 152, 235)",
            backgroundColor: "rgba(53,152, 235, 0.2)",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
          },
        ],
      };
    }
  }
  return (
    <div className="flex mx-0 md:mx-5 my-2 relative w-[85vw] h-[35vh] xl:w-[66vw] 2xl:w-[67vw]">
      {coinData !== undefined ? (
        <div style={{ padding: "5px", width: "100%", height: "100%" }}>
          <Line
            options={options}
            data={data}
            height={"80%"}
            updateMode="resize"
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
