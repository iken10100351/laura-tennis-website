import React from "react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 font-tinos text-black">
      <h1 className="text-4xl font-bold text-center mb-10">📬 Contact</h1>

      <p className="text-center text-lg mb-12 leading-relaxed">
        Whether you're a beginner, intermediate, or just curious — feel free to reach out.
        I’d love to hear from you!
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 邮箱卡片 */}
        <div
          className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md text-center"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-bold mb-2">📧 Email</h2>
          <p className="text-lg">
            <a
              href="mailto:laurawangjflt@gmail.com"
              className="underline hover:text-purple-600"
            >
              laurawangjflt@gmail.com
            </a>
          </p>
        </div>

        {/* 小红书卡片 */}
        <div
          className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-xl font-bold mb-2">📕 Rednote ID</h2>
          <p className="text-lg">1062946427</p>
        </div>
      </div>
    </section>
  );
}
