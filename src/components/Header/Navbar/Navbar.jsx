import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import HotNews from "./HotNews/HotNews";

export default function Navbar() {
  return (
    <>
      <div className="w-screen flex bg-[#292929] h-16">
        <div className="flex items-center w-full px-4 md:px-10 lg:px-20">
          <div className="text-[#f7fafc] border-r-2 w-24 sm:w-28 border-gray-600 pr-4 flex items-center text-center gap-2 md:gap-3 font-bold">
            <p className="text-xl sm:text-2xl md:text-3xl">30</p>
            <div>
              <p className="text-sm sm:text-base md:text-lg">Jun</p>
              <p className="text-sm sm:text-base md:text-lg">2024</p>
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
    </>
  );
}
