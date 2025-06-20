import React from "react";

export default function FancyDivider({ children }) {
  return (
    <div className="relative w-full my-16">
      {/* 横线背景 */}
      <div className="absolute inset-0 flex items-center z-0">
        <div className="w-full border-t border-gray-300 opacity-40"></div>
      </div>

      {/* 中间内容 */}
      <div className="relative flex justify-center items-center gap-4 z-10 bg-transparent px-4">
        <img
          src="/images/tennis-divider-icon.png"
          alt="Tennis Icon"
          className="w-10 h-10 animate-spin-slow"
        />
        <span className="text-xl font-semibold text-gray-700 whitespace-nowrap">
          {children}
        </span>
        <img
          src="/images/tennis-divider-icon.png"
          alt="Tennis Icon"
          className="w-10 h-10 animate-spin-slow"
        />
      </div>
    </div>
  );
}
