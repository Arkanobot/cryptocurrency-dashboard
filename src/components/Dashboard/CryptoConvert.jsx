import React, { useState } from "react";
import DropdownButton from "./DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import {
  updateSelectBuyCrypto,
  updateSelectSellCrypto,
} from "../../redux/coinData";

export default function CryptoConvert() {
  const [sellVal, setSellVal] = useState(0);
  const [buyVal, setBuyVal] = useState("Enter selling amount");
  const dispatch = useDispatch();
  const { coins, cryptoList, selectSellCrypto, selectBuyCrypto } = useSelector(
    (state) => state.coins
  );
  const handleExchange = (crypto) => {
    const sellingCryptoPrice = coins.find(
      (coin) => coin.id === selectSellCrypto
    ).current_price;
    const buyingCryptoPrice = coins.find(
      (coin) => coin.id === selectBuyCrypto
    ).current_price;
    setBuyVal(((sellVal * sellingCryptoPrice) / buyingCryptoPrice).toFixed(8));
  };
  const handleOnChangeSellValue = (value) => {
    setSellVal(value);
  };
  const handleSellCrypto = (listItem) => {
    dispatch(updateSelectSellCrypto(listItem));
  };
  const handleBuyCrypto = (listItem) => {
    dispatch(updateSelectBuyCrypto(listItem));
  };
  return (
    <div className="bg-white h-full rounded-md shadow-lg col-span-1 p-5">
      <div className="font-bold text-xl">Coin Exchange Value</div>
      <div className="">
        <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 my-5">
          <div className="flex items-center">
            <div className="font-semibold text-lg text-slate-800">Sell:</div>
            <div className="mx-5">
              <DropdownButton
                name={selectSellCrypto}
                list={cryptoList}
                handleChange={handleSellCrypto}
              />
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <TextInput
              name={"Enter your amount"}
              placeholder={"Please enter the amount to sell"}
              funct={handleOnChangeSellValue}
            />
          </div>
        </div>
        <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 my-5">
          <div className="flex items-center">
            <div className="font-semibold text-lg text-slate-800">Buy:</div>
            <div className="mx-5">
              <DropdownButton
                name={selectBuyCrypto}
                list={cryptoList}
                handleChange={handleBuyCrypto}
              />
            </div>
          </div>
          <div className=" mt-5 lg:mt-0">
            <TextInput disabled={true} value={buyVal} />
          </div>
        </div>
        <div className="grid justify-center">
          <button
            type="button"
            class="my-3 inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            onClick={handleExchange}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}
