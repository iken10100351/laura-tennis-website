import React, { useEffect, useState } from "react";

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full px-4 pt-6 transition-all duration-500">
      <a href="/">
        <img
          src="/images/laura-logo.png"
          alt="Laura Logo"
          className={`transition-all duration-500 ease-in-out mx-0 w-auto object-contain
            ${scrolled
              ? "h-20 md:h-24 opacity-40"
              : "h-28 md:h-40 opacity-100"}
          `}
        />
      </a>
    </div>
  );
}
