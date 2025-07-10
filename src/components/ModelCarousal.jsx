import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const ModelCarousal = ({ models }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        breakpoints={{
          340: { slidesPerView: 1.2, spaceBetween: 15 },
          700: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 3.5, spaceBetween: 25 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="w-full"
      >
        {models.map((model) => (
          <SwiperSlide key={model.name}>
            <div className="relative rounded-lg overflow-hidden shadow-lg group w-full border border-black p-3 hover:bg-black/20 ">
              <div
                className="h-[250px] w-full bg-contain bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105 "
                style={{ backgroundImage: `url(${model.image})` }}
              />
              <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full p-3 text-lg font-semibold">
                {model.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModelCarousal;
