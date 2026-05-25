import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTABanner({
  title = 'Ready to Move Your Cargo?',
  subtitle = 'Get a free, no-obligation quote in minutes. Our team will contact you within 24 hours.',
  primaryLabel = 'Get Free Quote',
  primaryHref = '/quote',
  secondaryLabel = 'Call Us Now',
  secondaryHref = 'tel:+254715385384',
  dark = false,
}: CTABannerProps) {
  return (
    <section
      className={`py-20 lg:py-24 ${dark ? 'bg-navy-900 section-grid' : 'cta-gradient'}`}
      aria-label="Call to action"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance ${
            dark ? 'text-white' : 'text-white'
          }`}
        >
          {title}
        </h2>
        <p className={`mt-5 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-300' : 'text-orange-100'}`}>
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`inline-flex items-center gap-2 font-outfit font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 group ${
              dark
                ? 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                : 'bg-white hover:bg-orange-50 text-orange-600 hover:shadow-xl hover:shadow-black/20'
            }`}
          >
            {primaryLabel}
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <a
            href={secondaryHref}
            className={`inline-flex items-center gap-2 font-outfit font-bold text-base px-8 py-4 rounded-xl border-2 transition-all duration-200 active:scale-95 ${
              dark
                ? 'border-white/20 hover:border-white/50 text-white hover:bg-white/10'
                : 'border-white/50 hover:border-white text-white hover:bg-white/10'
            }`}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
