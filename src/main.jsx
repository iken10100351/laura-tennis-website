import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  <Footer />

  </React.StrictMode>
);
AOS.init();