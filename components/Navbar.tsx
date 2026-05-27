'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Routes', href: '/routes' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Home page has a bright hero top, internal pages have dark headers
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Determine styles based on context
  const isDarkText = false // Always use white/light text for the professional navy theme
  const textColor = 'text-white'
  const hoverColor = 'hover:text-orange-400'
  const logoTextColor = 'text-white group-hover:text-orange-400'
  
  const headerBg = scrolled
    ? 'bg-navy-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
    : 'bg-transparent border-b border-white/10'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-24'
        } ${headerBg}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Segecha Group - Home"
            >
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logo-main.png"
                  alt="Segecha Group Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-outfit font-black text-base lg:text-lg leading-tight tracking-tight uppercase transition-colors ${logoTextColor}`}>
                  Segecha Group
                </span>
                <span className="text-orange-500 text-[10px] font-inter font-black tracking-[0.2em] uppercase opacity-80">
                  Logistics & Freight
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-outfit font-extrabold text-sm uppercase tracking-wider transition-all duration-300 relative group drop-shadow-sm ${
                        isActive 
                          ? 'text-orange-500' 
                          : textColor + ' ' + hoverColor
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${
                        isActive 
                          ? 'w-full bg-orange-500' 
                          : 'w-0 group-hover:w-full ' + (isDarkText ? 'bg-orange-600' : 'bg-orange-500')
                      }`} />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+254715385384"
                className={`flex items-center gap-2 text-sm font-black transition-all group/phone ${textColor} ${hoverColor}`}
                aria-label="Call us: +254 715 385 384"
              >
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  isDarkText 
                    ? 'bg-navy-900/5 border-navy-900/10 group-hover/phone:bg-navy-900' 
                    : 'bg-orange-500/20 border-orange-500/30 group-hover/phone:bg-orange-500'
                }`}>
                  <Phone size={14} className={isDarkText ? 'text-navy-900 group-hover:text-white' : 'text-orange-500 group-hover:text-white'} />
                </div>
                <span className="tracking-tight">+254 715 385 384</span>
              </a>
              <Link
                href="/quote"
                id="nav-quote-cta"
                className="bg-orange-500 hover:bg-orange-600 text-white font-outfit font-black text-xs px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95 uppercase tracking-widest"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isDarkText ? 'text-navy-900 hover:bg-navy-900/10' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy-900 flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logo-main.png"
                      alt="Segecha Group Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-outfit font-black text-white uppercase tracking-tight">Segecha Group</span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 py-6 px-6" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl font-inter font-medium text-base transition-all ${
                            isActive 
                              ? 'text-white bg-white/10' 
                              : 'text-slate-300 hover:text-white hover:bg-white/10'
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                          <ChevronDown 
                            className={`rotate-[-90deg] transition-colors ${isActive ? 'text-orange-500' : 'text-slate-500'}`} 
                            size={16} 
                          />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* Bottom CTAs */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href="tel:+254715385384"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-colors"
                >
                  <Phone size={18} />
                  +254 715 385 384
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold text-sm transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
                <a
                  href="https://wa.me/254715385384?text=Hello%20Segecha%20Group%2C%20I%20have%20a%20logistics%20and%20transport%20inquiry.%20Can%20you%20help%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bc5a] text-white font-medium text-sm transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
