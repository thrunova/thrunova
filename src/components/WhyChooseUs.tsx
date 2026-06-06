import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    label: 'Discover',
    heading: 'We start by understanding your world.',
    body: 'Before we write a single line of code, we dive deep into your business — your operations, bottlenecks, tools, and goals. We map every friction point and opportunity for intelligent automation.',
    bullets: ['Business & tech stack audit', 'Pain-point mapping', 'Opportunity assessment', 'Scope & timeline alignment'],
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop',
  },
  {
    num: '02',
    label: 'Architect',
    heading: 'We design before we build.',
    body: 'Every system is blueprinted for modularity, security, and scale. We produce a full technical architecture: data flows, API contracts, model selection, and infrastructure — before a single hour of development begins.',
    bullets: ['System architecture diagrams', 'API & data-flow design', 'Model & tool selection', 'Security & compliance planning'],
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=900&auto=format&fit=crop',
  },
  {
    num: '03',
    label: 'Engineer',
    heading: 'We build with precision and speed.',
    body: 'Agile sprints, daily standups, and rigorous testing. We ship iteratively so you see working software within weeks — not months. Every feature is peer-reviewed and tested before deployment.',
    bullets: ['Agile sprint methodology', 'Continuous integration & testing', 'Weekly progress demos', 'Zero-downtime deployments'],
    img: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=900&auto=format&fit=crop',
  },
  {
    num: '04',
    label: 'Deploy',
    heading: 'We launch and stay with you.',
    body: 'Go-live is just the beginning. We monitor performance, tune models, fix issues proactively, and iterate based on real usage data — ensuring your systems get better over time.',
    bullets: ['Controlled production release', 'Performance monitoring', 'Model fine-tuning & iteration', 'Ongoing support & optimisation'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const step = steps[active];

  return (
    <>
      <style>{`
        .wcu-section {
          background: #f5f5f0;
          border-top: 1.5px solid #e0e0da;
        }
        .wcu-tabs-wrapper {
          position: relative;
          margin-bottom: clamp(2rem, 4vw, 3.5rem);
        }
        .wcu-tabs-row {
          display: flex;
          border-bottom: 1.5px solid #e0e0da;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
        }
        .wcu-tabs-row::-webkit-scrollbar { display: none; }
        .wcu-tab-btn {
          flex: 1 0 auto;
          display: flex;
          flex-direction: row;
          align-items: baseline;
          gap: 0.5rem;
          padding: 1rem 0;
          margin-right: 2.5rem;
          scroll-snap-align: start;
          background: none;
          border: none;
          border-bottom: 2.5px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s ease;
          white-space: nowrap;
          min-width: 5rem;
        }
        .wcu-tab-btn:last-child { margin-right: 0; }
        @media (max-width: 767px) {
          .wcu-tab-btn:last-child { margin-right: 4.5rem; }
        }
        .wcu-tab-btn.active { border-bottom-color: #111; }
        .wcu-tab-num {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.125rem, 2.5vw, 1.625rem);
          font-weight: 800;
          color: #111;
          line-height: 1;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .wcu-tab-lbl {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.5625rem, 0.8vw, 0.6875rem);
          font-weight: 700;
          color: #bbb;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          transition: color 0.2s ease;
        }
        .wcu-tab-btn.active .wcu-tab-lbl,
        .wcu-tab-btn:hover .wcu-tab-lbl { color: #111; }

        /* Content panel */
        .wcu-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: start;
        }
        @media (max-width: 767px) {
          .wcu-panel { grid-template-columns: 1fr; }
        }
        .wcu-panel-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
          border: 1.5px solid #e0e0da;
        }
        .wcu-panel-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .wcu-panel-img-wrap:hover img { transform: scale(1.04); }
        .wcu-bullet-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.625rem;
        }
        .wcu-bullet-item {
          display: flex; align-items: center; gap: 0.625rem;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem; color: #444; line-height: 1.5;
        }
        .wcu-bullet-item::before {
          content: '';
          width: 5px; height: 5px;
          background: #111; border-radius: 0;
          flex-shrink: 0;
        }

        /* Value props row */
        .wcu-values-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
          gap: 0;
          border-top: 1.5px solid #e0e0da;
          border-left: 1.5px solid #e0e0da;
          margin-top: clamp(2.5rem, 5vw, 4.5rem);
        }
        .wcu-value-cell {
          padding: clamp(1.25rem,2.5vw,2rem);
          border-right: 1.5px solid #e0e0da;
          border-bottom: 1.5px solid #e0e0da;
          transition: background 0.2s ease;
        }
        .wcu-value-cell:hover { background: #fffffe; }
        .wcu-value-num {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.375rem;
        }
        .wcu-value-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #999;
          margin-bottom: 0.5rem;
        }
        .wcu-value-desc {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.8125rem;
          color: #666;
          line-height: 1.6;
        }

        /* panel transition */
        @keyframes wcu-slide-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wcu-content { animation: wcu-slide-in 0.35s ease forwards; }

        .wcu-scroll-mask {
          display: none;
        }
        @media (max-width: 767px) {
          .wcu-scroll-mask {
            display: flex; align-items: center; justify-content: flex-end;
            position: absolute; top: 0; right: 0; bottom: 0;
            width: 4rem;
            background: linear-gradient(to right, rgba(245,245,240,0) 0%, rgba(245,245,240,1) 80%);
            pointer-events: none;
            z-index: 10;
          }
        }
      `}</style>

      <section ref={sectionRef} id="why-choose-us" className="wcu-section section-py">
        <div className="container-fluid">
          {/* Header */}
          <div className="scroll-reveal" style={{ marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>
            <span className="section-badge">How It Works</span>
            <h2 className="text-headline-xl" style={{ maxWidth: '36rem' }}>
              A rigorous process.<br />Reliable results.
            </h2>
          </div>

          {/* Tab Row */}
          <div className="scroll-reveal wcu-tabs-wrapper">
            <div className="wcu-tabs-row">
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  className={`wcu-tab-btn${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-selected={active === i}
                >
                  <span className="wcu-tab-num">{s.num}</span>
                  <span className="wcu-tab-lbl">{s.label}</span>
                </button>
              ))}
            </div>
            <div className="wcu-scroll-mask">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.35, marginRight: '0.25rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Content Panel */}
          <div className="wcu-content wcu-panel" key={active}>
            {/* Left — Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem,2.5vw,2rem)' }}>
              <div>
                <p style={{ fontFamily: 'IBM Plex Sans', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#aaa', marginBottom: '0.75rem' }}>
                  Step {step.num}
                </p>
                <h3 className="text-headline-lg" style={{ marginBottom: '1rem' }}>{step.heading}</h3>
                <p className="text-body-md" style={{ maxWidth: '34rem' }}>{step.body}</p>
              </div>

              <ul className="wcu-bullet-list">
                {step.bullets.map((b) => (
                  <li key={b} className="wcu-bullet-item">{b}</li>
                ))}
              </ul>

              <div>
                <a href="#contact" className="btn-black" id={`wcu-cta-${step.num}`}>
                  Get Started
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Image */}
            <div className="wcu-panel-img-wrap">
              <img src={step.img} alt={step.label} loading="lazy" />
              {/* Number watermark */}
              <div style={{
                position: 'absolute', bottom: '1rem', right: '1.25rem',
                fontFamily: 'IBM Plex Sans', fontSize: '5rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.18)', lineHeight: 1, userSelect: 'none',
              }}>
                {step.num}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="scroll-reveal wcu-values-row">
            {[
              { num: '100%', label: 'Custom-Built', desc: 'Every system engineered from scratch for your specific needs.' },
              { num: '24/7', label: 'Support', desc: 'Round-the-clock monitoring and dedicated post-launch support.' },
              { num: '3×', label: 'Speed Gain', desc: 'Average operational speed improvement across our deployments.' },
              { num: '∞', label: 'Scalability', desc: 'Infrastructure designed to grow without re-engineering.' },
            ].map((v) => (
              <div key={v.label} className="wcu-value-cell">
                <div className="wcu-value-num">{v.num}</div>
                <div className="wcu-value-label">{v.label}</div>
                <div className="wcu-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
