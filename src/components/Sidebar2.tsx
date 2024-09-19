import CustomButton from "./custom/CustomButton";

const Sidebar2 = (props: any) => {
  return (
    <div
      className={`absolute ${
        props.isOpen ? "" : "hidden"
      } bg-[#d9fcd2]  right-0 t-0 w-[50vw] h-[100vh] bg-black`}
    >
      <ul className="mt-10 flex flex-col ml-8 items-start w-full gap-10 text-[12px]">
        <li className="w-[50%] border-b-2 border-gray-400 flex items-start pb-2">
          <a href="">Features</a>
        </li>
        <li className="w-[50%] border-b-2 border-gray-400 flex items-start pb-2">
          <a href="">Pricing</a>
        </li>
        <li className="w-[50%] border-b-2 border-gray-400 flex items-start pb-2">
          <a href="">Contact Us</a>
        </li>
        <li className="w-[50%] border-b-2 border-gray-400 flex items-start pb-2">
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
      <CustomButton
        to=""
        text="Download Now"
        active={true}
        href="https://play.google.com/store/apps/details?id=com.message.whatstrek&pcampaignid=web_share"
      ></CustomButton>
      </ul>
    </div>
  );
};
export default Sidebar2;
