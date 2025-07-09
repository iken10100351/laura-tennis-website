import React from "react";

export default function CareerHighlights() {
  return (
    <section
      id="career-highlights"
      className="flex flex-col md:flex-row items-center gap-10"
      data-aos="fade-up"
    >
      {/* 左侧两张图片垂直排列 */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <img
          src="/images/hero4.webp"
          alt="Career Moment 1"
          className="rounded-lg shadow-md object-cover w-full h-auto max-h-[300px]"
        />
        <img
          src="/images/career2.webp"
          alt="Career Moment 2"
          className="rounded-lg shadow-md object-cover w-full h-auto max-h-[300px]"
        />
      </div>

      {/* 右侧文字内容 */}
      <div className="w-full md:w-1/2 font-tinos text-black">
        <h2 className="text-2xl font-bold mb-4">🏅 Career Highlights</h2>

        {/* Australia 成就 */}
        <h3 className="text-xl font-semibold mb-2">🇦🇺 Australia</h3>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
          <li>🥇 2024 University Nationals Champion – UQ</li>
          <li>🥈 2023 University Nationals Runner-Up – UQ</li>
          <li>🥈 2024 Tennis League Runner-Up – UQ</li>
          <li>🏆 Champion – UTR Performance Sunshine Coast 2020</li>
          <li>🎾 Finalist – AMT Sunshine Coast Open 2020</li>
          <li>🎾 Semi-final – UTR Mooloolaba 2020</li>
          <li>🎾 Semi-final – AMT Mooloolaba Open 2020</li>
        </ul>

        {/* USA 成就 */}
        <h3 className="text-xl font-semibold mb-2">🇺🇸 USA</h3>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
          <li>🏆 Champion – Lake Cane Tennis Center Adult Classic (Women's Open)</li>
          <li>🏆 Champion – Lake Cane Tennis Centre Orlando Hardcourt (2016)</li>
          <li>📈 Ranked #17 in Florida State (2017–2019)</li>
        </ul>

        {/* China & International */}
        <h3 className="text-xl font-semibold mb-2">🇨🇳 China & International</h3>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>🌍 Ranked #900s in ITF Singles</li>
          <li>🌍 Ranked #1200s in WTA Doubles</li>
          <li>🏅 National Ranking #98 in China</li>
        </ul>
      </div>
    </section>
  );
}
