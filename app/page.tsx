export default function Home() {
  return (
    // <>...</> groups elements without adding an extra box to the page.
    <>
      <header className="wrap site-header">
        {/* aria-label tells screen readers what an icon-only link does */}
        <a href="#top" className="mark" aria-label="Back to top">
          M
        </a>
        <nav aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="wrap">
        <section aria-label="Introduction">
          <p className="mono">MALEESHA BASNAYAKE · MELBOURNE</p>
          {/* Inline style is fine for one-off tweaks; it's replaced in step 3 */}
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)", margin: "8px 0 0" }}>
            Maleesha Basnayake
          </h1>
          <p style={{ color: "var(--ink-muted)", margin: "10px 0 0" }}>
            Hero goes here (step 3)
          </p>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <span className="mono">§01</span>
            <h2>Projects</h2>
          </div>
          <p>Run table goes here (step 5)</p>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <span className="mono">§02</span>
            <h2>Skills</h2>
          </div>
          <p>Skills go here (step 6)</p>
        </section>

        <section id="contact" className="section">
          <div className="section-head">
            <span className="mono">§03</span>
            <h2>Contact</h2>
          </div>
          <p>Contact goes here (step 7)</p>
        </section>
      </main>

      <footer className="wrap site-footer">
        <p className="mono">© 2026 MALEESHA BASNAYAKE · MELBOURNE</p>
      </footer>
    </>
  );
}