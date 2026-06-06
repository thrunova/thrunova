import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (window.scrollY > 40) setIsMobileOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .tnav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          background: #ffffff;
          border-bottom: 1.5px solid #e0e0da;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .tnav.scrolled {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .tnav-inner {
          max-width: 88rem; margin: 0 auto;
          padding: 0 clamp(1.25rem, 5vw, 5rem);
          height: 3.75rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        .tnav-logo {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #111;
          text-decoration: none;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .tnav-links {
          display: flex; align-items: center;
          gap: clamp(1.25rem, 3vw, 2.5rem);
        }
        .tnav-link {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9375rem; font-weight: 500; color: #111;
          text-decoration: none; letter-spacing: 0.01em;
          transition: color 0.2s ease;
          position: relative;
          padding-bottom: 2px;
        }
        .tnav-link::after {
          content: '';
          position: absolute; bottom: -2px; left: 0; right: 0;
          height: 1.5px; background: #111;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.25s ease;
        }
        .tnav-link:hover { color: #111; }
        .tnav-link:hover::after { transform: scaleX(1); }
        .tnav-cta {
          font-family: 'Outfit', sans-serif;
          font-size: 0.875rem; font-weight: 700; letter-spacing: 0.04em;
          color: #fff; background: #111;
          border: 1.5px solid #111; border-radius: 0;
          box-shadow: 4px 4px 0 #ccc;
          padding: 0.55rem 1.25rem;
          cursor: pointer; text-decoration: none;
          white-space: nowrap;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          display: inline-flex; align-items: center; gap: 0.4rem;
        }
        .tnav-cta:hover { transform: translate(4px, 4px); box-shadow: 0 0 0 #ccc; }
        .tnav-toggle {
          display: none;
          align-items: center; justify-content: center;
          width: 2.25rem; height: 2.25rem;
          border: 1.5px solid #ccc; background: transparent;
          cursor: pointer; color: #111;
          transition: border-color 0.2s ease;
        }
        .tnav-toggle:hover { border-color: #111; }
        .tnav-mobile {
          display: none; flex-direction: column;
          border-top: 1.5px solid #e0e0da;
          background: #f5f5f0;
        }
        .tnav-mobile.open { display: flex; }
        .tnav-mlink {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.9375rem; font-weight: 500; color: #333;
          padding: 0.875rem clamp(1.25rem, 5vw, 5rem);
          border-bottom: 1px solid #eee;
          text-decoration: none;
          display: block;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .tnav-mlink:hover { color: #111; background: #eeeee8; }
        .tnav-mcta { padding: 1rem clamp(1.25rem, 5vw, 5rem); }
        @media (max-width: 767px) {
          .tnav-links, .tnav-cta { display: none; }
          .tnav-toggle { display: flex; }
        }
        @media (min-width: 768px) {
          .tnav-mobile { display: none !important; }
        }
      `}</style>

      <header>
        <nav className={`tnav${isScrolled ? ' scrolled' : ''}`}>
          <div className="tnav-inner">
            <a href="/" className="tnav-logo">
              <img src={logo} alt="Thrunova" style={{ height: '2.75rem', width: 'auto', objectFit: 'contain' }} />
            </a>

            <div className="tnav-links">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="tnav-link">{l.label}</a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a href="#contact" className="tnav-cta" id="nav-cta">
                Schedule Consultation
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                className="tnav-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                }
              </button>
            </div>
          </div>

          <div className={`tnav-mobile${isMobileOpen ? ' open' : ''}`}>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="tnav-mlink" onClick={() => setIsMobileOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="tnav-mcta">
              <a href="#contact" className="btn-black" style={{ display: 'block', textAlign: 'center' }} onClick={() => setIsMobileOpen(false)}>
                Schedule Consultation
              </a>
            </div>
          </div>
        </nav>
        <div style={{ height: '3.75rem' }} aria-hidden="true" />
      </header>
    </>
  );
}