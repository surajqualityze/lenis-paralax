"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function RightCarasoul() {
  const images = [
    "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    "https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg",
    "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-8 px-6 py-12 bg-gray-50">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Training
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Ready for a new look? We'll help you update to a more modern design
          that reflects your current branding, brings your website's look and
          feel up to your standards, and appeals to prospects.
        </p>
      </div>

      {/* Right side - Draggable Portrait Carousel */}
      <div className="md:w-1/2">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          grabCursor={true} // Enables drag cursor
          className="rounded-lg shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${src}?auto=compress&cs=tinysrgb&w=400`}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
