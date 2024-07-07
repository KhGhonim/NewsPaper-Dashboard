import React from "react";
import { FaTag } from "react-icons/fa";

export default function ArticleTags({ tags }) {
  return (
    <div className=" mt-10 flex items-center border-t-2 border-b-2 p-7">
      <h2 className="text-xl font-bold mb-2 px-5 flex items-center gap-4">
        {" "}
        <FaTag color="red" size={15} /> Tags{" "}
        <span className="transition-all duration-500 ease-in-out animate-pulse font-extrabold">
          :
        </span>
      </h2>
      <div className="bg-black text-white  text-center px-3 py-1 rounded  ml-3 hover:bg-red-500 transition-all duration-200 ease-out cursor-pointer w-32">
        {tags}
      </div>
    </div>
  );
}
