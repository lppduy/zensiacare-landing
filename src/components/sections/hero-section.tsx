'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Shield, Star, Clock, Users, Send, ChevronDown } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Users, value: '2,000+', label: 'International Patients Served' },
  { icon: Shield, value: '100%', label: 'Satisfaction Rate' },
  { icon: Star, value: '4.9/5', label: 'Google Review Rating' },
  { icon: Clock, value: '24/7', label: 'On-site Medical Support' },
]

const TREATMENTS = [
  'Advanced Dental (Implants / Veneers)',
  'Cosmetic Surgery',
  'Fertility & IVF',
  'Executive Health Check-up',
  'Other / Not Sure Yet',
]

// Glassmorphism quote form embedded in hero
function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-8 text-center"
      >
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-white font-display font-bold text-xl mb-2">Request Received!</h3>
        <p className="text-white/70 text-sm">Our medical concierge will contact you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-6 shadow-2xl"
    >
      <p className="text-white/80 text-sm font-medium mb-4 text-center">
        Get your free personalised quote — no commitment required
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        {/* Name */}
        <input
          type="text"
          required
          placeholder="Your full name"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D4A843] transition-colors"
        />
        {/* Email */}
        <input
          type="email"
          required
          placeholder="Email address"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D4A843] transition-colors"
        />
      </div>

      {/* Treatment select */}
      <div className="relative mb-4">
        <select
          required
          defaultValue=""
          className="w-full appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4A843] transition-colors cursor-pointer"
        >
          <option value="" disabled className="bg-[#1E3A5F]">Select treatment of interest</option>
          {TREATMENTS.map((t) => (
            <option key={t} value={t} className="bg-[#1E3A5F]">{t}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#D4A843] hover:bg-[#B8922E] text-[#1E3A5F] font-bold rounded-xl py-3.5 text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
      >
        <Send size={16} />
        Get My Free Quote
      </button>
    </form>
  )
}

function FloatingParticle({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/10 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F]/90 to-[#0F766E]">
      {/* Floating particles */}
      {[
        { x: '10%', y: '20%', size: 60, delay: 0 },
        { x: '80%', y: '15%', size: 40, delay: 1 },
        { x: '70%', y: '70%', size: 80, delay: 2 },
        { x: '20%', y: '75%', size: 30, delay: 0.5 },
        { x: '90%', y: '50%', size: 50, delay: 1.5 },
      ].map((p, i) => <FloatingParticle key={i} {...p} />)}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h40M10 0v40M0 20h40M20 0v40M0 30h40M30 0v40' stroke='white' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#D4A843]/20 border border-[#D4A843]/40 text-[#D4A843] px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span>🏥</span>
          <span>Vietnam&apos;s #1 Medical Tourism Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6"
        >
          Your Premier Medical
          <span className="block text-[#D4A843]">Guardian in Vietnam.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          World-class healthcare meets heartfelt Vietnamese hospitality. We navigate your journey
          to wellness with safety, transparency, and 24/7 personalized care.
        </motion.p>

        {/* Free Quote Form */}
        <motion.div
          id="consultation"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <HeroQuoteForm />
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-10"
        >
          {TRUST_ITEMS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-2 text-[#D4A843]" size={24} />
              <div className="text-2xl font-display font-bold text-white">{value}</div>
              <div className="text-xs text-white/60 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
