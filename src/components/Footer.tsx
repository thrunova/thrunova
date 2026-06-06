import logo from '../assets/logo.png';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

const footerLinks = {
  Services: [
    { name: 'AI Agents', href: '#services' },
    { name: 'CRM Automation', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'AI Chatbots', href: '#services' },
    { name: 'Social Automation', href: '#services' },
    { name: 'AI Integrations', href: '#services' },
  ],
  Resources: [
    { name: 'Our Methodology', href: '#why-choose-us' },
    { name: 'Case Studies', href: '#services' },
    { name: 'Documentation', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
  ],
};

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer-root {
          background: #111;
          border-top: 1.5px solid #1a1a1a;
        }
        .footer-inner {
          max-width: 88rem; margin: 0 auto;
          padding-left: clamp(1.25rem,5vw,5rem);
          padding-right: clamp(1.25rem,5vw,5rem);
          padding-top: clamp(2.5rem,4vw,3.5rem);
          padding-bottom: clamp(1.5rem,2.5vw,2rem);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.75fr repeat(3, 1fr);
          gap: clamp(1.5rem,3vw,3rem);
          margin-bottom: clamp(1.5rem,3vw,2.5rem);
        }
        @media (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr; } .footer-brand { grid-column: 1 / -1; } }
        @media (max-width: 639px) { .footer-grid { grid-template-columns: 1fr; } .footer-brand { grid-column: 1; } }
        .footer-col-title {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8125rem; font-weight: 800; color: #ffffff;
          text-transform: uppercase; letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .footer-link {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem; font-weight: 400; color: #cccccc;
          text-decoration: none; display: block; padding: 0.25rem 0;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: #fff; }

        .footer-bottom {
          border-top: 1px solid #222;
          padding-top: clamp(1rem,1.5vw,1.25rem);
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem;
        }
        .footer-bottom-text { font-family: 'IBM Plex Sans', sans-serif; font-size: 0.8125rem; color: #cccccc; }
        .footer-legal-link {
          font-family: 'IBM Plex Sans', sans-serif; font-size: 0.8125rem; color: #cccccc;
          background: none; border: none; cursor: pointer; padding: 0; text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-legal-link:hover { color: #fff; text-decoration: underline; }

        .footer-available-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.3rem 0.75rem;
          background: #1a1a1a; border: 1px solid #333; border-radius: 0.25rem;
          font-family: 'IBM Plex Sans', sans-serif; font-size: 0.75rem; font-weight: 500; color: #888;
        }
        .footer-pulse-dot {
          width: 0.5rem; height: 0.5rem; border-radius: 50%; background: #4caf50;
          animation: footer-dot-pulse 2s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes footer-dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(76,175,80,0.4); }
          50%       { opacity: 0.8; box-shadow: 0 0 0 5px rgba(76,175,80,0); }
        }
      `}</style>

      <footer className="footer-root" id="footer" aria-label="Site footer">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <button
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
                aria-label="Thrunova Home"
              >
                <img
                  src={logo}
                  alt="Thrunova"
                  style={{ height: '2.75rem', width: 'auto', objectFit: 'contain' }}
                />
              </button>

              <p style={{ fontFamily: 'IBM Plex Sans', fontSize: '0.875rem', color: '#cccccc', lineHeight: 1.7, maxWidth: '20rem', marginBottom: '1rem' }}>
                Engineered automation for the next generation of industrial and commercial excellence.
              </p>

              <div className="footer-available-badge">
                <span className="footer-pulse-dot" aria-hidden="true" />
                Available for new projects
              </div>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                {[
                  {
                    href: 'https://instagram.com/thrunova',
                    label: 'Instagram',
                    color: '#E1306C',
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://linkedin.com/company/thrunova',
                    label: 'LinkedIn',
                    color: '#0A66C2',
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://x.com/thrunova',
                    label: 'X',
                    color: '#000000',
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://wa.me/917996633015',
                    label: 'WhatsApp',
                    color: '#25D366',
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://youtube.com/@thrunova',
                    label: 'YouTube',
                    color: '#FF0000',
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                ].map(({ href, label, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2.125rem',
                      height: '2.125rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #e1e3e4',
                      background: '#ffffff',
                      color,
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#c5c5d3';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLElement).style.borderColor = '#e1e3e4';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="footer-col-title">{title}</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              © {year} Thrunova AI Automation. All rights reserved.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => { onNavigate('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="footer-legal-link"
                id="footer-privacy-link"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => { onNavigate('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="footer-legal-link"
                id="footer-terms-link"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
