import { Pet, Video, Tree } from "@/public/images";
import { Icons } from "../components/shared/icons";

export const navLinks = [
  {
    name: "Company",
    link: "/",
  },
  {
    name: "Products",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
export const marquee = [
  {
    icon: <Icons.ShirtIcon />,
    name: "Textile",
  },
  {
    icon: <Icons.CarIcon />,
    name: "Automomobile",
  },
  {
    icon: <Icons.PackageIcon />,
    name: "Packaging",
  },
];
export const socials = [
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

export const products = [
  {
    title: "PET",
    description:
      "We’re pushing boundaries in recycling, community renewal, and sustainable development.",
    image: Pet,
    capacity: "1T Production Capacity",
    packaging: "Flakes",
  },
  {
    title: "PP",
    description:
      "We’re pushing boundaries in recycling, community renewal, and sustainable development.",
    image: Pet,
    capacity: "1T Production Capacity",
  },
  {
    title: "HDPE",
    description:
      "We’re pushing boundaries in recycling, community renewal, and sustainable development.",
    image: Pet,
    capacity: "100T Production Capacity",
  },
  {
    title: "PE",
    description:
      "We’re pushing boundaries in recycling, community renewal, and sustainable development.",
    image: Pet,
    capacity: "1T Production Capacity",
  },
];
export const aboutCards = [
  {
    title: "Sustainability First",
    count: 1,
    icon: <Icons.TruckIcon />,
    mission: "Our mission",
    image: Video,
    description:
      "To transform plastic waste into opportunity—creating cleaner environments.",
  },
  {
    title: "Sustainability First",
    count: 2,
    icon: <Icons.PathIcon />,
    mission: "Our Values",
    image: Tree,
    description:
      "Our commitment to sustainability and environmental responsibility is at the heart of our mission.",
  },
  {
    title: "Sustainability First",
    count: 3,
    icon: <Icons.TruckIcon />,
    mission: "Our team",
    image: Video,
    description:
      "People pushing boundaries in recycling, community renewal, and sustainable development.",
  },
];
