"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Pet, shirt, water } from "@/public/images";
import { StaticImageData } from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  capacity: string;
  packaging?: string;
  active: number;
}

function ProductCard({
  title,
  description,
  image,
  capacity,
  packaging,
  active,
}: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#F0F0F0] rounded-[22px] w-[300px] h-fit py-12 px-6  ">
      <div className="flex mb-5 w-full justify-between items-center">
        <p className="text-black text-2xl font-semibold">{title}</p>
        {packaging && (
          <p className="text-[#A0A0A0] text-2xl font-semibold">{packaging}</p>
        )}
      </div>
      {active && (
        <div>
          <p className="text-back text-lg">{description}</p>
        </div>
      )}
      <div className="mt-9 flex flex-col gap-4">
        <li className="flex gap-[6px]">
          <div className="w-[30px] flex items-center justify-center ">
            <Image src={water} alt="water" />
          </div>
          {capacity}
        </li>
        <li className="flex gap-[6px]">
          <div className="w-[30px] flex items-center justify-center ">
            <Image src={shirt} alt="shirt" />
          </div>
          {packaging}
        </li>
      </div>
      <div className="mt-9 flex gap-3 items-center">
        <p className="text-black text-base font-semibold">View product image</p>
        <Image className="h-6 w-6 rounded-md" src={image} alt="Pet" />
      </div>
    </div>
  );
}

export default ProductCard;
