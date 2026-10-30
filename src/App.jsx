import './Portfolio.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Testimonials from './Testimonials'; 
import CTA from './CTA';
import Footer from './Footer';

const App = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;