
import HeroSection from '../components/hero-section'
import BenefitsSection from '../components/benefits-section'
import ComparisonSection from '../components/comparison-section'
import CalculatorSection from '../components/calculator-section'
import TestimonialsSection from '../components/testimonials-section'
import EcoFriendlySection from '../components/eco-friendly-section'
import CommunitySection from '../components/community-section'
import StoresSection from '../components/stores-section'
import TipsSection from '../components/tips-section'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-natural-beige">
      <HeroSection />
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
