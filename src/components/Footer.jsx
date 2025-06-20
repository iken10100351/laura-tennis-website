import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black bg-opacity-60 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">

        {/* 左侧：版权文字 */}
        <div>
          <p className="text-sm font-light">
            © 2022–{new Date().getFullYear()} Laura Tennis Coaching. All rights reserved.
          </p>
        </div>

        {/* 右侧：联系方式 */}
        <div className="space-y-1 text-sm font-light">
          <p>📧 Email: <a href="mailto:laura.tennis@example.com" className="underline hover:text-gray-300">laurawangjflt@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
