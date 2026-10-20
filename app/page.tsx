export default function Home() {
  return (
    <div className="wrap">
      <header className="site">
        <div className="mark" aria-hidden="true">M</div>
        <nav className="contact-links" aria-label="Quick links">
          <a href="mailto:[email protected]">Email</a>
          <a href="https://github.com/yourhandle" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener">
            LinkedIn
          </a>
        </nav>
      </header>

      <section className="hero" aria-label="Introduction">
        <h1>Maleesh</h1>
        <p className="role">
          Final-Year Computer Science Undergraduate | Artificial Intelligence
          — Swinburne University of Technology
        </p>
        <p className="statement">
          I build systems that turn messy real-world signal —{" "}
          <strong>video, conversation, operational data</strong> — into
          structured predictions people can actually act on.
        </p>

        <svg
          className="signal"
          viewBox="0 0 420 120"
          role="img"
          aria-label="Illustration of connected data points"
        >
          <line x1="40" y1="80" x2="120" y2="30" />
          <line x1="120" y1="30" x2="210" y2="55" />
          <line x1="210" y1="55" x2="300" y2="20" />
          <line x1="210" y1="55" x2="260" y2="95" />
          <line x1="40" y1="80" x2="130" y2="100" />
          <path
            className="draw"
            d="M40,80 L120,30 L210,55 L300,20 M210,55 L260,95 M40,80 L130,100"
          />
          <circle className="pop" cx="40" cy="80" r="4" style={{ animationDelay: "0.3s" }} />
          <circle className="pop node-main" cx="120" cy="30" r="5" style={{ animationDelay: "0.55s" }} />
          <circle className="pop" cx="210" cy="55" r="4" style={{ animationDelay: "0.8s" }} />
          <circle className="pop" cx="300" cy="20" r="4" style={{ animationDelay: "1.0s" }} />
          <circle className="pop" cx="260" cy="95" r="4" style={{ animationDelay: "1.05s" }} />
          <circle className="pop" cx="130" cy="100" r="4" style={{ animationDelay: "1.1s" }} />
        </svg>
      </section>

      <section aria-label="Selected work">
        <div className="section-head">
          <h2>Selected work</h2>
          <span className="count mono">3 projects</span>
        </div>

        <div className="project">
          <div className="meta">
            Capstone team project
            <br />
            6 members
            <span className="badge">Best Project Award, Capstone Expo 2025</span>
          </div>
          <div>
            <h3>AI-Powered Simulated Client System</h3>
            <p>
              Built for clinical psychology training: a system that plays a
              simulated client so trainee psychologists can rehearse real
              sessions before working with real people. I owned the backend
              and testing on a six-person team, running on Python with
              Meta&apos;s Llama 4 Maverick as the underlying model.
            </p>
            <div className="stack mono">
              Python · Llama 4 Maverick · backend &amp; testing
            </div>
          </div>
        </div>

        <div className="project">
          <div className="meta">
            Group project
            <br />
            5 members
          </div>
          <div>
            <h3>Facial Recognition with Emotion &amp; Liveness Detection</h3>
            <p>
              A face verification system with liveness detection, emotion
              detection, and a live webcam interface — built under a rule
              that ruled out any fully pre-trained model left untouched, so
              every component needed genuine transfer learning and
              fine-tuning. Identity matching combines a MobileNetV2
              classifier with a ResNet18 model trained on triplet metric
              learning, compared via cosine and Euclidean distance and
              evaluated with ROC/AUC.
            </p>
            <div className="stack mono">
              MobileNetV2 · ResNet18 triplet learning · webcam UI
            </div>
          </div>
        </div>

        <div className="project">
          <div className="meta">Applied ML project</div>
          <div>
            <h3>Civil Aviation Machine-Learning Project</h3>
            <p>
              An end-to-end look at what drives flight prices and delays —
              not just a notebook, but a full pipeline: data processing and
              cleaning, a trained model, a website and database to serve it,
              and monitoring after deployment.
            </p>
            <div className="stack mono">
              data pipeline · web app · deployment &amp; monitoring
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Background">
        <div className="section-head">
          <h2>Background</h2>
        </div>
        <div className="bg-item">
          <div className="what">
            <strong>
              Bachelor of Computer Science, majoring in Artificial Intelligence
            </strong>
            <span>Swinburne University of Technology</span>
          </div>
          <div className="when mono">Final semester</div>
        </div>
        <p className="toolkit">
          Recurring toolkit across these projects: Python, model training in
          Colab, computer vision, applied LLMs, and shipping the result as a
          working website with a database behind it — not just a notebook.
        </p>
      </section>

      <section aria-label="Contact">
        <div className="section-head">
          <h2>Get in touch</h2>
        </div>
        <div className="contact-cta">
          <a href="mailto:[email protected]">
            <span>Email</span>
            <span className="label">[email protected]</span>
          </a>
          <a href="https://github.com/yourhandle" target="_blank" rel="noopener">
            <span>GitHub</span>
            <span className="label">github.com/yourhandle</span>
          </a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener">
            <span>LinkedIn</span>
            <span className="label">linkedin.com/in/yourhandle</span>
          </a>
        </div>
      </section>

      <footer>Built and maintained as a living record of ongoing work.</footer>
    </div>
  );
}