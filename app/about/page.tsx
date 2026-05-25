import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { Shield, Zap, Globe, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Segecha Group – Kenya Logistics Company | Mombasa Port',
  description:
    'Learn about Segecha Group Ltd., a Kenya-registered logistics company headquartered at Mombasa Port. Serving East Africa with freight, transport, and fleet management since inception.',
  alternates: { canonical: 'https://segecha.com/about' },
  openGraph: {
    title: 'About Segecha Group Ltd. | Logistics East Africa',
    description: 'Segecha Group — built to serve East African trade corridors from Mombasa Port.',
    url: 'https://segecha.com/about',
  },
}

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    desc: "Our 99.8% on-time delivery rate is not an accident. It's the result of disciplined operations, well-maintained vehicles, and experienced drivers who know East Africa's roads.",
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    desc: 'We optimize every route, every load, and every border crossing to get your cargo to its destination as quickly as legally possible — without compromising safety.',
  },
  {
    icon: Globe,
    title: 'Regional Expertise',
    desc: 'East Africa is our home. We know the roads, the border posts, the customs officers, the seasonal challenges, and the fastest routes through each country.',
  },
]

const fleetTypes = [
  { type: 'Flatbed Trailers', capacity: 'Up to 34 tons', use: 'Building materials, machinery, steel' },
  { type: 'Curtainsider (Tarpaulin)', capacity: 'Up to 28 tons', use: 'General cargo, FMCG, textiles' },
  { type: 'Tanker Trucks', capacity: 'Up to 30,000 litres', use: 'Fuel, edible oils, liquid cargo' },
  { type: 'Refrigerated Trucks', capacity: 'Up to 20 tons', use: 'Pharmaceuticals, perishables' },
  { type: 'Lowbed Trailers', capacity: 'Up to 60 tons', use: 'Heavy equipment, vehicles' },
  { type: 'Box Trucks (Light Rigid)', capacity: '5–10 tons', use: 'Urban delivery, LTL cargo' },
]

const team = [
  { role: 'CEO & Founder', name: 'Managing Director', initials: 'MD', bio: 'Over 20 years in East African logistics and freight management.' },
  { role: 'Head of Operations', name: 'Operations Lead', initials: 'OL', bio: 'Oversees fleet dispatch, route planning, and 24/7 operations center.' },
  { role: 'Fleet Manager', name: 'Fleet Manager', initials: 'FM', bio: 'Manages vehicle maintenance, compliance, and driver safety programs.' },
  { role: 'Customer Relations', name: 'Client Services', initials: 'CS', bio: 'Ensures every client gets responsive, professional logistics support.' },
]

const certifications = [
  'Kenya Revenue Authority (KRA) Customs Agent',
  'Kenya National Highways Authority (KeNHA) Compliant Fleet',
  'National Transport & Safety Authority (NTSA) Licensed',
  'Kenya Association of Manufacturers (KAM) Member',
  'East African Community Transit Permit Holder',
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'About', item: '/about' },
        ]}
      />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="About hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">About</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Built to Move East Africa Forward
            </h1>
            <p className="mt-6 text-slate-300 text-xl">
              Segecha Group Ltd. is a Kenyan logistics company headquartered at Mombasa Port,
              serving businesses across Kenya, Tanzania, Uganda, Rwanda, and Burundi.
            </p>
            {/* Entity recognition for AI/SEO */}
            <p className="sr-only">
              Segecha Group Ltd. is a Kenyan logistics and freight company headquartered at Mombasa Port, 
              Port Reitz Road, Mombasa, Kenya. Founded to serve East African trade corridors, 
              the company provides long-haul freight transport, cross-border logistics, 
              GPS fleet tracking, and warehouse distribution services across Kenya, 
              Tanzania, Uganda, Rwanda, and Burundi. Segecha Group operates a fleet 
              of GPS-tracked trucks and serves over 500 business clients with more 
              than 7,000 cargo deliveries monthly.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-sep" />
              <h2 id="story-heading" className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="prose-segecha space-y-4">
                <p>
                  Segecha Group Ltd. was founded with a clear mission: to provide East African businesses
                  with a logistics partner they could truly rely on. Headquartered at Mombasa Port —
                  East Africa's largest and busiest seaport — we are positioned at the heart of the region's
                  import and export supply chain.
                </p>
                <p>
                  From humble beginnings with a small fleet serving domestic Kenya routes, Segecha has grown
                  into a multi-country logistics operation serving 500+ business clients with 7,000+ deliveries
                  per month. Our growth has been driven by one principle: do what we say, deliver when we promise.
                </p>
                <p>
                  Today, Segecha Group operates across the Northern Corridor and key East African trade routes,
                  with a modern, GPS-equipped fleet, a 24/7 dispatch operations center, and a team of regional
                  logistics experts who know every border crossing, every road condition, and every seasonal
                  challenge in East Africa.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-3xl bg-navy-900 relative overflow-hidden group border border-slate-200">
              <Image
                src="/segecha_hero_truck.jpg"
                alt="Segecha Logistics Truck"
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              <div className="text-center relative z-10 p-10 h-full flex flex-col items-center justify-center">
                <div className="font-outfit font-black text-white text-3xl mb-1">Serving Since</div>
                <div className="font-outfit font-black text-orange-400 text-7xl leading-none mb-3">2014</div>
                <div className="text-slate-200 text-sm font-medium tracking-widest uppercase">East Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-sep mx-auto" />
            <h2 id="values-heading" className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              Our mission is to be the most reliable logistics partner for businesses operating across East Africa,
              delivering cargo on time, every time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-7 text-center hover:border-orange-400 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-500 transition-colors">
                  <v.icon size={24} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-outfit font-bold text-navy-900 text-xl mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-white" aria-labelledby="fleet-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-sep mx-auto" />
            <h2 id="fleet-heading" className="font-outfit font-extrabold text-navy-900 text-3xl sm:text-4xl">
              Our Fleet
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              A modern, GPS-equipped fleet covering every cargo type and tonnage requirement.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Fleet specifications">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 font-outfit font-bold text-navy-900">Truck Type</th>
                  <th className="text-left px-5 py-3 font-outfit font-bold text-navy-900">Capacity</th>
                  <th className="text-left px-5 py-3 font-outfit font-bold text-navy-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {fleetTypes.map((t, i) => (
                  <tr key={t.type} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-5 py-3.5 font-medium text-navy-900">{t.type}</td>
                    <td className="px-5 py-3.5 text-slate-600">
                      <span className="bg-orange-50 text-orange-700 border border-orange-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                        {t.capacity}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">{t.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50" aria-labelledby="certs-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="certs-heading" className="font-outfit font-extrabold text-navy-900 text-2xl mb-8 text-center">
            Licenses & Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4">
                <Award size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white" aria-labelledby="team-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-sep mx-auto" />
            <h2 id="team-heading" className="font-outfit font-extrabold text-navy-900 text-3xl">
              Our Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-orange-400 transition-all group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-600 to-navy-900 flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-700 transition-all">
                  <span className="font-outfit font-black text-white text-xl">{member.initials}</span>
                </div>
                <div className="font-outfit font-bold text-navy-900 text-sm mb-1">{member.name}</div>
                <div className="text-orange-500 text-xs font-semibold mb-3">{member.role}</div>
                <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900" aria-label="Company statistics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { val: '500+', label: 'Active Clients' },
              { val: '7,000+', label: 'Monthly Deliveries' },
              { val: '99.8%', label: 'On-Time Rate' },
              { val: '5', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-outfit font-black text-orange-400 text-4xl mb-1">{stat.val}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner dark />
    </>
  )
}
