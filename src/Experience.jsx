import React, { useState } from 'react';

const experienceData = [
  {
    id: 1,
    role: 'Lead Developer — Aenonmento',
    period: '2025 — Present',
    bullets: [
      'Built custom React and Next.js applications for clients across various industries.',
      'Collaborated with designers to deliver modern UI/UX with high fidelity.',
      'Optimized web applications for performance and mobile responsiveness.'
    ]
  },
  {
    id: 2,
    role: 'Web Developer — Momentum',
    period: '2024 — 2025',
    bullets: [
      'Developed polished interface components for internal tools and product experiences.',
      'Improved design consistency across multiple user flows.',
      'Collaborated with cross-functional teams to ship high-quality features.'
    ]
  },
  {
    id: 3,
    role: 'Product/Web Designer — OneLife Initiative',
    period: '2022 — 2024',
    bullets: [
      'Designed responsive interfaces and digital products for community initiatives.',
      'Managed user research, wireframing, and interactive UI prototyping.'
    ]
  },
  {
    id: 4,
    role: 'Network Engineer — Contec Global',
    period: '2015 — 2025',
    bullets: [
      'Managed platform optimization, identity infrastructure, and biometric enterprise systems.',
      'Maintained system reliability and deployment across multi-site network environments.'
    ]
  }
];

export default function Experience() {
  // Keeps item 2 expanded by default to match your screenshot layout
  const [expandedId, setExpandedId] = useState(2);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience-section" id="experience">
      {/* Small top label badge */}
      <div className="section-label">EXPERIENCE</div>
      <h2 className="section-title">Where I’ve Worked</h2>
      <p className="section-subtitle">
        A summary of my professional journey and the impact I’ve made
      </p>

      {/* Accordion Cards Container */}
      <div className="experience-accordion">
        {experienceData.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className={`exp-card ${isExpanded ? 'expanded' : ''}`}>
              
              {/* Header: Role and Date aligned in one row */}
              <div className="exp-card-header" onClick={() => toggleExpand(item.id)}>
                <h3 className="exp-role">{item.role}</h3>
                <span className="exp-period">{item.period}</span>
              </div>

              {/* Collapsible bullet list */}
              {isExpanded && (
                <ul className="exp-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              {/* Bottom-left circular arrow button */}
              <button 
                className="exp-toggle-btn"
                onClick={() => toggleExpand(item.id)}
                aria-label={isExpanded ? "Collapse section" : "Expand section"}
              >
                {isExpanded ? (
                  /* Up Arrow Icon */
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                ) : (
                  /* Down Arrow Icon */
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Download CV Pill Button at the bottom */}
      <div className="experience-footer-action">
        <a href="/resume.pdf" download className="btn-download-cv">
          Download My CV <span>→</span>
        </a>
      </div>
    </section>
  );
}