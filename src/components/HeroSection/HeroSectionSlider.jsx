"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
export default function HeroSectionSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  return (
    <div className="h-[600px] max-sm:h-[400px] w-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image fill quality={100} src={"/Cart/20-857x572.jpg"} alt={""}/>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg width="48" height="48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span></span>
        </div>
      </Swiper>
    </div>
  );
}
