import React from 'react';
import heroImg from './imgs/hero.png';

const techIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
];

export default function Hero() {
  return (
    <header className="hero-section" id="about">
      <div className="hero-content">
        <div className="status-badge">
          <div className="pulse-dot-container">
            <div className="pulse-dot-ring"></div>
            <div className="pulse-dot-core"></div>
          </div>
          <span>Available for work</span>
        </div>

        <h1 className="hero-title">Frontend Developer.</h1>
        <p className="hero-description">
          Hi, I’m Olaide, a frontend developer with a product design background. I build responsive web applications with a focus on usability and clean interfaces.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-outline-pill">See my works</a>
          <a href="#contact" className="btn-primary-white">
            Contact Me <span>→</span>
          </a>
        </div>

        <div className="logo-marquee-container">
          <div className="logo-marquee-track">
            {techIcons.map((icon, idx) => (
              <div className="logo-card" key={`orig-${idx}`}>
                <img src={icon} alt="tech icon" />
              </div>
            ))}
            {techIcons.map((icon, idx) => (
              <div className="logo-card" key={`dup-${idx}`}>
                <img src={icon} alt="tech icon" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img 
          src={heroImg} 
          alt="Olaide Akinbode" 
          className="hero-img" 
        />
      </div>
    </header>
  );
}