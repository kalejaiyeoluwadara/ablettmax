import { Pet } from "@/public/images";
import ProductCard from "../shared/ProductCard";
import { useState } from "react";

function OurProducts() {
  const [active, setActive] = useState(0);
  const products = [
    {
      title: "PET",
      description:
        "We’re pushing boundaries in recycling, community renewal, and sustainable development.",
      image: Pet,
      capacity: "1T Production Capacity",
      packaging: "Flakes",
    },
    {
      title: "PET",
      description:
        "We’re pushing boundaries in recycling, community renewal, and sustainable development.",
      image: Pet,
      capacity: "1T Production Capacity",
    },
  ];
  return (
    <main className="px-[60px] mt-32">
      <section>
        <p className="text-[#0074D9] text-xl font-medium mb-5 ">
          Making usable products for everyday life
        </p>
        <h1 className="text-black">Our products</h1>
      </section>
      <section className="mt-[90px]">
        {products.map((product, index) => (
          <ProductCard
            key={product.title}
            active={active === index ? 1 : 0}
            {...product}
          />
        ))}
      </section>
    </main>
  );
}

export default OurProducts;
