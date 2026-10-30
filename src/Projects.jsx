import './Portfolio.css';
import project1Img from './imgs/project-1.png'
import project2Img from './imgs/project-2.png'
import project3Img from './imgs/project-3.png'


export default function Projects() {
    return (
        <div>
            {/* Projects Section */}
                  <section className="projects-section" id="projects">
                    <span className="section-label">PORTFOLIO</span>
                    <h2 className="section-title">Projects I've Built</h2>
                    <p className="section-subtitle">A selection of recent work showcasing UI design, code quality, and front-end performance.</p>
            
                    <div className="projects-grid">
                      {/* Project 1 */}
                      <div className="project-card">
                        <div className="project-image">
                          <img src={project1Img} alt="VoiceOps Mockup" />
                        </div>
                        <div className="project-info">
                          <h3>VoiceOps</h3>
                          <p> Built an operational layer that helps teams monitor, intervene, and govern AI conversations in production.</p>
                          <div className="project-actions">
                            <a href="#" className="btn-outline">Source Code</a>
                            <a href="#" className="btn-primary-sm">Live Website →</a>
                          </div>
                        </div>
                      </div>
            
                      {/* Project 2 */}
                      <div className="project-card">
                        <div className="project-image">
                          <img src={project2Img} alt="Boundary Desktop" />
                        </div>
                        <div className="project-info">
                          <h3>Matcha Haven</h3>
                          <p>A modern e-commerce platform built for a premium tea brand, focusing on speed and intuitive layout.</p>
                          <div className="project-actions">
                            <a href="#" className="btn-outline">Source Code</a>
                            <a href="#" className="btn-primary-sm">Live Website →</a>
                          </div>
                        </div>
                      </div>
            
                      {/* Project 3 */}
                      <div className="project-card">
                        <div className="project-image">
                          <img src={project3Img} alt="boundary-mobile" />
                        </div>
                        <div className="project-info">
                          <h3>Boundary Mobile</h3>
                          <p>Redesigned a mobile expense-compliance experience that simplifies reimbursements, expense tracking, and real-time compliance visibility.</p>
                          <div className="project-actions">
                            <a href="#" className="btn-outline">Source Code</a>
                            <a href="https://figma.com/proto/5b9Mb6OIhwOrMXiGlbf7O8/Boundary?node-id=365-636&p=f&t=jESM9AfnPVgkwup0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=423%3A1230" className="btn-primary-sm">Live Prototype →</a>
                          </div>
                        </div>
                      </div>
            
                      {/* Project 4 */}
                      <div className="project-card">
                        <div className="project-image">
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Lucent" />
                        </div>
                        <div className="project-info">
                          <h3>Lucent</h3>
                          <p>A minimalist dark-themed portfolio template built for developers seeking modern design.</p>
                          <div className="project-actions">
                            <a href="#" className="btn-outline">Source Code</a>
                            <a href="#" className="btn-primary-sm">Live Website →</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
            
        </div>
    )
}