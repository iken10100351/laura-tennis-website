import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 轮播图像数组
const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpg",
  "/images/hero7.jpg",
  "/images/hero8.jpg",
  "/images/hero9.jpg",
  "/images/hero10.jpg",
  "/images/hero11.jpg",
  "/images/hero12.jpg",
  "/images/hero13.jpg",
  "/images/hero14.jpg",
  "/images/hero15.jpg",
  "/images/hero16.jpg",
  "/images/hero17.jpg",
  "/images/hero18.jpg",
  "/images/hero19.jpg",
  "/images/hero20.jpg",
  "/images/hero21.jpg"
];

export default function ImageSlider() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full object-contain"
              style={{
                height: "clamp(220px, 40vw, 500px)", // ✅ 自适应高度
                borderRadius: "12px"                  // ✅ 圆角美观
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
