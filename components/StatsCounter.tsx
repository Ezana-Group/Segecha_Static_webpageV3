'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Business Clients', prefix: '' },
  { value: 7000, suffix: '+', label: 'Monthly Deliveries', prefix: '' },
  { value: 99.8, suffix: '%', label: 'On-Time Delivery Rate', prefix: '' },
  { value: 5, suffix: '', label: 'Countries Served', prefix: '' },
]

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, target])

  const display =
    target % 1 !== 0
      ? count.toFixed(1)
      : Math.round(count).toLocaleString()

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="bg-navy-900 section-grid py-20 lg:py-28" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-14"
        >
          <div className="section-sep mx-auto" />
          <h2 className="font-outfit font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl">
            Numbers That Speak for Themselves
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Our track record across East Africa demonstrates the reliability and scale
            of our logistics operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="bg-navy-900 px-8 py-10 flex flex-col items-center text-center group hover:bg-navy-600/20 transition-colors duration-300"
            >
              <div className="font-outfit font-black text-4xl sm:text-5xl text-white group-hover:text-orange-400 transition-colors duration-300">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="mt-3 text-slate-400 font-inter text-sm font-medium">
                {stat.label}
              </div>
              <div className="mt-4 w-8 h-0.5 bg-orange-500/30 group-hover:bg-orange-500 transition-colors duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
