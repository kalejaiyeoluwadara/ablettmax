import { Coc } from "@/public/images";
import Image from "next/image";
import React from "react";
import { Icons } from "../shared/icons";

function SubScribeAndBlogSection() {
  return (
    <main className="  grid grid-cols-2">
      <div className="w-auto flex-col justify-center items-center h-[640px] flex  bg-[#0F9F4B]  ">
        <p className="text-center  text-white text-4xl font-semibold ">
          Subscribe to our <br /> newsletter
        </p>
        <p className="text-white text-lg mt-6 text-center">
          Weekly letters in your inbox
        </p>
        <div className="h-[250px] mt-[60px] w-[375px] bg-[#0B7C3A] rounded-xl flex flex-col items-start justify-start">
          <input
            type="text"
            placeholder="Your name *"
            className="w-full h-[60px] px-3 outline-none border-b border-b-[#0F9F4B] placeholder:text-[#F0F0F0] bg-transparent "
          />
          <input
            type="text"
            placeholder="Email address *"
            className="w-full h-[60px] px-3 outline-none border-b border-b-[#0F9F4B] placeholder:text-[#F0F0F0] bg-transparent "
          />
          <div className="flex mt-12 px-[18px] w-full items-center justify-between">
            <button className="rounded-md font-semibold text-gray-300 px-6 py-2 bg-[#0F9F4B]  ">
              Submit
            </button>
            <p className="text-sm font-medium text-white">We won't spam</p>
          </div>
        </div>
      </div>
      <div className="w-auto flex-col justify-center items-center h-[640px] flex  bg-[#0074D9]  ">
        <p className="text-center  text-white text-4xl font-semibold ">
          Read <br /> our blog
        </p>
        <p className="text-white text-lg mt-6 text-center">
          Stories about sustainability, products, and more.
        </p>
        <div className="overflow-hidden rounded-2xl relative w-[375px] h-[250px]  mt-[60px]">
          <Image
            src={Coc}
            alt="Coc"
            className=" absolute z-10 top-0 left-0 w-full h-full object-cover"
          />
          <div className="z-20 relative px-[14px] py-[24px] flex flex-col h-full justify-between items-start ">
            <button className="rounded-full  items-center bg-white text-black flex gap-2 text-sm font-semibold px-4 py-2">
              <Icons.LinkIcon />
              Read article
            </button>
            <p className="font-semibold w-[300px] text-xl text-white">
              This the title of the article, it shouldn’t exceed two lines
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SubScribeAndBlogSection;
