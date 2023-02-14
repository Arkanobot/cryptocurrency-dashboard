import React from "react";

function CoinList() {
  const coinlist = [
    "bitcoin",
    "etherium",
    "binomo",
    "dogecoin",
    "marscoin",
    "brave",
  ];
  return (
    <div className="min-h-[75vh] min-w-[22.5vw] overflow-auto border-2 border-solid rounded-lg shadow-md">
      <div className="p-3 px-5 text-lg font-bold">
        <span>Cryptocurrency by Market Cap</span>
      </div>
      <div className="border-t-2 border-solid border-slate-500 p-5">
        {coinlist.map((coin) => {
          return (
            <div className="my-2 flex flex-col">
              <div className="flex justify-between">
                <span className="text-lg font-bold">{coin}</span>
                <span text-lg>$100</span>
              </div>
              <div>
                <span className="text-sm text-slate-500">
                  Market Cap: $40000
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoinList;
