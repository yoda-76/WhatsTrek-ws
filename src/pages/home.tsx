import { useRef } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Pricing from "../components/Pricing";
import Tutorial from "../components/Tutorial";

function Home( {featuresRef, pricingRef}: any) {
  return (
    <div className="flex flex-col items-center ">
      <HeroBanner/>
      <Tutorial/>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
    </div>
  )
}

export default Home;
