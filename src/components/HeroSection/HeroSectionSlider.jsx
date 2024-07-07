"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaClock } from "react-icons/fa";
import moment from "moment";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function HeroSectionSlider() {
  const [arrData, setstate] = useState([]);

  useEffect(() => {
    const localhost = process.env.NEXT_PUBLIC_JSON_URL;

    const getData = async () => {
      const res = await fetch(localhost, {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setstate(data.articles || data);
    };

    getData();
  }, []);

  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  const filterData = arrData?.filter((item) => item?.Youtube !== "true");

  if (!arrData && arrData.length < 0) {
    return (
      <div className="py-4 rounded shadow-md w-screen h-[600px] max-sm:h-[400px] animate-pulse bg-gray-50">
        <div className="flex p-4 space-x-4 sm:px-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="flex-1 py-2 space-y-4">
            <div className="w-full h-3 rounded bg-gray-300"></div>
            <div className="w-5/6 h-3 rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[600px] max-sm:h-[400px] w-screen">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* {News Array} */}
        {filterData.map((item, index) => {
          // @ts-ignore
          if (arrData.urlToImage === null) {
            return null;
          }
          let day = moment(item.publishedAt).date();
          let month = moment(item.publishedAt).format("MMMM");
          let year = moment(item.publishedAt).year();
          return (
            <SwiperSlide key={index} className="relative">
              <img
                src={item?.urlToImage || "/Cart/20-857x572.jpg"}
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute top-[20%] max-sm:top-0 left-0 z-30 p-8  ">
                <div className="flex flex-col space-y-4">
                  <div className="text-white text-center bg-red-600 p-2 max-w-40 overflow-clip font-extrabold rounded-lg">
                    <h1>{item.source.name}</h1>
                  </div>

                  <div className="text-white pl-6 text-start font-bold text-2xl max-sm:text-lg w-full">
                    <h1>{item.title}</h1>
                  </div>

                  <div className="text-white  font-medium text-base max-sm:text-sm w-2/4 max-sm:w-full">
                    <h1>{item.description}</h1>
                  </div>

                  <div className="flex items-center space-x-4 ml-5 ">
                    <div className="w-10 h-10">
                      <Image
                        width={100}
                        height={100}
                        quality={100}
                        className=" rounded-full "
                        src="/avatar/Monica_Geller.png"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center  max-sm:flex-col gap-5 max-sm:gap-3">
                      <div>
                        <h1 className="text-white font-bold text-sm max-sm:text-xs">
                          <span className="text-red-600 font-extrabold text-base max-sm:text-sm">
                            Author
                          </span>{" "}
                          : {item.author}
                        </h1>
                      </div>

                      <div className="flex items-center gap-3">
                        <FaClock color="red" className="text-white" size={12} />

                        <h1 className="text-white font-semibold text-base max-sm:text-xs">
                          {month} {day}, {year}{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* {ProgressCircle} */}

        <div className="autoplay-progress" slot="container-end">
          <svg width="48" height="48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span></span>
        </div>

        {/* {Navigation} */}
        <div className="absolute bottom-10 max-sm:bottom-5 max-sm:right-10 right-20 gap-2 flex justify-between w-10 items-center z-50">
          <div className="button-prev">
            <IoMdArrowDropleft
              color="white"
              size={25}
              className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer bg-red-600"
            />
          </div>
          <div className="button-next">
            <IoMdArrowDropright
              color="white"
              size={25}
              className="hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer bg-red-600"
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
