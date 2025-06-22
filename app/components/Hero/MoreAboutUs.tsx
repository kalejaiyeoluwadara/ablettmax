import { Video } from "@/public/images";
import Image from "next/image";
import React from "react";
import { Icons } from "../shared/icons";
import AboutCard from "../shared/AboutCard";

function MoreAboutUs() {
  const aboutCards = [
    {
      title: "Sustainability First",
      count: 1,
      icon: <Icons.TruckIcon />,
      mission: "Our mission",
      description:
        "To transform plastic waste into opportunity—creating cleaner environments.",
    },
    {
      title: "Sustainability First",
      count: 1,
      icon: <Icons.TruckIcon />,
      mission: "Our mission",
      description:
        "To transform plastic waste into opportunity—creating cleaner environments.",
    },
    {
      title: "Sustainability First",
      count: 1,
      icon: <Icons.TruckIcon />,
      mission: "Our mission",
      description:
        "To transform plastic waste into opportunity—creating cleaner environments.",
    },
  ];
  return (
    <main className="bg-black px-[60px] py-[90px] ">
      <h1 className="text-white">
        More about <br /> Ablettmax
      </h1>
      <p className="mt-6 text-white">We’re passionate about solving problems</p>
      <section className="mt-[90px] grid grid-cols-3 gap-9 ">
        {aboutCards.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </section>
    </main>
  );
}

export default MoreAboutUs;
