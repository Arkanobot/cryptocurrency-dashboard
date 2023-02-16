import React from "react";
import CryptoConvert from "./CryptoConvert";
import Portfolio from "./Portfolio";
import Currency from "./Currency";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  return (
    <div className="grid col-span-1 xl:col-span-3 grid-cols-1 grid-rows-9 py-4 xl:px-3 xl:py-0">
      <div className="row-span-1 flex">
        <div className=" basis-1/6 bg-white pl-1 w-full my-2 rounded-md shadow-md">
          <Currency />
        </div>
        <div className="basis5/6 bg-white ml-3 pr-1 w-full my-2 rounded-md shadow-md">
          <SearchBar />
        </div>
      </div>
      <div className="col-span-1 row-span-5 h-[97%] bg-white rounded-md px-1 shadow-md">
        Graphs
      </div>
      <div className="col-span-1 row-span-3 grid grid-cols-1 md:grid-cols-2">
        <div className="basis-2/4 md:px-1 py-2 md:py-0">
          <Portfolio />
        </div>
        <div className="basis-2/4 md:px-1 py-2 md:py-0">
          <CryptoConvert />
        </div>
      </div>
    </div>
  );
}
