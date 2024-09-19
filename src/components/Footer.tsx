import Logo from "../assets/WhatstrekLogo.png";
// import p1 from '../assets/payment/Payment Method-1.svg'
// import p2 from '../assets/payment/Payment Method-2.svg'
// import p3 from '../assets/payment/Payment Method-3.svg'
// import p4 from '../assets/payment/Payment Method-4.svg'
// import p5 from '../assets/payment/Payment Method.svg'
import s1 from '../assets/social/SVG-1.png'
// import s2 from '../assets/social/SVG.png'
import s3 from '../assets/social/ri_linkedin-fill.png'




export default function Footer(props:any) {
  return (
    <div className="bg-[#008069] py-[1rem] flex flex-col h-fit justify-between items-center  p-5 ">
      <div className="  flex flex-wrap justify-between w-[100%] items-start">
        {/* Left Section */}
        <div className="w-full flex flex-col  cmd:items-start cmd:w-1/4 mb-6">
          <div className="flex justify-center items-center space-x-2">
            {/* Logo */}
            <div className="w-[90%]">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="mt-4">
            <button  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share", "_blank")} className="bg-green-200 text-green-600 py-2  px-5 m-1 ml-4 rounded-full">
              Download <span className="ml-2">&#x2193;</span>
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full text-white cmd:w-1/4 mb-6">
          <h3 className="text-lg font-semibold ">USE WHATSTREK</h3>
          <ul className="mt-4 text-sm space-y-2 ">
            <li className="hover:underline hover:cursor-pointer"  onClick={() => props.scrollToSection(props.featuresRef)}>
                Features
            </li>
            <li className="hover:underline hover:cursor-pointer"  onClick={() => props.scrollToSection(props.pricingRef)}>
              Pricing
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share" target="_blank" className=" hover:underline">
                Download
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full text-white cmd:w-1/4 mb-6">
          <h3 className="text-lg font-semibold">NEED HELP?</h3>
          <ul className="mt-4 text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-5">MAIL US :</h3>
          <ul className="mt-4 text-sm space-y-2">
            <li>
              <a href="mailto:support@whatstrek.com" className="hover:underline">
                support@whatstrek.com
              </a>
            </li>
          </ul>
        </div>

        {/* Payment Section */}
        {/* <div className="w-full flex flex-col items-center cmd:w-1/4">
          <h3 className="text-lg font-semibold text-white">SECURE PAYMENTS</h3>
          <div className="flex mt-4 space-x-4">
            <img src={p1} alt="Paypal" className="h-8" />
            <img src={p2} alt="Visa" className="h-8" />
            <img src={p3} alt="Paytm" className="h-8" />
            <img src={p4} alt="MasterCard" className="h-8" />
            <img src={p5} alt="GPay" className="h-8" />
          </div>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="border-t w-[100%]  border-green-500 mt-8 pt-4 px-6 flex justify-end items-center">
        {/* Language selector */}
        {/* <div className="relative ">
          
        </div> */}

        {/* Social Icons */}
        <div className="flex md:justify-center justify-end space-x-4  md:w-[100%]">
          <a target="_blank" href="https://www.dominatorsbusinesstribe.com/" className="bg-green-200 p-2 rounded-full text-xs">www.dominatorsbusinesstribe.com/</a>
          <a target="_blank" href="https://www.youtube.com/@divyanshsengar_" className="bg-green-200 md:w-10 md:h-8 md:p-0 md:pl-1  p-3 rounded-full">
            <img src={s1} alt="Instagram" className="h-7" /><span className="text-[#008069]">aaa</span>
          </a>
          {/* <a target="_blank" href="https://www.youtube.com/@divyanshsengar_" className="bg-green-200 p-2 rounded-full">
            <img src={s2} alt="YouTube" className="h-4" />
          </a> */}
          <a target="_blank" href="https://www.linkedin.com/company/dominators-business-tribe/" className="bg-green-200 md:w-10 md:h-8 md:p-0 md:pl-1  p-3 rounded-full">
            <img src={s3} alt="LinkedIn" className="h-7" /> <span className="text-[#008069]">aaa</span>
          </a>
        </div>
      </div>
    </div>
  );
}
