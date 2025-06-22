import HeroSection from "./components/Hero/HeroSection";
import MoreAboutUs from "./components/Hero/MoreAboutUs";
import OurProducts from "./components/Hero/OurProducts";
import YourDemand from "./components/Hero/YourDemand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurProducts />
      <YourDemand />
      <MoreAboutUs />
    </>
  );
}
