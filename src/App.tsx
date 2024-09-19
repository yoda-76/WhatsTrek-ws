import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import Footer from "./components/Footer";

function App() {
  const featuresRef = useRef<null | HTMLDivElement>(null);
  const pricingRef = useRef<null | HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    console.log("should scroll");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Router>
      <div className="pop">
      <Navbar
          scrollToSection={scrollToSection}
          featuresRef={featuresRef}
          pricingRef={pricingRef}
        />

        <Routes>
          <Route path="/" element={<Home featuresRef={featuresRef} pricingRef={pricingRef} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      <Footer 
       scrollToSection={scrollToSection}
       featuresRef={featuresRef}
       pricingRef={pricingRef}
       />

      </div>
    </Router>
  );
}

export default App;
