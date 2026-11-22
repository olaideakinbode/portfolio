import React, { useState } from 'react';

const SiteLink = ({ href, className = 'boundary-link-wrapper', children, ...props }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    {...props}
  >
    {children}
  </a>
);

const experienceData = [
  {
    id: 1,
    role: 'Web Developer — Aenonmento',
    period: '2025 — Present',
    bullets: [
      'Built custom React and Next.js applications for clients across various industries.',
      'Collaborated with designers to deliver modern UI/UX with high fidelity.',
      'Optimized web applications for performance and mobile responsiveness.',
      'Developed polished interface components for internal tools and product experiences.',
      'Improved design consistency across multiple user flows.',
      'Collaborated with cross-functional teams to ship high-quality features.'
    ]
  },
  {
    id: 2,
    role: 'Product/Web Developer — OneLife Initiative',
    period: '2023 — 2025',
    bullets: [
      <>
        Designed and built <SiteLink  style={{ color: '#80ace5', fontWeight: 600 }} href="https://teachher.ng">teachher.ng</SiteLink> and{' '}
        <SiteLink style={{ color: '#80ace5', fontWeight: 600 }} href="https://onelifeinitiative.org">onelifeinitiative.org</SiteLink> from scratch,
        owning end-to-end UX/UI architecture, responsive front-end implementation, and CMS setup.
      </>,
      <>
        Scaled teachher.ng to support digital literacy
        programs that have trained <strong style={{ color: '#ffffff', fontWeight: 600 }}>10,000+ </strong> corps members, streamlining mobile-first navigation and
        program onboarding.
      </>,
      <>
        Improved information architecture, load performance, and technical SEO on onelifeinitiative.org, increasing
        organic traffic by <strong style={{ color: '#ffffff', fontWeight: 600 }}>45%.</strong>
      </>,
      'Built custom web tools to support advocacy and outreach.',
      'Led ongoing maintenance, security updates, uptime monitoring, and continuous UI refinements across all web properties.'
    ]
  },
  {
    id: 3,
    role: 'Network Engineer — Contec Global',
    period: '2015 — 2025',
    bullets: [
      <>
      Implemented and maintained nationwide network infrastructure supporting the{' '}
      <SiteLink href="https://cerpac.immigration.gov.ng">CERPAC</SiteLink> and{' '}
      <SiteLink href="https://epass.immigration.gov.ng">ePASS</SiteLink> identity platforms across{' '}
      <strong style={{ color: '#ffffff', fontWeight: 600 }}>36 states</strong>, safeguarding{' '}
      <strong style={{ color: '#ffffff', fontWeight: 600 }}>150,000+ identity records</strong>.
      </>,
      'Streamlined operator workflows and terminal responsiveness across biometric enrollment stations, reducing processing friction and input errors for frontline staff.',
      'Partnered with software and field teams to improve interface usability, data validation, and operational consistency across internal enterprise tools.',
      'Led multi-site system deployments, fault diagnostics, and high-availability network administration for mission-critical immigration and identity services.',
      'Resolved distributed connectivity and data synchronization bottlenecks to maintain continuous service uptime across remote enrollment centers.'
    ]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(2);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
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
          const panelId = `exp-panel-${item.id}`;

          return (
            <div key={item.id} className={`exp-card ${isExpanded ? 'expanded' : ''}`}>
              {/* Header: Role and Date aligned in one row */}
              <div
                className="exp-card-header"
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => toggleExpand(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(item.id);
                  }
                }}
              >
                <h3 className="exp-role">{item.role}</h3>
                <span className="exp-period">{item.period}</span>
              </div>

              {/* Collapsible bullet list */}
              {isExpanded && (
                <ul className="exp-bullets" id={panelId}>
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              {/* Bottom-left circular arrow button */}
              <button
                type="button"
                className="exp-toggle-btn"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                aria-label={isExpanded ? `Collapse ${item.role}` : `Expand ${item.role}`}
              >
                {isExpanded ? (
                  /* Up Arrow Icon */
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="19" x2="12" y2="5" />
                    <polyline points="5 12 12 5 19 12" />
                  </svg>
                ) : (
                  /* Down Arrow Icon */
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
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
          Download My CV <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}