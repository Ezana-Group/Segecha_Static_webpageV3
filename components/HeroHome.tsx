'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

// East Africa route coordinates (simplified SVG paths)
const routes = [
  {
    id: 'mombasa-kampala',
    label: 'Mombasa → Kampala',
    d: 'M 230 220 Q 200 190 180 170 Q 165 155 150 145',
    delay: 0,
  },
  {
    id: 'nairobi-dar',
    label: 'Nairobi → Dar es Salaam',
    d: 'M 205 200 Q 200 230 195 255 Q 190 270 188 285',
    delay: 0.5,
  },
  {
    id: 'mombasa-kigali',
    label: 'Mombasa → Kigali',
    d: 'M 230 220 Q 200 200 175 180 Q 155 165 135 155 Q 120 148 110 145',
    delay: 1,
  },
  {
    id: 'nairobi-bujumbura',
    label: 'Nairobi → Bujumbura',
    d: 'M 205 200 Q 175 190 155 180 Q 135 170 120 168 Q 108 165 100 163',
    delay: 1.5,
  },
]

// City nodes
const cities = [
  { id: 'mombasa', label: 'Mombasa', x: 230, y: 220, isHQ: true },
  { id: 'nairobi', label: 'Nairobi', x: 205, y: 200 },
  { id: 'kampala', label: 'Kampala', x: 148, y: 143 },
  { id: 'dar', label: 'Dar es Salaam', x: 186, y: 288 },
  { id: 'kigali', label: 'Kigali', x: 108, y: 143 },
  { id: 'bujumbura', label: 'Bujumbura', x: 98, y: 165 },
]

const trustStats = [
  { value: '500+', label: 'Clients' },
  { value: '7,000+', label: 'Monthly Deliveries' },
  { value: '99.8%', label: 'On-Time Rate' },
  { value: '5', label: 'Countries' },
]

export default function HeroHome() {
  const routesRef = useRef<SVGGElement>(null)

  return (
    <section
      className="relative min-h-screen bg-navy-900 flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Hero Image - Matching About Story Design */}
      <div className="absolute inset-0 z-0 bg-navy-900">
        <Image
          src="/segecha_hero_truck.jpg"
          alt="Segecha Group heavy-tonnage logistics truck delivering freight across East Africa"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />
      </div>

      {/* Decorative SVG Map & Routes — desktop only */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/3 hidden lg:block z-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="80 120 200 220"
          className="w-full h-full opacity-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated route lines */}
          <g ref={routesRef}>
            {routes.map((route) => (
              <motion.path
                key={route.id}
                d={route.d}
                stroke="#F97316"
                strokeWidth="1"
                strokeDasharray="400"
                strokeDashoffset={400}
                fill="none"
                strokeLinecap="round"
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  delay: route.delay + 0.8,
                  duration: 2.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              />
            ))}
          </g>

          {/* City dots */}
          {cities.map((city) => (
            <g key={city.id}>
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={city.isHQ ? 4 : 2}
                fill={city.isHQ ? '#F97316' : 'white'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />
              {city.isHQ && (
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r={10}
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                  transition={{ delay: 1, duration: 2.5, repeat: Infinity }}
                />
              )}
              <text
                x={city.x + (city.isHQ ? 8 : 6)}
                y={city.y + 3}
                fontSize="6"
                fill="white"
                className="font-inter opacity-60"
                fontWeight={city.isHQ ? '700' : '400'}
              >
                {city.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-16">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="inline-flex items-center gap-2 text-orange-500 text-sm font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            East Africa's Trusted Logistics Partner
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="font-outfit font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-balance"
          >
            Logistics That Move{' '}
            <span className="text-orange-500">East Africa</span>{' '}
            Forward
          </motion.h1>

          {/* Subtext - No Glass Wash, Clean Typography */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 text-slate-200 text-xl sm:text-2xl leading-relaxed max-w-2xl font-medium"
          >
            Reliable long-haul freight, cross-border transport, and real-time tracking
            across <strong className="text-white font-bold">Kenya, Tanzania, Uganda, Rwanda</strong> and{' '}
            <strong className="text-white font-bold">Burundi</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/quote"
              id="hero-get-quote-btn"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95 group"
            >
              Get Free Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <a
              href="tel:+254715385384"
              id="hero-call-btn"
              className="inline-flex items-center gap-3 border-2 border-white/20 hover:border-white/60 text-white font-outfit font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 active:scale-95"
            >
              <Phone size={18} className="text-orange-500" />
              Call Us Now
            </a>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mt-16 lg:mt-20"
          aria-label="Trust statistics"
        >
          <div className="inline-flex flex-wrap items-center gap-0 bg-navy-950/60 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl shadow-black/40">
            {trustStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-6 py-5 sm:px-10 ${
                  i < trustStats.length - 1 ? 'border-r border-white/10' : ''
                }`}
              >
                <span className="font-outfit font-black text-white text-3xl sm:text-4xl leading-none drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-slate-200 text-xs sm:text-sm font-bold mt-2 whitespace-nowrap uppercase tracking-widest drop-shadow-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-slate-500 text-xs uppercase tracking-widest font-inter">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-orange-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
