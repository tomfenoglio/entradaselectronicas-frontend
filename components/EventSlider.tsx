"use client";

import React from 'react';


// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import "styles/globals.css";

const EventSlider = () => {
    return (
      <div className="w-screen pt-24">

    <Swiper
      spaceBetween={0}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 4,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      freeMode={true}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true, /* aca decia "clickable" pero lo cambie por el error de typescript */
      }}
      breakpoints={{
        200: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode]}
      className="swiper_container"
    >
      <SwiperSlide className='rounded-[20px]'>
        <img src="/assets/images/carousel-events/bnp-sven-vath-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel-events/ladob-ostil-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel-events/habitat-dannyhowells-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel-events/habitat-kasperkoman-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel-events/ladob-hotsince-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel-events/ladob-jameszabiela-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel-events/ladob-missmonique-feed.jpg" alt="slide_image" className='rounded-[20px] max-w-50'/>
      </SwiperSlide>



{/*         Estos son los botones
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <AiFillCaretLeft size={10} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <AiFillCaretRight size={10} />
          </div>
          <div className="swiper-pagination"></div>
        </div> */}

    </Swiper>
    
    </div>
    )
  }

  export default EventSlider