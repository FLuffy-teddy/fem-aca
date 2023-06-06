"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function UserBirthday(e: { preventDefault: () => void }) {
    e.preventDefault();

    const d = new Date();

    d.setFullYear(year, month, day);

    var difference = Math.abs(new Date().getTime() - d.getTime());
    var time = new Date(difference);
    console.log(time.toString());
  }

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [displayday, setDisplayDay] = useState("--");
  const [displaymonth, setDisplayMonth] = useState("--");
  const [displayyear, setDisplayYear] = useState("--");

  const inputTitleColor = "text-offgrey";
  const userInputColor = "text-offblack";
  const calculatorColor = "text-purple";
  const borderColor = "border-offwhite";
  const buttonBG = "bg-purple";

  return (
    <main className="p-4 w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div
        className={`border border-transparent rounded-xl flex flex-col bg-white ${userInputColor}`}
      >
        <form className="flex border-b-2 p-8 relative">
          <div className="p-4 w-fit">
            <h3 className={`${inputTitleColor} text-lg w-fit`}>Day</h3>
            <input
              className={`border ${borderColor} text-3xl w-1/2`}
              name="day"
              placeholder="DD"
              type="number"
              max={31}
              onChange={(e) => setDay(e.target.valueAsNumber)}
            ></input>
          </div>
          <div className="p-4 w-fit">
            <h3 className={`${inputTitleColor} text-lg w-fit`}>Month</h3>
            <input
              className={`border ${borderColor} text-3xl w-1/2`}
              name="month"
              placeholder="MM"
              type="number"
              max={12}
              onChange={(e) => setMonth(e.target.valueAsNumber)}
            ></input>
          </div>
          <div className="p-4 w-fit">
            <h3 className={`${inputTitleColor} text-lg w-fit`}>Year</h3>
            <input
              className={`border ${borderColor} text-3xl w-1/2`}
              name="year"
              placeholder="YYYY"
              type="number"
              max={2023}
              onChange={(e) => setYear(e.target.valueAsNumber)}
            ></input>
          </div>
          <button
            className={`p-6 border-2 absolute rounded-full text-white right-0 top-3/4 ${buttonBG}`}
            onClick={UserBirthday}
          >
            <Image
              src="icon-arrow.svg"
              alt="Button Arrow"
              height={50}
              width={50}
            />
          </button>
        </form>
        <div className="p-8">
          <div className="flex text-7xl">
            <h4 className={`${calculatorColor}`}>{displayyear}</h4>
            <h2 className="text-black font-bold">years</h2>
          </div>
          <div className="flex text-7xl">
            <h4 className={`${calculatorColor}`}>{displaymonth}</h4>
            <h2 className="text-black font-bold">months</h2>
          </div>
          <div className="flex text-7xl">
            <h4 className={`${calculatorColor}`}>{displayday}</h4>
            <h2 className="text-black font-bold">days</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
