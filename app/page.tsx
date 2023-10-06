"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  function UserBirthday(e: { preventDefault: () => void }) {
    e.preventDefault();

    const n = Date.UTC(year, month - 1, day + 1);
    const m = new Date().getTime();

    const test = new Date(n);
    const test1 = new Date(m);

    var dayValue = test1.getDate() - test.getDate();
    var monthValue = test1.getMonth() - test.getMonth();
    var yearValue = test1.getFullYear() - test.getFullYear();

    if (dayValue < 0) {
      monthValue = monthValue - 1;
      dayValue = 30 + dayValue;
    }
    if (monthValue < 0) {
      yearValue = yearValue - 1;
      monthValue = 12 + monthValue;
    }

    var x = dayValue.toString();
    var y = monthValue.toString();
    var z = yearValue.toString();
    setDisplayDay(x);
    setDisplayMonth(y);
    setDisplayYear(z);
  }

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [displayday, setDisplayDay] = useState<any | null>("--");
  const [displaymonth, setDisplayMonth] = useState<any | null>("--");
  const [displayyear, setDisplayYear] = useState<any | null>("--");

  const inputTitleColor = "text-offgrey";
  const userInputColor = "text-offblack";
  const calculatorColor = "text-purple";
  const borderColor = "border-offwhite";
  const buttonBG = "bg-purple";

  return (
    <main className="p-4 w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div
        className={`border border-transparent rounded-xl rounded-br-mega flex flex-col bg-white ${userInputColor}`}
      >
        <form className="flex border-b-2 py-8 px-2 md:p-8 relative mb-8 md:mb-0">
          <div className="p-4 w-fit">
            <h3 className={`${inputTitleColor} text-lg w-fit`}>Day</h3>
            <input
              className={`border ${borderColor} text-3xl w-full md:w-1/2`}
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
              className={`border ${borderColor} text-3xl w-full md:w-1/2`}
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
              className={`border ${borderColor} text-3xl w-full md:w-1/2`}
              name="year"
              placeholder="YYYY"
              type="number"
              max={2023}
              onChange={(e) => setYear(e.target.valueAsNumber)}
            ></input>
          </div>
          <button
            className={`p-6 border-2 absolute rounded-full text-white right-1/3 md:right-1/2 lg:right-0 top-3/4 ${buttonBG}`}
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
          <div className="flex text-5xl md:text-7xl">
            <h4 className={`${calculatorColor}`}>{displayyear}</h4>
            <h2 className="text-black font-bold">years</h2>
          </div>
          <div className="flex text-5xl md:text-7xl">
            <h4 className={`${calculatorColor}`}>{displaymonth}</h4>
            <h2 className="text-black font-bold">months</h2>
          </div>
          <div className="flex text-5xl md:text-7xl">
            <h4 className={`${calculatorColor}`}>{displayday}</h4>
            <h2 className="text-black font-bold">days</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
