import React from "react";
import CoinList from "./CoinList/CoinList";
import Dashboard from "./Dashboard/Dashboard";

export default function Main() {
  return (
    <div className="my-5 mx-2 md:mx-10 p-5 min-h-[80vh] border-2 rounded-md shadow-md">
      {/* Main component */}
      <div className="grid grid-cols-1 xl:grid-cols-12">
        <div className="grid col-span-1 xl:col-span-9">
          <Dashboard />
        </div>
        <div className="grid place-content-center col-span-1 xl:col-span-3">
          <CoinList />
        </div>
      </div>
    </div>
  );
}
