import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 图片数组
const images = [
  "/images/hero1.webp",
  "/images/hero2.webp",
  "/images/hero3.webp",
  "/images/hero4.webp",
  "/images/hero5.webp",
  "/images/hero6.webp",
  "/images/hero7.webp",
  "/images/hero8.webp",
  "/images/hero9.webp",
  "/images/hero10.webp",
  "/images/hero11.webp",
  "/images/hero12.webp",
  "/images/hero13.webp",
  "/images/hero14.webp",
  "/images/hero15.webp",
  "/images/hero16.webp",
  "/images/hero17.webp",
  "/images/career2.webp",
  "/images/career1.webp"

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
        lazy={{ loadPrevNext: true }}
        watchSlidesProgress={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <LazyImage src={src} alt={`Tennis photo ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ✅ 封装图片组件：自带 loading 动画
function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full">
      {!loaded && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-xl z-10"
          style={{ height: "clamp(220px, 40vw, 500px)" }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full object-contain transition-opacity duration-700 ease-in-out rounded-xl ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "clamp(220px, 40vw, 500px)" }}
      />
    </div>
  );
}
