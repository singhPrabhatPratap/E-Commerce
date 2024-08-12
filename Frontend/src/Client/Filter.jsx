import React, { useContext, useState } from "react";
import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  Wrench,
} from "lucide-react";
import Usercontext from "../context/Usercontext";
// flex flex-1 flex-col justify-between
export default function Filter() {
  let brandarr = [
    "BrandA",
    "BrandB",
    "BrandC",
    "BrandD",
    "BrandE",
    "BrandF",
    "BrandG",
    "BrandH",
    "BrandI",
    "BrandJ",
    "BrandK",
    "BrandL",
    'BrandS','BrandQ','BrandW','BrandX','BrandT','BrandU','BrandO','BrandR'
  ];
  let { setFil,filter } = useContext(Usercontext);
  return (
    <aside className={`flex h-screen sm:w-64 flex-col overflow-y-auto border-r bg-white px-5 py-6 sm:block ${filter===true?'block':'hidden'}`}>
      <div>
        <h1 className="font-bold">FILTER</h1>
        <div
            className="font-bold bg-red-500 p-1 text-white mb-1 rounded-md cursor-pointer"
            onClick={() => setFil(false)}
          >
            CLEAR Filter
          </div>
        {brandarr.map((brand) => (
          <span
            className="font-bold bg-blue-500 p-1 text-white mb-1 rounded-md flex justify-center cursor-pointer"
            onClick={() => setFil(brand)}
          >
            {brand}
          </span>
        ))}
      </div>
    </aside>
  );
}
