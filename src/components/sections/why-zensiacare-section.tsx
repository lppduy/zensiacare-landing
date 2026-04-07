import { ShieldCheck, UserCheck, Coins, Globe } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Vetted Network',
    description:
      'We only partner with hospitals that meet rigorous international safety standards and JCI accreditation.',
  },
  {
    icon: UserCheck,
    title: 'Personal Concierge',
    description:
      'A dedicated ZensiaCare assistant accompanies you to every medical appointment for seamless communication.',
  },
  {
    icon: Coins,
    title: 'Transparent Pricing',
    description:
      'No hidden fees. Detailed, all-inclusive quotes before you fly — what you see is what you pay.',
  },
  {
    icon: Globe,
    title: 'Holistic Support',
    description:
      'From visa assistance and airport pick-up to post-operative care and curated local tours during recovery.',
  },
]

export function WhyZensiaCareSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#134E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest">
            The Guardian
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3 mb-4">
            Why ZensiaCare?
          </h2>
          <div className="w-16 h-1 bg-[#0F766E] rounded-full mx-auto" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            We don&apos;t just book appointments; we manage your entire health journey.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0F766E]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0F766E]/30 transition-colors">
                  <Icon className="text-[#0F766E]" size={24} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3">{title}</h3>
                <p className="text-white/60 leading-relaxed">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
