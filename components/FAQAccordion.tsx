'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
        id={`faq-question-${index}`}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-outfit font-semibold text-navy-900 text-base group-hover:text-orange-500 transition-colors duration-200 pr-4">
          {item.question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-orange-500 border-orange-500 text-white'
            : 'border-slate-300 text-slate-400 group-hover:border-orange-400 group-hover:text-orange-500'
        }`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      {/* Grid trick for smooth height animation */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="accordion-content"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-slate-600 text-base leading-relaxed pr-11">
            {item.answer}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  return (
    <div
      className={`divide-y-0 rounded-2xl bg-white border border-slate-200 px-6 ${className}`}
      role="list"
    >
      {items.map((item, i) => (
        <AccordionItem key={i} item={item} index={i} />
      ))}
    </div>
  )
}
