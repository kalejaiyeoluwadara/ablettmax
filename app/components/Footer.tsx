import Image from "next/image";
import React from "react";
import { Logo, NavLogo, Logo2 } from "@/public/images";
import { Icons } from "./shared/icons";
import ListCard from "./shared/ListCard";

function Footer() {
  const socials = [
    {
      icon: <Icons.InstagramIcon />,
      link: "https://www.instagram.com/your_instagram_profile",
    },
    {
      icon: <Icons.FacebookIcon />,
      link: "https://www.facebook.com/your_facebook_profile",
    },
    {
      icon: <Icons.YoutubeIcon />,
      link: "https://www.youtube.com/your_youtube_profile",
    },
    {
      icon: <Icons.LinkedinIcon />,
      link: "https://www.linkedin.com/in/your_linkedin_profile",
    },
  ];
  return (
    <main className="min-h-[400px] overflow-hidden relative flex justify-between items-center bg-black w-full px-[60px] ">
      <section>
        <Image src={Logo} alt="logo" />
        {/* socials */}
        <div className="flex flex-col mt-[60px] gap-3">
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <div
                key={index}
                className=" rounded-full h-9 w-9 bg-[#202020] flex items-center justify-center "
              >
                {social.icon}
              </div>
            ))}
          </div>
          <p className="text-[#757575] text-base font-medium">
            © Ablettmax Investment Limited
          </p>
        </div>
      </section>
      <section className="flex gap-12">
        <ListCard title="Products" items={["PET", "PP", "HDPE", "PE"]} />
        <ListCard title="Company" items={["Mission", "Values", "Team"]} />
        <ListCard title="Resources" items={["Blog", "Stories", "Contact"]} />

        <ListCard title="Legal" items={["Compliance", "Certification"]} />
      </section>
      <div className="absolute -bottom-3 left-0 w-full flex items-center justify-center">
        <Image src={Logo2} alt="logo" />
      </div>
    </main>
  );
}

export default Footer;
