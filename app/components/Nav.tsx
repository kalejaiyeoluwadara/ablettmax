import { NavLogo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/app/utils";
function Nav() {
  return (
    <nav className="flex fixed border-b border-b-[#F0F0F0] top-0 z-50 left-0 w-full justify-between items-center md:px-[60px] px-[20px] py-[20px] bg-[#FAFAFA] ">
      <section className="flex items-center gap-12">
        <div>
          <Image src={NavLogo} alt="logo" width={100} height={100} />
        </div>
        <div>
          <ul className="flex gap-4">
            {navLinks.map((link, id) => {
              return (
                <Link
                  key={id}
                  className="text-[#121212] font-medium hover:text-opacity-70 transition-all duration-300 "
                  href={link.link}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
      <section>
        <button className="bg-primary font-semibold text-white px-6 py-2 rounded-md">
          Book a call
        </button>
      </section>
    </nav>
  );
}

export default Nav;
