import CustomButton from "./custom/CustomButton";
import l1 from "../assets/l1.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Sidebar2 from "./Sidebar2"
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between  p-2 md:px-10">
        {/* <h1 className='text-3xl text-black font-bold h-16'>LOGO</h1> */}
        <img className="color-black" src={l1} alt="logo" />

        <div className="hidden md:flex justify- gap-4 py-8 p-4 text-white">
          <CustomButton to="/" text="Features" />
          <CustomButton to="/" text="Pricing" />
          <CustomButton to="/" text="Contact Us" />
          <CustomButton to="/privacy-policy" text="Privacy Policy" />
          <CustomButton
            to=""
            text="Download"
            active={true}
            href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
          ></CustomButton>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <Sidebar2 isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
}
