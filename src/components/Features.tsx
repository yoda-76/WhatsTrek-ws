
import ss2 from "../assets/ss2.png";
import ss1 from "../assets/ss1.png";

export default function Features() {
  return (
    <div className=" flex flex-col items-center my-20">
      <div className="w-[70%]">
        <div className="text-5xl text-black my-5">What do we Provide</div>
        <div className="text-2xl text-black ">
          Unleash the power of hassle-free messaging and make your chat life
          more fun, efficient, and totally effortless. We’re here{" "}
        </div>
      </div>

      <div className="flex justify-center items-center mt-32 mx-20 ">
        <div className="">
          <div className="text-5xl text-black my-5">
            Setup automated custom replies
          </div>
          <div className="text-2xl text-black ">
            Who doesn’t like a few likes on their photos? Unless it’s an endless
            string of “Liked” messages from someone using a different phone.
            Switch to WhatsApp to ensure all likes are well-received in the
            chat.{" "}
          </div>
        </div>
        <div className="flex  justify-start items-start">
          <img className="w-[50%]" src={ss1} alt="logo" />
          <img className="w-[50%]" src={ss2} alt="logo" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-32 mx-20 ">
      <div className="flex  justify-start items-start">
          <img className="w-[50%]" src={ss1} alt="logo" />
          <img className="w-[50%]" src={ss2} alt="logo" />
        </div>
        <div className="">
          <div className="text-5xl text-black my-5">
          Automatically save contacts
          </div>
          <div className="text-2xl text-black ">
          Who doesn’t like a few likes on their photos? Unless
it’s an endless string of “Liked” messages from
someone using a different phone. Switch to WhatsApp
to ensure all likes are well-received in the chat.{" "}
          </div>
        </div>
        
      </div>
    </div>
  );
}
