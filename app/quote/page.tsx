import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Get a Freight Quote | Segecha Group Kenya',
  description:
    'Request a free, no-obligation freight quote from Segecha Group. Tell us your route, cargo details and contact info — we respond within 24 hours.',
  alternates: { canonical: 'https://segecha.com/quote' },
  openGraph: {
    title: 'Free Freight Quote | Segecha Group East Africa',
    description: 'Get a logistics quote for any East Africa route in 3 easy steps.',
    url: 'https://segecha.com/quote',
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get a freight quote from Segecha Group',
  description: 'A step-by-step guide to requesting a professional logistics and freight quote for East African routes.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Enter Route Details',
      text: 'Provide the origin and destination for your shipment (e.g., Mombasa to Kampala).',
    },
    {
      '@type': 'HowToStep',
      name: 'Select Cargo Type',
      text: 'Specify if you are shipping agricultural products, FMCG, machinery, or general cargo.',
    },
    {
      '@type': 'HowToStep',
      name: 'Provide Contact Info',
      text: 'Enter your phone number or email so our operations team can reach you.',
    },
    {
      '@type': 'HowToStep',
      name: 'Submit Request',
      text: 'Click the "Get Full Quote" button to send your requirements to our dispatch center.',
    },
    {
      '@type': 'HowToStep',
      name: 'Receive Quote',
      text: 'A Segecha logistics specialist will contact you with a transparent quote within 24 hours.',
    },
  ],
}

export default function QuotePage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="Quote page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">Get a Quote</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl leading-tight">
              Get Your Free Freight Quote
            </h1>
            <p className="mt-5 text-slate-300 text-xl">
              Complete our 3-step form below. A Segecha logistics specialist will review your
              requirements and get back to you within <strong className="text-white">24 hours</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-slate-50" aria-label="Quote form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why request */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h3 className="font-outfit font-bold text-lg mb-4">Why Request a Quote?</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    'Free, no-obligation assessment',
                    'Response within 24 hours',
                    'Custom route planning included',
                    'Transparent pricing — no hidden fees',
                    'Customs documentation guidance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact alternatives */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-outfit font-bold text-navy-900 text-base mb-4">
                  Prefer to call or chat?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+254715385384"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-navy-900 group-hover:bg-orange-500 flex items-center justify-center transition-colors">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Call us (Primary)</div>
                      <div className="font-medium text-navy-900 text-sm">+254 715 385 384</div>
                    </div>
                  </a>
                  <a
                    href="tel:+254141420518"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-navy-900 group-hover:bg-orange-500 flex items-center justify-center transition-colors">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Call us (Secondary)</div>
                      <div className="font-medium text-navy-900 text-sm">+254 141 420 518</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/254715385384"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 border border-green-200 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center">
                      <span className="text-white text-xs">💬</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">WhatsApp</div>
                      <div className="font-medium text-green-700 text-sm">Chat on WhatsApp</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust badge */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🏆</div>
                <div className="font-outfit font-bold text-navy-900 text-base mb-1">
                  99.8% On-Time Rate
                </div>
                <div className="text-slate-500 text-sm">
                  500+ clients trust Segecha for reliable East Africa freight
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
