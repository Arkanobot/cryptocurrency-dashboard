import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Chart() {
  const { currency } = useSelector((store) => store.currency);
  const { cryptoName } = useSelector((store) => store.coins);
  const { days, dataDuration } = useSelector((store) => store.days);
  const { currentChart } = useSelector((store) => store.misc);
  const [coinData, setCoinData] = useState();

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
  }, [currency, cryptoName, days, dataDuration, currentChart]);
  let options;
  let optionsHorizontalBar;
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
      scales: {
        y: {
          min: Math.min(...coinPrice.map((obj) => obj.y)),
          max: Math.max(...coinPrice.map((obj) => obj.y)),
        },
      },
    };

    optionsHorizontalBar = {
      indexAxis: "y",
      scales: {
        x: {
          min: Math.min(...coinPrice.map((obj) => obj.y)),
          max: Math.max(...coinPrice.map((obj) => obj.y)),
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
    <div className="flex mx-0 md:mx-5 my-2 relative w-[97%] h-[35vh]">
      {" "}
      {/*w-[85vw]  xl:w-[66vw] 2xl:w-[67vw]*/}
      {coinData !== undefined ? (
        currentChart === "Line Chart" ? (
          <div style={{ padding: "5px", width: "100%", height: "100%" }}>
            <Line
              options={options}
              data={data}
              height={"80%"}
              updateMode="resize"
            />
          </div>
        ) : currentChart === "Bar - Vertical" ? (
          <div style={{ padding: "5px", width: "100%", height: "100%" }}>
            <Bar
              options={options}
              data={data}
              height={"80%"}
              updateMode="resize"
            />
          </div>
        ) : currentChart === "Bar - Horizontal" ? (
          <Bar
            options={optionsHorizontalBar}
            data={data}
            height={"80%"}
            updateMode="resize"
          />
        ) : null
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
