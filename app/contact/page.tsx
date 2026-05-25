import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact Segecha Group – Logistics East Africa | Mombasa, Kenya',
  description:
    'Contact Segecha Group Ltd. at Mombasa Port. Call +254 715 385 384, WhatsApp +254 715 385 384, or email us. 24/7 dispatch support available.',
  alternates: { canonical: 'https://segecha.com/contact' },
  openGraph: {
    title: 'Contact Segecha Group | Logistics East Africa',
    url: 'https://segecha.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' },
        ]}
      />
      <ContactClient />
    </>
  )
}
