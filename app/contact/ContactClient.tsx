'use client'

import { useState } from 'react'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactClient() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const contactLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Segecha Group Ltd.',
    description: 'Logistics, freight, and cross-border transport East Africa',
    url: 'https://segecha.com',
    telephone: '+254715385384',
    email: 'info@segecha.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mombasa Port, Shed 12, Port Reitz Road',
      addressLocality: 'Mombasa',
      addressCountry: 'KE',
    },
  }

  return (
    <>
      <JsonLd data={contactLocalBusiness} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 section-grid" aria-label="Contact hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-orange-400">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="section-sep" />
            <h1 className="font-outfit font-extrabold text-white text-4xl sm:text-5xl leading-tight">
              Let's Move Your Cargo
            </h1>
            <p className="mt-5 text-slate-300 text-xl">
              Our team is ready to assist with your logistics needs. Contact us by phone,
              WhatsApp, email, or visit us at Mombasa Port.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50" aria-label="Contact details and form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h2 className="font-outfit font-bold text-navy-900 text-lg mb-5 flex items-center gap-2">
                  <Phone size={18} className="text-orange-500" />
                  Phone
                </h2>
                <div className="space-y-3">
                  <a
                    href="tel:+254715385384"
                    className="flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl transition-all group"
                    aria-label="Call +254 715 385 384"
                  >
                    <div>
                      <div className="font-outfit font-bold text-navy-900 text-base">+254 715 385 384</div>
                      <div className="text-orange-600 text-xs font-bold uppercase tracking-wider">Primary Support</div>
                    </div>
                    <Phone size={16} className="text-orange-500 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="tel:+254141420518"
                    className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group"
                    aria-label="Call +254 141 420 518"
                  >
                    <div>
                      <div className="font-outfit font-bold text-navy-900 text-base">+254 141 420 518</div>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Secondary Line</div>
                    </div>
                    <Phone size={16} className="text-slate-400 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254715385384"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-50 border border-green-200 hover:border-green-400 rounded-2xl p-6 transition-all group"
                aria-label="Contact Segecha on WhatsApp"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare size={20} className="text-green-600" />
                  <h3 className="font-outfit font-bold text-green-800 text-lg">WhatsApp</h3>
                </div>
                <p className="text-green-700 text-sm mb-3">Chat directly with our team for quick responses.</p>
                <div className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium text-sm px-4 py-2 rounded-xl group-hover:bg-[#20bc5a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Start WhatsApp Chat
                </div>
              </a>

              {/* Email */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-outfit font-bold text-navy-900 text-base mb-3 flex items-center gap-2">
                  <Mail size={16} className="text-orange-500" />
                  Email
                </h3>
                <a
                  href="mailto:info@segecha.com"
                  className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
                >
                  info@segecha.com
                </a>
              </div>

              {/* Address */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-outfit font-bold text-navy-900 text-base mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-orange-500" />
                  Address
                </h3>
                <address className="not-italic text-sm text-slate-600 leading-relaxed">
                  Mombasa Port, Shed 12<br />
                  Port Reitz Road<br />
                  Mombasa, Kenya
                </address>
              </div>

              {/* Hours */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-outfit font-bold text-navy-900 text-base mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-orange-500" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-navy-900">7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-navy-900">8:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-slate-400">Closed</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-orange-600 text-xs font-semibold">
                    🟢 24/7 Dispatch Center — always available for active shipments
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form + Map */}
            <div className="lg:col-span-3 space-y-6">
              {/* Contact Form */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} className="text-green-500" />
                      </div>
                      <h3 className="font-outfit font-bold text-navy-900 text-xl mb-2">Message Sent!</h3>
                      <p className="text-slate-600 text-sm mb-6">
                        Thank you for contacting us. We will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-orange-500 font-bold text-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h2 className="font-outfit font-bold text-navy-900 text-xl mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              id="contact-name"
                              name="name"
                              type="text"
                              required
                              placeholder="John Mwangi"
                              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                              Phone Number
                            </label>
                            <input
                              id="contact-phone"
                              name="phone"
                              type="tel"
                              placeholder="+254 7XX XXX XXX"
                              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Message *
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell us about your logistics needs..."
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-outfit font-bold py-3.5 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 h-72">
                <iframe
                  title="Segecha Group Ltd. — Mombasa Port location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2506!2d39.6682!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInMzYuNiJTIDM5wrA0MCcwNS41IkU!5e0!3m2!1sen!2ske!4v1680000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
