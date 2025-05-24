import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/Features";
import Features_2 from "@/components/Features_2";
import PricingSection from "@/components/Features_3";
import Features_4 from "@/components/Features_4";

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
    </>
  )
}
