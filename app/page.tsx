"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function UserBirthday(e: { preventDefault: () => void }) {
    e.preventDefault();

    console.log(day, month, year);
    console.log(todaysDay, todaysMonth, todaysYear);
    console.log(subDay, subMonth, subYear);
  }

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  var today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = today.getMonth() + 1;
  const todaysDay = today.getDay();

  const subDay = todaysDay - day;
  const subMonth = todaysMonth - month;
  const subYear = todaysYear - year;

  // take subtracted days and check if negative
  //   subtract from month and add in correct days depending on month
  // if negative months subtract year and add in correct months

  //error check users numbers

  //style page exactly as design

  if (subDay < 0) {
    subMonth - 1;
  }

  return (
    <main className="p-4 w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="border border-transparent rounded-xl flex flex-col bg-white text-slate-500">
        <form className="flex border-b-2 p-8">
          <div className="p-4 w-fit">
            <h3 className="text-lg w-fit">Day</h3>
            <input
              className="border border-slate-500 text-3xl w-1/2"
              name="day"
              placeholder="DD"
              type="number"
              max={31}
              onChange={(e) => setDay(e.target.valueAsNumber)}
            ></input>
          </div>
          <div className="p-4 w-fit">
            <h3 className="text-lg w-fit">Month</h3>
            <input
              className="border border-slate-500 text-3xl w-1/2"
              name="month"
              placeholder="MM"
              type="number"
              max={12}
              onChange={(e) => setMonth(e.target.valueAsNumber)}
            ></input>
          </div>
          <div className="p-4 w-fit">
            <h3 className="text-lg w-fit">Year</h3>
            <input
              className="border border-slate-500 text-3xl w-1/2"
              name="year"
              placeholder="YYYY"
              type="number"
              max={2023}
              onChange={(e) => setYear(e.target.valueAsNumber)}
            ></input>
            <button className="p-10 border border-black" onClick={UserBirthday}>
              Input
            </button>
          </div>
        </form>
        <div className="p-8">
          <div className="flex text-7xl">
            <h4 className="text-violet-700">--</h4>
            <h2 className="text-black font-bold">years</h2>
          </div>
          <div className="flex text-7xl">
            <h4 className="text-violet-700">--</h4>
            <h2 className="text-black font-bold">months</h2>
          </div>
          <div className="flex text-7xl">
            <h4 className="text-violet-700">--</h4>
            <h2 className="text-black font-bold">days</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
