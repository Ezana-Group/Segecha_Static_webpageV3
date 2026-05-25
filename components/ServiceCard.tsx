import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  features?: string[]
}

export default function ServiceCard({ icon: Icon, title, description, href, features }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border-2 border-slate-200 rounded-2xl p-7 card-lift card-orange-hover"
      aria-label={`Learn about ${title}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
        <Icon
          size={22}
          className="text-orange-500 group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="font-outfit font-bold text-navy-900 text-lg mb-2 group-hover:text-orange-500 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Arrow link */}
      <div className="flex items-center gap-2 text-orange-500 font-outfit font-semibold text-sm">
        Learn More
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  )
}
