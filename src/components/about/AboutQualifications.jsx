import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutQualifications() {
  const certificates = [
    "/images/cert1.jpg",
    "/images/cert2.jpg",
    "/images/cert3.jpg",
    "/images/cert4.jpg",
    "/images/cert5.jpg",
    "/images/cert6.jpg",
    "/images/cert7.jpg",
    "/images/cert8.jpg",
    "/images/atpca_advance.webp",
    "/images/newcard.webp",
    "/images/first_aid.webp"

  ];

  return (
    <section
      id="qualifications"
      className="flex flex-col md:flex-row items-center gap-10"
      data-aos="fade-up"
    >
      {/* 左侧轮播图 */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg shadow-md"
        >
          {certificates.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="object-contain w-full max-h-[320px] rounded-md transition-transform duration-500 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 右侧文字介绍 */}
      <div className="w-full md:w-1/2 font-tinos text-black">
        <h2 className="text-2xl font-bold mb-4">📚 Coaching Qualifications</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>Diploma of Sports</li>
          <li>Tennis Australia Community Coaching Qualification</li>
          <li>Tennis Australia Junior Development Qualification</li>
          <li>ATPCA Graduate Pro Qualification</li>
          <li>ATPCA Advanced Pro Qualification </li>
          <li>First Aid</li>
        </ul>
      </div>
    </section>
  );
}
