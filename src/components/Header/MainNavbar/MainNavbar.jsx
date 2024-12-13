"use client";
import Signin from "../../../components/auth/Sign/Sign";
import { menuItems } from "../../../constant/constant";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaRegUser,
  FaSearch,
} from "react-icons/fa";
import { IoBagOutline, IoClose, IoMenu } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import CartIPopup from "../Cart/CartIPopup";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { IoMdArrowDropright } from "react-icons/io";

export default function MainNavbar({ isMainNavbarFixed }) {
  const { data: session, status } = useSession();
  const [activeIndex, setActiveIndex] = useState(null);
  const [Cart, setCart] = useState(false);
  const [User, setUser] = useState(false);
  const [Menu, setMenu] = useState("hidden");
  const [Search, setSearch] = useState(false);

  const SignUpModelCloser = (params) => {
    setMenu("hidden");
  };

  const ref = useRef(null);
  useEffect(() => {
    // Event handler for clicking outside the SignUp modal
    const HandleModelCloser = (eo) => {
      // Check if the click is not inside the SignUp div
      if (ref.current && !ref.current.contains(eo.target)) {
        // Close the modal
        SignUpModelCloser();
      }
    };

    // Add the event listener for clicking outside the SignUp modal
    document.addEventListener("mousedown", HandleModelCloser);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", HandleModelCloser);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const toggleMenu = () => {
    setMenu((prevMenu) => (prevMenu === "hidden" ? "block" : "hidden"));
  };

  return (
    <div className="relative  z-50">
      <div
        className={`${
          isMainNavbarFixed ? "fixed top-0" : "-top-full"
        } transition-[top] duration-700 ease-out bg-white text-black w-full md:px-10 lg:px-16 shadow-sm`}
      >
        <div
          className={` relative container flex justify-between items-center   h-20 `}
        >
          {/* Logo */}
          <Link
            className=" w-max  flex justify-center items-center "
            href={"/"}
          >
            <Image
              src="/logo/KG.png"
              width={100}
              height={100}
              quality={100}
              className="   rounded-full"
              alt={""}
            />
            <h1 className="self-center text-2xl max-md:text-sm font-semibold text-black">
              KGNEWS
            </h1>
          </Link>

          <div className="hidden md:flex md:flex-grow "></div>

          {/* List of menu items for large screens */}
          <div className="hidden md:flex">
            <ul className="flex justify-center items-center gap-9 relative ">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative flex justify-center items-center gap-2 "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="hover:opacity-60 cursor-pointer font-bold text-sm ">
                    {item.name}
                  </span>
                  <FaChevronDown
                    className={` transition-transform duration-300 ease-in-out ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    color="red"
                    size={10}
                  />
                  {activeIndex === index && (
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 opacity-100 z-50">
                      <div className="pt-4">
                        <ul className="w-48 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                          {item.submenu.map((submenuItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="py-2 px-4 flex justify-start items-center gap-3 group hover:bg-gray-700 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
                            >
                              <span className="transform transition-transform duration-300 ease-in-out text-xl group-hover:translate-x-1 group-hover:text-red-500">
                                <IoMdArrowDropright />
                              </span>
                              <span className="text-sm font-medium group-hover:text-red-500">
                                {submenuItem}
                              </span>
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

          {/* Humburger Icon */}
          <div className="relative flex justify-center items-center  ml-6 border-r-2 border-l-2 max-md:h-15 md:h-20 ">
            <div ref={ref} className="relative md:hidden  ">
              <div
                onClick={toggleMenu}
                className=" items-center overflow-hidden rounded-md border-r-2 h-20 w-10  bg-white"
              >
                <button className="flex justify-center items-center h-full w-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                  <IoMenu size={20} />
                </button>
              </div>

              <div
                className={`${Menu} absolute right-0 z-50 mt-2 w-60 rounded-lg overflow-hidden bg-gray-800 shadow-lg text-gray-300`}
                role="menu"
              >
                <div className="p-3">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-700 hover:font-semibold transition-all duration-300 ease-out"
                      role="menuitem"
                    >
                      <Link
                        href="#"
                        className="flex justify-between items-center"
                        onClick={() => handleMouseEnter(index)}
                      >
                        <span>{item.name}</span>
                        <FaChevronRight color="red" size={12} />
                      </Link>

                      {activeIndex === index && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.submenu.map((submenuItem, subIndex) => (
                            <Link
                              href="#"
                              key={subIndex}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 hover:font-semibold rounded transition-all duration-300 ease-out"
                            >
                              {submenuItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <div className="relative group transition-all duration-700 ease-in-out">
              {status === "authenticated" ? (
                Cart ? (
                  <div>
                    <div
                      onClick={() => setCart(!Cart)}
                      className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer bg-black text-white transition-all duration-500 ease-in"
                    >
                      <IoClose size={50} />
                    </div>

                    <CartIPopup setCart={setCart} Cart={Cart} />
                  </div>
                ) : (
                  <div>
                    <div
                      onClick={() => setCart(!Cart)}
                      className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer hover:bg-gray-100 transition-all duration-500 ease-linear"
                    >
                      <IoBagOutline size={16} />
                    </div>

                    <div
                      onClick={() => setCart(!Cart)}
                      className={`hidden absolute top-[100%] -translate-x-1/2 w-[120px] max-md:w-[100px] z-10 p-4 text-white text-sm rounded-md cursor-pointer bg-black text-center group-hover:block transition-all duration-500 ease-linear`}
                    >
                      <p>Cart</p>
                    </div>
                  </div>
                )
              ) : null}
            </div>

            {/* User Icon */}
            <div className=" group transition-all duration-700 ease-in-out">
              {status === "unauthenticated" ? (
                User ? (
                  <div>
                    <div
                      onClick={() => setUser(!User)}
                      className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer bg-black text-white transition-all duration-500 ease-in"
                    >
                      <IoClose size={16} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      onClick={() => setUser(!User)}
                      className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer border-r-2 border-l-2 hover:bg-gray-100 transition-all duration-500 ease-linear"
                    >
                      <FaRegUser size={16} />
                    </div>

                    <div
                      onClick={() => setUser(!User)}
                      className={`hidden absolute top-[100%] -translate-x-1/2 w-[120px] max-md:w-[100px] z-10 p-4 text-white text-sm rounded-md cursor-pointer bg-black text-center group-hover:block transition-all duration-500 ease-linear`}
                    >
                      <p>User</p>
                    </div>
                  </div>
                )
              ) : (
                <div>
                  <div
                    onClick={() => setUser(!User)}
                    className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer border-r-2 border-l-2 hover:bg-gray-100 transition-all duration-500 ease-linear"
                  >
                    <FaRegUser size={16} />
                  </div>

                  <div
                    onClick={() => signOut()}
                    className={`hidden absolute top-[100%] -translate-x-1/2 w-[120px] max-md:w-[100px] z-10 p-4 text-white text-sm rounded-md cursor-pointer bg-black text-center group-hover:block transition-all duration-500 ease-linear`}
                  >
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative group transition-all duration-700 ease-in-out">
              {Search ? (
                <div>
                  <div
                    onClick={() => setSearch(!Search)}
                    className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer bg-black text-white transition-all duration-500 ease-in"
                  >
                    <IoClose size={50} />
                  </div>

                  <SearchBar Search={Search} setSearch={setSearch} />
                </div>
              ) : (
                <div>
                  <div
                    onClick={() => setSearch(!Search)}
                    className="flex justify-center items-center h-20 w-20 max-md:w-10 cursor-pointer hover:bg-gray-100 transition-all duration-500 ease-linear"
                  >
                    <FaSearch size={16} />
                  </div>

                  <div
                    onClick={() => setSearch(!Search)}
                    className={`hidden absolute top-[100%] -translate-x-1/2 w-[120px] max-md:w-[100px] z-10 p-4 text-white text-sm rounded-md cursor-pointer bg-black text-center group-hover:block transition-all duration-500 ease-linear`}
                  >
                    <p>Search</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {status === "unauthenticated" ? (
        <Signin setUser={setUser} User={User} />
      ) : null}
    </div>
  );
}
