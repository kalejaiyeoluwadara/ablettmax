import Image from "next/image";
import React from "react";
import { Icons } from "./icons";
import { Video } from "@/public/images";

interface AboutCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  mission: string;
  description: string;
}
function AboutCard({
  title,
  count,
  icon,
  mission,
  description,
}: AboutCardProps) {
  return (
    <section>
      <div className="h-[460px] group rounded-[20px] overflow-hidden w-auto relative ">
        <Image
          src={Video}
          className="h-full w-full object-cover"
          alt="more about us"
        />
        <div className="h-[200px]  transition-all duration-300 bg-[#0074D9] flex flex-col justify-end px-6 pb-9 absolute bottom-[-200px] group-hover:bottom-0 left-0 w-full ">
          <div className="flex flex-col gap-3 ">
            <div>{icon}</div>
            <div className="flex justify-between items-end">
              <p className="text-white text-4xl font-semibold">{title}</p>
              <p className="text-4xl text-white font-semibold">{count}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-3xl font-semibold text-white">{mission}</p>
        <p className="text-white mt-3">{description}</p>
      </div>
    </section>
  );
}

export default AboutCard;
