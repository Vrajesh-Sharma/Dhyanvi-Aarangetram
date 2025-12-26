import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Timeline from './pages/Timeline';
import Gurus from './pages/Gurus';
import Location from './pages/Location';

// --- 1. DEFINE ALL YOUR IMAGE PATHS HERE ---
const imagesToPreload = [
  "images/Dhyanvi.JPG",
  "images/Krishna.JPG",
  "images/6D1A2777.JPG",
  "images/6D1A2798.JPG",
  "images/6D1A3025.JPG",
  "images/6D1A3106.JPG",
  "images/6D1A2771.JPG",
  "images/6D1A2775.JPG",
];

function Preloader() {
  useEffect(() => {
    // This runs once when the app mounts
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/gurus" element={<Gurus />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Preloader/>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}