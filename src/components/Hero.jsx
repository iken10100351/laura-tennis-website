import React from "react";
import ImageSlider from "./ImageSlider";
import FHHHighlight from "./FHHHighlight";
import FancyDivider from "../components/FancyDivider";

export default function Hero() {
  return (
    <section id="home" className="px-4 md:px-8 py-16 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* 左：轮播图 + 动画 */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
          <ImageSlider />
        </div>

        {/* 右：文字 + 动画 */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <div className="bg-white bg-opacity-50 rounded-xl p-6 shadow-md">
            {[
              "Hi! I’m Coach Laura — and I am deeply thankful for all that tennis has taught me.",
              "This sport has shaped my life by teaching me resilience, discipline, joy, and confidence—both on and off the court.",
              "I’ve experienced firsthand how tennis builds not just fitness, but life skills and lasting happiness.",
              "Now, I feel incredibly fortunate to share those same lessons and that joy with my players—helping them grow through every rally, serve, and smile."
            ].map((para, idx) => (
              <p key={idx} className="text-xl text-black font-tinos leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
      <FancyDivider>
        What’s FH<sup>2</sup>?
      </FancyDivider>
      {/* FH² 模块 */}
      <div className="max-w-6xl mx-auto mt-20">
        <FHHHighlight />
      </div>
    </section>
  );
}
