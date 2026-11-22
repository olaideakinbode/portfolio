import React from 'react';
import './Tools.css';

const toolsData = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Nextjs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
  },
  {
    name: 'TailwindCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
  },
  {
    name: 'GSAP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg' // Fallback icon representation
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Netlify',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  }

];

export default function Tools() {
  return (
    <section className="tools-section" id="skills">
      {/* Small top label badge */}
      <div className="section-label">TECH STACK</div>
      
      <h2 className="section-title">Tools I Build With</h2>
      <p className="section-subtitle">
        A curated set of technologies I rely on to build modern web experiences
      </p>

      {/* Grid of tool badge pills */}
      <div className="tools-grid">
        {toolsData.map((tool, idx) => (
          <div key={idx} className="tool-pill">
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}