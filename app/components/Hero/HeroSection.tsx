import Image from "next/image";
import React from "react";
import { Video, PlayIcon, Client1, Client2, Client3 } from "@/public/images";

function HeroSection() {
  return (
    <main className="min-h-screen  pt-40 w-full bg-white">
      {/* Hero Section */}
      <section className="flex md:px-[120px] justify-between w-full items-end">
        <h1 className=" text-black ">
          Advancing the{" "}
          <span className="text-primary">
            green <br /> economy
          </span>{" "}
          in Africa
        </h1>
        <p className="text-[22px] leading-[130%] w-[433px]">
          We transform plastic waste into valuable raw materials for several
          industries like packaging, construction, and textile.
        </p>
      </section>
      {/* Video Section */}
      <div className="px-[120px]">
        <section className="w-full mt-[60px] h-[500px] overflow-hidden rounded-t-2xl relative">
          <Image
            src={Video}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
          <div className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={PlayIcon} alt="play" />
          </div>
        </section>
      </div>
      {/* Trusted Clients */}
      <section className="w-full bg-[#FAFAFA] py-12 mt-12 flex  justify-between px-[60px] items-center">
        <h2 className="text-3xl tracking-[-2px] text-black font-semibold">
          Trusted by <br /> these clients
        </h2>
        <div className="flex gap-4">
          <Image src={Client1} alt="client" />
          <Image src={Client2} alt="client" />
          <Image src={Client3} alt="client" />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
