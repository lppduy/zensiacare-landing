'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About ZensiaCare', href: '#about' },
  { label: 'Why Vietnam', href: '#why-vietnam' },
  { label: 'Our Partners', href: '#partners' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Patient Stories', href: '#stories' },
  { label: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-xl font-display font-extrabold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Zensia<span className="text-[#0F766E]">Care</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#0F766E] ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+84"
              className={`flex items-center gap-1 text-sm transition-colors ${
                scrolled ? 'text-gray-900/70' : 'text-white/80'
              }`}
            >
              <Phone size={14} />
              <span>24/7 Support</span>
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#115E59] text-gray-900 font-semibold rounded-full px-5 py-2 text-sm transition-colors"
            >
              Get Free Quote
            </a>
          </div>

          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 font-medium py-2 hover:text-[#0F766E] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#consultation"
                className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#115E59] text-gray-900 font-semibold rounded-full px-5 py-2.5 text-sm transition-colors mt-2"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
