import type { Metadata } from 'next'
import Image from 'next/image'
import HeroHome from '@/components/HeroHome'
import StatsCounter from '@/components/StatsCounter'
import TestimonialSlider from '@/components/TestimonialSlider'
import CTABanner from '@/components/CTABanner'
import RouteMap from '@/components/RouteMap'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import {
  Truck,
  Globe,
  MapPin,
  Package,
  ClipboardCheck,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Segecha Group – Reliable Logistics & Freight East Africa | Kenya Logistics Company',
  description:
    'Segecha Group Ltd. delivers reliable long-haul freight, cross-border transport, fleet tracking and warehouse distribution across Kenya, Tanzania, Uganda, Rwanda and Burundi. 7,000+ monthly deliveries. 99.8% on-time rate.',
  alternates: { canonical: 'https://segecha.com' },
  openGraph: {
    title: 'Segecha Group – Logistics East Africa',
    description:
      'Long-haul freight, cross-border transport, and real-time fleet tracking across 5 East African countries.',
    url: 'https://segecha.com',
    type: 'website',
  },
}

const services = [
  {
    icon: Truck,
    title: 'Long-Haul Freight',
    description:
      'Heavy-tonnage cargo transport across Kenya and beyond, with professional drivers and GPS-tracked trucks.',
    href: '/services/long-haul-freight',
    features: ['Loads from 1 ton to 30+ tons', '24/7 dispatch support', 'GPS real-time tracking'],
  },
  {
    icon: Globe,
    title: 'Cross-Border Transport',
    description:
      'Seamless cargo movement across East African borders with customs clearance support.',
    href: '/services/cross-border-transport',
    features: ['5-country network', 'Customs documentation', 'Border crossing expertise'],
  },
  {
    icon: MapPin,
    title: 'Fleet Tracking & Dispatch',
    description:
      'Real-time GPS fleet management, route optimization, and 24/7 dispatch coordination.',
    href: '/services/fleet-tracking-dispatch',
    features: ['Live GPS monitoring', 'Automated alerts', 'Route optimization'],
  },
  {
    icon: Package,
    title: 'Warehouse & Distribution',
    description:
      'Secure warehousing and last-mile distribution services in Mombasa and major hubs.',
    href: '/services/warehouse-distribution',
    features: ['Bonded warehousing', 'Inventory management', 'Last-mile delivery'],
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Request a Quote',
    desc: 'Fill out our quick quote form with your route, cargo details, and contact info. We respond within 24 hours.',
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: 'We Plan Your Route',
    desc: 'Our dispatch team assigns the best truck and driver, prepares customs documentation for cross-border shipments.',
    icon: MapPin,
  },
  {
    step: '03',
    title: 'Track & Receive',
    desc: 'Your cargo moves with GPS tracking. You receive real-time updates until safe delivery at your destination.',
    icon: Zap,
  },
]

const pillars = [
  {
    title: 'Long-Haul Trust & Reliability',
    desc: 'With 500+ clients served and 7,000+ monthly deliveries, Segecha has built its reputation on reliability. Our professional drivers follow strict safety protocols. Every shipment is insured.',
    bullets: [
      'Experienced professional drivers',
      'Comprehensive cargo insurance',
      'Consistent 99.8% on-time delivery rate',
    ],
    badge: 'Reliability',
  },
  {
    title: 'Smart Fleet Technology',
    desc: "We don't just move trucks — we run a technology-driven operation. Every vehicle is GPS-equipped, giving you and our dispatch team live visibility over your cargo 24/7.",
    bullets: [
      'Real-time GPS tracking on all vehicles',
      '24/7 dispatch operations center',
      'Automated ETA notifications',
    ],
    badge: 'Technology',
  },
  {
    title: 'Efficient East African Routing',
    desc: 'Our drivers are specialists in East African routes and border crossings. We handle customs documentation, transit permits, and border logistics so you don\'t have to.',
    bullets: [
      'Expert cross-border customs support',
      'Established relationships at all border posts',
      'Route optimization for fastest transit',
    ],
    badge: 'Efficiency',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroHome />

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-sep mx-auto" />
            <h2
              id="how-it-works-heading"
              className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl lg:text-5xl"
            >
              How It Works
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              Getting your cargo from A to B across East Africa is simple with Segecha.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-orange-50 border-2 border-orange-100" />
                  <item.icon size={24} className="relative text-orange-500" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-outfit font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                {/* Connector line (desktop only) */}
                {i < howItWorks.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-orange-300 to-orange-100"
                    aria-hidden="true"
                  />
                )}

                <h3 className="font-outfit font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-slate-50 section-dots" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-sep" />
              <h2 id="services-heading" className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl lg:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 text-slate-500 text-lg max-w-2xl">
                End-to-end logistics solutions tailored for East African trade corridors.
              </p>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-2 text-orange-500 font-outfit font-semibold text-sm whitespace-nowrap hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY SEGECHA */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="why-segecha-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-sep mx-auto" />
            <h2
              id="why-segecha-heading"
              className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl lg:text-5xl"
            >
              Why Choose Segecha Group?
            </h2>
          </div>

          <div className="space-y-20">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block text-xs font-outfit font-bold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-4">
                    {pillar.badge}
                  </span>
                  <h3 className="font-outfit font-extrabold text-navy-900 text-2xl sm:text-3xl mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-6">{pillar.desc}</p>
                  <ul className="space-y-3">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-slate-700 text-sm">
                        <CheckCircle size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual panel */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl bg-navy-900 relative overflow-hidden group border border-slate-200">
                    <Image
                      src={
                        i === 0
                          ? '/segecha_hero_truck.jpg'
                          : i === 1
                          ? '/segecha_fleet_dispatch.jpg'
                          : '/segecha_warehouse_ops.jpg'
                      }
                      alt="Segecha Group Logistics truck on East African highway"
                      fill
                      className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 z-10">
                      <div className="text-5xl font-outfit font-black text-white/20 leading-none mb-3">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-2">
                        {i === 0 && <Shield size={24} className="text-white" />}
                        {i === 1 && <Zap size={24} className="text-white" />}
                        {i === 2 && <Globe size={24} className="text-white" />}
                      </div>
                      <p className="text-white font-outfit font-bold text-xl">{pillar.badge}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ROUTE MAP */}
      <RouteMap />

      {/* STATS */}
      <StatsCounter />

      {/* CASE STUDY SPOTLIGHT */}
      <section className="py-16 bg-white" aria-label="Case study spotlight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-navy-900 overflow-hidden p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 section-grid opacity-10" />
            
            <div className="relative z-10 flex-1">
              <span className="inline-block text-xs font-outfit font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h3 className="font-outfit font-extrabold text-white text-2xl sm:text-3xl mb-3">
                Mombasa to Kampala in 3 Days
              </h3>
              <p className="text-slate-300 text-base mb-8 leading-relaxed">
                Discover how Segecha Group consistently moves heavy cargo 1,200km from Mombasa Port
                to Kampala, Uganda in just 3 days — navigating the Busia and Malaba border crossings
                with zero delays.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                {[
                  { label: 'Distance', value: '1,200 km' },
                  { label: 'Transit Time', value: '3 days' },
                  { label: 'Border Crossings', value: '1–2' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-outfit font-black text-orange-400 text-3xl mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-xs uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/routes/mombasa-kampala"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold text-sm px-8 py-4 rounded-xl transition-all active:scale-95 group shadow-lg shadow-orange-500/20"
              >
                View Route Details
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative z-10 sm:w-64">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-orange-400" size={32} />
                </div>
                <div className="font-outfit font-black text-white text-2xl mb-1">KE ➔ UG</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Northern Corridor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* QUOTE CTA */}
      <section className="py-20 bg-white" aria-label="Quote form section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-sep" />
              <h2 className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl">
                Move Your Cargo Today
              </h2>
              <p className="mt-4 text-slate-500 text-base">
                Fill in a few details and get a freight quote within 24 hours. No commitment required.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Response within 24 hours',
                  'No commitment required',
                  'Expert route planning included',
                  'Customs documentation support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
              {/* Simple inline quote capture */}
              <h3 className="font-outfit font-bold text-navy-900 text-lg mb-5">Quick Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Route (e.g. Mombasa → Kampala)"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  id="home-quote-route"
                />
                <select
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all bg-white"
                  id="home-quote-cargo"
                >
                  <option value="">Cargo type</option>
                  <option>Agricultural Products</option>
                  <option>Consumer Goods / FMCG</option>
                  <option>Building Materials</option>
                  <option>Machinery & Equipment</option>
                  <option>Other</option>
                </select>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  id="home-quote-phone"
                />
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold text-sm py-3.5 rounded-xl transition-all active:scale-95"
                >
                  Get Full Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="text-xs text-slate-400 text-center mt-3">
                Or{' '}
                <a
                  href="https://wa.me/254715385384"
                  className="text-orange-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  message us on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <CTABanner
        title="Ready to Move East Africa Forward?"
        subtitle="Join 500+ businesses that trust Segecha Group for reliable logistics across the region."
        primaryLabel="Get Free Quote"
        primaryHref="/quote"
        secondaryLabel="Call: +254 715 385 384"
        secondaryHref="tel:+254715385384"
      />

      {/* ENTITY RECOGNITION PARAGRAPH (SEO/AI) */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Segecha Group Ltd. is a Kenya-registered logistics company headquartered at Mombasa Port,
          Shed 12, Port Reitz Road, Mombasa, Kenya. Founded to serve East African trade corridors,
          Segecha provides long-haul freight, cross-border transport, real-time fleet tracking, and
          warehouse distribution across Kenya, Tanzania, Uganda, Rwanda, and Burundi. With over 500
          business clients and 7,000+ monthly deliveries, Segecha operates a professional fleet of
          trucks with GPS tracking and 24/7 dispatch support.
        </p>
      </div>
    </>
  )
}
