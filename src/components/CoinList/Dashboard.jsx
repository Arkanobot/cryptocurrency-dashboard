import React from "react";
import CryptoConvert from "./CryptoConvert";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1">
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
      <div className="flex bg-blue-600">
        <div></div>
        <div>
          <CryptoConvert />
        </div>
      </div>
    </div>
  );
}
