'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export const SliderFlipComponent = () => {
  return (
    <>
    <Swiper
      effect={'flip'}
      grabCursor={true}
      pagination={true}

      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper roudned-xl"
    >
      <SwiperSlide className='rounded-xl'>
        <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide className='rounded-xl'>
        <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide className='rounded-xl'>
        <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide className='rounded-xl'>
        <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide className='rounded-xl'>
        <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide className='rounded-xl'>
        <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
    </Swiper>
  </>
);
}
