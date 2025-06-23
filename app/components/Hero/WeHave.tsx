"use client";
import React, { useState } from "react";
import { Icons } from "../shared/icons";

function WeHave() {
  const [currentCard, setCurrentCard] = useState(0); // 0 = blue on top, 1 = black on top

  const handleArrowClick = () => {
    setCurrentCard((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <main className="bg-white md:min-h-[130vh] px-[60px]  py-[90px] ">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-black tracking_2">We have what you need</h1>
          <p className="mt-6 text-xl font-medium tracking-[-1px] text-black">
            We're passionate about solving problems
          </p>
        </div>
        <button className="bg-[#0074D9] text-white px-6 py-2 rounded-md">
          Contact us
        </button>
      </div>
      {/* Card stack */}
      <section className="relative mt-[60px] mb-10">
        {/* Blue Card */}
        <div
          className={`absolute top-0 left-0 bg-[#0074D9] h-[401px] rounded-2xl flex flex-col justify-between p-[60px] transition-all duration-600 ease-in-out ${
            currentCard === 0
              ? "z-20 transform translate-y-0 translate-x-0 scale-100 opacity-100 w-full"
              : "z-10 transform translate-y-[30px] translate-x-8 scale-95 opacity-80 w-[97%]"
          }`}
        >
          <p className="text-white w-1/2 text-xl  py-4">
            We collaborate with Planet Savers Global Limited to provide
            eco-friendly recycled plastics for various environmental projects,
            supporting their mission to reduce waste and promote responsible
            recycling practices.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-white font-semibold">
              Planet Savers Global Limited <br /> Packaging Industry
            </p>
            <button
              onClick={handleArrowClick}
              className="hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              <Icons.ArrowLeftIcon />
            </button>
          </div>
        </div>

        {/* Black Card */}
        <div
          className={`absolute top-[10px] left-4 bg-black h-[401px] rounded-2xl flex flex-col justify-between p-[60px] transition-all duration-600 ease-in-out ${
            currentCard === 1
              ? "z-20 transform translate-y-0 translate-x-0 scale-100 opacity-100 w-full"
              : "z-10 transform translate-y-[10px] translate-x-4 scale-95 opacity-80 w-[95%]"
          }`}
        >
          <p className="text-white w-1/2 text-xl  py-4">
            We collaborate with Planet Savers Global Limited to provide
            eco-friendly recycled plastics for various environmental projects,
            supporting their mission to reduce waste and promote responsible
            recycling practices.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-white font-semibold">
              Planet Savers Global Limited <br /> Packaging Industry
            </p>
            <button
              onClick={handleArrowClick}
              className="hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              <Icons.ArrowLeftIcon />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WeHave;
