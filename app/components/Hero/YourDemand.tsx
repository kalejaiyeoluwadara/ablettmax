import React from "react";
import { Icons } from "../shared/icons";
import CountCard from "../shared/CountCard";

function YourDemand() {
  return (
    <main className="bg-[#0B7C3A] py-[96px] px-[60px] ">
      <section>
        <h1 className="text-white mb-6">
          Your demand, <br /> we can supply
        </h1>
        <p className="w-[428px] text-xl text-white">
          We’re passionate about solving problems. We take on challenges others
          consider impossible.
        </p>
      </section>
      <section className="flex mt-12 gap-[60px] justify-end">
        <CountCard
          count={5}
          title="Industries Served"
          icon={<Icons.WorldIcon />}
        />
        <CountCard
          count={20}
          title="Clients and Partners"
          icon={<Icons.CopyIcon />}
        />
        <CountCard
          count={8}
          title="Years of Operation"
          icon={<Icons.RecordIcon />}
        />
      </section>
    </main>
  );
}

export default YourDemand;
