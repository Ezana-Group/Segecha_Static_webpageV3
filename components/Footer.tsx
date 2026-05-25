import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const services = [
  { label: 'Long-Haul Freight', href: '/services/long-haul-freight' },
  { label: 'Cross-Border Transport', href: '/services/cross-border-transport' },
  { label: 'Fleet Tracking & Dispatch', href: '/services/fleet-tracking-dispatch' },
  { label: 'Warehouse & Distribution', href: '/services/warehouse-distribution' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Routes', href: '/routes' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Get a Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-main.png"
                  alt="Segecha Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-outfit font-bold text-white text-lg leading-tight uppercase">
                  Segecha Group
                </div>
                <div className="text-orange-400 text-[10px] font-inter tracking-widest uppercase font-bold">
                  Logistics & Freight
                </div>
              </div>
            </Link>
            <p className="text-[11px] leading-relaxed text-slate-500 mb-6 max-w-xs text-pretty italic">
              Segecha Group Ltd. is a Kenyan logistics and freight company headquartered at 
              Mombasa Port, Port Reitz Road, Mombasa, Kenya. Serving East African trade corridors, 
              the company provides long-haul freight, cross-border transport, and GPS fleet tracking 
              across Kenya, Tanzania, Uganda, Rwanda, and Burundi.
            </p>
            <p className="text-xs text-orange-400/80 font-outfit font-semibold tracking-wide italic">
              "Logistics that move your business forward"
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors flex-shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-widest mb-5 mt-8">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-widest mb-5">
              We Operate In
            </h3>
            <ul className="space-y-2.5">
              {[
                { flag: '🇰🇪', name: 'Kenya', note: 'HQ – Mombasa Port' },
                { flag: '🇹🇿', name: 'Tanzania', note: 'Dar es Salaam route' },
                { flag: '🇺🇬', name: 'Uganda', note: 'Kampala corridor' },
                { flag: '🇷🇼', name: 'Rwanda', note: 'Kigali route' },
                { flag: '🇧🇮', name: 'Burundi', note: 'Bujumbura route' },
              ].map((c) => (
                <li key={c.name} className="flex items-start gap-3">
                  <span className="text-xl leading-none mt-0.5">{c.flag}</span>
                  <div>
                    <div className="text-sm text-white font-medium">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Mombasa Port, Shed 12<br />
                  Port Reitz Road, Mombasa<br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-orange-400 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+254715385384"
                    className="block text-sm text-white font-bold hover:text-orange-400 transition-colors"
                  >
                    +254 715 385 384
                  </a>
                  <a
                    href="tel:+254141420518"
                    className="block text-sm text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    +254 141 420 518
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:info@segecha.com"
                  className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  info@segecha.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-400">
                  <div>Mon–Fri: 7:00 AM – 6:00 PM</div>
                  <div>Saturday: 8:00 AM – 2:00 PM</div>
                  <div className="text-xs text-orange-400/70 mt-1">24/7 Dispatch Support</div>
                </div>
              </li>
            </ul>

            {/* Social/WhatsApp */}
            <div className="mt-6">
              <a
                href="https://wa.me/254715385384"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Segecha Group Ltd. All rights reserved. |{' '}
            <span>Registered in Kenya</span>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
