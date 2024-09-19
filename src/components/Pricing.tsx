import { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

import p1h from '../assets/p1h.png'
import p2h from '../assets/p2h.png'
import p3h from '../assets/p3h.png'

export default function Pricing() {
  const [PricingCards, setPricingCards] = useState({
    p1: (<img src={p1} alt="logo" />),
    p2: (<img src={p2} alt="logo" />),
    p3: (<img src={p3} alt="logo" />)
  });
  return (
    <div className=" flex flex-col items-center my-10 md:my-20">
      <div className="md:w-[60%] w-full">
        <div className="text-2xl md:text-5xl text-black my-5">Pricing</div>
        <div className="text-sm md:text-2xl text-black p-5 ">
          Unleash the power of hassle-free messaging and make your chat life
          more fun, efficient, and totally effortless. We’re here{" "}
        </div>
      </div>

      <div className="flex justify-center items-center mt-5 md:mt-32 md:mx-20 w-[70%]">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start w-[100%]">
          <a target="_blank" onMouseEnter={() => {
            setPricingCards(prev=>({...prev, p1:(<img className="h-auto" src={p1h} alt="logo" />)}))
          }} onMouseLeave={() => {
            setPricingCards(prev=>({...prev, p1:(<img className="h-auto" src={p1} alt="logo" />)}))
          }} className="w-[80%] md:w-1/3 "  href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share">
          {PricingCards.p1}
          </a>

          <a target="_blank" onMouseEnter={() => {
            setPricingCards(prev=>({...prev, p2:(<img className="h-auto" src={p2h} alt="logo" />)}))
          }} onMouseLeave={() => {
            setPricingCards(prev=>({...prev, p2:(<img className="h-auto" src={p2} alt="logo" />)}))
          }} className="w-[80%] md:w-1/3 " href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share">
          {PricingCards.p2}

          </a><a target="_blank" onMouseEnter={() => {
            setPricingCards(prev=>({...prev, p3:(<img className="h-auto" src={p3h} alt="logo" />)}))
          }} onMouseLeave={() => {
            setPricingCards(prev=>({...prev, p3:(<img className="h-auto" src={p3} alt="logo" />)}))
          }} className="w-[80%] md:w-1/3 " href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share">
          {PricingCards.p3}
          </a>
          
        </div>
      </div>
    </div>
  );
}
