import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Pricing from "../components/Pricing";
import Tutorial from "../components/Tutorial";

function Home() {
  return (
    <div className="flex flex-col items-center ">
      <HeroBanner/>
      <Tutorial/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home;
