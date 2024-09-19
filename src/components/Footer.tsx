import Logo from "../assets/WhatstrekLogo.png";
import p1 from '../assets/payment/Payment Method-1.svg'
import p2 from '../assets/payment/Payment Method-2.svg'
import p3 from '../assets/payment/Payment Method-3.svg'
import p4 from '../assets/payment/Payment Method-4.svg'
import p5 from '../assets/payment/Payment Method.svg'
import s1 from '../assets/social/SVG-1.png'
import s2 from '../assets/social/SVG.png'
import s3 from '../assets/social/ri_linkedin-fill.png'




export default function Footer() {
  return (
    <div className="bg-[#008069] py-[5rem] flex flex-col h-fit w-screen">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section */}
        <div className="w-full flex flex-col  md:items-start md:w-1/4 mb-6">
          <div className="flex justify-center items-center space-x-2">
            {/* Logo */}
            <div className="w-[90%]">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-green-200 text-green-600 py-2 px-4 rounded-full">
              Download <span className="ml-2">&#x2193;</span>
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full text-white md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold ">USE WHATSTREK</h3>
          <ul className="mt-4 text-sm space-y-2 ">
            <li className=" ">
              <a href="#" className=" hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Download
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full text-white md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold">NEED HELP?</h3>
          <ul className="mt-4 text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Payment Section */}
        <div className="w-full flex flex-col items-center md:w-1/4">
          <h3 className="text-lg font-semibold text-white">SECURE PAYMENTS</h3>
          <div className="flex mt-4 space-x-4">
            <img src={p1} alt="Paypal" className="h-8" />
            <img src={p2} alt="Visa" className="h-8" />
            <img src={p3} alt="Paytm" className="h-8" />
            <img src={p4} alt="MasterCard" className="h-8" />
            <img src={p5} alt="GPay" className="h-8" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t w-[100%] border-green-500 mt-8 pt-4 px-6 flex justify-between items-center">
        {/* Language selector */}
        <div className="relative ">
          
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="bg-green-200 p-2 rounded-full">
            <img src={s1} alt="Instagram" className="h-4" />
          </a>
          <a href="#" className="bg-green-200 p-2 rounded-full">
            <img src={s2} alt="YouTube" className="h-4" />
          </a>
          <a href="#" className="bg-green-200 p-2 rounded-full">
            <img src={s3} alt="LinkedIn" className="h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
