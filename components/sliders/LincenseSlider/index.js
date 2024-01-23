"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export const LicenseSlider = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper roudned-xl"
      >
        <SwiperSlide className="rounded-xl py-10 ">
          <div className="w-full h-fit  rounded-xl bg-slate-300">
            <div className="flex justify-center w-full">
              <div className="w-[90px] h-[90px] bg-red-200 rounded-full mt-5" />
            </div>
            <p className="text-center text-2xl font-bold my-5">Licencia 1 </p>
            <p className="text-center text-2xl font-bold my-5">$16,00</p>
            <div className="flex justify-center">
                           <button className="boton-unico my-5 md:mt-0 ">
                  <span class="circle1"></span>
                  <span class="circle2"></span>
                  <span class="circle3"></span>
                  <span class="circle4"></span>
                  <span class="circle5"></span>
                  <span class="text">Comprar</span>
                </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl py-10 ">
          <div className="w-full h-full  rounded-xl bg-slate-300">
            <div className="flex justify-center w-full">
              <div className="w-[90px] h-[90px] bg-red-200 rounded-full mt-5" />
            </div>
            <p className="text-center text-2xl font-bold my-5">Licencia 2 </p>
            <p className="text-center text-2xl font-bold my-5">$16,00</p>
            <div className="flex justify-center">
                           <button className="boton-unico my-5 md:mt-0 ">
                  <span class="circle1"></span>
                  <span class="circle2"></span>
                  <span class="circle3"></span>
                  <span class="circle4"></span>
                  <span class="circle5"></span>
                  <span class="text">Comprar</span>
                </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
