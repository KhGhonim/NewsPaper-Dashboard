"use client";
import Signin from "components/auth/Sign/Sign";
import { menuItems } from "constant/constant";
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
    <div className="relative">
      <div
        className={`   ${
          isMainNavbarFixed ? "fixed -translate-y-full max-md:mt-6" : "block "
        } transition-all  duration-500 ease-in-out bg-white text-black  w-full  md:px-10 lg:px-16 shadow-sm z-50 `}
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
            <ul className="flex justify-center items-center gap-9 relative">
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
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 z-10 opacity-100">
                      <div className="pt-7 ">
                        <ul className="w-40 bg-[#292929] text-white p-2 rounded shadow-lg">
                          {item.submenu.map((submenuItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="py-1 px-4 hover:bg-gray-900 cursor-pointer"
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
                className={`${Menu} absolute right-0 z-10 mt-2 w-56 rounded-lg overflow-hidden   bg-[#292929] shadow-lg text-grey-300`}
                role="menu"
              >
                <div className="p-2">
                  {menuItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=" rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-gray-100 hover:font-bold  hover:translate-x-1 transition-all duration-300 ease-out"
                        role="menuitem"
                      >
                        <Link
                          href={`/${item.name}`}
                          className="flex justify-between items-center"
                        >
                          <span>{item.name}</span>
                          <FaChevronRight color="red" className="" size={10} />
                        </Link>
                      </div>
                    );
                  })}
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
      <Signin setUser={setUser} User={User} />
    </div>
  );
}
