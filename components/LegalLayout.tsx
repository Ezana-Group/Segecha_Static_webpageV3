import Link from 'next/link'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-900 section-grid" aria-label={`${title} hero`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400 font-medium">Legal</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-slate-400 text-sm font-medium tracking-wide uppercase">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white" aria-label={`${title} content`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-segecha max-w-none text-slate-600 leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
