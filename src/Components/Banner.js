import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import './Banner.css'
import Banner1 from '../Images/banner1.JPG'
import Banner2 from '../Images/banner2.JPG'
import Banner3 from '../Images/banner3.JPG'

function Banner() {
  return (
    <>
      <div className="bannerContainer">
        <Swiper 
          navigation={true} 
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper">
          <SwiperSlide><img src={Banner1} /></SwiperSlide>
          <SwiperSlide><img src={Banner2} /></SwiperSlide>
          <SwiperSlide><img src={Banner3} /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Banner
