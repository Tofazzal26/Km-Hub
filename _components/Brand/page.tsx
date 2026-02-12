"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

const Brand = () => {
  return (
    <div className="bg-[#171718] text-white">
      <div className="container mx-auto">
        <div className="lg:py-20 py-10">
          <Swiper
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2, // mobile
              },
              640: {
                slidesPerView: 3, // tablet
              },
              1024: {
                slidesPerView: 4, // small laptop
              },
              1280: {
                slidesPerView: 5, // desktop
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                width={190}
                height={135}
                className="lg:w-[190px] w-full lg:h-[135px] h-[120px]"
                src="/brand1.webp"
                alt="brand"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                width={190}
                height={135}
                className="lg:w-[190px] w-full lg:h-[135px] h-[120px]"
                src="/brand2.webp"
                alt="brand"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                width={190}
                height={135}
                className="lg:w-[190px] w-full lg:h-[135px] h-[120px]"
                src="/brand3.webp"
                alt="brand"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                width={190}
                height={135}
                className="lg:w-[190px] w-full lg:h-[135px] h-[120px]"
                src="/brand4.webp"
                alt="brand"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                width={190}
                height={135}
                className="lg:w-[190px] w-full lg:h-[135px] h-[120px]"
                src="/brand5.webp"
                alt="brand"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                width={190}
                height={135}
                className="lg:w-[190px] w-full lg:h-[135px] h-[120px]"
                src="/brand4.webp"
                alt="brand"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
