import { useState } from 'react';
import { company, processSteps, projects, proofPoints, services } from './data/site.js';

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon">
      <path d="M3 10h13M10 4l6 6-6 6" />
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? 'footer-brand' : ''}`} href="#top" aria-label="ATinfotech home">
      <span className="brand-icon" aria-hidden="true">AT</span>
      <span className="brand-lockup">
        <strong>ATinfotech</strong>
        <small>Digital agency</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="demo-ribbon">
        <span className="ribbon-mark">AT</span>
        <span><strong>ATinfotech Digital Agency Demo</strong><i />Concept preview · Surat, Gujarat</span>
        <a href={company.website} target="_blank" rel="noreferrer">Visit company website <ArrowIcon diagonal /></a>
      </div>

      <header className="site-header" id="top">
        <div className="nav-wrap">
          <Brand />
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-cta" href={company.contact} onClick={closeMenu}>Let’s talk <ArrowIcon diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />Digital agency <span className="eyebrow-slash">/</span> Surat, India</p>
            <h1 id="hero-title">Digital experiences that <span>move business <em>forward.</em></span></h1>
            <p className="hero-description">We design and build websites, software and mobile products that help businesses work smarter and grow with confidence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={company.contact}>Start a project <ArrowIcon diagonal /></a>
              <a className="button button-quiet" href="#work">Explore our work <ArrowIcon /></a>
            </div>
            <div className="hero-proofline">
              <span className="proofline-spark">✳</span>
              <span>Strategy <b>·</b> Design <b>·</b> Development <b>·</b> Growth</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/digital-studio.jpg"
              alt="A modern digital studio workspace with large screens showing website design concepts"
              fetchPriority="high"
            />
            <div className="hero-image-overlay" />
            <div className="hero-visual-label"><span className="visual-label-dot" />Ideas to impact</div>
            <div className="hero-floating-card">
              <span className="floating-card-kicker">YOUR DIGITAL PARTNER</span>
              <span className="floating-card-title">Built around<br /><em>your next move.</em></span>
              <span className="floating-card-arrow"><ArrowIcon diagonal /></span>
            </div>
            <span className="hero-coordinate">21.1702° N&nbsp;&nbsp; 72.8311° E</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="ATinfotech highlights">
          <div className="proof-strip-inner section-frame">
            {proofPoints.map((item, index) => (
              <div className="proof-item" key={item.value}>
                <span className="proof-value">{item.value}</span>
                <span className="proof-label">{item.label}</span>
                {index < proofPoints.length - 1 && <span className="proof-separator" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>

        <section className="services-section section-frame" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" />What we do <span className="section-index">/ 01</span></p>
              <h2 id="services-title">One team. <span>Every digital <em>move.</em></span></h2>
            </div>
            <div className="heading-aside">
              <p>From your first idea to what comes next, we bring strategy, design and technology together under one roof.</p>
              <a className="inline-link" href={company.contact}>Discuss your project <ArrowIcon diagonal /></a>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-code">{service.code}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="service-card-link" href={company.contact} aria-label={`Discuss ${service.title} with ATinfotech`}>
                  <ArrowIcon diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="work-inner section-frame">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" />Selected work <span className="section-index">/ 02</span></p>
                <h2 id="work-title">A few things <span>we’ve helped <em>bring to life.</em></span></h2>
              </div>
              <p className="work-intro">A snapshot of ideas turned into useful digital experiences.</p>
            </div>

            <p className="visual-disclaimer"><span>Note</span> Project links are real portfolio destinations; images below are AI-generated concept visuals, not actual client screenshots.</p>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.theme}`} key={project.number}>
                  <a className="project-image-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>
                    <div className="project-image-wrap">
                      <img src={project.image} alt={project.alt} loading="lazy" />
                      <span className="project-number">PROJECT / {project.number}</span>
                      <span className="project-open"><ArrowIcon diagonal /></span>
                    </div>
                  </a>
                  <div className="project-info">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h3>
                      <p className="project-copy">{project.copy}</p>
                    </div>
                    <a className="project-text-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} in a new tab`}><ArrowIcon diagonal /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-frame" id="approach" aria-labelledby="approach-title">
          <div className="approach-heading">
            <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" />How we work <span className="section-index">/ 03</span></p>
            <h2 id="approach-title">Clear thinking.<br /><em>Thoughtful making.</em></h2>
            <p>Good digital work starts with listening. Then we make a plan, build with care and keep improving together.</p>
            <a className="inline-link" href={company.contact}>Tell us what you’re planning <ArrowIcon diagonal /></a>
          </div>
          <div className="approach-steps">
            {processSteps.map((step) => (
              <article className="approach-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                <span className="step-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-frame">
            <div className="about-left">
              <p className="eyebrow"><span className="eyebrow-line" />About ATinfotech <span className="section-index">/ 04</span></p>
              <h2 id="about-title">Rooted in Surat.<br /><span>Ready for <em>what’s next.</em></span></h2>
            </div>
            <div className="about-right">
              <p className="about-lede">ATinfotech is a full-service digital agency partnering with businesses to create practical, scalable digital solutions.</p>
              <p>Since 2009, we’ve worked across websites, custom software, eCommerce, mobile apps and digital growth. Our team combines thoughtful design and modern technology to help turn business challenges into clear, useful experiences.</p>
              <div className="tech-stack" aria-label="Technologies">
                <span>React</span><span>Node.js</span><span>Python</span><span>Laravel</span><span>WordPress</span><span>Android</span>
              </div>
              <a className="inline-link about-link" href={company.website} target="_blank" rel="noreferrer">More about ATinfotech <ArrowIcon diagonal /></a>
            </div>
          </div>
        </section>

        <section className="contact-section section-frame" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-art" aria-hidden="true">
              <span className="art-orbit orbit-one" />
              <span className="art-orbit orbit-two" />
              <span className="art-core">AT</span>
              <span className="art-label art-label-one">IDEA</span>
              <span className="art-label art-label-two">BUILD</span>
              <span className="art-label art-label-three">GROW</span>
            </div>
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-line" />Your next chapter starts here</p>
              <h2 id="contact-title">Have an idea?<br /><em>Let’s make it happen.</em></h2>
              <p>Tell us what you’re building, what’s getting in the way or where you want to grow. We’ll help you find a clear next step.</p>
              <a className="button button-light" href={company.contact} target="_blank" rel="noreferrer">Start a conversation <ArrowIcon diagonal /></a>
              <span className="contact-location">Based in {company.location} <i /> Working with teams everywhere</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-frame">
          <div className="footer-brand-area">
            <Brand footer />
            <p>Digital solutions built with care<br />for businesses ready to grow.</p>
          </div>
          <div className="footer-nav-group">
            <span className="footer-label">EXPLORE</span>
            <a href="#services">Services</a>
            <a href="#work">Selected work</a>
            <a href="#approach">Our approach</a>
          </div>
          <div className="footer-nav-group">
            <span className="footer-label">CONNECT</span>
            <a href={company.contact} target="_blank" rel="noreferrer">Start a project <ArrowIcon diagonal /></a>
            <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
            <a href={company.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
          </div>
          <div className="footer-location">
            <span className="footer-label">FIND US</span>
            <span>{company.location}</span>
            <a href={company.website} target="_blank" rel="noreferrer">atinfotech.com <ArrowIcon diagonal /></a>
          </div>
        </div>
        <div className="footer-bottom section-frame">
          <span>© {new Date().getFullYear()} ATinfotech. All rights reserved.</span>
          <span>Digital agency demo · Surat, India</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
