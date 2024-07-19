import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Catagories from "../../../../../components/SideBars/Catagories/Catagories";
import PopularStories from "../../../../../components/SideBars/PopularStories/PopularStories";
import Tags from "../../../../../components/SideBars/Tags/Tags";
import News from "../News.jsx";

export default function page({ params }) {
  const { id } = params;

  return (
    <>
      <div className="w-screen h-80 relative">
        <img
          src="/banner/banner.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 text-white px-10 py-5">
          <div className="w-10 bg-red-500 h-1"></div>

          <div className="text-3xl max-sm:text-xl font-bold  capitalize">
            Category: {id}
          </div>

          <div className="flex gap-2 mt-2  items-center">
            <FaArrowAltCircleRight color="red" size={16} />
            <Link className="font-bold" href={"/"}>
              HOME
            </Link>
            <FaArrowAltCircleRight color="red" size={16} />
            <span className="font-bold capitalize">{id}</span>
          </div>
        </div>
      </div>

      <div className="container  mt-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold capitalize">
            Latest World News in {id}
          </h1>
        </div>

        <div className="w-screen flex">
          <div className="w-2/3 max-md:w-screen p-7">
            <News id={id} />
          </div>

          <div className="hidden  md:flex flex-col gap-5 w-1/3">
            <Catagories />
            <PopularStories />
            <Tags />
          </div>
        </div>
      </div>
    </>
  );
}
