import { useEffect, useRef } from 'react';
import thrunovaWeb from '../assets/thrunova_website.png'; 
import thrunovaChatbot from '../assets/chatbot_thrunova.png';
import thrunovaSocial from '../assets/thrunova_social.png';


const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    description: 'Scalable, secure web architectures optimised for enterprise-grade performance and accessibility standards.',
    items: ['Corporate Websites', 'E-Commerce Stores', 'Admin Dashboards', 'Custom Web Apps'],
    category: 'Development',
    tag: 'Production-Ready',
    img: thrunovaWeb,
  },
  {
    id: 2,
    title: 'AI Chatbots',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    description: 'Context-aware conversational AI that integrates directly with your internal knowledge base and CRM systems.',
    items: ['Website Chatbots', 'WhatsApp AI Bots', 'PDF-Trained Bots', 'Lead Gen Bots'],
    category: 'AI & Agents',
    tag: '24/7 Active',
    img: thrunovaChatbot,
  },
  {
    id: 3,
    title: 'Social Automation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    description: 'Streamlined brand presence across platforms using algorithmic triggers and automated engagement workflows.',
    items: ['WhatsApp API Links', 'Auto Reply Systems', 'Instagram Scripts', 'Broadcast Tools'],
    category: 'Automation',
    tag: 'Multi-Platform',
    img: thrunovaSocial,
  },
  {
    id: 4,
    title: 'AI Voice Agents',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    description: 'Natural language processing for high-fidelity voice interactions, supporting customer service and lead triage.',
    items: ['AI Call Assistants', 'Appointment Bots', 'Support Calling', 'Lead Qualification'],
    category: 'AI & Agents',
    tag: 'Voice AI',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'CRM Automation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    description: 'Precision data synchronisation and pipeline management to eliminate manual administrative overhead.',
    items: ['CRM Development', 'Sales Pipelines', 'Lead Management', 'Email & SMS Flows'],
    category: 'Automation',
    tag: 'Sales Engine',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'AI Integrations',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    description: 'Bridging the gap between legacy systems and modern AI models with robust API architectures and cloud deployments.',
    items: ['Custom AI Agents', 'OpenAI Connections', 'Custom API Links', 'Cloud Deployments'],
    category: 'AI & Agents',
    tag: 'Full-Stack AI',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed');
        }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .srv-card {
          background: #fff;
          border: 1.5px solid #e8e8e2;
          display: flex; flex-direction: column;
          overflow: hidden; position: relative;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .srv-card:hover {
          border-color: #111;
          box-shadow: 0 8px 28px -8px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }
        .srv-card-img { transition: transform 0.65s cubic-bezier(0.16,1,0.3,1); }
        .srv-card:hover .srv-card-img { transform: scale(1.055); }
        .srv-card-link {
          display: inline-flex; align-items: center; gap: 0.25rem;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.8125rem; font-weight: 600; color: #111;
          text-decoration: none; letter-spacing: 0.01em;
          transition: gap 0.2s ease;
        }
        .srv-card:hover .srv-card-link { gap: 0.55rem; }
        .srv-tag {
          position: absolute; top: 0.75rem; right: 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.625rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(245,245,240,0.95); color: #111;
          padding: 0.25rem 0.5rem; border: 1px solid rgba(0,0,0,0.12);
          opacity: 0; transform: translateY(4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .srv-card:hover .srv-tag { opacity: 1; transform: translateY(0); }
      `}</style>

      <section
        ref={sectionRef}
        id="services"
        style={{ background: '#fff', borderTop: '1.5px solid #e0e0da' }}
        className="section-py"
        aria-label="Services section"
      >
        <div className="container-fluid">
          {/* Section Header */}
          <div
            className="scroll-reveal"
            style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <span className="section-badge">What We Offer</span>
            <h2 className="text-headline-xl" style={{ marginBottom: '0.75rem' }}>
              Core Capabilities
            </h2>
            <p className="text-body-md" style={{ maxWidth: '36rem', margin: 0 }}>
              End-to-end AI and automation solutions engineered for modern enterprise scale.
            </p>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
            }}
          >
            {services.map((svc, i) => (
              <article
                key={svc.id}
                className="scroll-reveal srv-card"
                style={{ transitionDelay: `${i * 70}ms` }}
                aria-label={svc.title}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#eee', flexShrink: 0 }}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="srv-card-img"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '0.875rem', left: '1rem' }}>
                    <span style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.75rem,3.5vw,3rem)', fontWeight: 800, color: 'rgba(255,255,255,0.2)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      {String(svc.id).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="srv-tag">{svc.tag}</span>
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(1.25rem,2.5vw,1.75rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <div style={{ width: '2.25rem', height: '2.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #e8e8e2', color: '#111', flexShrink: 0 }}>
                      {svc.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Outfit', fontSize: '0.6875rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.125rem' }}>
                        {svc.category}
                      </div>
                      <h3 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.125rem,1.5vw,1.25rem)', fontWeight: 700, color: '#111', lineHeight: 1.25, margin: 0 }}>
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  <div style={{ height: '1px', background: '#e8e8e2', marginBottom: '0.875rem' }} />

                  <p className="text-body-sm" style={{ marginBottom: '1rem', flexGrow: 1 }}>{svc.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
                    {svc.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>

                  <a href="#contact" className="srv-card-link">
                    Enquire now
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="scroll-reveal" style={{ marginTop: 'clamp(2.5rem,5vw,4rem)', paddingTop: 'clamp(2rem,3vw,3rem)', borderTop: '1.5px solid #e0e0da', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <p className="text-headline-md" style={{ marginBottom: '0.25rem' }}>Ready to scale?</p>
              <p className="text-body-sm">Let's engineer your next system.</p>
            </div>
            <a href="#contact" className="btn-black" id="services-cta">
              Start a Project
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
