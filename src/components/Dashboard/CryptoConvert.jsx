import React from "react";
import DropdownButton from "./DropdownButton";
import { useSelector } from "react-redux";

export default function CryptoConvert() {
  const { cryptoList } = useSelector((state) => state.coins);
  const handleExchange = (crypto) => {
    console.log(crypto);
  };
  return (
    <div className="bg-white h-full rounded-md shadow-lg col-span-1 p-5">
      <div className="font-bold text-xl">Coin Exchange Value</div>
      <div className="">
        <div className="flex items-center my-5">
          <div className="flex items-center basis-[50%]">
            <div className="font-semibold text-lg text-slate-800">Sell:</div>
            <div className="mx-5">
              <DropdownButton
                name={"Crypto"}
                list={cryptoList}
                handleChange={handleExchange}
              />
            </div>
          </div>
          <div className="basis-[50%]">Coin Input</div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center basis-[50%]">
            <div className="font-semibold text-lg text-slate-800">Buy:</div>
            <div className="mx-5">
              <DropdownButton
                name={"RandomCrypto"}
                list={cryptoList}
                handleChange={handleExchange}
              />
            </div>
          </div>
          <div className="basis-[50%]">Coin Output</div>
        </div>
        <div className="grid justify-center">
          <button
            type="button"
            class="my-3 inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}
