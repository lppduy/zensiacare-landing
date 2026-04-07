import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'

const TREATMENTS = [
  {
    emoji: '🦷',
    category: 'Advanced Dental',
    procedures: ['All-on-4/6 Implants', 'Porcelain Veneers', 'Hollywood Smile'],
    value: 'Digital 3D imaging & lifetime warranty on premium implants.',
    hoverBorder: 'hover:border-blue-300',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-blue-100/50',
  },
  {
    emoji: '✨',
    category: 'Cosmetic Surgery',
    procedures: ['Rhinoplasty', 'Liposuction', 'Facelifts', 'Skin Rejuvenation'],
    value: 'Board-certified surgeons focused on natural, harmonious results.',
    hoverBorder: 'hover:border-pink-300',
    gradientFrom: 'from-pink-50',
    gradientTo: 'to-pink-100/50',
  },
  {
    emoji: '👶',
    category: 'Fertility & IVF',
    procedures: ['IVF', 'IUI', 'Genetic Screening (PGT)'],
    value: 'Access to latest reproductive technologies with high success rates.',
    hoverBorder: 'hover:border-purple-300',
    gradientFrom: 'from-purple-50',
    gradientTo: 'to-purple-100/50',
  },
  {
    emoji: '🏥',
    category: 'Executive Check-up',
    procedures: ['Comprehensive Health Screening', 'Cancer Screening'],
    value: 'Results in 24 hours with international standard diagnostics.',
    hoverBorder: 'hover:border-green-300',
    gradientFrom: 'from-green-50',
    gradientTo: 'to-green-100/50',
  },
]

export function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest">
            Procedures
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1E3A5F] mt-3 mb-4">
            Our Specialized Procedures
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] rounded-full mx-auto" />
          <p className="text-gray-500 mt-4">
            We focus on high-demand, high-success treatments.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map(({ emoji, category, procedures, value, hoverBorder, gradientFrom, gradientTo }) => (
            <StaggerItem key={category}>
              <div
                className={`group bg-gradient-to-br ${gradientFrom} ${gradientTo} border-2 border-transparent ${hoverBorder} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col`}
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-lg font-display font-bold text-[#1E3A5F] mb-3">{category}</h3>
                <ul className="space-y-1 mb-4 flex-1">
                  {procedures.map((p) => (
                    <li key={p} className="text-sm text-[#1E3A5F]/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#0F766E] font-medium italic border-t border-[#0F766E]/20 pt-3">
                  {value}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
