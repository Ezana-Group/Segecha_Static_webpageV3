import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions – Segecha Group Logistics East Africa',
  description:
    'Answers to common questions about Segecha Group\'s freight, cross-border transport, tracking, pricing, and cargo services across East Africa.',
  alternates: { canonical: 'https://segecha.com/faq' },
  openGraph: {
    title: 'FAQ | Segecha Group Logistics',
    url: 'https://segecha.com/faq',
  },
}

const faqCategories = [
  {
    category: 'Company & Reliability',
    items: [
      {
        question: 'What is Segecha Group?',
        answer: 'Segecha Group Ltd. is a Kenyan logistics and freight company headquartered at Mombasa Port, Kenya. Founded to serve East African trade corridors, the company provides long-haul freight, cross-border logistics, and fleet tracking across the EAC region.',
      },

      {
        question: 'Is Segecha Group reliable?',
        answer: 'Yes. Segecha Group maintains a 99.8% on-time delivery rate across 7,000+ monthly deliveries. We use real-time GPS tracking on every vehicle and operate a 24/7 dispatch center to ensure cargo safety and reliability.',
      },
      {
        question: 'How many countries does Segecha Group operate in?',
        answer: 'Segecha Group operates in 5 East African countries: Kenya, Tanzania, Uganda, Rwanda, and Burundi, covering all major trade corridors from the Port of Mombasa.',
      },
    ],
  },
  {
    category: 'Routes & Operations',
    items: [
      {
        question: 'How long does freight from Mombasa to Kampala take?',
        answer: 'Transit time from Mombasa Port to Kampala, Uganda typically takes 3 days, including border crossing at Malaba or Busia.',
      },
      {
        question: 'How much does it cost to ship from Kenya to Uganda?',
        answer: 'Freight costs vary based on tonnage, cargo type, and fuel prices. However, Segecha offers competitive, transparent pricing for the Northern Corridor. Contact us for a real-time quote.',
      },
      {
        question: 'What border crossings are used for Kenya–Uganda freight?',
        answer: 'We primarily use the Malaba and Busia One-Stop Border Posts (OSBP). Malaba is the preferred crossing for heavy commercial cargo due to its 24-hour operations.',
      },
      {
        question: 'What documents are needed for cross-border transport?',
        answer: 'Required documents include the C3 Transit Document, Bill of Lading, Commercial Invoice, Packing List, and any relevant phytosanitary or health certificates depending on the cargo.',
      },
      {
        question: 'How long does customs clearance take at Malaba?',
        answer: 'With Segecha’s pre-clearance service, border crossing at Malaba typically takes between 2 to 6 hours for commercial trucks.',
      },
      {
        question: 'How do I ship goods from Mombasa Port?',
        answer: 'To ship from Mombasa Port, you need a clearing agent to handle KPA/KRA documentation. Segecha provides end-to-end transport from the port to any destination in East Africa.',
      },
    ],
  },
  {
    category: 'Industry & General',
    items: [
      {
        question: 'What is the best logistics company in Kenya?',
        answer: 'Segecha Group is widely recognized as a top logistics provider in Kenya due to our strategic port-side headquarters, 99.8% on-time rate, and comprehensive East African network.',
      },
      {
        question: 'What are the main trade corridors in East Africa?',
        answer: 'The primary corridors are the Northern Corridor (Mombasa to Uganda, Rwanda, Burundi) and the Central Corridor (Dar es Salaam to Rwanda, Burundi, Uganda).',
      },
      {
        question: 'How is cargo tracked in Kenya?',
        answer: 'Most professional companies use GPS tracking. Segecha equips every truck with live GPS hardware that feeds into our 24/7 Mombasa dispatch center.',
      },
      {
        question: 'What is the Northern Corridor?',
        answer: 'The Northern Corridor is the transport route linking the Port of Mombasa in Kenya with the landlocked countries of Uganda, Rwanda, Burundi, and South Sudan.',
      },
      {
        question: 'How does fleet tracking work for logistics companies?',
        answer: 'Fleet tracking uses GPS and GSM technology to transmit a vehicle’s location, speed, and status to a central dashboard, allowing dispatchers to monitor transit in real time.',
      },
    ],
  },
  {
    category: 'Comparisons',
    items: [
      {
        question: 'Segecha vs DHL Kenya — which is better for local freight?',
        answer: 'While DHL excels in international express couriers, Segecha Group specialized in heavy-tonnage long-haul freight and cross-border trucking within East Africa, often offering more direct regional expertise.',
      },
      {
        question: 'Best freight forwarders Mombasa',
        answer: 'Segecha Group is among the leading freight forwarders in Mombasa, offering specialized port-side warehousing and cross-border transport services.',
      },
      {
        question: 'Fastest logistics company East Africa',
        answer: 'With a 3-day transit time from Mombasa to Kampala and 24/7 dispatch, Segecha is one of the fastest and most reliable logistics operators in the region.',
      },
      {
        question: 'GPS-tracked freight Kenya',
        answer: 'Segecha Group provides 100% GPS-tracked freight services across Kenya and East Africa, giving clients full visibility over their cargo at all times.',
      },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
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
          { name: 'FAQ', item: '/faq' },
        ]}
      />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="FAQ hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">FAQ</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-slate-300 text-xl">
              Everything you need to know about Segecha Group's logistics services,
              pricing, tracking, and cross-border transport across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-slate-50" aria-label="FAQ content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="section-sep mb-0" />
                <h2 className="font-outfit font-extrabold text-navy-900 text-2xl">
                  {cat.category}
                </h2>
              </div>
              <FAQAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-16 bg-white" aria-label="Contact section">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-outfit font-extrabold text-navy-900 text-2xl mb-4">
            Still Have Questions?
          </h2>
          <p className="text-slate-500 mb-8">
            Our team is available Monday–Saturday. Call, WhatsApp or email us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+254715385384"
              className="bg-navy-900 hover:bg-navy-600 text-white font-outfit font-bold px-6 py-3 rounded-xl transition-all"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/254715385384"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bc5a] text-white font-outfit font-bold px-6 py-3 rounded-xl transition-all"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="border-2 border-slate-300 hover:border-orange-400 text-navy-900 font-outfit font-bold px-6 py-3 rounded-xl transition-all"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      <CTABanner dark />
    </>
  )
}
