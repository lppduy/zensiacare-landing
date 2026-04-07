'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Play, Shield, Star, Clock, Users } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Users, value: '2,000+', label: 'International Patients Served' },
  { icon: Shield, value: '100%', label: 'Satisfaction Rate' },
  { icon: Star, value: '4.9/5', label: 'Google Review Rating' },
  { icon: Clock, value: '24/7', label: 'On-site Medical Support' },
]

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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#consultation"
            className="inline-flex items-center justify-center bg-[#D4A843] hover:bg-[#B8922E] text-[#1E3A5F] font-bold rounded-full px-8 py-4 text-base shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Get a Free Quote
          </a>
          <button className="inline-flex items-center justify-center border border-white/50 text-white bg-transparent hover:bg-white/10 rounded-full px-8 py-4 text-base transition-all duration-300 w-full sm:w-auto gap-2">
            <Play size={16} className="fill-current" />
            Watch Our Story
          </button>
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
