'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Star, ChevronDown, Lock, ArrowRight } from 'lucide-react'

const TREATMENTS = [
  'Advanced Dental (Implants / Veneers)',
  'Cosmetic Surgery',
  'Fertility & IVF',
  'Executive Health Check-up',
  'Other / Not Sure Yet',
]

// Avatar stack placeholder using initials
const AVATARS = ['DM', 'SJ', 'AK', 'LR']

// Right-side quote form card
function QuoteFormCard() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">Request Received!</h3>
        <p className="text-gray-500 text-sm">Our medical concierge will contact you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Blue top bar */}
      <div className="h-1.5 bg-[#0F766E]" />

      <div className="p-8">
        <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-1 text-center">
          Get Your Free Quote
        </h3>
        <p className="text-sm text-gray-500 text-center mb-7">
          Receive a personalized plan within 24 hours
        </p>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
          {/* Full name */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
              Your Country
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Australia"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-gray-400 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all"
            />
          </div>

          {/* Treatment select */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
              Treatment Needed
            </label>
            <div className="relative">
              <select
                required
                defaultValue=""
                className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all cursor-pointer bg-white"
              >
                <option value="" disabled>Select treatment...</option>
                {TREATMENTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold rounded-xl py-4 text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#0F766E]/25 mt-2"
          >
            Get Free Quote
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Privacy note */}
        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
          <Lock size={12} />
          <span>Your data is encrypted and 100% private.</span>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDF9] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle background circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0F766E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0F766E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0F766E]/10 border border-[#0F766E]/20 text-[#0F766E] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield size={14} />
              <span>Your Trusted Medical Guardian in Vietnam</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#0F172A] leading-[1.05] mb-6"
            >
              Your Premier{' '}
              <span className="text-[#0F766E]">Medical Guardian</span>
              {' '}in Vietnam
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg"
            >
              Save up to{' '}
              <span className="text-[#0F766E] font-semibold">70% on treatment</span>
              {' '}— safely guided by experts who match you with world-class JCI accredited hospitals.
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {AVATARS.map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F766E] to-[#115E59] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  >
                    {initials}
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-sm font-bold text-[#0F172A] ml-1">4.9★ reviews</span>
                </div>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-[#0F172A]">2,000+ patients</span>
                  {' '}| 100% satisfaction | 24/7 support
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Quote form */}
          <div className="lg:pl-8">
            <QuoteFormCard />
          </div>
        </div>
      </div>
    </section>
  )
}
