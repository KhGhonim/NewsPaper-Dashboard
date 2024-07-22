"use client";

import moment from "moment";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "../HeroSection/styles.css";
import { Pagination } from "swiper/modules";

export default function FeaturedVideoSlider() {
  const [arrData, setarrData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
      setarrData(data.articles || data);
    };

    getData();
  }, []);

  const filterData = arrData?.filter((item) => item?.Youtube === "true");

  return (
    <div className="flex ">
      <div className="flex-1">
        {selectedVideo ? (
          <div className="flex flex-1 overflow-hidden h-96 ml-4">
            <ReactPlayer
              url={selectedVideo.urlToImage}
              controls
              loop={true}
              width="100%"
              height="100%"
              className="w-24 h-16 object-cover rounded-lg"
            />
          </div>
        ) : (
          <ReactPlayer
            controls
            loop={true}
            width="100%"
            height="100%"
            url={"https://www.youtube.com/watch?v=2Vv-BfVoq4g"}
          />
        )}
      </div>
      <div className="w-1/3 overflow-hidden h-96 ml-4">
        <Swiper
          slidesPerView={3}
          direction="vertical"
          spaceBetween={180}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {filterData?.map((item) => {
            const day = moment(item.publishedAt).date();
            const month = moment(item.publishedAt).format("MMMM");
            const year = moment(item.publishedAt).year();
            return (
              <SwiperSlide
                key={item.id}
                className="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-700 ease-out"
                onClick={() => setSelectedVideo(item)}
              >
                <div className="flex items-center space-x-4 p-4 bg-white text-black shadow rounded-lg">
                  <ReactPlayer
                    url={item.urlToImage}
                    controls
                    loop={true}
                    width="100%"
                    height="100%"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-xs">{item.title}</h3>
                    <div className="flex items-center text-gray-500 mt-2">
                      <span className="text-xs">
                        📅 {month} {day}, {year}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
