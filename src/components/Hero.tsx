const socials = [
  {
    label: 'Instagram', color: '#E1306C', href: 'https://instagram.com/thrunova',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>,
  },
  {
    label: 'LinkedIn', color: '#0A66C2', href: 'https://linkedin.com/company/thrunova',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: 'X', color: '#111', href: 'https://x.com/thrunova',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: 'WhatsApp', color: '#25D366', href: 'https://wa.me/917996633015',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
  },
  {
    label: 'YouTube', color: '#FF0000', href: 'https://youtube.com/@thrunova',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
];

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-root {
          background: #f5f5f0;
          min-height: clamp(560px, 90vh, 940px);
          display: flex; flex-direction: column; justify-content: center;
          position: relative; overflow: hidden;
        }
        /* subtle dot grid */
        .hero-dot-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        /* thin border box around the section */
        .hero-frame {
          position: absolute; inset: clamp(0.75rem,2vw,1.5rem);
          border: 1px solid rgba(0,0,0,0.08);
          pointer-events: none; z-index: 0;
        }
        .hero-inner {
          position: relative; z-index: 2;
          max-width: 88rem; margin: 0 auto;
          padding: clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,5rem);
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem,4vw,3.5rem);
          align-items: center;
        }
        @media(min-width:900px){
          .hero-inner { grid-template-columns: 1fr 1fr; }
        }
        /* LEFT col */
        .hero-left { display: flex; flex-direction: column; gap: clamp(1.25rem,2.5vw,2rem); }
        .hero-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.6875rem, 0.85vw, 0.75rem);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #777;
          display: flex; align-items: center; gap: 0.625rem;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 1.75rem; height: 1.5px;
          background: #777; flex-shrink: 0;
        }
        .hero-h1 {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.04;
          color: #111;
        }
        .hero-h1 em {
          font-style: italic;
          color: #444;
          font-weight: 400;
        }
        .hero-sub {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.75;
          color: #666;
          max-width: 36rem;
        }
        .hero-actions {
          display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;
        }
        .hero-social-row {
          display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;
          padding-top: clamp(0.75rem,1.5vw,1.25rem);
          border-top: 1px solid #e0e0da;
        }
        .hero-social-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.625rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: #aaa;
          margin-right: 0.25rem;
        }
        /* RIGHT col – feature panel */
        .hero-right {
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .hero-feature-card {
          background: #fff;
          border: 1.5px solid #e8e8e2;
          padding: clamp(1rem,2vw,1.5rem) clamp(1.25rem,2.5vw,1.75rem);
          display: flex; align-items: flex-start; gap: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-feature-card:hover {
          border-color: #111;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .hero-feat-icon {
          width: 2.5rem; height: 2.5rem; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid #e8e8e2;
          color: #111;
        }
        .hero-feat-title {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.9375rem; font-weight: 600; color: #111;
          margin-bottom: 0.25rem;
        }
        .hero-feat-desc {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.8125rem; color: #777; line-height: 1.6;
        }
        .hero-cta-strip {
          background: #111;
          padding: clamp(1rem,2vw,1.25rem) clamp(1.25rem,2.5vw,1.75rem);
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; flex-wrap: wrap;
          margin-top: 0.25rem;
        }
        .hero-strip-text {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600; color: #fff;
        }
        .hero-strip-sub {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.75rem; color: rgba(255,255,255,0.55);
          margin-top: 0.1rem;
        }
        .hero-strip-btn {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.8125rem; font-weight: 600;
          color: #111; background: #fff;
          border: 1.5px solid #fff; border-radius: 0;
          padding: 0.55rem 1.1rem; cursor: pointer;
          text-decoration: none; white-space: nowrap;
          transition: background 0.2s ease, color 0.2s ease;
          display: inline-flex; align-items: center; gap: 0.35rem;
        }
        .hero-strip-btn:hover { background: #f0f0eb; }
      `}</style>

      <section className="hero-root" id="hero">
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="hero-frame" aria-hidden="true" />

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left anim-item" style={{ animationDelay: '0.05s' }}>
            <div className="hero-eyebrow">AI &amp; Automation Agency</div>

            <h1 className="hero-h1">
              Engineering<br />
              the future of<br />
              <em>autonomy.</em>
            </h1>

            <p className="hero-sub">
              We deploy high-performance AI systems, intelligent automations, and
              production-ready technology that scales with your enterprise.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-black" id="hero-start-project">
                Start a Project
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#why-choose-us" className="btn-ghost" id="hero-methodology">
                Our Methodology
              </a>
            </div>

            {/* Social row */}
            <div className="hero-social-row">
              <span className="hero-social-label">Follow</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="social-icon-btn"
                  style={{ color: s.color }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — feature panel */}
          <div className="hero-right anim-item" style={{ animationDelay: '0.15s' }}>
            {[
              {
                title: 'AI Agents & Chatbots',
                desc: 'Context-aware AI trained on your business, active 24/7 across every channel.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                ),
              },
              {
                title: 'Web & App Development',
                desc: 'Scalable, performant web architectures from landing pages to full-stack apps.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: 'CRM & Social Automation',
                desc: 'Precision pipelines, automated campaigns, and smart engagement systems.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
              },
              {
                title: 'AI Voice Agents',
                desc: 'Intelligent calling systems that handle appointments and qualify leads at scale.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="hero-feature-card">
                <div className="hero-feat-icon">{f.icon}</div>
                <div>
                  <div className="hero-feat-title">{f.title}</div>
                  <div className="hero-feat-desc">{f.desc}</div>
                </div>
              </div>
            ))}

            {/* CTA strip */}
            <div className="hero-cta-strip">
              <div>
                <div className="hero-strip-text">Ready to automate?</div>
                <div className="hero-strip-sub">No commitment — just a conversation.</div>
              </div>
              <a href="#contact" className="hero-strip-btn" id="hero-strip-cta">
                Let's talk
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}