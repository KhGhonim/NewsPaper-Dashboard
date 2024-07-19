"use client";
import { FloatingCatagoriesitems } from "../../../constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingCatagories() {
  const [isHidden, setIsHidden] = useState(false);
  const [IsIndexActive, setIsIndexActive] = useState(null);

  const handleMouseEnter = (index) => {
    setIsIndexActive(index);
  };

  const handleMouseLeave = () => {
    setIsIndexActive(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);
  return (
    <div
      className={`fixed top-1/3 transition-all duration-300 ease-in-out ${
        isHidden ? "translate-x-full" : "translate-x-0"
      } bg-slate-100 h-72 p-3 right-0 flex flex-col bg-card shadow-lg rounded-3xl z-40`}
    >
      {FloatingCatagoriesitems.map((item, index) => (
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="relative"
          key={index}
        >
          <Link
            href={`/catagory${item.href}`}
            className="flex items-center justify-center h-16 border-b-4"
          >
            <img
              alt="bucket-icon"
              src={item.imgSrc}
              className="w-8 object-cover"
            />
          </Link>

          {/* Adjusted hover area for both main trigger and submenu */}
          {IsIndexActive === index && (
            <div className="absolute right-full top-0  pr-4 z-10 opacity-100">
              <div className="p-2">
                {/* Ensure submenu remains visible as long as either is being hovered */}
                <Link
                  href={`/catagory${item.href}`}
                  className="flex items-center w-32 justify-center bg-red-600 text-white p-2 rounded shadow-lg cursor-pointer"
                >
                  <span>{item.submenu}</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
