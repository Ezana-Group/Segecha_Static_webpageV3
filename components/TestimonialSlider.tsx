'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Segecha Group has been our logistics partner for 3 years. Their on-time delivery rate is exceptional — we've never had a critical shipment miss a deadline. The GPS tracking gives us real-time visibility we never had before.",
    name: 'James Mwangi',
    company: 'AgroFresh Kenya Ltd.',
    country: 'Kenya 🇰🇪',
    role: 'Operations Director',
  },
  {
    quote:
      "Moving goods from Mombasa to Kampala is complex with multiple border crossings. Segecha handles all the paperwork and customs clearance seamlessly. Our cargo arrives in 3 days, consistently. Highly recommended.",
    name: 'Sarah Nakajima',
    company: 'Pearl Traders Uganda',
    country: 'Uganda 🇺🇬',
    role: 'CEO',
  },
  {
    quote:
      "We source materials from the Mombasa port and distribute across Tanzania. Segecha's fleet is modern, their drivers professional, and their dispatch team responsive 24/7. A true logistics partner.",
    name: 'Mohammed Hassan',
    company: 'Dar Industries Tanzania',
    country: 'Tanzania 🇹🇿',
    role: 'Supply Chain Manager',
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section className="bg-navy-900 section-grid py-20 lg:py-28" aria-label="Client testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-sep mx-auto" />
          <h2 className="font-outfit font-extrabold text-white text-3xl sm:text-4xl">
            Trusted by Businesses Across East Africa
          </h2>
        </div>

        {/* Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                <Quote size={20} className="text-orange-400" />
              </div>

              <blockquote>
                <p className="text-white text-lg sm:text-xl leading-relaxed font-inter mb-8">
                  "{t.quote}"
                </p>
                <footer className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-outfit font-bold text-xl flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-outfit font-bold text-white text-base">
                      {t.name}
                    </cite>
                    <div className="text-slate-400 text-sm">
                      {t.role} · {t.company}
                    </div>
                    <div className="text-orange-400/80 text-xs mt-0.5">{t.country}</div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`View testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2 bg-orange-500'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
