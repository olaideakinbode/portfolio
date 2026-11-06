import './Portfolio.css';
import favIcon from './imgs/favIcon.png';

export default function Footer() {
    return (
        <div>
            {/* Footer */}
                  <footer className="footer">
                    <div className="footer-top">
                      <div className="footer-brand">
                        <div className="footer-profile-brand">
                          <img src={favIcon} alt="Olaide Akinbode" className="footer-avatar" />
                          <span className="footer-name">Olaide Akinbode</span>
                        </div>
                        <p className="footer-description">I build fast, polished, and user-friendly products that deliver real value.</p>
                        
                        <div className="social-links-row">
                          <a href="https://github.com/olaideakinbode" target="_blank" rel="noreferrer" className="social-icon-btn">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.9-.3-1.9-3-3-5.9-2.6zM248 8C111.03 8 0 119.03 0 256c0 108.04 70.07 199.5 167.85 231.81 12.2 2.2 16.6-5.28 16.6-11.7 0-5.8-.2-21.1-.3-41.5-69.2 15.05-83.84-33.42-83.84-33.42-11.1-28.28-27.07-35.82-27.07-35.82-22.52-15.42 1.71-15.1 1.71-15.1 24.9 1.75 38.02 25.58 38.02 25.58 22.13 37.91 58.1 26.9 72.23 20.56 2.3-16 8.6-26.9 16.1-33.08-55.5-6.3-112.14-27.75-112.14-121.28 0-26.75 9.55-48.65 25.26-65.78-2.5-6.3-10.95-31.1 2.4-64.7 0 0 20.88-6.68 68.3 25.3 19.88-5.52 41.16-8.3 62.35-8.42 21.18.12 42.47.29 62.35 8.42 47.42-31.98 68.28-25.3 68.28-25.3 13.38 33.6 4.93 58.4 2.4 64.7 15.71 17.13 25.25 39.03 25.25 65.78 0 93.65-56.77 114.98-111.22 121.3 9.01 7.78 17.02 23.08 17.02 46.52 0 33.51-.3 60.53-.3 68.7 0 6.43 4.3 13.9 16.64 11.59C425.96 455.51 496 364.04 496 256 496 119.03 384.97 8 248 8z" /></svg>
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.777 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.58-8.128 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.293z" /></svg>
                          </a>
                          <a href="https://www.linkedin.com/in/olaideakinbode/" target="_blank" rel="noreferrer" className="social-icon-btn">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                          </a>
                        </div>
                      </div>
                      
                      <div className="footer-links-vertical">
                        <a href="#about">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#testimonials">Testimonials</a>
                      </div>
                    </div>
            
                    <div className="footer-bottom">
                      <p className="footer-copy">© Built by Olaide Akinbode</p>
                    </div>
                  </footer>
        </div>
    )
}