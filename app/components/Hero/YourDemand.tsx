"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icons } from "../shared/icons";
import CountCard from "../shared/CountCard";

function YourDemand() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <main ref={sectionRef} className="bg-[#0B7C3A] py-[96px] px-[60px] ">
      <section>
        <h1 className="text-white tracking_2 mb-6">
          Your demand, <br /> we can supply
        </h1>
        <p className="w-[428px] text-xl text-white">
          We're passionate about solving problems. <br /> We take on challenges
          others consider impossible.
        </p>
      </section>
      <section className="flex mt-12 gap-[60px] justify-end">
        <CountCard
          count={5}
          title="Industries Served"
          icon={<Icons.WorldIcon />}
          shouldAnimate={isVisible}
        />
        <CountCard
          count={20}
          title="Clients and Partners"
          icon={<Icons.CopyIcon />}
          shouldAnimate={isVisible}
        />
        <CountCard
          count={8}
          title="Years of Operation"
          icon={<Icons.RecordIcon />}
          shouldAnimate={isVisible}
        />
      </section>
    </main>
  );
}

export default YourDemand;
