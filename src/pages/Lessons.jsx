import React from "react";
import FancyDivider from "../components/FancyDivider";

export default function Lessons() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 space-y-16 font-tinos text-black">
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="emoji-spin">🎾</span> Lessons & Pricing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 🎾 Private Lessons */}
        <div className="bg-white bg-opacity-70 rounded-xl p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-3">
            <span className="emoji-spin">🎾</span> Private Lessons
          </h2>
          <ul className="text-lg leading-relaxed space-y-2">
            <li>• 1-on-1: <strong>$95/hour</strong></li>
            <li>• 1-on-2: <strong>$55 per person/hour</strong></li>
          </ul>
        </div>

        {/* 👥 Group Lessons */}
        <div className="bg-white bg-opacity-70 rounded-xl p-6 shadow-md" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-bold mb-3">
            <span className="emoji-pulse">👥</span> Group Lessons
          </h2>
          <ul className="text-lg leading-relaxed space-y-2">
            <li>• 1-on-3: <strong>$40 per person/hour</strong></li>
            <li>• 1-on-4: <strong>$30 per person/hour</strong></li>
          </ul>
        </div>

        {/* ❤️ Cardio Tennis */}
        <div className="bg-white bg-opacity-70 rounded-xl p-6 shadow-md" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-bold mb-3">
            <span className="emoji-heartbeat">❤️</span> Cardio Tennis
          </h2>
          <ul className="text-lg leading-relaxed space-y-2">
            <li>• <strong>$15 per person/hour</strong></li>
            <li>• 6–8 people per class</li>
          </ul>
        </div>

        {/* 🌟 LTC Mega Session */}
        <div className="bg-white bg-opacity-70 rounded-xl p-6 shadow-md" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-bold mb-3">
            <span className="emoji-bounce">🌟</span> LTC Inclusive Mega Sessions
          </h2>
          <ul className="text-lg leading-relaxed space-y-2">
            <li>• Beginner Session: <strong>$40 per person</strong></li>
            <li>• Intermediate Session: <strong>$40 per person</strong></li>
            <li>• Duration: 2–2.5 hours | 4–6 players</li>
            <li>• Includes tennis warm-up, practice ball feed drills for all essential tennis strokes, cardio tennis, rally games and drills, point play, and tennis fitness.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
