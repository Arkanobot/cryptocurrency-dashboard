import React, { useEffect } from "react";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateC } from "../../redux/coinData";

export default function CoinList() {
  // getting currency and coin data from redux store
  const { currency } = useSelector((store) => store.currency);
  const { coins } = useSelector((store) => store.coins);
  const currencyLogo = {
    USD: "$ ",
    INR: "₹ ",
    GBP: "£ ",
    JPY: "¥ ",
    EUR: "€ ",
    RUB: "₽ ",
    AUD: "$ ",
    CAD: "$ ",
    KWD: "د.ك ",
    BTC: "₿ ",
    ETH: "♦ ",
    BNB: "BNB ",
  };
  //declaring a constant dispatch to dispatch values to store
  const dispatch = useDispatch();

  //function to get crypto data from API
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1`
      );
      //saving the data to redux store- Coins
      dispatch(updateC(response.data));
    } catch (error) {
      //logs the error
      console.log(error);
    }
  }

  //calls the function to fetch crypto data once the component mounts using useEffect hook.
  useEffect(() => {
    //setting a timer so that the function is called once every 1800ms.
    const timer = setTimeout(() => {
      //function to call axios to get the Crypto data.
      fetchData();
    });
    return () => clearTimeout(timer); // clearing the timer
  }, [currency]);

  return (
    <div className="min-h-[75vh] min-w-[90vw] xl:min-w-[22.5vw] overflow-auto border-2 border-solid border-slate-50 rounded-lg shadow-md bg-white">
      <div className="p-3 px-5 text-lg font-bold text-center italic border-b-2 border-solid border-slate-50">
        <span>Cryptocurrency by Market Cap</span>
      </div>
      <div className="p-5 max-h-[70vh] overflow-auto">
        {coins &&
          coins.map((coin) => {
            return (
              <div className="my-8 flex flex-col">
                <div className="flex justify-between">
                  <div className="flex">
                    <img src={coin.image} alt={coin.name} className="h-8" />
                    <span className="text-lg font-bold mx-2">{coin.name}</span>
                  </div>
                  <div>
                    <span className={`text-md font-medium `}>
                      {coin.price_change_24h > 0 ? (
                        <div className="inline-block">
                          <IoCaretUp />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <IoCaretDown />
                        </div>
                      )}
                      {currencyLogo[currency]}
                      {coin.current_price}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between sm:border-b-2 sm:border-solid sm:border-slate-300 xl:border-0">
                  <span className="text-sm text-slate-500">
                    Market Cap: {coin.market_cap}
                  </span>
                  <span
                    className={`text-[0.8rem] ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h > 0 ? "+" : null}
                    {coin.price_change_percentage_24h}%
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
