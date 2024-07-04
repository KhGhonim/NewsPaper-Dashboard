import FeaturedVideoSlider from "./FeaturedVideoSlider";

export default function FeaturedVideo() {
  return (
    <div className="relative w-screen h-[600px] max-sm:h-[1000px] mt-2 ">
      <div className="w-full h-full bg-[#191919] z-10 absolute inset-0  ">
        <div className="container mx-auto flex flex-wrap justify-center items-center   p-4 text-white">
          <div className="w-full lg:w-2/3 p-4">
            <div className="flex max-sm:justify-between  items-center mb-4">
              <div className="flex justify-center items-center  gap-4">
                <h2 className="text-3xl font-bold max-sm:text-xl">
                  Featured Video
                </h2>
                <span className=" text-xs">
                  Stay up-to-date
                </span>
                <div className="h-1  bg-red-500"></div>
              </div>
              <div className="hidden md:flex  flex-grow h-0.5 bg-gray-300 mr-6"></div>

              <div className="flex items-center space-x-4">
                <button className=" px-4 py-2 rounded bg-red-500 font-bold">
                  VIEW ALL
                </button>
              </div>
            </div>

            <FeaturedVideoSlider />
          </div>


        </div>
      </div>
    </div>
  );
}
