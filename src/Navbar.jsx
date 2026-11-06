import favIcon from './imgs/favIcon.png';
import './Portfolio.css';

export default function Navbar() {
    return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="nav-brand">
          <img src={favIcon} alt="Olaide Akinbode" className="nav-avatar" />
          <span>Olaide Akinbode</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="btn-nav-contact">Contact Me →</a>
        </div>
      </nav>
    </div>
  );
}