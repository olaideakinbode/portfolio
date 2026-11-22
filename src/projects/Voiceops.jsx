import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './boundary.css'; // Import the specific CSS for the Boundary case study
import './ProjectSnapshot.css';
import ProjectSnapshotVoiceops from './ProjectSnapshotVoiceops';
import VoiceopDS from '../imgs/11.webp'
import VoiceopConversations from '../imgs/10.webp'
import VoiceopConversationsFeed from '../imgs/12.webp'
import VoiceopCommandCenter from '../imgs/9.webp'
import VoiceopsDashboard from '../imgs/8.png'

export default function VoiceOps() {
  const handleLiveSiteClick = (e) => {
    e.preventDefault();
    // Action handler for live site link
  };

  return (
    <div className="portfolio-container boundary-page">
      {/* Shared Navigation Header */}
      <Navbar />

      {/* Main Case Study Content Container */}
      <main className="boundary-content">
        
        {/* Main Headline */}
        <h1 className="boundary-title">
          VoiceOps — AI Voice Operations System
        </h1>

        {/* Client & Year Metadata */}
        <div className="boundary-meta">
          <div className="boundary-meta-item">
            <span className="boundary-meta-label">Domain</span>
            <span className="boundary-meta-value">AI Operations • Human Oversight</span>
          </div>
          <div className="boundary-meta-item">
            <span className="boundary-meta-label">Year</span>
            <span className="boundary-meta-value">2026</span>
          </div>
        </div>

        {/* Project Description */}
        <div className="boundary-description">
          <p>
            As AI voice agents move into production, teams need visibility, operational control, and human oversight when conversations become uncertain. VoiceOps explores how operations teams monitor AI conversations, identify risk, and intervene with confidence. VoiceOps was designed to monitor, govern, and continuously improve autonomous voice agents in production. 
          </p>
        </div>

        {/* Showcase Image / Preview Banner Container */}
        <div className="solution-preview-banner">
            <img 
                src={VoiceopsDashboard} 
                alt="VoiceopsDashboard" 
                className="solution-preview-image"
            />
        </div>

        
        {/* Scope of Work Pills */}
        <div className="boundary-scope">
            <div className="boundary-description">
            <ProjectSnapshotVoiceops />
           </div>
        </div>

        {/* Scope of Work Pills */}
        <div className="boundary-scope">
          <h2 className="boundary-scope-title">
            The Opportunity
          </h2>
            <div className="boundary-description">
              <p>
              <strong>Building AI voice agents is only half the challenge. Operating them in production is the other.</strong>
               &nbsp; As organizations deploy AI voice agents across customer support, collections, and sales, they face a new operational reality: conversations become unpredictable, edge cases emerge, and human intervention remains essential.</p>
                <br/>
                <p>In 2024, McDonald's ended its multi-year AI drive-thru pilot after real-world deployments highlighted these challenges at scale—from handling uncertainty to managing complex customer interactions.
                <br/>
                This raises a broader question: &nbsp;

                <strong>What tools do operations teams need once AI voice agents are in production?</strong> </p>
          
              </div>
        </div>
    

        {/* Scope of Work Pills */}
        <div className="boundary-scope">
          <h2 className="boundary-scope-title">
            Why VoiceOps?
          </h2>
            <div className="boundary-description">
              <p>
              As organizations deploy AI voice agents across customer support, collections, and sales, they need more than deployment tools.
                  They need operational visibility, explainability, governance, and human oversight. 
                  <br/>
                  <strong>VoiceOps is designed to become that operational control layer.</strong> </p>
             
              <br/>
              <h3 className="solution-feature-heading"> VoiceOPs Workflow</h3> 
              
                    Customer
                    <br/>↓
                   <br/> AI Voice Agent
                    <br/>↓
                    <br/>Live Conversations
                    <br/>↓
                   <br/> VoiceOps
                Monitor • Detect Risk • Investigate • Govern • Improve 
              
        </div>
        </div>

        {/* Scope of Work Pills */}
        <div className="boundary-scope">
          <h2 className="boundary-scope-title">
            Key Operational Questions
          </h2>
            <div className="boundary-description">
              <p>
              VoiceOps was designed around the questions operations teams need answered while supervising AI voice agents in production:</p>
             
              <br/>
                      
              <strong className="solution-intro"> The screens answers:</strong>
              <ul className="solution-list">
                <li>
                 How many AI sessions are active right now?
                </li>
                <li>
                 What percentage are being resolved autonomously?
                </li>
                <li>
                 Are human handoffs increasing?
                </li>
                <li>
                 Which conversations require review?
                </li>
                <li>
                 Where is customer sentiment declining?
                </li>
                <li>
                 What should happen after an escalation? 
                </li>
              </ul>
                        
        </div>
        </div>

        {/* Scope of Work Pills */}
        <div className="boundary-scope">
          <h2 className="boundary-scope-title">
            MVP Scope
          </h2>
            <div className="boundary-description">
              <p>
              The first release focuses on the three operational workflows required to supervise AI voice systems in production.</p>
             
              <br/>
              <h3 className="solution-feature-heading"> VoiceOPs Workflow</h3> 
              
                    Observe
                    <br/>↓
                   <br/> Investigate
                    <br/>↓
                    <br/>Resolve             
        </div>
        </div>


        <section className="solution-section">
              <h2 className="boundary-scope-title">What I designed</h2>
                 <h3 className="solution-feature-heading">1.  AI Operations Command Center (Observe)</h3> 
              <p className="solution-intro">Operators need to understand overall system health and identify anomalies before investigating individual interactions. The dashboard prioritizes trends, KPIs, and anomalies to support rapid triage</p>
          
              <strong className="solution-intro">This screen answers:</strong>
              <ul className="solution-list">
                <li>
                  How many AI sessions are active?
               </li>
                <li>
                 What percentage are being resolved autonomously?
                </li>
                <li>
                  Are human handsoffs increasing?
                </li>
                </ul>


              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={VoiceopCommandCenter}
                  alt="Voiceops Command Center" 
                  className="solution-preview-image"
                />
              </div>


              <h3 className="solution-feature-heading">2. Conversations Feed & Lifecycle History (Investigate)</h3> 
              <p  className="solution-intro"> <strong>Why this layout?</strong>
                <br/>
                The feed emphasizes operational signals—status, sentiment, outcomes, and lifecycle events—allowing teams to identify high-priority interactions before opening a full workspace.</p>

            
              <strong className="solution-intro"> The screens answers:</strong>
              <ul className="solution-list">
                <li>
                 Which AI sessions require review?
                </li>
                <li>
                 Where is customer sentiment trending negative?
                </li>
              </ul>


              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={VoiceopConversationsFeed}
                  alt="Voiceops Conversation Feed Workspace" 
                  className="solution-preview-image"
                />
              </div>

              <h3 className="solution-feature-heading">3. Conversation Workspace (Resolve) </h3> 
              <p  className="solution-intro"> <strong>Why this layout?</strong>
                <br/>
                The workspace consolidates transcripts, AI summaries, reasoning, and resolution tools into a single view, minimizing context switching during investigations.</p>

            
              <p className="solution-intro"> It is the investigation and action workspace where operators ask:</p>
              <ul className="solution-list">
                <li>
                 What action should follow this escalation?
                </li>
              </ul>


              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={VoiceopConversations}
                  alt="Voiceops Conversation Workspace" 
                  className="solution-preview-image"
                />
              </div>


              <h3 className="solution-feature-heading">Design Principles</h3> 
              <strong>Observe</strong>
              <ul className="solution-list">
                <li>
                   <strong>Operational Visibility Before Investigation</strong>
                   <br/>
                    Operators need to understand overall system health before inspecting individual interactions. The dashboard surfaces trends and anomalies first, enabling faster prioritization.
               </li>
                <li>
                   <strong>Designed for Operational Scale</strong>
                   <br/>
                    Information hierarchy, reusable components, and progressive disclosure help teams supervise hundreds of AI interactions without overwhelming the interface.
               </li>
              </ul>

              <strong>Investigate</strong>
              <ul className="solution-list">
                <li>
                   <strong>Investigation Without Context Switching</strong>
                   <br/>
                    Everything needed to understand an AI interaction—including transcripts, summaries, metadata, lifecycle history, and actions—is brought into a single workspace to reduce cognitive overhead.
               </li>
                <li>
                   <strong>Explainability by Default</strong>
                   <br/>
                    AI decisions should never appear as black boxes. Confidence indicators, reasoning summaries, and lifecycle history provide the context needed to understand how an outcome was reached.
               </li>
              </ul>

              <strong>Resolve</strong>
              <ul className="solution-list">
                <li>
                   <strong>AI-First, Human-Supervised</strong>
                   <br/>
                    AI should automate routine work, but operators must remain informed and in control. Every workflow is designed to support confident human intervention when required.
               </li>
                <li>
                   <strong>Designed for Operational Scale</strong>
                   <br/>
                    Escalation is not treated as failure. The interface supports smooth transitions between autonomous AI handling and human decision-making, preserving context throughout the investigation.
               </li>
              </ul>

              <p className="solution-intro">Together, these principles shaped every interface in the MVP—from the Command Center to the Conversation Workspace—ensuring the product supports real operational decisions rather than simply visualizing AI activity.</p>

              <h3 className="solution-feature-heading">Design System Foundations</h3> 
              <strong>Communicate</strong>
              <ul className="solution-list">
                <li>
                  Semantic Colors
                </li>
                <li>
                  Typography
                </li>
                <li>
                  Status Components
                </li>
              </ul>
             <strong>Structure</strong>
              <ul className="solution-list">
                <li>
                  Spacing
                </li>
                <li>
                  Grid
                </li>
                <li>
                  Components
                </li>
              </ul>

              <strong>Scale</strong>
              <ul className="solution-list">
               <li>
                  Design Tokens
               </li>
                <li>
                  Reusability
               </li>
                <li>
                  Consistency
                </li>
              </ul>



              {/* Showcase Image / Preview Banner Container */}
              <div className="solution-preview-banner">
                <img 
                  src={VoiceopDS} 
                  alt="Voiceops Design System" 
                  className="solution-preview-image"
                />
              </div>
            </section>




        {/* Recovery flows & Edge Cases */}
                <section className="solution-section">
              <h2 className="boundary-scope-title">Roadmap</h2>
                 <p className="solution-intro">The MVP establishes the core operational workflows for supervising AI voice agents in production. Future iterations will expand the platform's governance, observability, and continuous improvement capabilities.</p>

              <strong>Today</strong>
               <ul className="solution-list">
                <li>MVP
                  <ul className="marked-list">
                      <li className="marked">Observe</li>
                      <li className="marked">Investigate</li>
                      <li className="marked">Resolve</li>
                  </ul>
                </li>
              </ul>

              <strong>Next</strong>
              <ul className="solution-list">
                <li>AI Evaluation</li>
                <li>Prompt Management</li>
                <li>Analytics</li>
                <li>Knowledge Base</li>  
                <li>Reporting</li> 
                <li>Governance</li>            
              </ul>         
            </section>

    
          {/* Scope of Work Pills */}
          <div className="boundary-scope">
            <h2 className="boundary-scope-title">
              Learnings
            </h2>
             <p className="solution-intro">VoiceOps reinforced an important product design principle:  &nbsp; successful AI products are defined not only by  the intelligence of their models, but by the quality of the operational systems that support them. </p>
          
             <p className="solution-intro"> Designing the MVP around three core workflows—Observe, Investigate, and Resolve—helped me prioritize clarity, governance, and human oversight over feature complexity.</p>
      
              <p className="solution-intro">VoiceOps demonstrates how thoughtful product design can bridge the gap between AI capability and operational trust—turning autonomous voice agents into systems that organizations can confidently supervise at scale.</p>
          </div>


            {/* Scope of Work Pills */}
          <div className="boundary-scope">
            <h2 className="boundary-scope-title">
              You've come this far
            </h2>
            <div className="boundary-tags">
              <span className="boundary-tag">Would you like to see the figma files?</span>
            </div>
          </div>

        {/* Live Site Link */}
        <div className="boundary-link-wrapper">
          <a
            href="https://www.figma.com/proto/5b9Mb6OIhwOrMXiGlbf7O8/Boundary?node-id=1716-2281&t=eT9I75ROg0vKV3OB-1&scaling=min-zoom&content-scaling=fixed&page-id=656%3A910&starting-point-node-id=1293%3A6537"
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