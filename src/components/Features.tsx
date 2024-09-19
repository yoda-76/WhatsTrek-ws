import ss2 from "../assets/ss2.png";
import ss1 from "../assets/ss1.png";
// import { Button } from "./ui/moving-border";
import CustomButton from "./custom/CustomButton";

export default function Features() {
  return (
    <div className=" flex flex-col  items-center  md:my-20">
      <div className="w-[100%]  text-2xl flex flex-col items-center">
        <div className="md:text-5xl mx-2 md:text-black my-5">
          What do we Provide
        </div>
        <div className="md:text-2xl mx-2 text-sm text-justify text-center  max-w-[60rem] p-5 md:text-black  ">
          Unleash the power of hassle-free messaging and make your chat life
          more fun, efficient, and totally effortless. We’re here{" "}
        </div>
      </div>

      <div className="flex flex-col text-2xl  justify-center items-center md:mt-32 mx-2 px-32 ">
        <div className="flex  gap-6 flex-col justify-start items-start">
          <div className="md:text-5xl md:text-black md:text-left w-full md:w-[70%] md:my-5">
            Setup automated custom replies
          </div>
          <div className="md:text-2xl md:text-left md:text-black w-full text-sm text-justify  md:w-[80%] ">
            Who doesn’t like a few likes on their photos? Unless it’s an endless
            string of “Liked” messages from someone using a different phone.
            Switch to WhatsApp to ensure all likes are well-received in the
            chat.{" "}
            <div className="hidden mt-6 md:flex w-full justify-start">
              <CustomButton
                to=""
                text="Download Now"
                active={true}
                href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
              ></CustomButton>
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-start items-start">
          <img className="w-[50%]" src={ss1} alt="logo" />
          <img className="w-[50%]" src={ss2} alt="logo" />
        </div>
      </div>

      
      <div className="flex md:hidden">
        <CustomButton
          to=""
          text="Download Now"
          active={true}
          href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
        ></CustomButton>
      </div>
      <div className="flex flex-col text-2xl md:flex-row justify-center items-center md:mt-32 mx-2 px-32 ">
        
        <div className="flex mt-5 justify-start items-start ">
          <img className="w-[50%]" src={ss1} alt="logo" />
          <img className="w-[50%]" src={ss2} alt="logo" />
        </div>
        <div className="flex  gap-6 flex-col justify-end items-end ">
          <div className="md:text-5xl md:text-black md:text-right w-full md:w-[70%] md:my-5">
            Save Contacts Automatically
          </div>
          <div className="md:text-2xl md:text-right md:text-black w-full text-sm text-justify md:w-[60%]">
            Who doesn’t like a few likes on their photos? Unless it’s an endless
            string of “Liked” messages from someone using a different phone.
            Switch to WhatsApp to ensure all likes are well-received in the
            chat.{" "}
            <div className="hidden mt-6 md:flex w-full justify-end">
              <CustomButton
                to=""
                text="Download Now"
                active={true}
                href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
              ></CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <CustomButton
          to=""
          text="Download Now"
          active={true}
          href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
        ></CustomButton>
      </div>  

      
     
    </div>
  );
}
