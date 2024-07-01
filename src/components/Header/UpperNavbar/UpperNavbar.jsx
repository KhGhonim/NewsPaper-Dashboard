"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import HotNews from "../HotNews/HotNews";
import { useEffect, useState } from "react";
import moment from "moment";

export default function UpperNavbar() {
  const [UpperNavbar, setUpperNavbar] = useState(null);
  /**
   * Event handler for the scroll event.
   * It sets the position of the Item based on the scroll position.
   */
  useEffect(() => {
    // Event handler for the scroll event
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // If the scroll position is greater than 70, set the item position to "". Otherwise, set it to "".
      if (scrollPosition > 70) {
        setUpperNavbar("sticky"); // Set the Item position to ""
      } else {
        setUpperNavbar("block"); // Set the Item position to ""
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove the event listener
    };
  }, [UpperNavbar]);

  const day = moment().date();
  const month = moment().format("MMMM");
  const year = moment().year();
  return (
    <div className={`${UpperNavbar}  w-screen flex bg-[#292929] h-16`}>
      <div
        className={` container flex items-center w-full px-4 md:px-10 lg:px-20`}
      >
        <div className="text-[#f7fafc] border-r-2 w-24 sm:w-28 border-gray-600 pr-4 flex items-center text-center gap-2 md:gap-3 font-bold">
          <p className="text-xl sm:text-2xl md:text-3xl">{day}</p>
          <div>
            <p className="text-sm sm:text-base md:text-lg">{month}</p>
            <p className="text-sm sm:text-base md:text-lg">{year}</p>
          </div>
        </div>

        <HotNews />

        <div className="flex justify-center items-center gap-2 sm:gap-4 my-2 max-lg:pl-4">
          <Link
            className="bg-red-600 text-white p-1 sm:p-2 hover:scale-110 transition-all duration-200"
            href={""}
          >
            <FaFacebook />
          </Link>
          <Link
            className="bg-red-600 text-white p-1 sm:p-2 hover:scale-110 transition-all duration-200"
            href={""}
          >
            <FaInstagram />
          </Link>
          <Link
            className="bg-red-600 text-white p-1 sm:p-2 hover:scale-110 transition-all duration-200"
            href={""}
          >
            <FaPinterestP />
          </Link>
          <Link
            className="bg-red-600 text-white p-1 sm:p-2 hover:scale-110 transition-all duration-200"
            href={""}
          >
            <FaLinkedin />
          </Link>
          <Link
            className="bg-red-600 text-white p-1 sm:p-2 hover:scale-110 transition-all duration-200"
            href={""}
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}
