import React from "react";
import Currency from "./Currency";
import SearchBar from "./SearchBar";
import CurrencyHistory from "./CurrencyHistory";
import CryptoConvert from "./CryptoConvert";
import Portfolio from "./Portfolio";

export default function Dashboard() {
  return (
    <div className="min-w-[87vw] px-1 xl:min-w-[65vw]">
      <div className="flex my-5 xl:my-0 justify-between">
        <div className="">
          <Currency />
        </div>
        <div className="basis-[90%] md:mx-5">
          <SearchBar />
        </div>
      </div>
      <div>
        <CurrencyHistory />
      </div>
      <div className="grid place-content-center grid-cols-1 lg:grid-cols-2">
        <div className="my-4 xl:my-1 lg:mr-3">
          <Portfolio />
        </div>
        <div className="my-4 xl:my-1 lg:ml-2">
          <CryptoConvert />
        </div>
      </div>
    </div>
  );
}
