'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Country {
  id: string
  name: string
  flag: string
  left: string
  top: string
}

const countries: Country[] = [
  {
    id: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    left: '68%',
    top: '43%',
  },
  {
    id: 'uganda',
    name: 'Uganda',
    flag: '🇺🇬',
    left: '42%',
    top: '28%',
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flag: '🇹🇿',
    left: '60%',
    top: '68%',
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    flag: '🇷🇼',
    left: '21%',
    top: '43%',
  },
  {
    id: 'burundi',
    name: 'Burundi',
    flag: '🇧🇮',
    left: '19%',
    top: '49%',
  },
]

const routeLines = [
  { from: [230, 220], to: [150, 145], label: 'Mombasa → Kampala' },
  { from: [205, 200], to: [188, 285], label: 'Nairobi → Dar es Salaam' },
  { from: [230, 220], to: [111, 145], label: 'Mombasa → Kigali' },
  { from: [205, 200], to: [107, 163], label: 'Nairobi → Bujumbura' },
]

export default function RouteMap() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null)
  const active = countries.find((c) => c.id === activeCountry)

  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="East Africa route map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-sep mx-auto" />
          <h2 className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl lg:text-5xl">
            We Operate Across 5 Countries
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Click a country on the map to see our regional presence and routes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Real Map Image with Hotspots */}
          <div className="relative group">
            <div className="aspect-square relative rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl shadow-navy-900/5">
              <Image
                src="/segecha_east_africa_map.png"
                alt="Interactive map of Segecha Group operations in East Africa"
                fill
                className="object-cover"
              />
              
              {/* Overlay Hotspots (Simplified for interaction) */}
              <div className="absolute inset-0">
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setActiveCountry(activeCountry === country.id ? null : country.id)}
                    className={`absolute p-2 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/btn ${
                      activeCountry === country.id ? 'z-20 scale-125' : 'z-10'
                    }`}
                    style={{ 
                      left: country.left, 
                      top: country.top 
                    }}
                    aria-label={`View ${country.name} details`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-colors ${
                      activeCountry === country.id ? 'bg-orange-500' : 'bg-navy-600 group-hover/btn:bg-orange-400'
                    }`} />
                    <span className={`mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-white shadow-sm transition-opacity ${
                      activeCountry === country.id ? 'bg-orange-500 opacity-100' : 'bg-navy-900/60 opacity-0 group-hover/btn:opacity-100'
                    }`}>
                      {country.name}
                    </span>
                  </button>
                ))}
                
                {/* Mombasa HQ Highlight */}
                <div 
                  className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: '78%', top: '51%' }} // Mombasa position approx
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-2 border-white" />
                    <div className="absolute inset-0 w-full h-full bg-orange-500 rounded-full animate-ping opacity-40" />
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-black text-navy-900 shadow-md">
                      MOMBASA HQ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-navy-600" />
                <span>Service Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                <span>Selected / HQ</span>
              </div>
            </div>
          </div>

          {/* Country Info Panel */}
          <div>
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">{active.flag}</span>
                  <div>
                    <h3 className="font-outfit font-bold text-navy-900 text-2xl">{active.name}</h3>
                    <p className="text-orange-500 text-sm font-medium">Active Service Area</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed">
                  Segecha Group provides full logistics coverage in{' '}
                  <strong>{active.name}</strong>, including last-mile delivery, cross-border
                  customs clearance, and real-time GPS fleet tracking.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {['Long-Haul Freight', 'Cross-Border Transport', 'Fleet Tracking', 'Customs Support'].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="font-outfit font-bold text-navy-900 text-xl mb-2">
                  Select a Country
                </h3>
                <p className="text-slate-500 text-base">
                  Click any country on the map to see the services and routes we operate there.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {countries.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCountry(c.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700 text-sm font-medium transition-colors"
                    >
                      <span>{c.flag}</span> {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
