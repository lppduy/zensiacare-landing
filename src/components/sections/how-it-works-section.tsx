'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Plane, Stethoscope, Heart } from 'lucide-react'
import { FadeInUp } from '@/components/motion-wrapper'

const STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Free Consultation',
    description:
      'Submit your medical records. Our experts provide a preliminary assessment and a transparent, all-inclusive quote.',
  },
  {
    number: '02',
    icon: Plane,
    title: 'Travel Planning',
    description:
      'We handle your medical visa, flight coordination, and luxury accommodation tailored to your recovery needs.',
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Treatment & Support',
    description:
      'Your ZensiaCare guardian meets you at the airport and stays by your side through every procedure.',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Recovery & Aftercare',
    description:
      'Enjoy a curated recovery experience. Once home, we continue to monitor your progress via remote follow-ups.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest">
            The Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1E3A5F] mt-3 mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] rounded-full mx-auto" />
          <p className="text-gray-500 mt-4">
            A seamless 4-step process designed for international travelers.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Dashed connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#0F766E]/30 z-0" />

          {STEPS.map(({ number, icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: '-80px' }}
              className="relative z-10 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex flex-col items-center justify-center mb-6 shadow-lg border-4 border-white">
                <span className="text-xs text-[#D4A843] font-bold">{number}</span>
                <Icon className="text-white mt-0.5" size={20} />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1E3A5F] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
