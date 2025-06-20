import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Lessons & Pricing", path: "/lessons" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-transparent z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end">
        <ul className="flex space-x-10 text-lg font-bold font-tinos tracking-wide text-neutral-800">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative transition duration-300 ease-in-out
                  hover:text-black
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-black
                  after:w-0 hover:after:w-full after:transition-all after:duration-300
                  ${
                    location.pathname === item.path
                      ? "text-black after:w-full"
                      : ""
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
