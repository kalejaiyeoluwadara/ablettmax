"use client";
import ProductCard from "../shared/ProductCard";
import { useState, useRef, useEffect } from "react";
import { products } from "@/app/utils";
import { Icons } from "../shared/icons";

function OurProducts() {
  const [active, setActive] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollAvailability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollAvailability();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollAvailability);
      return () =>
        scrollContainer.removeEventListener("scroll", checkScrollAvailability);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <main className="px-[60px] mb-[120px] mt-32">
      <section>
        <p className="text-[#0074D9] tracking-[-1px] text-xl font-medium mb-5 ">
          Making usable products for everyday life
        </p>
        <h1 className="text-black">Our products</h1>
      </section>
      <section
        ref={scrollContainerRef}
        className="mt-[90px] flex gap-6 hidden_scrollbar overflow-x-auto"
      >
        {products.map((product, index) => (
          <ProductCard
            index={index}
            key={product.title}
            setActive={setActive}
            active={active === index ? true : false}
            {...product}
          />
        ))}
      </section>
      <section className="flex gap-3 mt-9">
        <div
          onClick={scrollLeft}
          className={`flex h-[50px] w-[50px] rounded-full items-center justify-center cursor-pointer transition-colors ${
            canScrollLeft ? "bg-[#FAFAFA]" : "bg-[#F0F0F0]"
          }`}
        >
          <Icons.ArrowLeft />
        </div>
        <div
          onClick={scrollRight}
          className={`flex h-[50px] w-[50px] rounded-full items-center justify-center cursor-pointer transition-colors ${
            canScrollRight ? "bg-[#F0F0F0]" : "bg-[#F0F0F0]"
          }`}
        >
          <Icons.ArrowRight />
        </div>
      </section>
    </main>
  );
}

export default OurProducts;
