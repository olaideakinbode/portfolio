import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './boundary.css'; 
import './ProjectSnapshot.css';
import BoundaryTransition from './BoundaryTransition';
import ProjectSnapshot from './ProjectSnapshot';
import boundaryPreview from '../imgs/1.png';
import boundaryPreview2 from '../imgs/2.png';
import boundaryPreview3 from '../imgs/3.png';
import boundaryPreview4 from '../imgs/4.webp';
import boundaryPreview5 from '../imgs/5.png';
import boundaryPreview6 from '../imgs/6.png';
import boundaryPreview7 from '../imgs/7.webp';
import project3Img from '../imgs/project-3.png'
import project4Img from '../imgs/svg_13.png'


export default function Boundary() {
  const handleLiveSiteClick = () => {
    // I want track analytics event here later
  };

  return (
    <div className="portfolio-container boundary-page">
      {/* Shared Navigation Header */}
      <Navbar />

      {/* Main Case Study Content Container */}
      <main className="boundary-content">
        
        {/* Main Headline */}
        <h1 className="boundary-title">
          Boundary — Explainable Expense Compliance Platform
        </h1>

        {/* Client & Year Metadata */}
        <div className="boundary-meta">
          <div className="boundary-meta-item">
            <span className="boundary-meta-label">Domain</span>
            <span className="boundary-meta-value">Governance • Compliance • Explainability</span>
          </div>
          <div className="boundary-meta-item">
            <span className="boundary-meta-label">Year</span>
            <span className="boundary-meta-value">2026</span>
          </div>
        </div>

        {/* Project Description */}
        <div className="boundary-description">
          <p>
            Boundary redesigns enterprise expense compliance as an explainable, audit-ready decision system that builds organizational trust. Built in response to the trust gap exposed by AI-assisted approvals, it makes every compliance decision transparent, reviewable, and defensible across employees, finance operations, and compliance teams.
          </p>
        </div>

        {/* Showcase Image / Preview Banner Container */}
        <div className="solution-preview-banner">
            <img 
                src={boundaryPreview} 
                alt="Boundary Expense Compliance Platform Interfaces" 
                className="solution-preview-image"
            />
        </div>

        
        {/* Scope of Work Pills */}
        <div className="boundary-scope">
            <div className="boundary-description">
            <ProjectSnapshot />
            </div>
        </div>

        {/* Scope of Work Pills */}
        <div className="boundary-scope">
          <h2 className="boundary-scope-title">
            The Problem
          </h2>
            <div className="boundary-description">
              <p>
               Boundary1 improved compliance speed using AI-assisted decisioning, but introduced a critical gap:
                &nbsp;
                <strong>Decisions were fast — but not explainable or defensible.</strong> 
                 <br/>
                  </p>
                  &nbsp;
                <p  className="solution-intro">This created two breakdowns:</p>
             
              
              <h3 className="solution-feature-heading">1. Reviewers</h3>

              <ul className="solution-list">
                <li>
                  Could not trace why a decision was made
                </li>
                <li>
                  Could not justify overrides during audits
                </li>
                <li>
                  Lacked evidence-linked reasoning
                </li>
              </ul>

              <h3 className="solution-feature-heading">2. Employees had</h3>

              <ul className="solution-list">
                <li>
                  No clarity on how data was used
                </li>
                <li>
                  No visibility into verification logic
                </li>
                <li>
                  Low trust in compliance outcomes
                </li>
              </ul>
            </div>
        </div>


     <h2 className="boundary-scope-title">What I designed</h2>
        <strong>Design Objective</strong>
            <p className="solution-intro">
             Turn compliance from a pass/fail workflow into a reviewable decision system. 
             I designed 4 core system capabilities:
             </p>
        <strong className="solution-feature-heading">1. Explainability Layer</strong> 
        Every decision links to:
          <ul className="solution-list">
            <li>rule triggered</li>
            <li>supporting evidence</li>
            <li>validation outcome</li>
          </ul>

        <h5 className="solution-feature-heading">2. Privacy & Consent Layer</h5> 
          <ul className="solution-list">
            <li>explicit consent per verification</li>
            <li>no passive tracking</li>
            <li>minimum-necessary data usage</li>
          </ul>

        <h5 className="solution-feature-heading">3. Auditability Layer</h5> 
          <ul className="solution-list">
            <li>full decision history</li>
            <li>override tracking</li>
            <li>structured audit logs</li>
          </ul>

        <h5 className="solution-feature-heading">4. Recovery Layer</h5> 
          <ul className="solution-list">
            <li>structured exception flows</li>
            <li>no dead-end failures</li>
            <li>guided correction paths</li>
          </ul>

        <section className="solution-section">
              <h2 className="boundary-scope-title">Product Walkthrough</h2>
              <h3 className="solution-feature-heading">1.  Compliance ops workspace</h3> 
              <p className="solution-intro">I moved compliance work from a lightweight approval flow into a <strong>desktop-first operational workspace.</strong> Research showed that compliance work extended beyond approvals. Reviewers needed a workspace for: anomaly investigation, queue prioritization, risk visibility, audit readiness across many cases at once. </p>
              
              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={boundaryPreview2} 
                  alt="Boundary Expense Compliance Platform Interface" 
                  className="solution-preview-image"
                />
              </div>

              <h3 className="solution-feature-heading">2.  Decision Explainability</h3> 
              <p  className="solution-intro"> I designed the review experience to show not only the outcome, but the logic behind it. </p>
              
              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={boundaryPreview3} 
                  alt="Boundary Expense Compliance Platform Interface" 
                  className="solution-preview-image"
                />
              </div>

             {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={boundaryPreview4} 
                  alt="Boundary Expense Compliance Platform Interface" 
                  className="solution-preview-image"
                />
              </div>
              <p className="solution-intro">The biggest shift in Boundary2 was making decisions inspectable instead of opaque. Reviewers did not need more raw information. They needed the minimum defensible explanation: rule → evidence → status → next action.</p>


              <h3 className="solution-feature-heading">3.  Consent and verification</h3> 
              <p className="solution-intro">Boundary2 makes compliance-related data usage visible where trust matters most: verification, consent, and status.
              Instead of relying on persistent tracking, the system uses explicit, point-in-time consent and minimum-necessary precision for location verification.</p>
              <ul className="solution-list">
                <li>
                   explicit consent per verification
               </li>
                <li>
                  no passive tracking
                </li>
                <li>
                  minimum-necessary data usage
                </li>
              </ul>
              
              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={boundaryPreview5} 
                  alt="Boundary Expense Compliance Platform Interface" 
                  className="solution-preview-image"
                />
              </div>
              
              <h3 className="solution-feature-heading">4. Recovery Layer</h3> 
              <p className="solution-intro">Boundary2 was designed to stay usable when compliance workflows break down.
                Instead of treating failures as dead ends, I created structured recovery flows for:</p>
              <ul className="solution-list">
                <li>
                   missing VAT information
               </li>
                <li>
                  payout failures
                </li>
                <li>
                  unreadable documents
                </li>
                <li>
                  duplicate receipts
                </li>
                <li>
                  consent-dependent verification
                </li>
                <li>
                  offline capture conditions
                </li>
              </ul>

              <p className="solution-intro">The principle behind these flows was simple:</p>
              <ul className="solution-list">
                <li>
                  when something goes wrong, users should understand the issue
               </li>
                <li>
                  they should also know what to do next
                </li>
              </ul>
         
              <div className="solution-preview-banner">
                <img 
                  src={boundaryPreview6} 
                  alt="Boundary Expense Compliance Platform Interface" 
                  className="solution-preview-image"
                />
              </div>
            </section>
        <br/>
        {/* System Model Schema */}
        <section className="solution-section">
        <div className="boundary-scope">
          <h2 className="boundary-scope-title">
            System Model
          </h2>
          
              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={boundaryPreview7} 
                  alt="System Model Schema" 
                  className="solution-preview-image"
                />
              </div> 
        </div>

          <h3 className="solution-feature-heading">My design focus:</h3> 
          <ul className="solution-list">
            <li>making AI outputs explainable in context</li>
            <li>making rule evaluation visible to reviewers</li>
            <li>making human overrides traceable for audit</li>
            <li>preventing workflow dead-ends via recovery flows</li>
          </ul>
         </section>

         <br/>

        <BoundaryTransition />
       
        <section className="solution-section">
        <div className="decisions-section">
        <h2 className="boundary-scope-title">Key Product Decisions</h2>
        <h3 className="solution-feature-heading">Core Trade-offs</h3>
        
        <div className="tradeoff-group">
          <strong>Explainability over Automation</strong>
          <ul className="solution-list">
            <li>Increased review complexity</li>
            <li>Enables defensible compliance decisions</li>
          </ul>
        </div>

          <strong>Consent over Continuous Tracking</strong>
          <ul className="solution-list">
            <li>Reduced passive data collection</li>
            <li>Improved user trust and transparency</li>
          </ul>
             
          <strong>Desktop Ops Workspace over Lightweight Flow</strong>
          <ul className="solution-list">
            <li>Added complexity in UI surface</li>
            <li>Necessary for audit + investigation workflows</li>
          </ul>
      </div>
    </section>
<br/>
        
        {/* Recovery flows & Edge Cases */}
                <section className="solution-section">
              <h2 className="boundary-scope-title">Validation and iterations</h2>
                 <p className="solution-intro">I tested Boundary2 through:</p>
              <ul className="solution-list">
                <li>4 moderated sessions with employees, finance ops, and compliance leadership</li>
                <li>4 SME reviews with compliance and privacy stakeholders.</li>
              </ul>

              <strong>What validation confirmed</strong>
              <ul className="solution-list">
                <li> trust increases when decisions are tied to rule + evidence</li>
                <li>reviewers prefer minimal defensible explanation over full data exposure.</li>
                <li>structured recovery reduces workflow breakdowns.</li>
                <li>reviewers prefer minimal defensible explanation over full data exposure.</li>
                <li>consent visibility improves employee confidence</li>
              </ul>  

              <strong>What changed through iteration</strong>
              <ul className="solution-list">
                <li> 1 → 2: moved validation and evidence higher in the hierarchy, and added a concise validation summary</li>
                <li>2 → 3: grouped validation results into clearer categories and reduced visual noise</li>
                <li>3 → 4: introduced a persistent audit trail, structured exception actions, and clearer privacy cues around verification precision</li>
              </ul>         
            </section>

            <br/>

             {/* Scope of Work Pills */}
          <div className="boundary-scope">
            <h2 className="boundary-scope-title">
              Outcome
            </h2>
            <ul className="solution-list">
                <li>improved audit defensibility</li>
                <li>increased trust between employees and compliance teams</li>
                <li>reduced ambiguity in exception handling</li>
                <li>supported scalable enterprise compliance workflows</li>             
              </ul> 
          </div>
          
{/* Showcase Image / Preview Banner Container */}
<div className="solution-preview-row">
  <div className="solution-preview-card">
    <img
      src={project3Img}
      alt="System Model Schema"
      className="solution-preview-card-image"
    />
  </div>
  <div className="solution-preview-card">
    <img
      src={project4Img}
      alt="System Model Schema2"
      className="solution-preview-card-image"
    />
  </div>
</div>

          {/* Scope of Work Pills */}
          <div className="boundary-scope">
            <h2 className="boundary-scope-title">
              Learnings
            </h2>
             <p className="solution-intro">I learned that in compliance systems, transparency is not a feature — <strong>it is the product itself.</strong> Trust is created when decisions are:</p> 
            <ul className="solution-list">
                <li>understandable</li>
                <li>reviewable</li>
                <li>accountable</li>           
              </ul> 
          </div>
          <br/>

            {/* Scope of Work Pills */}
          <div className="boundary-scope">
            <h2 className="boundary-scope-title">
              You've come this far
            </h2>
            <div className="boundary-tags">
              <span className="boundary-tag">Would you like to see the Desktop figma files?</span>
            </div>
          </div>

        {/* Live Site Link */}
        <div className="boundary-link-wrapper">
          <a
            href="https://www.figma.com/proto/5b9Mb6OIhwOrMXiGlbf7O8/Boundary?node-id=1293-6537&t=l05eTvFCWvFmXOIH-1&scaling=min-zoom&content-scaling=fixed&page-id=656%3A910&starting-point-node-id=1293%3A6537"
            target="_blank"
            rel="noopener noreferrer"         
            onClick={handleLiveSiteClick}
            className="boundary-live-link"
          >
            <span>View Live Prototype</span>
            <ArrowUpRight className="boundary-link-icon" />
          </a>
        </div>

        {/* Previous / Next Project Buttons */}
        <div className="boundary-project-nav">
          <button
            href="/projects/previous-project"
            className="boundary-nav-btn"
          >
            Previous Project
          </button>

          <button
            href="/projects/next-project"
            className="boundary-nav-btn"
          >
            Next Project
          </button>
        </div>

      </main>

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
}