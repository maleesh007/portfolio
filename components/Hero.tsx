import { site } from "@/data/site";
import NetworkMap from "./hero/NetworkMap";
import { buildNetwork, TALL, WIDE } from "./hero/network";

// Calculated once when the page is built, not on every visit.
const wide = buildNetwork(WIDE);
const tall = buildNetwork(TALL);

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <p className="mono">
        {site.location.toUpperCase()} · {site.availability.toUpperCase()}
      </p>
      <h1>{site.name}</h1>
      <p className="hero-headline">{site.headline}</p>
      <p className="hero-tagline">{site.tagline}</p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View projects
        </a>
        {/* Only shows once you've added a résumé link in data/site.ts */}
        {site.links.resume && (
          <a className="btn" href={site.links.resume} download>
            Download résumé
          </a>
        )}
      </div>

      <figure className="hero-map">
        {/* Both drawings are in the page; CSS shows the one that fits the screen. */}
        <NetworkMap net={wide} className="net-wide" />
        <NetworkMap net={tall} className="net-tall" />
        <figcaption className="mono">projects arranged by theme</figcaption>
      </figure>

      <ul className="facts">
        {site.quickFacts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}