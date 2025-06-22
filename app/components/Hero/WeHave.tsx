import React from "react";
import { Icons } from "../shared/icons";

function WeHave() {
  return (
    <main className="bg-white md:min-h-[130vh] px-[60px]  py-[90px] ">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-black tracking_2">We have what you need</h1>
          <p className="mt-6 text-xl font-medium tracking-[-1px] text-black">
            We’re passionate about solving problems
          </p>
        </div>
        <button className="bg-[#0074D9] text-white px-6 py-2 rounded-md">
          Contact us
        </button>
      </div>
      {/* Card stack */}
      <section className="relative mt-[60px] mb-10">
        <div className="w-full absolute z-20 top-0 left-0 bg-[#0074D9] h-[401px] rounded-2xl flex flex-col justify-between p-[60px] ">
          <p className="text-white w-1/2 text-xl  py-4">
            We collaborate with Planet Savers Global Limited to provide
            eco-friendly recycled plastics for various environmental projects,
            supporting their mission to reduce waste and promote responsible
            recycling practices.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-white font-semibold">
              Planet Savers Global Limited <br /> Packaging Industry
            </p>
            <p>
              <Icons.ArrowLeftIcon />
            </p>
          </div>
        </div>
        <div className="w-[97%] z-10 absolute top-[10px] left-4 bg-black h-[401px] rounded-2xl flex flex-col justify-between p-[60px] ">
          <p className="text-white w-1/2 text-xl  py-4">
            We collaborate with Planet Savers Global Limited to provide
            eco-friendly recycled plastics for various environmental projects,
            supporting their mission to reduce waste and promote responsible
            recycling practices.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-white font-semibold">
              Planet Savers Global Limited <br /> Packaging Industry
            </p>
            <p>
              <Icons.ArrowLeftIcon />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WeHave;
