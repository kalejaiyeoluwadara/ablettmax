import React from "react";
import { Icons } from "../shared/icons";
import Image from "next/image";
import { shirt } from "@/public/images";
import { marquee } from "@/app/utils";

function Marquee() {
  return (
    <main className="py-[120px] overflow-hidden">
      <div className="relative flex animate-marquee">
        {/* First set of items */}
        <div className="flex gap-12 ">
          {marquee.map((item, index) => (
            <div
              key={`first-${index}`}
              className="bg-[#F4EDEA] gap-3 flex items-center text-[#B98E7B] text-4xl font-semibold w-auto px-6 py-[18px] rounded-xl whitespace-nowrap"
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless looping */}
        <div className="flex gap-3 ml-12 ">
          {marquee.map((item, index) => (
            <div
              key={`second-${index}`}
              className="bg-[#F4EDEA] gap-3 flex items-center text-[#B98E7B] text-4xl font-semibold w-auto px-6 py-[18px] rounded-xl whitespace-nowrap"
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Marquee;
