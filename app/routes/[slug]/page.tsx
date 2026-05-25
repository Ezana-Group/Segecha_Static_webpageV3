import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTABanner from '@/components/CTABanner'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { JsonLd } from '@/components/JsonLd'
import { ArrowRight, Clock, MapPin, AlertCircle, CheckCircle, Truck, Shield, Zap } from 'lucide-react'

type RouteData = {
  slug: string
  title: string
  from: string
  to: string
  distance: string
  transitTime: string
  borders: string[]
  overview: string
  included: string[]
  cargoTypes: string[]
  faqs: { question: string; answer: string }[]
}

const ROUTES: RouteData[] = [
  {
    slug: 'mombasa-kampala',
    title: 'Mombasa to Kampala Freight & Logistics',
    from: 'Mombasa, Kenya',
    to: 'Kampala, Uganda',
    distance: '1,200 km',
    transitTime: '3 days',
    borders: ['Busia', 'Malaba'],
    overview: 'The Mombasa–Kampala corridor is the primary trade route for Uganda\'s imports and exports. Segecha Group specializes in moving heavy cargo from Mombasa Port through the Northern Corridor with streamlined border clearance.',
    included: ['Mombasa Port pickup', 'KPA/KRA documentation', 'Malaba/Busia customs clearance', 'GPS real-time tracking', 'Last-mile delivery in Kampala'],
    cargoTypes: ['FMCG & Retail Goods', 'Construction Materials', 'Agricultural Products', 'Industrial Machinery', 'Dangerous Goods (DG)'],
    faqs: [
      { question: 'How long does freight take from Mombasa to Kampala?', answer: 'Typically 3 days, including border crossing at Malaba or Busia.' },
      { question: 'What border post is best for Uganda freight?', answer: 'Malaba is usually preferred for heavy commercial cargo due to its 24-hour operations and OSBP (One-Stop Border Post) facilities.' },
    ],
  },
  {
    slug: 'nairobi-dar-es-salaam',
    title: 'Nairobi to Dar es Salaam Transport Services',
    from: 'Nairobi, Kenya',
    to: 'Dar es Salaam, Tanzania',
    distance: '800 km',
    transitTime: '2 days',
    borders: ['Namanga'],
    overview: 'A vital corridor for trade between Kenya and Tanzania. Segecha provides reliable cross-border transport via the Namanga border post, ensuring rapid transit for manufacturing and retail cargo.',
    included: ['Nairobi warehouse pickup', 'Namanga customs declaration', 'TRA/KRA documentation', 'GPS tracking', 'Dar es Salaam delivery'],
    cargoTypes: ['Consumer Electronics', 'Manufactured Goods', 'Textiles', 'Pharmaceuticals'],
    faqs: [
      { question: 'Is the Namanga border open 24 hours?', answer: 'Yes, the Namanga One-Stop Border Post operates 24 hours for commercial cargo.' },
    ],
  },
  {
    slug: 'mombasa-kigali',
    title: 'Mombasa to Kigali Cross-Border Logistics',
    from: 'Mombasa, Kenya',
    to: 'Kigali, Rwanda',
    distance: '1,800 km',
    transitTime: '4 days',
    borders: ['Malaba', 'Gatuna/Katuna'],
    overview: 'Segecha connects the Port of Mombasa to Rwanda via the Northern Corridor. This route passes through Uganda, requiring multi-border coordination which our team manages seamlessly.',
    included: ['Port clearance', 'Uganda transit bonds', 'Gatuna border clearance', 'EAC transit permits'],
    cargoTypes: ['Essential Commodities', 'Steel & Building Materials', 'NGO/Humanitarian Supplies'],
    faqs: [
      { question: 'What is the fastest route to Kigali?', answer: 'The Northern Corridor via Malaba and Gatuna is the most established route from Mombasa Port.' },
    ],
  },
  {
    slug: 'nairobi-bujumbura',
    title: 'Nairobi to Bujumbura Freight Corridor',
    from: 'Nairobi, Kenya',
    to: 'Bujumbura, Burundi',
    distance: '1,800 km',
    transitTime: '5 days',
    borders: ['Malaba', 'Gatuna', 'Kobero'],
    overview: 'Our longest active corridor. Segecha Group manages the complex logistics of moving cargo through three countries (Kenya, Uganda, Rwanda) to reach Burundi safely and on time.',
    included: ['Transit documentation for 3 countries', 'Kobero border representation', 'Dedicated long-haul drivers'],
    cargoTypes: ['Agricultural Inputs', 'Commercial Goods', 'Fuel & Lubricants'],
    faqs: [
      { question: 'Does Segecha serve Burundi directly?', answer: 'Yes, we provide direct transport from Nairobi and Mombasa to Bujumbura and other Burundi cities.' },
    ],
  },
  {
    slug: 'nairobi-mombasa',
    title: 'Nairobi to Mombasa Domestic Freight',
    from: 'Nairobi, Kenya',
    to: 'Mombasa, Kenya',
    distance: '480 km',
    transitTime: '1 day',
    borders: [],
    overview: 'The busiest domestic corridor in Kenya. We move cargo daily between the capital and the coast, supporting both import/export and domestic manufacturing.',
    included: ['Same-day or next-day delivery', 'Secure loading/offloading', 'Direct transport'],
    cargoTypes: ['Export Tea & Coffee', 'Import Containers', 'Domestic Retail Goods'],
    faqs: [
      { question: 'How long is the drive from Nairobi to Mombasa?', answer: 'Driving time is 8–10 hours, with total transit usually within 24 hours.' },
    ],
  },
]

export async function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const route = ROUTES.find((r) => r.slug === params.slug)
  if (!route) return {}
  return {
    title: route.title,
    description: route.overview,
    alternates: { canonical: `https://segecha.com/routes/${route.slug}` },
  }
}

export default function RouteLandingPage({ params }: { params: { slug: string } }) {
  const route = ROUTES.find((r) => r.slug === params.slug)
  if (!route) notFound()

  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: route.title,
    description: route.overview,
    provider: {
      '@type': 'Organization',
      name: 'Segecha Group Ltd.',
    },
    areaServed: [
      { '@type': 'Place', name: route.from },
      { '@type': 'Place', name: route.to },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: route.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'Routes', item: '/routes' },
          { name: route.from + ' to ' + route.to, item: `/routes/${route.slug}` },
        ]}
      />
      <JsonLd data={routeSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link href="/routes" className="hover:text-white transition-colors">Routes</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">{route.from} to {route.to}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              {route.title}
            </h1>
            <p className="mt-6 text-slate-300 text-xl">{route.overview}</p>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" size={20} />
                <div>
                  <div className="text-white font-bold">{route.distance}</div>
                  <div className="text-slate-500 text-xs uppercase">Distance</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-orange-500" size={20} />
                <div>
                  <div className="text-white font-bold">{route.transitTime}</div>
                  <div className="text-slate-500 text-xs uppercase">Avg. Transit</div>
                </div>
              </div>
              {route.borders.length > 0 && (
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-orange-500" size={20} />
                  <div>
                    <div className="text-white font-bold">{route.borders.join(', ')}</div>
                    <div className="text-slate-500 text-xs uppercase">Borders</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-outfit font-extrabold text-navy-900 text-3xl mb-8">Service Details</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our operations on the {route.from} to {route.to} corridor are optimized for business efficiency. 
                We handle the end-to-end journey, from port or warehouse collection to final destination delivery.
              </p>
              
              <h3 className="font-outfit font-bold text-navy-900 text-xl mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-10">
                {route.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-outfit font-bold text-navy-900 text-xl mb-4">Cargo Types Accepted:</h3>
              <div className="flex flex-wrap gap-2">
                {route.cargoTypes.map((type) => (
                  <span key={type} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-sm text-slate-600 font-medium">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                <h3 className="font-outfit font-bold text-navy-900 text-2xl mb-4 text-center">Get a Route Quote</h3>
                <p className="text-slate-500 text-center mb-8">Response in under 24 hours.</p>
                <Link 
                  href="/quote"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold text-center py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  Request Freight Quote
                </Link>
                <div className="mt-6 flex flex-col items-center gap-2">
                  <span className="text-xs text-slate-400 uppercase tracking-widest">Or Call Directly</span>
                  <a href="tel:+254715385384" className="text-navy-900 font-outfit font-black text-xl">+254 715 385 384</a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-navy-900 rounded-3xl p-8 text-white">
                <h3 className="font-outfit font-bold text-xl mb-6">Route FAQs</h3>
                <div className="space-y-6">
                  {route.faqs.map((faq) => (
                    <div key={faq.question}>
                      <div className="font-bold text-orange-400 text-sm mb-2">{faq.question}</div>
                      <p className="text-slate-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title={`Move Cargo from ${route.from.split(',')[0]} to ${route.to.split(',')[0]}`}
        subtitle="Trusted logistics across East African corridors."
      />
    </>
  )
}
