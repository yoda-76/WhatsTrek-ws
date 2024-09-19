import ss2 from "../assets/ss2.png";
import ss1 from "../assets/ss1.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";
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
        Automate your WhatsApp with ease: save contacts instantly, set smart auto-replies, use template-based responses, and never miss a message with default messaging!{" "}
        </div>
      </div>

      <div className="flex  text-2xl  justify-center items-center md:mt-32 mx-2 px-32 ">
        <div className="flex  gap-6 flex-col justify-start items-start">
          <div className="md:text-5xl md:text-black md:text-left w-full md:w-[70%] md:my-5">
            Setup automated custom replies
          </div>
          <div className="md:text-2xl md:text-left md:text-black w-full text-sm text-justify  md:w-[80%] ">
          Who wouldn’t love to send a quick, thoughtful reply without lifting a finger? <br/><br/>Unless, of course, it’s a series of generic responses that miss the mark. Set up automated custom replies with Whatstrek to ensure every message feels personal and perfectly timed.{" "}
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
          <img className="w-[50%]" src={ss3} alt="logo" />
          <img className="w-[50%]" src={ss4} alt="logo" />
        </div>
        <div className="flex  gap-6 flex-col justify-end items-end ">
          <div className="md:text-5xl md:text-black md:text-right w-full md:w-[70%] md:my-5">
            Save Contacts Automatically
          </div>
          <div className="md:text-2xl md:text-right md:text-black w-full text-sm text-justify md:w-[60%]">
          Who doesn’t want to stay organized and never lose track of new contacts? <br/><br/>Unless, of course, you’re juggling countless manual entries. Save contacts automatically with Whatstrek and ensure every new interaction is seamlessly captured and ready for follow-up.{" "}
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
