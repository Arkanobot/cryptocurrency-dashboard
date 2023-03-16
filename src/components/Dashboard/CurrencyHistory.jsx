import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "./Chart";
import DropdownButton from "./DropdownButton";
import { updateCryptoName } from "../../redux/coinData";
import { updateDataDuration, updateDays } from "../../redux/daysData";
import { updateActiveButton, updateCurrentChart } from "../../redux/misc";

function CurrencyHistory() {
  const { activeButton } = useSelector((state) => state.misc);
  const { cryptoList, cryptoName } = useSelector((state) => state.coins);
  const { currentChart } = useSelector((state) => state.misc);
  const timeline = ["1D", "1W", "1M", "6M", "1Y"];
  const chartVariant = ["Line Chart", "Bar - Horizontal", "Bar - Vertical"];
  // const currentChart = ["Line Chart"];
  let day;
  let duration;
  const dispatch = useDispatch();
  const handleChange = (crypto) => {
    dispatch(updateCryptoName(crypto));
  };

  const handleChangeList = (chart) => {
    dispatch(updateCurrentChart(chart));
  };

  const handleTimeChange = (time) => {
    switch (time) {
      case "1D":
        day = 1;
        duration = "hourly";
        break;
      case "1W":
        day = 7;
        duration = "daily";
        break;
      case "1M":
        day = 31;
        duration = "daily";
        break;
      case "6M":
        day = 183;
        duration = "daily";
        break;
      case "1Y":
        day = 365;
        duration = "daily";
        break;
      default:
        day = 1;
        duration = "hourly";
    }
    // console.log(day);
    dispatch(updateDays(day));
    dispatch(updateDataDuration(duration));
    dispatch(updateActiveButton(time));
  };

  return (
    <div className="p-2 my-4 mx-1 w-[100%] overflow-x-auto overflow-y-hidden border-2 border-solid border-slate-50 rounded-lg shadow-md bg-white ">
      <div className="flex flex-wrap justify-between">
        <div class="flex items-center justify-center">
          <div
            className="inline-flex flex-wrap md:flex-nowrap  transition duration-150 ease-in-out"
            role="toolbar"
          >
            {timeline.map((time) => {
              return (
                <button
                  type="button"
                  className={`mx-1 my-2 md:my-0 rounded-md inline-block border-2 border-primary hover:border-primary-600 focus:border-primary-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black hover:text-white focus:text-white active:text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 shadow-md ${
                    activeButton === time ? "active" : null
                  }`}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={(e) => handleTimeChange(time)}
                  key={time}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
        <div className=" flex">
          <div className="mx-4 my-2 md:my-0">
            <DropdownButton
              name={cryptoName}
              list={cryptoList}
              handleChange={handleChange}
            />
          </div>
          <div className="my-2 md:my-0">
            <DropdownButton
              name={currentChart}
              list={chartVariant}
              handleChange={handleChangeList}
            />
          </div>
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default CurrencyHistory;
