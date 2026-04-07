import { DollarSign, Zap, TreePine } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description:
      'Save up to 60-80% compared to your home country with internationally trained surgeons and JCI-accredited facilities.',
    highlight: 'Save 60–80%',
  },
  {
    icon: Zap,
    title: 'No Waiting Lists',
    description:
      'Immediate access to specialized procedures. No months-long delays — book your treatment within days.',
    highlight: 'Book within days',
  },
  {
    icon: TreePine,
    title: 'Healing Environments',
    description:
      'Combine treatment with recovery in world-renowned destinations like Da Nang, Nha Trang, or Phu Quoc.',
    highlight: 'Da Nang · Nha Trang · Phu Quoc',
  },
]

export function WhyVietnamSection() {
  return (
    <section id="why-vietnam" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest">
            The Destination
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mt-3 mb-4">
            Why Choose Vietnam?
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Vietnam is rapidly becoming Southeast Asia&apos;s leading hub for medical tourism.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map(({ icon: Icon, title, description, highlight }) => (
            <StaggerItem key={title}>
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/20 transition-colors">
                  <Icon className="text-[#2563EB]" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{description}</p>
                <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full">
                  {highlight}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
