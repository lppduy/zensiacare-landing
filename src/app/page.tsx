import { HeroSection } from '@/components/sections/hero-section'
import { WhyVietnamSection } from '@/components/sections/why-vietnam-section'
import { WhyZensiaCareSection } from '@/components/sections/why-zensiacare-section'
import { TreatmentsSection } from '@/components/sections/treatments-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { PatientStoriesSection } from '@/components/sections/patient-stories-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyVietnamSection />
      <WhyZensiaCareSection />
      <TreatmentsSection />
      <HowItWorksSection />
      <PatientStoriesSection />
    </>
  )
}
