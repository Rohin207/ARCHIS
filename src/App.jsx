import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ProcessSection from './components/ProcessSection';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LandRecordDetailPage from './components/LandRecordDetailPage';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <Router>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white glass-effect-dark">
        {/* Only show Navbar on landing page (home route) */}
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <IntroSection />
              <ProcessSection />
              <HowItWorks />
              <FinalCTA />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
          <Route path="/land/:ulpin" element={<LandRecordDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;