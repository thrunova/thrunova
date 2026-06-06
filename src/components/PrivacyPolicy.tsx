interface PrivacyPolicyProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#191c1d' }}>
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-light">
            Last updated: May 28, 2025
          </p>
        </div>

        <div className="legal-content">
          <p>
            At Thrunova, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong className="text-neutral-900">Personal Information:</strong> Name, email address, phone number, and other details you provide through our contact forms.</li>
            <li><strong className="text-neutral-900">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and browser type.</li>
            <li><strong className="text-neutral-900">Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
            <li><strong className="text-neutral-900">Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To deliver and improve our services</li>
            <li>To send relevant updates and marketing communications (with your consent)</li>
            <li>To analyze website usage and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Data Sharing & Third Parties</h2>
          <p>
            We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our website and delivering services, subject to confidentiality obligations.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{' '}
            <a href="mailto:thrunovaofficial@gmail.com" className="text-neutral-900 font-medium hover:underline transition-colors">
              thrunovaofficial@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
