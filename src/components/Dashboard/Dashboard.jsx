import React from "react";
import Currency from "./Currency";
import SearchBar from "./SearchBar";
import CurrencyHistory from "./CurrencyHistory";
// import CryptoConvert from "./CryptoConvert";
// import Portfolio from "./Portfolio";

export default function Dashboard() {
  return (
    <div>
      <div className="top-row flex my-5 xl:my-0">
        <div className="basis-[7%]">
          <Currency />
        </div>
        <div className="basis-[93%] mx-5">
          <SearchBar />
        </div>
      </div>
      <div>
        <CurrencyHistory />
      </div>
    </div>
  );
}
