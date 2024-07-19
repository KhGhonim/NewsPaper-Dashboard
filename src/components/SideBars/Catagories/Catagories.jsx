"use client";
import { CATEGORY_IMAGES } from "../../../constant/constant";
import Link from "next/link";
import { useState } from "react";

export default function Catagories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 px-5">Categories</h2>
      <div className="h-1 w-20 bg-red-500 mb-4"></div>
      <div className="flex flex-col gap-5 px-3">
        {CATEGORY_IMAGES.map((item, index) => (
          <Link key={index} href={`/catagory${item.link}`} className="flex flex-col">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                alt={`Category image`}
                className="w-full h-32 object-cover rounded-lg "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50  flex items-center justify-between p-4 rounded-lg">
                <span className="text-white font-semibold">{` ${item.name}`}</span>
                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded transition-all duration-300 ease-linear ">
                  {hoveredIndex === index ? "→" : index + 4}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
