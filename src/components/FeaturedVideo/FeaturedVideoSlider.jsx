"use client";

import moment from "moment";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import  '../HeroSection/styles.css'

export default function FeaturedVideoSlider() {
  const [arrData, setarrData] = useState([]);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className}">
          <div class="absolute top-0  p-4 ">
            <div class="flex flex-col space-y-4">
              <div class="flex items-center">
                <img src="https://placehold.co/120x80" alt="Oculus in Trending Now" class="w-1/3 h-auto rounded-lg" />
                <div class="ml-4">
                  <h3 class="text-lg font-bold">Oculus in Trending Now</h3>
                  <div class="flex items-center text-muted-foreground mt-2">
                    <img src="https://openui.fly.dev/openui/16x16.svg?text=🕒" alt="Clock Icon" class="mr-2" />
                    <span>June 12, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      `;
    },
  };

  useEffect(() => {
    const localhost = "http://localhost:4000/articles";

    const getData = async () => {
      const res = await fetch(localhost, {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setarrData(data.articles || data);
    };

    getData();
  }, []);

  const filterData = arrData?.filter((item) => item?.Youtube === "true");

  return (
<Swiper
    pagination={pagination}
    spaceBetween={0}
    modules={[Pagination]}

    slidesPerView={1}>
      {filterData?.map((item) => {
        const day = moment(item.publishedAt).date();
        const month = moment(item.publishedAt).format("MMMM");
        const year = moment(item.publishedAt).year();
        return (
          <SwiperSlide className="flex flex-col" key={item.id}>
            <ReactPlayer
              controls
              loop={true}
              width={"100%"}
              className=" h-full"
              url={item?.urlToImage}
            />

            <div className=" py-2 px-5 w-full bg-[#222222] h-auto">
              <h2 className="text-sm font-bold   ">{item?.title}</h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs  mt-2">
                  <span>
                    📅 {month} {day}, {year}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="bg-red-500  px-2 py-1 rounded text-base">
                    {item?.category}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>


  );
}
