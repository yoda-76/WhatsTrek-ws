import { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p1h from "../assets/p1h.png";
import p2h from "../assets/p2h.png";
import p3h from "../assets/p3h.png";

import p1m from "../assets/p1m.png";
import p2m from "../assets/p2m.png";
import p3m from "../assets/p3m.png";
import p1mh from "../assets/p1mh.png";
import p2mh from "../assets/p2mh.png";
import p3mh from "../assets/p3mh.png";

export default function Pricing() {
  const [PricingCards, setPricingCards] = useState({
    p1: <><img className=" md:hidden h-auto" src={p1} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p1m} alt="logo" /></>,
    p2: <><img className="h-auto md:hidden" src={p2} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p2m} alt="logo" /></>,
    p3: <><img className="h-auto md:hidden" src={p3} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p3m} alt="logo" /></>,
  });
  return (
    <div className=" flex flex-col items-center my-10 cmd:my-20">
      <div className="cmd:w-[60%] w-full">
        <div className="text-4xl cmd:text-5xl text-black my-5">Pricing</div>
        <div className="text-lg md:p-2 cmd:text-2xl text-black p-3   ">
          Flexible pricing that fits your needs—unlock effortless WhatsApp
          automation!{" "}
        </div>
      </div>

      <div className="flex justify-center items-center mt-3 cmd:mt-32 cmd:mx-20 w-[70%] md:w-[100%]">
        <div className="flex flex-col cmd:flex-row justify-center items-center cmd:justify-start cmd:items-start w-[100%] md:p-0">
          <a
            target="_blank"
            onMouseEnter={() => {
              setPricingCards((prev) => ({
                ...prev,
                p1: <><img className=" md:hidden h-auto" src={p1h} alt="logo" /><img className="cmd:hidden h-auto" src={p1mh} alt="logo" /></>,
              }));
            }}
            onMouseLeave={() => {
              setPricingCards((prev) => ({
                ...prev,
                p1: <><img className=" md:hidden h-auto" src={p1} alt="logo" /><img className="h-auto cmd:hidden shadow-lg shadow-blue-950" src={p1m} alt="logo" /></>,
              }));
            }}
            className="w-[80%] cmd:w-1/3 "
            href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
          >
            {PricingCards.p1}
          </a>

          <a
            target="_blank"
            onMouseEnter={() => {
              setPricingCards((prev) => ({
                ...prev,
                p2: <><img className="h-auto md:hidden" src={p2h} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p2mh} alt="logo" /></>,
              }));
            }}
            onMouseLeave={() => {
              setPricingCards((prev) => ({
                ...prev,
                p2: <><img className="h-auto md:hidden" src={p2} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p2m} alt="logo" /></>,
              }));
            }}
            className="w-[80%] cmd:w-1/3 "
            href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
          >
            {PricingCards.p2}
          </a>
          <a
            target="_blank"
            onMouseEnter={() => {
              setPricingCards((prev) => ({
                ...prev,
                p3: <><img className="md:hidden h-auto" src={p3h} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p3mh} alt="logo" /></>,
              }));
            }}
            onMouseLeave={() => {
              setPricingCards((prev) => ({
                ...prev,
                p3: <><img className="h-auto md:hidden" src={p3} alt="logo" /><img className="h-auto mt-5 cmd:hidden shadow-sm shadow-gray-600 rounded-xl shadow-neutral-700" src={p3m} alt="logo" /></>,
              }));
            }}
            className="w-[80%] cmd:w-1/3 "
            href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
          >
            {PricingCards.p3}
          </a>
        </div>
      </div>
    </div>
  );
}
