import './Portfolio.css';

export default function Tools() {
    return (
        <div>
            {/* Tools Section */}
      <section className="tools-section">
        <span className="section-label">MY STACK</span>
        <h2 className="section-title">Tools I Build With</h2>
        <p className="section-subtitle">A collection of technologies I rely on to craft clean, robust user interfaces.</p>

        <div className="tools-grid">
          <div className="tool-card"><span className="tool-icon">⚛️</span> HTML5</div>
          <div className="tool-card"><span className="tool-icon">🎨</span> CSS3</div>
          <div className="tool-card"><span className="tool-icon">🟨</span> JavaScript</div>
          <div className="tool-card"><span className="tool-icon">🟦</span> React</div>
          <div className="tool-card"><span className="tool-icon">🔺</span> Next.js</div>
          <div className="tool-card"><span className="tool-icon">🔴</span> Redux</div>
          <div className="tool-card"><span className="tool-icon">🌊</span> Tailwind CSS</div>
          <div className="tool-card"><span className="tool-icon">💎</span> Sass</div>
          <div className="tool-card"><span className="tool-icon">🟢</span> GSAP</div>
          <div className="tool-card"><span className="tool-icon">📘</span> TypeScript</div>
          <div className="tool-card"><span className="tool-icon">⚛️</span> Vite</div>
          <div className="tool-card"><span className="tool-icon">⚙️</span> Git</div>
        </div>
      </section>

        </div>
    )
}