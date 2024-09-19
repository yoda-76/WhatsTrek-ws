import ss2 from "../assets/ss2.png";
import ss1 from "../assets/ss1.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";
// import { Button } from "./ui/moving-border";
import CustomButton from "./custom/CustomButton";

export default function Features() {
  return (
    <div className="md:w-[100%]   flex flex-col  items-center  cmd:my-20">
      <div className="w-[100%]  text-2xl flex flex-col items-center ">
        <div className="cmd:text-5xl  mx-2 cmd:text-black my-5 md:w-[90%] ">
          What do we Provide
        </div>
        <div className="cmd:text-2xl md:text-sm  mx-2 text-sm text-justify text-center md:w-[50%]  max-w-[60rem] p-5 cmd:text-black md:w-[90%] ">
        Automate your WhatsApp with ease: save contacts instantly, set smart auto-replies, use template-based responses, and never miss a message with default messaging!{" "}
        </div>
      </div>

      <div className="w-[100%]  flex md:flex-col  text-2xl justify-center items-center cmd:mt-32 mx-2 md:pt-4  cmd:px-32 ">
        <div className="flex  gap-6 flex-col md:items-center justify-start items-start  md:w-[100%]">
          <div className="cmd:text-5xl md:text-xl cmd:text-black cmd:text-left w-full cmd:w-[70%] cmd:my-5 md:w-[90%] ">
            Setup automated custom replies
          </div>
          <div className="cmd:text-2xl cmd:text-left cmd:text-black w-full text-sm text-justify  cmd:w-[80%] md:w-[90%] ">
          Who wouldn’t love to send a quick, thoughtful reply without lifting a finger? <br/><br/>Unless, of course, it’s a series of generic responses that miss the mark. Set up automated custom replies with Whatstrek to ensure every message feels personal and perfectly timed.{" "}
            <div className="hidden mt-6 cmd:flex w-full justify-start">
              <CustomButton
                to=""
                text="Download Now"
                active={true}
                href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
              ></CustomButton>
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-start md:justify-center items-start">
          <img className="w-[50%] md:hidden" src={ss1} alt="logo" />
          <img className="w-[50%]" src={ss2} alt="logo" />
        </div>
      </div>


        {/* <div className="flex md:bg-black p-3 md:w-10 md:hidden">
          <CustomButton
            to=""
            text="Download Now 2"
            active={true}
            href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
          ></CustomButton>
        </div> */}
      <div className="w-[100%]  flex md:flex-col  text-2xl justify-center items-center cmd:mt-32 mx-2 md:pt-10   cmd:px-32 ">
        <div className="flex cmd:hidden  gap-6 flex-col md:items-center  justify-end items-end  ">
            <div className="cmd:text-5xl md:text-xl cmd:text-black cmd:text-right w-full cmd:w-[70%] cmd:my-5">
              Save Contacts Automatically
            </div>
            <div className="cmd:text-2xl cmd:text-left cmd:text-black w-full text-sm text-justify  cmd:w-[80%] md:w-[90%] ">
            Who doesn’t want to stay organized and never lose track of new contacts? <br/><br/>Unless, of course, you’re juggling countless manual entries. Save contacts automatically with Whatstrek and ensure every new interaction is seamlessly captured and ready for follow-up.{" "}
              <div className="hidden mt-6 cmd:flex w-full justify-end">
                <CustomButton
                  to=""
                  text="Download Now"
                  active={true}
                  href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
                ></CustomButton>
              </div>
            </div>
          </div>
        <div className="flex mt-5 justify-start md:justify-center items-start ">
          <img className="w-[50%]" src={ss3} alt="logo" />
          <img className="w-[50%] md:hidden" src={ss4} alt="logo" />
        </div>
        <div className="flex md:hidden  gap-6 flex-col justify-end items-end ">
          <div className="cmd:text-5xl cmd:text-black cmd:text-right w-full cmd:w-[70%] cmd:my-5">
            Save Contacts Automatically
          </div>
          <div className="cmd:text-2xl cmd:text-right cmd:text-black w-full text-sm text-justify cmd:w-[60%]">
          Who doesn’t want to stay organized and never lose track of new contacts? <br/><br/>Unless, of course, you’re juggling countless manual entries. Save contacts automatically with Whatstrek and ensure every new interaction is seamlessly captured and ready for follow-up.{" "}
            <div className="hidden mt-6 cmd:flex w-full justify-end">
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
      <div className="flex md:m-10 cmd:hidden">
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
