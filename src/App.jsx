import React from 'react';
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
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}