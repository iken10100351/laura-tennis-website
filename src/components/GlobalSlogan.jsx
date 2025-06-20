import React from "react";
import "animate.css"; // 确保你已经安装 animate.css（或使用 AOS 也可）

export default function GlobalSlogan() {
  return (
    <div className="w-full text-center py-2 bg-white bg-opacity-70 backdrop-blur-sm shadow-sm z-40">
      <h2 className="text-lg md:text-xl font-semibold text-purple-700 font-cinzel animate__animated animate__fadeInDown animate__slow">
        Fitter Healthier and Happier, through the sport of Tennis 
      </h2>
    </div>
  );
}
