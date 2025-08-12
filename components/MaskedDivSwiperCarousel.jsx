'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MaskedDiv from './ui/masked-div';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function MaskedDivSwiperCarousel() {
  // Slide data array (easily reusable & maintainable)
  const slidesData = [
    {
      maskType: 'type-1',
      videoSrc: 'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
    },
    {
      maskType: 'type-2',
      videoSrc: 'https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4',
    },
    {
      maskType: 'type-3',
      videoSrc: 'https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4',
    },
    {
      maskType: 'type-4',
      videoSrc: 'https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4',
    },
     {
      maskType: 'type-1',
      videoSrc: 'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
    },
    {
      maskType: 'type-2',
      videoSrc: 'https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4',
    },
    {
      maskType: 'type-3',
      videoSrc: 'https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4',
    },
    {
      maskType: 'type-4',
      videoSrc: 'https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // makes it start again from 1 seamlessly
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 40 },
          1280: { slidesPerView: 3, spaceBetween: 50 },
          1536: { slidesPerView: 3.5, spaceBetween: 60 },
        }}
        className="maskedDiv-swiper"
      >
        {/* Generate SwiperSlide from data */}
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <MaskedDiv maskType={slide.maskType} size={0.95} className="mx-auto">
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.videoSrc} type="video/mp4" />
              </video>
            </MaskedDiv>
          </SwiperSlide>
        ))}

        {/* Custom navigation */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
}
