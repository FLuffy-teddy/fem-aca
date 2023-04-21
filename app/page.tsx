"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function UserBirthday(e: { preventDefault: () => void }) {
    e.preventDefault();

  }

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  let today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = today.getMonth() + 1;
  const todaysDay = today.getDate();

  let subDay = todaysDay - day;
  let subMonth = todaysMonth - month;
  let subYear = todaysYear - year;
  let maxDay;

  let displayDay = '--';
  let displayMonth = '--';
  let displayYear = '--';

  //error check users numbers

  //style page exactly as design

  if (subDay < 1) {
    subMonth = subMonth - 1;

    if ([1,3,5,7,8,10,12].includes(subMonth)) {
      subDay = 31 + subDay;
      maxDay = 31;
    }
    if ([4,6,9,11].includes(subMonth)) {
      subDay = 30 + subDay;
      maxDay = 30;
    }
    if (subMonth == 2) {
      subDay = 28 + subDay;
      maxDay = 28;
    }
  }
  if (subMonth < 1) {
    subYear = subYear - 1;
    subMonth = 12;
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
              max={maxDay}
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
            <h4 className="text-violet-700">{displayYear}</h4>
            <h2 className="text-black font-bold">years</h2>
          </div>
          <div className="flex text-7xl">
            <h4 className="text-violet-700">{displayMonth}</h4>
            <h2 className="text-black font-bold">months</h2>
          </div>
          <div className="flex text-7xl">
            <h4 className="text-violet-700">{displayDay}</h4>
            <h2 className="text-black font-bold">days</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
