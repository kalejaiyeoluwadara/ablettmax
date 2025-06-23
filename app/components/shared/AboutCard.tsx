import Image, { StaticImageData } from "next/image";
import React from "react";
import { Icons } from "./icons";
import { Video } from "@/public/images";

interface AboutCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  mission: string;
  description: string;
  image: StaticImageData;
}
function AboutCard({
  title,
  count,
  icon,
  mission,
  description,
  image,
}: AboutCardProps) {
  return (
    <section>
      <div className="h-[460px] group rounded-[20px] overflow-hidden w-auto relative ">
        <Image
          src={image}
          className="h-full w-full object-cover"
          alt="more about us"
        />
        <div
          className={`h-[300px]  transition-all duration-300  flex flex-col justify-end px-6 pb-9 absolute bottom-[-300px] group-hover:bottom-0 left-0 w-full ${
            image === Video ? "bg-[#0074D9]" : "bg-primary"
          }`}
        >
          <div className="flex flex-col gap-3 ">
            <div>{icon}</div>
            <div className="flex justify-between items-end">
              <p className="text-white text-4xl font-semibold">{title}</p>
              <p
                className={`text-4xl text-white font-semibold ${
                  image === Video ? "text-opacity-100" : "text-opacity-50"
                }`}
              >
                0{count}
              </p>
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
