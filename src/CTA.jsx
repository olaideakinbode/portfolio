import './Portfolio.css';

export default function CTA() {
    return (
       <div>
        {/* CTA Banner */}
        <section className="cta-section" id="contact">
            <div className="cta-banner">
            <div className="cta-overlay"></div>
            <div className="cta-content">
                <h2>Let's Build Something Great.</h2>
                <p>I am available for freelance projects, full-time product design roles, frontend or full stack development.</p>
                <a href="mailto:olaideakinbode@gmail.com" target="_blank" className="btn-primary">Contact Me →</a>
            </div>
            </div>
        </section>

       </div> 
    )
}
    