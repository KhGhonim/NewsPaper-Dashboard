"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay, Navigation } from "swiper/modules";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

/**
 * Truncates a given text to a maximum length and adds ellipsis if necessary.
 */
const truncateText = (text, maxLength) => {
  // Check if the text is longer than the maximum length
  if (text.length > maxLength) {
    // Truncate the text and add ellipsis
    return `${text.substring(0, maxLength)}...`;
  }
  // Return the original text if it is not longer than the maximum length
  return text;
};

export default function HotNews() {
  const [UpperNavbarSlider, setUpperNavbarSlider] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_UpperNavbar_2User;
    const apiKey = process.env.NEXT_PUBLIC_API_UpperNavbar_1User;
    const localhost= "http://localhost:4000/articles"

    const getData = async () => {
      const res = await fetch(localhost || apiUrl || apiKey, {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setUpperNavbarSlider(data.articles || data);
    };

    getData();
  }, [UpperNavbarSlider]);

  return (
    <div className={`flex-grow pl-2 `}>
      <div className="hidden lg:flex ">
        <p className="text-[#f7fafc] bg-red-600 p-1 sm:p-2 rounded-md px-3 sm:px-6">
          Hot News{" "}
          <span className="animate-ping duration-700 transition-all ease-in-out">
            :
          </span>{" "}
        </p>
        <div className="flex ">
          <div className="text-[#f7fafc]  text-2xl  p-2 px-6 h-11 w-[500px] bg-[#222222] ml-2 rounded-lg">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              direction={"vertical"}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="h-10 text-start "
            >
              {UpperNavbarSlider.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="h-10 flex justify-start items-start text-2xl cursor-pointer"
                  >
                    {truncateText(item.title, 45)}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="text-[#f7fafc] flex justify-between w-10 items-center">
            <div className="swiper-button-prev">
              <IoMdArrowDropleft
                color="red"
                size={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="swiper-button-next">
              <IoMdArrowDropright
                color="red"
                size={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
