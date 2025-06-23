import { Icons } from "./icons";
import { useState, useEffect } from "react";

interface CountCardProps {
  count: number;
  title: string;
  icon: React.ReactNode;
  shouldAnimate: boolean;
}

function CountCard({ count, title, icon, shouldAnimate }: CountCardProps) {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = count / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newCount = Math.min(Math.floor(increment * currentStep), count);
        setDisplayCount(newCount);

        if (currentStep >= steps) {
          setDisplayCount(count);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    } else {
      setDisplayCount(0);
    }
  }, [count, shouldAnimate]);

  return (
    <div className="flex items-end flex-col gap-3 ">
      <p className="text-6xl text-white font-semibold">{displayCount}+ </p>
      <p className="text-xl flex gap-[24px] items-center text-white">
        {title} {icon}
      </p>
    </div>
  );
}

export default CountCard;
