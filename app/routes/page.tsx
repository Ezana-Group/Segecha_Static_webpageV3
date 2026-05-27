import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { JsonLd } from '@/components/JsonLd'
import { ArrowRight, Clock, MapPin, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'East Africa Logistics Routes – Mombasa to Kampala, Dar, Kigali, Bujumbura',
  description:
    'Segecha Group operates all major East African freight corridors: Mombasa–Kampala (1,200km), Nairobi–Dar es Salaam (800km), Mombasa–Kigali (1,800km), and more.',
  alternates: { canonical: 'https://segecha.com/routes' },
  openGraph: {
    title: 'East Africa Freight Routes | Segecha Group',
    url: 'https://segecha.com/routes',
  },
}

const routes = [
  {
    id: 'mombasa-kampala',
    from: 'Mombasa',
    to: 'Kampala',
    fromCountry: 'Kenya 🇰🇪',
    toCountry: 'Uganda 🇺🇬',
    distance: '~1,200 km',
    transit: '3 days',
    borders: ['Busia', 'Malaba'],
    highlights: ['Major trade corridor', 'Container traffic from Mombasa Port', 'Busia & Malaba border crossings'],
    services: ['Long-Haul Freight', 'Cross-Border Transport'],
  },
  {
    id: 'nairobi-dar-es-salaam',
    from: 'Nairobi',
    to: 'Dar es Salaam',
    fromCountry: 'Kenya 🇰🇪',
    toCountry: 'Tanzania 🇹🇿',
    distance: '~800 km',
    transit: '2 days',
    borders: ['Namanga', 'Holili/Taveta'],
    highlights: ['High-volume FMCG corridor', 'Namanga border (24-hr ops)', 'Tarmac road throughout'],
    services: ['Long-Haul Freight', 'Cross-Border Transport'],
  },
  {
    id: 'mombasa-kigali',
    from: 'Mombasa',
    to: 'Kigali',
    fromCountry: 'Kenya 🇰🇪',
    toCountry: 'Rwanda 🇷🇼',
    distance: '~1,800 km',
    transit: '4 days',
    borders: ['Busia/Malaba', 'Gatuna/Katuna'],
    highlights: ['Via Uganda corridor', "Rwanda's import gateway", 'Well-maintained Kampala–Kigali road'],
    services: ['Cross-Border Transport', 'Long-Haul Freight'],
  },
  {
    id: 'nairobi-bujumbura',
    from: 'Nairobi',
    to: 'Bujumbura',
    fromCountry: 'Kenya 🇰🇪',
    toCountry: 'Burundi 🇧🇮',
    distance: '~1,800 km',
    transit: '4–5 days',
    borders: ['Busia/Malaba', 'Gatuna', 'Kobero'],
    highlights: ['Longest EAC corridor', 'Via Uganda and Rwanda', 'Segecha specialists for Burundi transit'],
    services: ['Cross-Border Transport', 'Long-Haul Freight'],
  },
  {
    id: 'nairobi-mombasa',
    from: 'Mombasa',
    to: 'Nairobi + Upcountry',
    fromCountry: 'Kenya 🇰🇪',
    toCountry: 'Kenya 🇰🇪',
    distance: '100–900 km',
    transit: '1–3 days',
    borders: [],
    highlights: ['Mombasa–Nairobi (480km, 8–12 hrs)', 'Mombasa–Kisumu (600km)', 'Mombasa–Eldoret (700km)'],
    services: ['Long-Haul Freight', 'Distribution'],
  },
]

export default function RoutesPage() {
  const routesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'East Africa Trade Corridors & Routes',
    description: 'Segecha Group operates logistics across all major East African freight corridors.',
    provider: {
      '@type': 'Organization',
      name: 'Segecha Group Ltd.',
    },
    areaServed: [
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Rwanda' },
      { '@type': 'Country', name: 'Burundi' },
    ],
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'Routes', item: '/routes' },
        ]}
      />
      <JsonLd data={routesSchema} />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="Routes hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">Routes</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              East Africa Freight Corridors
            </h1>
            <p className="mt-6 text-slate-300 text-xl">
              Segecha Group serves all major trade corridors across East Africa — from Mombasa Port
              to every major commercial hub in Kenya, Tanzania, Uganda, Rwanda, and Burundi.
            </p>
          </div>
        </div>
      </section>

      {/* Route Cards */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="routes-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="routes-heading" className="sr-only">All Routes</h2>
          <div className="space-y-8">
            {routes.map((route) => (
              <div
                key={route.id}
                className="bg-white border-2 border-slate-200 hover:border-orange-400 rounded-3xl p-7 sm:p-8 transition-all hover:shadow-lg group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Route header */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
                        <span className="font-outfit font-black text-navy-900 text-sm">{route.from}</span>
                        <ArrowRight size={14} className="text-orange-500" />
                        <span className="font-outfit font-black text-navy-900 text-sm">{route.to}</span>
                      </div>
                      {route.borders.length === 0 && (
                        <span className="bg-green-50 border border-green-200 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          Domestic
                        </span>
                      )}
                    </div>

                    <div className="text-sm text-slate-500 mb-3">
                      {route.fromCountry} → {route.toCountry}
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 mb-5">
                      <div className="flex items-center gap-2">
                        <MapPin size={15} className="text-orange-500" />
                        <div>
                          <div className="font-outfit font-bold text-navy-900 text-sm">{route.distance}</div>
                          <div className="text-slate-400 text-xs">Distance</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-orange-500" />
                        <div>
                          <div className="font-outfit font-bold text-navy-900 text-sm">{route.transit}</div>
                          <div className="text-slate-400 text-xs">Typical transit</div>
                        </div>
                      </div>
                      {route.borders.length > 0 && (
                        <div className="flex items-center gap-2">
                          <AlertCircle size={15} className="text-orange-500" />
                          <div>
                            <div className="font-outfit font-bold text-navy-900 text-sm">
                              {route.borders.join(', ')}
                            </div>
                            <div className="text-slate-400 text-xs">Border crossings</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5">
                      {route.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right panel */}
                  <div className="sm:w-52 flex-shrink-0">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">
                        Services on this route
                      </div>
                      <div className="space-y-2 mb-5">
                        {route.services.map((s) => (
                          <div
                            key={s}
                            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 font-medium"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/routes/${route.id}`}
                        className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold text-sm py-3 rounded-xl transition-all active:scale-95"
                      >
                        Route Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO/AI Content */}
      <section className="py-16 bg-slate-50" aria-labelledby="corridors-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="corridors-content" className="font-outfit font-extrabold text-navy-900 text-3xl mb-6">
            What Are the Major East Africa Trade Corridors?
          </h2>
          <div className="prose-segecha space-y-4">
            <p>
              East Africa's major freight corridors are determined by the location of key seaports,
              landlocked country capitals, and border post infrastructure. The Northern Corridor — running
              from Mombasa Port through Nairobi to Kampala and onward to Kigali and Bujumbura — is the
              most heavily trafficked freight route in East Africa, handling over 80% of Uganda, Rwanda,
              and Burundi's import cargo.
            </p>
            <p>
              The Central Corridor — running from Dar es Salaam through Dodoma to Mwanza and onward to
              Kampala and Kigali — is an alternative route frequently used by Tanzania-originating cargo.
              Segecha Group primarily operates on the Northern Corridor and Kenya domestic routes,
              with strategic cross-connections to Tanzania.
            </p>
            <p>
              Segecha Group Ltd. has established relationships at all major border posts on these corridors
              including Busia, Malaba, Namanga, Gatuna/Katuna, and Kobero — enabling faster border
              clearance and more predictable transit times for our clients.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Book Your Route Today"
        subtitle="Get a quote for any route across East Africa. Our ops team responds within 24 hours."
      />
    </>
  )
}
