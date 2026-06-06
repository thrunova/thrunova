import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed');
        }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    ref.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('https://formspree.io/f/mykvlakl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000c3c" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'thrunovaofficial@gmail.com',
      href: 'mailto:thrunovaofficial@gmail.com',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000c3c" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 7996633015',
      href: 'tel:+917996633015',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000c3c" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Remote-first, worldwide',
      href: undefined,
    },
  ];

  return (
    <>
      <style>{`
        .ci-item {
          display: flex; align-items: flex-start; gap: 0.875rem;
          padding: clamp(1rem,2vw,1.25rem);
          background: #fff; border: 1.5px solid #e8e8e2;
          transition: border-color 0.2s ease;
        }
        .ci-item:hover { border-color: #111; }
        .c-form-wrap {
          background: #fff; border: 1.5px solid #e8e8e2;
          padding: clamp(1.5rem,3vw,2.5rem);
        }
        .c-label {
          display: block;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.6875rem; font-weight: 700; color: #666;
          text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;
        }
        .c-submit {
          width: 100%; padding: 0.9rem 1.5rem;
          background: #111; color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.03em;
          border: 1.5px solid #111; border-radius: 0; cursor: pointer;
          box-shadow: 4px 4px 0 #ccc;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .c-submit:hover:not(:disabled) {
          transform: translate(4px, 4px);
          box-shadow: 0 0 0 #ccc;
        }
        .c-submit:active:not(:disabled) {
          transform: translate(4px, 4px);
          box-shadow: 0 0 0 #ccc;
        }
        .c-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.8s linear infinite; }
      `}</style>

      <section ref={ref} id="contact" style={{ background: '#f5f5f0', borderTop: '1.5px solid #e0e0da' }} className="section-py" aria-label="Contact section">
        <div className="container-fluid">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'start',
            }}
          >
            {/* Info Column */}
            <div className="scroll-reveal">
              <div style={{ marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
                <span className="section-badge">Get In Touch</span>
                <h2 className="text-headline-xl" style={{ marginBottom: '0.75rem' }}>Initiate Consultation</h2>
                <p className="text-body-md">
                  Discuss your requirements with our team. We respond within 24 hours.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {contactItems.map((item) => (
                  <div key={item.label} className="ci-item">
                    <div style={{ flexShrink: 0, marginTop: '0.125rem' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Outfit', fontSize: '0.6875rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                        {item.label}
                      </div>
                      {item.href
                        ? <a href={item.href} style={{ fontFamily: 'Outfit', fontSize: '1.0625rem', fontWeight: 600, color: '#111', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')} onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}>{item.value}</a>
                        : <span style={{ fontFamily: 'Outfit', fontSize: '1.0625rem', fontWeight: 600, color: '#111' }}>{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/917996633015"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  id="contact-whatsapp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <a
                  href="#"
                  className="btn-black"
                  id="contact-schedule"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Schedule Consultation
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="c-form-wrap">
                {formState === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <div style={{ width: '3rem', height: '3rem', background: '#f5f5f0', border: '1.5px solid #e0e0da', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <h3 className="text-headline-md" style={{ marginBottom: '0.5rem' }}>Message Sent</h3>
                    <p className="text-body-sm" style={{ marginBottom: '1.5rem' }}>We'll get back to you within 24 hours.</p>
                    <button type="button" onClick={() => setFormState('idle')} className="btn-ghost" style={{ fontSize: '0.875rem' }}>Send another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-form" noValidate>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 12rem), 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div>
                        <label htmlFor="contact-name" className="c-label">Full Name</label>
                        <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required className="c-input" placeholder="John Doe" autoComplete="name" />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="c-label">Work Email</label>
                        <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required className="c-input" placeholder="john@company.com" autoComplete="email" />
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="contact-service" className="c-label">Service of Interest</label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="c-input"
                          style={{ paddingRight: '2.5rem', cursor: 'pointer' }}
                        >
                          <option value="">Select a service</option>
                          <option>AI Agents &amp; LLM Integration</option>
                          <option>Custom Web Architecture</option>
                          <option>Enterprise CRM Automation</option>
                          <option>AI Voice Agents</option>
                          <option>Social Media Automation</option>
                          <option>Other Technical Project</option>
                        </select>
                        <div
                          style={{
                            position: 'absolute',
                            right: '0.75rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none',
                            color: '#757682',
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="contact-message" className="c-label">Project Overview</label>
                      <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="c-input" placeholder="Briefly describe your project or challenge..." style={{ resize: 'vertical', minHeight: '7rem' }} />
                    </div>

                    {formState === 'error' && (
                      <p
                        style={{
                          fontFamily: 'IBM Plex Sans, sans-serif',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: '#ba1a1a',
                          marginBottom: '1rem',
                          padding: '0.625rem 0.875rem',
                          background: '#ffdad6',
                          border: '1px solid #ba1a1a',
                          borderRadius: '0.25rem',
                        }}
                      >
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <button type="submit" disabled={formState === 'submitting'} className="c-submit" id="contact-submit">
                      {formState === 'submitting'
                        ? <><svg className="spin" width="16" height="16" fill="none" viewBox="0 0 24 24"><circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>
                        : 'Submit Request'
                      }
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
