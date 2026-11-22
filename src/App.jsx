import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Portfolio.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Tools from './Tools';
import Experience from './Experience';
import CTA from './CTA';
import Footer from './Footer';
import Boundary from './projects/boundary';
import VoiceOps from './projects/Voiceops';


const App = () => {
  return (
    <Router>
      <div className="portfolio-container">
        <Routes>
          {/* Main Landing Page (Inlined Fragment) */}
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <Projects />
                <Tools />
                <Experience />             
                <CTA />
                <Footer />
              </>
            } 
          />

          {/* Case Study Routes */}
          <Route path="/projects/boundary" element={<Boundary />} />
          <Route path="/projects/voiceops" element={<VoiceOps />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;