import React from 'react';
import { Link } from 'react-router-dom';
import favIcon from './imgs/favIcon.png';
import './Portfolio.css';

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <img src={favIcon} alt="Olaide Akinbode" className="nav-avatar" />
          <span>Olaide Akinbode</span>
        </Link>
        <div className="nav-links">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#testimonials">Testimonials</Link>
          <a href="#contact" className="btn-nav-contact">Contact Me →</a>
        </div>
      </nav>
    </div>
  );
}