import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'

type Page = 'home' | 'privacy' | 'terms'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const handleNavigate = (page: Page) => {
    setCurrentPage(page)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f8f9fa',
        color: '#191c1d',
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        overflowX: 'hidden',
      }}
    >
      <Header />

      {currentPage === 'home' && (
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Contact />
        </main>
      )}

      {currentPage === 'privacy' && (
        <main style={{ paddingTop: '4rem' }}>
          <PrivacyPolicy onNavigate={handleNavigate} />
        </main>
      )}

      {currentPage === 'terms' && (
        <main style={{ paddingTop: '4rem' }}>
          <TermsConditions onNavigate={handleNavigate} />
        </main>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
