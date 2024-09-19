import CustomButton from "./custom/CustomButton";
import l1 from "../assets/l1.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Sidebar2 from "./Sidebar2"
export default function Navbar({ scrollToSection, featuresRef, pricingRef }: any) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between  p-2 cmd:px-10">
        {/* <h1 className='text-3xl text-black font-bold h-16'>LOGO</h1> */}
        <a className="mt-5" href="/">

        <img className="color-black" src={l1} alt="logo" />
        </a>

        <div className="hidden cmd:flex justify- gap-4 py-8 p-4 text-white">
          <CustomButton onClick={() => scrollToSection(featuresRef)} to="/" text="Features" />
          <CustomButton onClick={() => scrollToSection(pricingRef)} to="/" text="Pricing" />
          <CustomButton to="/" text="Contact Us" />
          <CustomButton to="/privacy-policy" text="Privacy Policy" />
          <CustomButton
            to=""
            text="Download"
            active={true}
            href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
          ></CustomButton>
        </div>
        <div className="cmd:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <Sidebar2 isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
}
