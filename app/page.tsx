import Hero from "@/components/Hero";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <header className="wrap site-header">
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
        <Hero />

        <section id="projects" className="section">
          <div className="section-head">
            <span className="mono">§01</span>
            <h2>Projects</h2>
          </div>
          <ul>
            {projects.map((p) => (
              <li key={p.slug}>
                {p.title} · <span className="mono">{p.headline}</span>
              </li>
            ))}
          </ul>
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