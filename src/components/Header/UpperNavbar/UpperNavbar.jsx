import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import HotNews from "../HotNews/HotNews";
import moment from "moment";

export default function UpperNavbar({ isUpperNavbarVisible }) {
  const day = moment().date();
  const month = moment().format("MMMM");
  const year = moment().year();
  return (
    <div
      className={`flex w-full px-4 py-2  justify-between items-center bg-gray-800 text-white transition duration-300 ease-in-out ${
        isUpperNavbarVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {" "}
      <div
        className={` container flex items-center w-full px-4 md:px-10 lg:px-20`}
      >
        <div className="text-[#f7fafc] border-r-2 w-24 sm:w-28 border-gray-600 pr-4 flex items-center text-center gap-2 md:gap-3 font-bold">
          <p className="text-xl sm:text-2xl md:text-3xl">{day}</p>
          <div>
            <p className="text-xs sm:text-base md:text-base">{month}</p>
            <p className="text-xs sm:text-base md:text-base">{year}</p>
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
