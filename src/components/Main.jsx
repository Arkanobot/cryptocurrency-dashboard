import React from "react";
import CoinList from "./CoinList/CoinList";

export default function Main() {
  return (
    <div className="my-5 mx-2 md:mx-10 p-5 min-h-[80vh] bg-white border-2 rounded-md shadow-md">
      {/* Main component */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="bg-blue-100 grid place-content-center md:col-span-9">
          1
        </div>
        <div className="grid place-content-center md:col-span-3">
          <CoinList />
        </div>
      </div>
    </div>
  );
}
