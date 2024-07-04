import Slider from "./Slider";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function SliderTrendingNews() {
  return (
    <div className=" flex max-sm:flex-col w-screen bg-black text-white  h-[500px] mt-2">
      <div className="w-1/4  max-sm:w-full text-center  p-8 flex justify-center flex-col relative bg-gradient-to-t from-black to-transparent">
        <div className="w-16 h-1 bg-red-500 mb-4"></div>
        <h2 className="text-xl font-bold mb-4">Trending News</h2>
        <p className="mb-4 text-sm">
          Don't Miss And Stay Up-to-date. Top pic for you.
        </p>
        <div className="absolute bottom-10 max-sm:bottom-5 max-sm:right-10 right-20 gap-2 flex justify-between w-10 items-center z-50">
          <div className="button-prev">
            <IoMdArrowDropleft
              color="white"
              size={25}
              className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer bg-red-600"
            />
          </div>
          <div className="button-next">
            <IoMdArrowDropright
              color="white"
              size={25}
              className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer bg-red-600"
            />
          </div>
        </div>
      </div>

      <div className="w-3/4 flex max-sm:w-full max-sm:h-full space-x-4 overflow-hidden">
        <Slider />
      </div>
    </div>
  );
}
