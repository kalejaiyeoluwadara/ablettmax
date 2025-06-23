import { Video } from "@/public/images";
import Image from "next/image";
import React from "react";
import { Icons } from "../shared/icons";
import AboutCard from "../shared/AboutCard";
import { aboutCards } from "@/app/utils";

function MoreAboutUs() {
  return (
    <main className="bg-black px-[60px] py-[90px] ">
      <h1 className="text-white tracking_2">
        More about <br /> Ablettmax
      </h1>
      <p className="mt-6 font-medium text-white">
        We’re passionate about solving problems
      </p>
      <section className="mt-[90px] grid grid-cols-3 gap-9 ">
        {aboutCards.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </section>
    </main>
  );
}

export default MoreAboutUs;
