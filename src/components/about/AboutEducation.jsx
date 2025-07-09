import React from "react";

export default function AboutEducation() {
  return (
    <section
      id="education"
      className="flex flex-col md:flex-row items-center gap-10"
      data-aos="fade-up"
    >
      {/* 左侧图片 */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/hero12.webp"
          alt="Laura studying"
          className="rounded-lg shadow-md object-cover w-full h-auto max-h-[320px]"
        />
      </div>

      {/* 右侧文字介绍 */}
      <div className="w-full md:w-1/2 font-tinos text-black">
        <h2 className="text-2xl font-bold mb-4">🎓 Education</h2>
        <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
          <li>
            <strong>Bachelor of Exercise and Nutrition Science</strong> – The University of Queensland
          </li>
          <li>
            <strong>Master of Secondary Teaching</strong> (In Progress) – Griffith University
          </li>
        </ul>
      </div>
    </section>
  );
}
