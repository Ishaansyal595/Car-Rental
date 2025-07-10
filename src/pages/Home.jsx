import React from "react";
import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeMainSection from "../components/home/HomeMainSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HomeCarPricing from "../components/home/HomeCarPricing";
import Testimonials from "../components/home/Testimonials";
import GetStarted from "../components/GetStarted";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeMainSection />
      <WhyChooseUsSection />
      <HomeCarPricing />
      <Testimonials />
      <GetStarted />
      <Contact />
    </div>
  );
};

export default Home;
