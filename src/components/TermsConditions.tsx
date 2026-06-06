interface TermsConditionsProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void
}

export default function TermsConditions({ onNavigate }: TermsConditionsProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ── Back to Home ── */}
      <div className="pt-24 sm:pt-28 pb-6 max-w-3xl mx-auto px-5 sm:px-8">
        <button
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-300 group cursor-pointer"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="mb-10">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-light">
            Last updated: May 28, 2025
          </p>
        </div>

        <div className="legal-content">
          <p>
            Welcome to Thrunova. By accessing or using our website and services, you agree to be bound by these Terms & Conditions.
          </p>

          <h2>1. Services</h2>
          <p>
            Thrunova provides web development, AI automation, chatbot development, voice calling agents, CRM solutions, and related digital services. Scope, deliverables, and timelines will be outlined in a separate project agreement.
          </p>

          <h2>2. Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Infringe the rights of any third party</li>
            <li>Restrict or inhibit anyone else's use of the website</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the website for any fraudulent or unlawful activity</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website is the property of Thrunova and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
          </p>

          <h2>4. Project Agreements</h2>
          <p>
            Individual project terms will be specified in a separate agreement. These project-specific terms supplement these general Terms & Conditions.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Payment terms will be outlined in the project agreement. Late payments may result in project delays or suspension of services.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary information shared during the course of a project.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Thrunova shall not be liable for any indirect, incidental, or consequential damages arising from our services. Our total liability shall not exceed the amount paid for the specific service.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate a service engagement with written notice. Upon termination, you will be responsible for payment of services rendered.
          </p>

          <h2>9. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of our services constitutes acceptance of modified terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href="mailto:thrunovaofficial@gmail.com" className="text-neutral-900 font-medium hover:underline transition-colors">
              thrunovaofficial@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
