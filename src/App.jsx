import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // 👈 用于切页时平滑回顶部
import Logo from "./components/Logo";
import SloganBar from "./components/SloganBar";
import Lessons from "./pages/Lessons";

export default function App() {
  return (
    <div
      className="min-h-screen scroll-smooth bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      <Router>
        {/* ✅ 页面切换时自动滚动顶部 */}
        <ScrollToTop />


        {/* ✅ 导航栏下方展示 */}
        <Navbar />
        <div className="px-6 max-w-6xl mx-auto">
          <SloganBar/>
        </div>

        {/* ✅ 主体内容区域 */}
        <main className="max-w-6xl mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lessons" element={<Lessons />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
