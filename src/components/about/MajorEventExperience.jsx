import React from "react";

export default function MajorEventExperience() {
  return (
    <section
      id="major-event"
      className="flex flex-col md:flex-row-reverse items-center gap-10"
      data-aos="fade-up"
    >
      {/* 右侧图片 */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/aoevens.jpg"
          alt="Major Event Experience"
          className="rounded-lg shadow-md object-cover w-full h-auto max-h-[320px]"
        />
      </div>

      {/* 左侧文字内容 */}
      <div className="w-full md:w-1/2 font-tinos text-black">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/ao-logo.png"
            alt="AO Logo"
            className="w-8 h-8"
          />
          <h2 className="text-2xl font-bold">Major Event Experience</h2>
        </div>
        <p className="text-lg leading-relaxed">
          In January 2025, I had the special opportunity to work as a match statistician at the Australian Open.
          It was an amazing experience to be behind the scenes at such a big event, watching world-class players up close and learning more about the game from a new perspective.
          I felt really lucky to be part of it — and it reminded me how much depth there is in tennis, both on and off the court.
        </p>
      </div>
    </section>
  );
}
