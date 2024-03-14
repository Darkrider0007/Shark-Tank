/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface CarouselItem {
  imageUrl: string;
  heading?: string;
  paragraph?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Slider: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="relative h-[60vh] w-full flex justify-center items-center bg-neutral-950">
      <div className="relative w-full flex justify-center items-center px-2 sm:px-5 md:px-10">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={`mySwiper p-0`}
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[50vh] overflow-hidden my-8">
                  <img
                    src={item.imageUrl}
                    alt="slide"
                    className="object-cover w-full h-full relative rounded-md"
                  />
                  <div className="absolute h-full w-full max-md:bg-[rgba(0,0,0,0.85)] md:bg-gradient-to-r md:from-black md:via-[rgba(0,0,0,0.8)] md:to-transparent p-2 md:p-5 top-0 left-0 rounded-md">
                    <div className="w-full md:w-2/3 flex flex-col items-start gap-4">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl">
                        {item.heading}
                      </h1>
                      <p className="text-base text-[17px]">{item.paragraph}</p>
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
};

export default Slider;
