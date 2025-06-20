import React from "react";

export default function FHHHighlight() {
  return (
    <section className="px-4 md:px-8">
      {/* 标题部分 */}

      {/* 三卡排布 */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Fitter */}
        <div
          className="bg-white bg-opacity-60 rounded-xl p-6 shadow-md w-full md:w-1/3 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-black mb-3">🏃 Fitter</h3>
          <p className="text-base text-gray-800 leading-relaxed font-tinos">
            Tennis builds comprehensive physical fitness by seamlessly combining agility, balance, coordination, speed, power, muscular strength, muscular endurance, flexibility, and aerobic capacity in every session.
          </p>
        </div>

        {/* Healthier */}
        <div
          className="bg-white bg-opacity-60 rounded-xl p-6 shadow-md w-full md:w-1/3 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-black mb-3">🧠 Healthier</h3>
          <p className="text-base text-gray-800 leading-relaxed font-tinos">
            Tennis is a proven way to support lifelong health by strengthening the heart, muscles, bones, coordination, and mental wellbeing—all in one game.
          </p>
        </div>

        {/* Happier */}
        <div
          className="bg-white bg-opacity-60 rounded-xl p-6 shadow-md w-full md:w-1/3 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold text-black mb-3">😄 Happier</h3>
          <p className="text-base text-gray-800 leading-relaxed font-tinos">
            Tennis sparks joy, builds confidence, and creates social connection—helping players feel happier, more motivated, and emotionally balanced both on and off the court.
          </p>
        </div>
      </div>
    </section>
  );
}
