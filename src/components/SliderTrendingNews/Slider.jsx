"use client";

import notFound from "../../app/not-found";
import moment from "moment";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Slider() {
  const [UserSlider, setUserSlider] = useState([]);

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

      setUserSlider(data.articles || data);
    };

    getData();
  }, []);

  return (
    <Swiper
      spaceBetween={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {UserSlider.map((item, index) => {
        if (!item.urlToImage) {
          return null;
        }
        const day = moment(item.publishedAt).date();
        const month = moment(item.publishedAt).format("MMMM");
        const year = moment(item.publishedAt).year();
        return (
          <SwiperSlide key={index} className="relative w-1/3 cursor-pointer ">
            <div className="group relative w-full h-full overflow-hidden ">
              <img
                src={item.urlToImage}
                alt="User image"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 "
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <div className="flex items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"
                    alt="Author avatar"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="text-sm">BY {item.source.name}</span>
                </div>
                <span className="bg-red-600 text-white !text-start px-2 py-1 rounded text-xs">
                  {item.catagory}
                </span>
                <h3 className="text-base text-start font-bold mt-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm mt-2 space-x-2">
                  <span>
                    📅 {month} {day}, {year}
                  </span>
                  <span>💬 3</span>
                  <span>👁️ 405 VIEWS</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
