"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaSearchMinus } from "react-icons/fa";

export default function SearchBar({ Search, setSearch }) {
  const [SearchValue, setSearchValue] = useState(null);
  const SignUpModelCloser = () => {
    setSearch(!Search);
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
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-full left-full transform -translate-x-full w-72 md:w-80 lg:w-96 z-10 p-4 text-white text-sm rounded-md cursor-pointer bg-black"
    >
      <div className="w-full p-2">
        <div className="relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full transition-all duration-300 ease-in-out border border-gray-300 rounded-lg px-1 py-2 outline-none focus:ring-2 text-black"
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            defaultValue={SearchValue}
          />
          <Link
            className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-transparent p-3 rounded-lg text-white bg-red-600"
            aria-label="Search"
            href={`/search/${SearchValue}`}
          >
            <FaSearchMinus />
          </Link>
        </div>
      </div>
    </div>
  );
}
