import HeroSection from "./components/Hero/HeroSection";
import Marquee from "./components/Hero/Marquee";
import MoreAboutUs from "./components/Hero/MoreAboutUs";
import OurProducts from "./components/Hero/OurProducts";
import WeHave from "./components/Hero/WeHave";
import YourDemand from "./components/Hero/YourDemand";
import SubScribeAndBlogSection from "./components/Hero/SubScribeAndBlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurProducts />
      <YourDemand />
      <MoreAboutUs />
      <WeHave />
      <Marquee />
      <SubScribeAndBlogSection />
    </>
  );
}
