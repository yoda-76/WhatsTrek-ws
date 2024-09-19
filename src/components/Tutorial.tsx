export default function Tutorial() {
  return (
    <div className="w-screen flex justify-center my-5">
      <div className="w-[100%] md:w-[70%]  h-[fit] m-2 p-4 rounded-md flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/lJIB4Ct5y2U"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          className="h-[300px] md:h-[400px] w-[100%] md:w-[70%] rounded-md"
        />
      </div>
    </div>
  );
}
