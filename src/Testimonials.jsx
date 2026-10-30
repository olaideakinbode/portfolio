import './Portfolio.css';

export default function Testimonials() {
    return (
      <div>
        <div>
            {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <span className="section-label">TESTIMONIALS</span>
        <h2 className="section-title">Don't just take my word for it</h2>
        <p className="section-subtitle">Here is what colleagues and clients have to say about working with me.</p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="author-info">
              <img src="https://i.pravatar.cc/100?img=33" alt="John Smith" />
              <div>
                <h4>John Smith</h4>
                <p>Engineering Manager, Stripe</p>
              </div>
            </div>
            <p className="testimonial-text">"Samuel delivered outstanding work. His attention to detail and React knowledge made our product launch smooth and stress-free."</p>
          </div>

          <div className="testimonial-card">
            <div className="author-info">
              <img src="https://i.pravatar.cc/100?img=47" alt="Michael Chen" />
              <div>
                <h4>Michael Chen</h4>
                <p>Lead Designer, Airbnb</p>
              </div>
            </div>
            <p className="testimonial-text">"Working with Samuel was a pleasure. He bridged the design-to-code gap flawlessly and delivered clean, pixel-perfect UI."</p>
          </div>

          <div className="testimonial-card">
            <div className="author-info">
              <img src="https://i.pravatar.cc/100?img=12" alt="David Park" />
              <div>
                <h4>David Park</h4>
                <p>CTO, Linear</p>
              </div>
            </div>
            <p className="testimonial-text">"Fast, reliable, and highly knowledgeable. Samuel helped us scale our front-end infrastructure with ease."</p>
          </div>

          <div className="testimonial-card">
            <div className="author-info">
              <img src="https://i.pravatar.cc/100?img=5" alt="Sarah Johnson" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Senior Developer, Microsoft</p>
              </div>
            </div>
            <p className="testimonial-text">"Samuel has a deep understanding of web performance and user experience. I highly recommend him for complex React apps."</p>
          </div>

          <div className="testimonial-card">
            <div className="author-info">
              <img src="https://i.pravatar.cc/100?img=9" alt="Karen Ross" />
              <div>
                <h4>Karen Ross</h4>
                <p>Product Manager, Figma</p>
              </div>
            </div>
            <p className="testimonial-text">"An exceptional engineer who consistently delivers top-quality code. Samuel is a vital asset to any front-end project."</p>
          </div>
        </div>
      </section>

        </div>
      </div>
    )
}