import React from "react";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/Features";
import Features_2 from "@/components/Features_2";
import PricingSection from "@/components/Features_3";
import Features_4 from "@/components/Features_4";
import Features_5 from "@/components/Features_5";
import Features_6 from "@/components/Features_6";
import Features_7 from "@/components/Features_7";
import Features_8 from "@/components/Features_8";
import Features_9 from "@/components/Features_9";
const page = () => {
  return (
    <>
      <Home />
    </>
  )
};
export default page;



const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Features_2 />
      <PricingSection />
      <Features_4 />
      <Features_5 />
      <Features_6 />
      <Features_7 />
      <Features_8 />
      <Features_9 />
    </>
  )
}
