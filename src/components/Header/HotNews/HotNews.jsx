"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function HotNews() {

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
          <div className="text-[#f7fafc] p-2 px-6 h-11 w-96 bg-[#222222] ml-2 rounded-lg">
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
              className="h-10"
            >
              <SwiperSlide className="h-10">Slide 1</SwiperSlide>
              <SwiperSlide className="h-10">Slide 2</SwiperSlide>
              <SwiperSlide className="h-10">Slide 3</SwiperSlide>
              <SwiperSlide className="h-10">Slide 4</SwiperSlide>
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
