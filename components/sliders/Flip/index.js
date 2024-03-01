"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export const SliderFlipComponent = ({imgs}) => {

  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper roudned-xl"
      >
        {imgs &&
          imgs.map((e, index) => ( 
            <SwiperSlide key={index} className="rounded-xl">
              <div style={{backgroundImage:`url('${e}')`,backgroundSize:'cover', backgroundPosition:'center'}} className="rounded-xl h-[50vh]"/>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
