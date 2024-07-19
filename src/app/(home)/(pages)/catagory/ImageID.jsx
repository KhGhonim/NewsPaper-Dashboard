import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ImageID({id}) {
  return (
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
          <Link className="font-bold" href={"/"}>HOME</Link>
          <FaArrowAltCircleRight color="red" size={16} />
          <span className="font-bold capitalize">{id}</span>
        </div>
      </div>
    </div>
  );
}
