import { Quote, Star } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'

const TESTIMONIALS = [
  {
    quote:
      'Coming to Vietnam for my dental implants was the best decision I ever made. ZensiaCare handled everything. I felt safer and more cared for than I do back home in Australia. The cost was a fraction of what I expected, but the quality was world-class.',
    name: 'David M.',
    location: 'Sydney, Australia',
    treatment: 'Dental Implants',
    initials: 'DM',
  },
  {
    quote:
      'The level of professionalism in the IVF clinic ZensiaCare recommended was incredible. We now have a healthy baby girl thanks to their guidance and support throughout the entire journey.',
    name: 'Sarah & James L.',
    location: 'United Kingdom',
    treatment: 'Fertility & IVF',
    initials: 'SJ',
  },
]

export function PatientStoriesSection() {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-gradient-to-br from-[#0F766E]/5 to-[#0F172A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mt-3 mb-4">
            Patient Stories
          </h2>
          <div className="w-16 h-1 bg-[#0F766E] rounded-full mx-auto" />
          <p className="text-gray-500 mt-4">Real experiences from real patients.</p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map(({ quote, name, location, treatment, initials }) => (
            <StaggerItem key={name}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <Quote className="text-[#0F766E]/30 mb-4" size={48} />
                <p className="text-[#0F172A]/80 leading-relaxed flex-1 text-base italic mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="text-[#0F766E] fill-[#0F766E]" size={16} />
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#0F172A]">{name}</div>
                    <div className="text-sm text-gray-500">{location}</div>
                    <span className="text-xs bg-[#0F766E]/10 text-[#0F766E] px-2 py-0.5 rounded-full mt-1 inline-block">
                      {treatment}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
