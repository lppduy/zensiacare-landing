import { Phone, Mail, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const QUICK_LINKS = ['Home', 'About ZensiaCare', 'Why Vietnam', 'Treatments', 'Patient Stories', 'Blog']

// SVG social icons — lucide-react v1 removed brand icons
const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-extrabold mb-3">
              Zensia<span className="text-[#2563EB]">Care</span>
            </div>
            <p className="text-white/50 text-sm mb-6">Your Health, Our Mission.</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, svg }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB]/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-[#2563EB] text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">Ho Chi Minh City / Hanoi, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#2563EB] flex-shrink-0" />
                <span className="text-white/50 text-sm">+84 [Your Number]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#2563EB] flex-shrink-0" />
                <span className="text-white/50 text-sm">support@zensiacare.com</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              {['WhatsApp', 'Viber', 'Telegram'].map((app) => (
                <span key={app} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded-full">
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold mb-2 text-white/90">Stay Updated</h4>
            <p className="text-white/50 text-sm mb-4">
              Receive medical travel guides and exclusive package offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-lg px-3 py-2 text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <span>© 2026 ZensiaCare. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
