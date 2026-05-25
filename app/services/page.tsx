import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { Truck, Globe, MapPin, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Logistics Services – Freight, Transport & Fleet Management East Africa',
  description:
    'Explore Segecha Group\'s logistics services: long-haul freight, cross-border transport, fleet tracking & dispatch, and warehouse & distribution across East Africa.',
  alternates: { canonical: 'https://segecha.com/services' },
  openGraph: {
    title: 'Logistics Services | Segecha Group East Africa',
    description: 'Comprehensive logistics solutions for East African trade corridors.',
    url: 'https://segecha.com/services',
  },
}

const services = [
  {
    icon: Truck,
    title: 'Long-Haul Freight',
    description:
      'Professional heavy-tonnage cargo transport across Kenya and East Africa. From 1 ton to 30+ ton loads with GPS-tracked trucks.',
    href: '/services/long-haul-freight',
    features: ['1–30+ ton capacity', 'GPS tracked fleet', '24/7 dispatch support', 'Full cargo insurance'],
  },
  {
    icon: Globe,
    title: 'Cross-Border Transport',
    description:
      'Seamless cargo movement across Kenya, Tanzania, Uganda, Rwanda, and Burundi borders with expert customs clearance.',
    href: '/services/cross-border-transport',
    features: ['5-country network', 'Customs documentation', 'Transit permits', 'Border experts on staff'],
  },
  {
    icon: MapPin,
    title: 'Fleet Tracking & Dispatch',
    description:
      'Real-time GPS fleet management and 24/7 dispatch coordination for maximum cargo visibility and operational efficiency.',
    href: '/services/fleet-tracking-dispatch',
    features: ['Live GPS monitoring', 'Automated ETA alerts', 'Route optimization', 'Driver performance'],
  },
  {
    icon: Package,
    title: 'Warehouse & Distribution',
    description:
      'Secure bonded warehousing at Mombasa Port and distribution to major East African hubs and last-mile destinations.',
    href: '/services/warehouse-distribution',
    features: ['Bonded warehousing', 'Port-side storage', 'Inventory management', 'Last-mile delivery'],
  },
]

const industries = [
  { name: 'Agriculture & Agri-Exports', emoji: '🌾' },
  { name: 'Retail & FMCG', emoji: '🛒' },
  { name: 'Manufacturing', emoji: '🏭' },
  { name: 'Construction & Building', emoji: '🏗️' },
  { name: 'Mining & Natural Resources', emoji: '⛏️' },
  { name: 'Pharmaceuticals & Healthcare', emoji: '💊' },
  { name: 'Import & Export Traders', emoji: '📦' },
  { name: 'Government & NGOs', emoji: '🏛️' },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
        ]}
      />
      {/* Page Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="Services hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">Services</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              End-to-End Logistics Services
            </h1>
            <p className="mt-6 text-slate-300 text-xl max-w-2xl">
              Segecha Group Ltd. provides comprehensive logistics solutions designed specifically
              for East African trade corridors — from Mombasa Port to every major destination
              in Kenya, Tanzania, Uganda, Rwanda, and Burundi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-slate-50" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-grid-heading" className="sr-only">All Services</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Segecha — AI/SEO section */}
      <section className="py-20 bg-white" aria-labelledby="about-services-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="about-services-heading" className="font-outfit font-extrabold text-navy-900 text-3xl mb-6">
            What Logistics Services Does Segecha Group Provide?
          </h2>
          <div className="prose-segecha space-y-4">
            <p>
              Segecha Group Ltd. is a Kenya-registered logistics company providing four core services across East Africa:
              long-haul freight transport, cross-border cargo movement, real-time fleet tracking & dispatch, and bonded
              warehouse & distribution services. Every service is designed to address the specific challenges of moving
              cargo across the East African Community (EAC) trade bloc.
            </p>
            <p>
              Our logistics network spans Kenya, Tanzania, Uganda, Rwanda, and Burundi. We serve businesses in agriculture,
              retail, manufacturing, construction, pharmaceuticals, and government. With over 500 active business clients
              and 7,000+ monthly deliveries, Segecha Group operates one of the most active independent freight networks
              in the region, headquartered at Mombasa Port — East Africa's largest seaport gateway.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-slate-50" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="industries-heading" className="font-outfit font-extrabold text-navy-900 text-2xl sm:text-3xl">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-orange-300 hover:bg-orange-50 transition-all"
              >
                <span className="text-2xl">{ind.emoji}</span>
                <span className="text-sm font-medium text-slate-700">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Logistics Solution?"
        subtitle="Our operations team will design a freight plan tailored to your specific cargo and route requirements."
        primaryLabel="Get Free Quote"
        primaryHref="/quote"
        secondaryLabel="Speak to Operations"
        secondaryHref="tel:+254715385384"
      />
    </>
  )
}
