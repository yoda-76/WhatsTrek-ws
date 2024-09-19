export default function Tutorial() {
  return (
    <div className="w-screen flex justify-center my-5">
      <div className="w-[100%] mt-20 md:my-10 cmd:w-[50%] h-[60vh] m-2 p-4 rounded-md flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/lJIB4Ct5y2U"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          className="h-[300px] h-[70vh] w-[100%]  rounded-md"
        />
      </div>
    </div>
  );
}
