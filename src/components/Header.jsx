import React from "react";
import logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <div>
      <div className="mx-2 md:mx-10 bg-white px-10 py-3 border-1 rounded-b-md shadow-md">
        <img className="h-12 w-24" src={logo} alt="Shreyas Dashboard Logo" />
      </div>
    </div>
  );
}
