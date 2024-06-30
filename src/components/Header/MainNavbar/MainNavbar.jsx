"use client";
import { menuItems } from "constant/constant";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaRegUser, FaSearch } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

export default function MainNavbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="  bg-white text-black flex justify-between items-center w-full h-full px-4 md:px-10 lg:px-20 shadow-sm">
      <div className=" flex justify-center items-center">
        <Image
          src="/logo/KG.png"
          width={100}
          height={100}
          quality={100}
          className="flex-shrink-0 object-cover   rounded-full"
          alt={""}
        />
        <h1 className="self-center text-2xl font-semibold text-white">
          KGNEWS
        </h1>
      </div>
      <div className="flex-grow"></div>

      <div>
        <ul className="flex justify-center items-center gap-9 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex justify-center items-center gap-2 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
              <FaChevronDown
                className={` transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                color="red"
                size={10}
              />
              {activeIndex === index && (
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2">
                  <div className="pt-5">
                    <ul className="w-40 bg-[#292929] text-white p-2 rounded shadow-lg">
                      {item.submenu.map((submenuItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 px-4 hover:bg-gray-900"
                        >
                          {submenuItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center  ml-6 border-r-2 border-l-2 h-28">
        <div className="flex justify-center items-center  h-24 w-20 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in">
          <IoBagOutline size={20} />
        </div>
        <div className="flex justify-center items-center border-r-2 border-l-2 h-24 w-20 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in">
          <FaRegUser size={20} />
        </div>
        <div className="flex justify-center items-center  h-24 w-20 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in">
          <FaSearch size={20} />
        </div>
      </div>
    </div>
  );
}
