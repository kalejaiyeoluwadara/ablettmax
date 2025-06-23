"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Pet, shirt, water } from "@/public/images";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./icons";

interface ProductCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  capacity: string;
  packaging?: string;
  active: boolean;
  setActive: Dispatch<SetStateAction<number>>;
  index: number;
}

function ProductCard({
  title,
  description,
  image,
  capacity,
  packaging,
  active,
  setActive,
  index,
}: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setActive(index);
  };
  return (
    <motion.div
      onClick={handleClick}
      className="bg-[#F0F0F0] flex-shrink-0 cursor-pointer rounded-[22px] w-[300px] h-fit py-12 px-6  "
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
    >
      <div className="flex mb-4 w-full justify-between items-center">
        <p className="text-black text-2xl font-semibold">{title}</p>
        <AnimatePresence>
          {packaging && (
            <motion.p
              className="text-[#A0A0A0] text-2xl font-semibold"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {packaging}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-back mb-9 text-lg">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-4">
        <li className="flex gap-[6px]">
          <div
            className={`w-[30px] flex items-center justify-center ${
              !active ? "text-black" : "text-[#0F9F4B]"
            }`}
          >
            <Icons.Bottle />
          </div>
          {capacity}
        </li>
        <li className="flex gap-[6px]">
          <div
            className={`w-[30px] flex items-center justify-center ${
              !active ? "text-black" : "text-[#0074D9]"
            }`}
          >
            <Icons.Shirt />
          </div>
          Textiles & Packaging
        </li>
      </div>
      <div className="mt-9 flex gap-3 items-center">
        <p className="text-black text-base font-semibold">View product image</p>
        <Image className="h-6 w-6 rounded-md" src={image} alt="Pet" />
      </div>
    </motion.div>
  );
}

export default ProductCard;
