"use client";

import moment from "moment";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const day = moment().date();
const month = moment().format("MMMM");
const year = moment().year();
export default function EditorChoice() {
  const [EditorChoice, setEditorChoice] = useState([]);

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
      setEditorChoice(data.articles || data);
    };

    getData();
  }, []);

  return (
    <div className="my-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-auto"
        style={{ paddingBottom: "2rem" }} // Adjust this value as needed
      >
        {EditorChoice.map((item, index) => {
          if (item.urlToImage === null) {
            return null;
          }
          return (
            <SwiperSlide
              key={index}
              className="group relative cursor-pointer rounded-3xl overflow-hidden"
            >
              <img
                src={item.urlToImage}
                alt="Skateboarder performing a trick"
                className="w-full h-96 object-cover transform transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-3xl rounded-b-lg ">
                <div className="flex flex-col gap-2 items-start">
                  <h2 className="text-white text-xl font-bold">
                    Editor's Choice
                  </h2>
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded hover:text-white hover:bg-gray-900 transition-all duration-200 ease-out">
                    {item.source.name}
                  </span>
                </div>
                <div className="mt-2 ">
                  <h3 className="text-white text-lg font-semibold mt-2 hover:text-red-500 transition-all duration-200 ease-out cursor-pointer">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-white text-xs mt-2 space-x-2">
                    <span>
                      📅 {month} {day}, {year}
                    </span>
                    <span>🕒 5 min read</span>
                    <span>👁️ 520 VIEWS</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
