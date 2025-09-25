
import HeroSection from '../components/hero-section'
import WhyChooseSection from '../components/why-choose-section'
import BenefitsSection from '../components/benefits-section'
import ComparisonSection from '../components/comparison-section'
import CalculatorSection from '../components/calculator-section'
import TestimonialsSection from '../components/testimonials-section'
import EcoFriendlySection from '../components/eco-friendly-section'
import CommunitySection from '../components/community-section'
import StoresSection from '../components/stores-section'
import TipsSection from '../components/tips-section'
import Footer from '../components/footer'
import { Metadata } from 'next'

// Metadata específica para la página principal
export const metadata: Metadata = {
  title: 'Mohhikat - Arena Premium Mexicana para Gatos | Control Total de Olores',
  description: 'Descubre Mohhikat, la arena premium mexicana para gatos con control superior de olores y máxima absorción. Perfecta para hogares mexicanos. ¡Compruébalo ya!',
  keywords: [
    'arena premium para gatos',
    'control de olores gatos', 
    'arena mexicana',
    'absorción máxima',
    'Mohhikat premium',
    'arena natural gatos',
    'hogar sin olores',
    'gatos felices México'
  ],
  openGraph: {
    title: 'Mohhikat - Arena Premium Mexicana para Gatos',
    description: 'Arena premium con control superior de olores. Máxima absorción para hogares mexicanos.',
    images: ['/images/logotipo.jpg'],
  },
  alternates: {
    canonical: 'https://mohhikat.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-natural-beige">
      {/* Schema.org structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Mohhikat - Arena Premium Mexicana para Gatos",
            "description": "Arena premium con control superior de olores y máxima absorción, diseñada específicamente para hogares mexicanos.",
            "url": "https://mohhikat.com",
            "mainEntity": {
              "@type": "Product",
              "name": "Arena Mohhikat Premium",
              "description": "Arena premium mexicana para gatos con control superior de olores"
            }
          })
        }}
      />
      
      <HeroSection />
      <WhyChooseSection />
      <BenefitsSection />
      <ComparisonSection />
      <CalculatorSection />
      <TestimonialsSection />
      <EcoFriendlySection />
      <CommunitySection />
      <StoresSection />
      <TipsSection />
      <Footer />
    </main>
  )
}
