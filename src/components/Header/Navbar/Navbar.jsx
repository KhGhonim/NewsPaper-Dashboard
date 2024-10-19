"use client";
import { useEffect, useState } from "react";
import MainNavbar from "../MainNavbar/MainNavbar";
import UpperNavbar from "../UpperNavbar/UpperNavbar";
import debounce from "lodash.debounce";

export default function Navbar() {
  const [isUpperNavbarVisible, setUpperNavbarVisible] = useState(true);
  const [isMainNavbarFixed, setMainNavbarFixed] = useState(false)

  useEffect(() => {
    /**
     * Handles the scroll event and updates the navbar visibility
     * and fixed state based on the scroll position.
     */
    const handleScroll = debounce(() => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Check if the scroll position is greater than or equal to 100
      // and the main navbar is not yet fixed
      if (scrollPosition >= 100 && !isMainNavbarFixed) {
        // Hide the upper navbar and fix the main navbar
        setUpperNavbarVisible(false);
        setMainNavbarFixed(true);
      } else if (scrollPosition <= 100 && isMainNavbarFixed) {
        // Show the upper navbar and unfix the main navbar
        setUpperNavbarVisible(true);
        setMainNavbarFixed(false);
      }
    }, 100);

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isUpperNavbarVisible, isMainNavbarFixed]);


  return (
    <div className="relative w-screen  h-full overflow-hidden">
      {/* Upper Navbar */}
      <UpperNavbar isUpperNavbarVisible={isUpperNavbarVisible} />
      {/* Main Navbar */}
      <MainNavbar isMainNavbarFixed={isMainNavbarFixed} />
    </div>
  );
}
