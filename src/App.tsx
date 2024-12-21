import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Home } from './pages/Home';
import { ChiSono } from './pages/ChiSono';
import { Progetti } from './pages/Progetti';
import { Esperienze } from './pages/Esperienze';
import { Servizi } from './pages/Servizi';
import { Certificati } from './pages/Certificati';
import { Contatti } from './pages/Contatti';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-950">
        <ParticlesBackground />
        <Navigation />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/progetti" element={<Progetti />} />
            <Route path="/esperienze" element={<Esperienze />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/certificati" element={<Certificati />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}