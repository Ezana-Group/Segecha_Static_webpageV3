import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { JsonLd } from '@/components/JsonLd'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const dynamicParams = false

type ServiceData = {
  slug: string
  title: string
  shortTitle: string
  description: string
  hero: string
  what: string[]
  how: { title: string; desc: string }[]
  features: string[]
  industries: string[]
  faqs: { question: string; answer: string }[]
}

const SERVICES: ServiceData[] = [
  {
    slug: 'long-haul-freight',
    title: 'Long-Haul Freight Transport',
    shortTitle: 'Long-Haul Freight',
    description:
      'Professional heavy-tonnage cargo transport across Kenya and East Africa with GPS-tracked trucks, experienced drivers, and 24/7 dispatch support.',
    hero: 'Move Any Load, Any Distance — Reliably.',
    what: [
      'Long-haul freight refers to the transport of large quantities of goods over significant distances — typically 500km or more — using heavy commercial trucks. In East Africa, long-haul freight is the backbone of trade between major commercial hubs like Mombasa Port, Nairobi, Kampala, Dar es Salaam, Kigali, and Bujumbura.',
      "At Segecha Group Ltd., our long-haul freight service covers loads from 1 ton up to 30+ tons, using a professionally maintained fleet of flatbed, curtainsider, tanker, and refrigerated trucks. Every shipment is GPS-tracked, insured, and assigned to an experienced driver who specializes in the specific route corridor.",
    ],
    how: [
      { title: 'Request & Quote', desc: 'Submit your route and cargo details. We provide a transparent quote within 24 hours with no hidden fees.' },
      { title: 'Load Planning', desc: 'Our dispatch team assigns the optimal truck type and driver for your cargo and route — accounting for load securing and weight compliance.' },
      { title: 'GPS-Tracked Departure', desc: 'Your cargo departs with a GPS-equipped truck. You receive live tracking access and ETA updates throughout the journey.' },
      { title: 'Safe Delivery & POD', desc: 'Upon delivery, you receive a Proof of Delivery (POD) document and can provide feedback through our ops team.' },
    ],
    features: [
      'Loads from 1 ton to 30+ tons',
      'GPS real-time tracking on all trucks',
      '24/7 dispatch and operations center',
      'Comprehensive cargo insurance',
      'Flatbed, curtainsider, tanker and reefer trucks',
      'Experienced, licensed long-haul drivers',
      'On-time delivery guarantee (99.8% rate)',
      'Proof of Delivery (POD) documentation',
    ],
    industries: ['Agriculture & Agri-Exports', 'Retail & FMCG', 'Manufacturing', 'Construction Materials', 'Mining', 'Pharmaceuticals', 'Import/Export'],
    faqs: [
      {
        question: 'What is the maximum load Segecha can transport?',
        answer: 'Segecha Group handles loads from 1 ton up to 34 tons per truck (the legal maximum on East African roads). For heavier or oversized loads, we can arrange multi-truck convoys or special permit transport.',
      },
      {
        question: 'What types of trucks does Segecha operate?',
        answer: 'Our fleet includes flatbed trucks, curtainsider (tarpaulin) trailers, tanker trucks, refrigerated (reefer) trucks, lowbed trailers for heavy equipment, and standard box trucks. We match the truck type to your cargo requirements.',
      },
      {
        question: 'How long does long-haul freight take from Mombasa to Nairobi?',
        answer: 'The Mombasa–Nairobi corridor (~480km) typically takes 8–12 hours of driving time. With loading, transit checks, and unloading, standard door-to-door is 1–2 business days.',
      },
      {
        question: 'Is my cargo insured during transport?',
        answer: 'Yes. All Segecha freight shipments are covered by comprehensive cargo insurance during transit. We can also accommodate client-specified additional insurance for high-value goods.',
      },
      {
        question: 'Can Segecha transport hazardous materials?',
        answer: 'Yes, Segecha is licensed to transport hazardous goods (DG cargo) including fuel, chemicals, and industrial gases, subject to proper documentation (SDS, MSDS) and compliance with KEBS and regional transport regulations.',
      },
    ],
  },
  {
    slug: 'cross-border-transport',
    title: 'Cross-Border Transport Across East Africa',
    shortTitle: 'Cross-Border Transport',
    description:
      'Expert cross-border cargo movement between Kenya, Tanzania, Uganda, Rwanda, and Burundi with full customs clearance and transit documentation support.',
    hero: 'No Borders Should Stop Your Business.',
    what: [
      'Cross-border transport in East Africa involves moving cargo across national borders within the East African Community (EAC) trade bloc, which includes Kenya, Tanzania, Uganda, Rwanda, and Burundi. It requires specialized knowledge of customs regulations, transit permits, border post procedures, and country-specific documentation requirements.',
      "Segecha Group Ltd. has established expertise across all major East African border crossings including Busia, Malaba (Kenya–Uganda), Namanga, Holili (Kenya–Tanzania), Rusumo, Gatuna (Rwanda), and Kobero (Burundi). Our team handles all documentation — C3 transit documents, customs bonds, import/export declarations, and phytosanitary certificates where required.",
    ],
    how: [
      { title: 'Route & Cargo Assessment', desc: 'We assess your cargo type, destination country requirements, and applicable tariffs or exemptions under EAC protocols.' },
      { title: 'Documentation Preparation', desc: 'Our compliance team prepares transit permits, C3 documents, customs bonds, invoices, packing lists, and any special certificates (health, phytosanitary, etc.).' },
      { title: 'Departure & Border Transit', desc: 'Our drivers are trained on border protocols. We have established relationships at all major border posts to minimize waiting time.' },
      { title: 'Delivery & Clearance', desc: 'At destination, we support import clearance with our network of licensed clearing agents in each country.' },
    ],
    features: [
      '5-country East Africa network',
      'Licensed customs clearing agents in all countries',
      'C3 transit document preparation',
      'Import/export declaration support',
      'Phytosanitary & health certificate handling',
      'Border post representation at all major crossings',
      'EAC trade protocol expertise',
      'Duty drawback and bond management',
    ],
    industries: ['Agricultural Exports', 'FMCG & Consumer Goods', 'Industrial Equipment', 'Pharmaceuticals', 'Oil & Energy', 'NGO/Humanitarian'],
    faqs: [
      {
        question: 'Which border crossings does Segecha use between Kenya and Uganda?',
        answer: 'Segecha primarily uses Busia and Malaba border crossings for Kenya–Uganda shipments. Both are major commercial border posts with 24-hour operations. The choice depends on the final destination within Uganda and cargo type.',
      },
      {
        question: 'How long does cross-border customs clearance take?',
        answer: 'With proper documentation, border clearance typically takes 2–6 hours at major crossings like Busia or Malaba. Delays occur when documentation is incomplete or cargo requires physical inspection. Segecha\'s pre-clearance process minimizes transit delays.',
      },
      {
        question: 'Does Segecha handle customs clearance or just transport?',
        answer: 'Segecha provides end-to-end support including transport AND customs clearance documentation. We work with licensed customs clearing agents in each country to ensure seamless import/export declarations.',
      },
      {
        question: 'What goods are restricted or prohibited across East African borders?',
        answer: 'Prohibited goods vary by country but generally include narcotics, counterfeit goods, unprocessed hides, and certain food products without proper certification. Our compliance team advises on country-specific restrictions before departure.',
      },
      {
        question: 'Can Segecha transport from Kenya to Burundi (the most distant route)?',
        answer: 'Yes. The Nairobi–Bujumbura corridor (~1,800km) is one of our active routes. It passes through Tanzania or Uganda and takes approximately 4–5 days including border crossings. We manage all documentation for Kenya, Tanzania/Uganda, Rwanda, and Burundi.',
      },
    ],
  },
  {
    slug: 'fleet-tracking-dispatch',
    title: 'Fleet Tracking & Dispatch Management',
    shortTitle: 'Fleet Tracking & Dispatch',
    description:
      'Real-time GPS fleet tracking, intelligent route dispatch, and 24/7 operations center support for complete cargo visibility across East Africa.',
    hero: 'Know Where Your Cargo Is. Always.',
    what: [
      'Fleet tracking and dispatch management is the technology-driven backbone of modern logistics. It involves equipping trucks with GPS devices that transmit real-time location data, and having a centralized dispatch operations center that monitors all vehicles, coordinates driver communications, and responds to incidents in real time.',
      "At Segecha Group Ltd., every truck in our fleet is equipped with GPS tracking hardware linked to our dispatch operations center in Mombasa. Our operations team works 24/7, monitoring all active shipments, providing clients with live tracking updates, and proactively managing any delays or route changes. This system has contributed to our 99.8% on-time delivery rate across 7,000+ monthly deliveries.",
    ],
    how: [
      { title: 'Vehicle Assignment', desc: 'When your shipment is confirmed, our dispatch system assigns the nearest available appropriate truck and driver to your load.' },
      { title: 'GPS Activation & Monitoring', desc: 'The truck\'s GPS device activates on departure. Our operations center begins monitoring the vehicle live on our mapping platform.' },
      { title: 'Real-Time Updates', desc: 'You receive ETA notifications and location updates at key milestones (departure, border crossing, city arrival, delivery).' },
      { title: 'Incident Response', desc: 'If any delay or incident occurs, our dispatch team immediately communicates with the driver and notifies you with a revised ETA and recovery plan.' },
    ],
    features: [
      'Live GPS tracking on all fleet vehicles',
      '24/7 dispatch operations center',
      'Real-time ETA calculations',
      'Automated milestone notifications (SMS/WhatsApp)',
      'Driver communication system',
      'Route deviation alerts',
      'Fuel monitoring and idle time tracking',
      'Historical route reports for clients',
    ],
    industries: ['Manufacturing Supply Chains', 'Retail Distribution', 'Pharmaceutical Cold Chain', 'FMCG Distribution', 'Government Procurement'],
    faqs: [
      {
        question: 'Can clients access live GPS tracking for their shipment?',
        answer: 'Yes. Segecha provides clients with shipment tracking updates via WhatsApp and SMS at key milestones. Enterprise clients with regular shipment volumes can access our tracking portal for live vehicle location.',
      },
      {
        question: 'What happens if a truck breaks down during transit?',
        answer: 'Our 24/7 dispatch team is immediately notified via GPS alerts. We dispatch a recovery truck or replacement vehicle to minimize delays. Clients are notified with a revised ETA within 30 minutes of any incident.',
      },
      {
        question: 'Does Segecha offer fleet management for third-party trucks?',
        answer: 'Yes. Segecha offers GPS fleet tracking services to other transport companies and owner-operators in East Africa who want to plug into our dispatch management system. Contact our operations team for pricing.',
      },
      {
        question: 'How does route optimization work?',
        answer: 'Our dispatch system analyzes live traffic, road conditions, border wait times, and fuel efficiency to assign the optimal route for each shipment. For cross-border loads, it also factors in border post operational hours.',
      },
      {
        question: 'What are the GPS tracking hours of the dispatch center?',
        answer: 'Our dispatch operations center operates 24 hours a day, 7 days a week, 365 days a year. Long-haul transport never stops, and neither does our monitoring — especially for time-critical or cross-border shipments.',
      },
    ],
  },
  {
    slug: 'warehouse-distribution',
    title: 'Warehouse & Distribution Services',
    shortTitle: 'Warehouse & Distribution',
    description:
      'Secure bonded warehousing at Mombasa Port and professional distribution services to major East African hubs and last-mile destinations.',
    hero: 'Store Smart. Distribute Fast.',
    what: [
      'Warehouse and distribution services encompass the secure storage of goods at strategic logistics hubs, combined with organized outbound distribution to final destinations. Bonded warehouses at port locations like Mombasa are especially critical — they allow importers to store goods before paying customs duty, and to consolidate or split shipments before onward distribution.',
      'Segecha Group Ltd. operates bonded and general warehousing facilities at Mombasa Port (Shed 12, Port Reitz Road) — one of the most strategically positioned logistics locations in East Africa. From our port-adjacent warehouse, we receive goods arriving by sea container, store them securely, and dispatch them to destinations across Kenya and throughout East Africa via our truck fleet.',
    ],
    how: [
      { title: 'Container Receipt & Offloading', desc: 'We receive your sea container from Mombasa Port, handle all KPA/KRA documentation, and offload cargo into our secure bonded warehouse.' },
      { title: 'Storage & Inventory Management', desc: 'Your goods are stored systematically with inventory tracking. You receive regular stock reports and can request any-time stock counts.' },
      { title: 'Order Processing & Dispatch Planning', desc: 'When you\'re ready to distribute, our team consolidates orders and plans the most efficient truck dispatch schedule to your destinations.' },
      { title: 'Last-Mile Delivery', desc: 'Our distribution trucks deliver to retail warehouses, manufacturing facilities, regional distributors, or end-customer locations across East Africa.' },
    ],
    features: [
      'Bonded warehousing at Mombasa Port',
      'General dry storage and shelving',
      'Container receipt and offloading',
      'KPA/KRA customs documentation handling',
      'Inventory management and stock reports',
      'Order picking and packing services',
      'Consolidation and deconsolidation (LCL/FCL)',
      'Distribution to all East African destinations',
      'Temperature-controlled storage available',
    ],
    industries: ['Import Traders', 'Retail Chains & Supermarkets', 'FMCG Companies', 'Pharmaceutical Importers', 'Manufacturing (Raw Materials)', 'E-commerce Fulfillment'],
    faqs: [
      {
        question: 'Where is Segecha\'s warehouse located?',
        answer: 'Our primary warehouse is located at Mombasa Port, Shed 12, Port Reitz Road, Mombasa, Kenya — directly adjacent to the port, which minimizes container transport costs and port dwell time.',
      },
      {
        question: 'What is a bonded warehouse and why does it matter?',
        answer: 'A bonded warehouse is a secure customs-controlled facility where imported goods can be stored before payment of import duties. This allows businesses to manage cash flow by delaying duty payment until goods are actually withdrawn for sale or use in Kenya.',
      },
      {
        question: 'Can Segecha receive goods arriving by sea container?',
        answer: 'Yes. We receive full container loads (FCL) and less-than-container loads (LCL) from Mombasa Port. We handle all Kenya Ports Authority (KPA) and KRA documentation for container release and warehousing.',
      },
      {
        question: 'Do you offer temperature-controlled warehousing?',
        answer: 'We have limited cold-chain storage capacity. For pharmaceutical and perishable goods requiring temperature-controlled warehousing (2°C–8°C or other ranges), contact our operations team to assess current availability.',
      },
      {
        question: 'Can Segecha distribute goods to upcountry Kenya and neighboring countries from the warehouse?',
        answer: 'Yes. Our warehouse is the departure point for our entire distribution network. We can distribute to any location in Kenya (including upcountry towns) and to all neighboring countries in East Africa using our long-haul and cross-border fleet.',
      },
    ],
  },
]

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} | Segecha Group – Logistics East Africa`,
    description: service.description,
    alternates: { canonical: `https://segecha.com/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Segecha Group`,
      description: service.description,
      url: `https://segecha.com/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const others = SERVICES.filter((s) => s.slug !== service.slug)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Segecha Group Ltd.',
      url: 'https://segecha.com',
    },
    areaServed: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Burundi'],
    url: `https://segecha.com/services/${service.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: service.shortTitle, item: `/services/${service.slug}` },
        ]}
      />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="Service hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">{service.shortTitle}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              {service.hero}
            </h1>
            <p className="mt-6 text-slate-300 text-xl">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+254715385384"
                className="border-2 border-white/30 hover:border-white/60 text-white font-outfit font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/10"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is section */}
      <section className="py-16 bg-white" aria-labelledby="what-is-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="what-is-heading" className="font-outfit font-extrabold text-navy-900 text-3xl mb-6">
            What is {service.shortTitle}?
          </h2>
          <div className="prose-segecha space-y-4">
            {service.what.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-it-works-heading" className="font-outfit font-extrabold text-navy-900 text-3xl mb-10 text-center">
            How {service.shortTitle} Works at Segecha
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.how.map((step, i) => (
              <div key={step.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-outfit font-black flex items-center justify-center text-lg flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="features-heading" className="font-outfit font-extrabold text-navy-900 text-3xl mb-6">
                Key Features & Capabilities
              </h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-outfit font-bold text-navy-900 text-xl mb-5">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {service.industries.map((ind) => (
                  <div
                    key={ind}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 font-medium"
                  >
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-outfit font-extrabold text-navy-900 text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-white" aria-labelledby="related-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="font-outfit font-extrabold text-navy-900 text-2xl mb-8">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-slate-50 border border-slate-200 hover:border-orange-400 rounded-2xl p-5 transition-all hover:shadow-md"
              >
                <h3 className="font-outfit font-bold text-navy-900 group-hover:text-orange-500 text-base mb-2 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-3">{s.description}</p>
                <div className="flex items-center gap-1.5 text-orange-500 text-sm font-semibold">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready for ${service.shortTitle}?`}
        subtitle="Get a personalized quote from our operations team within 24 hours."
      />
    </>
  )
}
