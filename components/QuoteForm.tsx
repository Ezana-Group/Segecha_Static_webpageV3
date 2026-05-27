'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react'

// Step schemas with conditional validation for "Other" selections
const baseSchema = z.object({
  originCity: z.string().min(2, 'Please enter origin city'),
  originCountry: z.string().min(2, 'Please select origin country'),
  originCountryOther: z.string().optional(),
  destinationCity: z.string().min(2, 'Please enter destination city'),
  destinationCountry: z.string().min(2, 'Please select destination country'),
  destinationCountryOther: z.string().optional(),
  cargoType: z.string().min(2, 'Please select cargo type'),
  cargoTypeOther: z.string().optional(),
  weight: z.string().min(1, 'Please enter weight'),
  volume: z.string().optional(),
  specialRequirements: z.string().optional(),
  name: z.string().min(2, 'Full name is required'),
  company: z.string().optional(),
  phone: z.string().min(8, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  contactMethod: z.enum(['phone', 'whatsapp', 'email']),
})

const fullSchema = baseSchema.superRefine((data, ctx) => {
  if (data.originCountry === 'Other' && (!data.originCountryOther || data.originCountryOther.trim().length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please specify origin country',
      path: ['originCountryOther'],
    });
  }
  if (data.destinationCountry === 'Other' && (!data.destinationCountryOther || data.destinationCountryOther.trim().length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please specify destination country',
      path: ['destinationCountryOther'],
    });
  }
  if (data.cargoType === 'Other' && (!data.cargoTypeOther || data.cargoTypeOther.trim().length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please specify cargo type',
      path: ['cargoTypeOther'],
    });
  }
})

type FormData = z.infer<typeof baseSchema>

const COUNTRIES = ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Burundi', 'Other']
const CARGO_TYPES = [
  'Agricultural Products',
  'Building Materials',
  'Consumer Goods / FMCG',
  'Machinery & Equipment',
  'Chemicals & Hazardous',
  'Pharmaceuticals',
  'Electronics',
  'Vehicles / Heavy Equipment',
  'Other',
]

const steps = [
  { label: 'Route', description: 'Origin & destination' },
  { label: 'Cargo', description: 'What you\'re shipping' },
  { label: 'Contact', description: 'Your details' },
]

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(fullSchema), mode: 'onChange' })

  const originCountry = watch('originCountry')
  const destinationCountry = watch('destinationCountry')
  const cargoType = watch('cargoType')

  const nextStep = async () => {
    const fields =
      step === 1
        ? (['originCity', 'originCountry', 'originCountryOther', 'destinationCity', 'destinationCountry', 'destinationCountryOther'] as const)
        : step === 2
        ? (['cargoType', 'cargoTypeOther', 'weight'] as const)
        : []
    const valid = await trigger(fields as (keyof FormData)[])
    if (valid) setStep((s) => s + 1)
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz6tg1hXT86MKafiVTbLRlriFohjqnsJU_mkxznfuh_g1Ib1UqITZobDKD7ljMUNj3N6w/exec'
    const FORMSPREE_URL = 'https://formspree.io/f/mzdavqon'

    const originCountryFinal = data.originCountry === 'Other' ? data.originCountryOther : data.originCountry
    const destinationCountryFinal = data.destinationCountry === 'Other' ? data.destinationCountryOther : data.destinationCountry
    const cargoTypeFinal = data.cargoType === 'Other' ? data.cargoTypeOther : data.cargoType

    const payload = {
      Form: 'Quote Request',
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company || 'N/A',
      Origin: `${data.originCity}, ${originCountryFinal}`,
      Destination: `${data.destinationCity}, ${destinationCountryFinal}`,
      Cargo: cargoTypeFinal,
      Weight: `${data.weight} kg`,
      Volume: data.volume ? `${data.volume} m³` : 'N/A',
      Requirements: data.specialRequirements || 'None',
      Preferred_Contact: data.contactMethod,
    }

    try {
      await Promise.allSettled([
        fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
        fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        }),
      ])
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="font-outfit font-bold text-navy-900 text-2xl mb-3">
          Quote Request Received!
        </h3>
        <p className="text-slate-600 text-base max-w-md mx-auto">
          Thank you for reaching out to Segecha Group. Our team will review your requirements
          and contact you within <strong>24 hours</strong>.
        </p>
        <a
          href="https://wa.me/254715385384"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 bg-[#25D366] hover:bg-[#20bc5a] text-white font-medium px-6 py-3 rounded-xl transition-colors"
        >
          Or Chat on WhatsApp Now
        </a>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  i + 1 < step
                    ? 'bg-orange-500 text-white'
                    : i + 1 === step
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {i + 1 < step ? <CheckCircle size={16} /> : i + 1}
              </div>
              <div className="hidden sm:block">
                <div className={`text-sm font-outfit font-semibold ${i + 1 <= step ? 'text-navy-900' : 'text-slate-400'}`}>
                  {s.label}
                </div>
                <div className="text-xs text-slate-400">{s.description}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block w-16 h-px bg-slate-200 mx-2 relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-500"
                    style={{ width: i + 1 < step ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="h-1 bg-slate-200 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-5"
            >
              <h3 className="font-outfit font-bold text-navy-900 text-xl">Step 1: Your Route</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="originCity" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Origin City *
                  </label>
                  <input
                    id="originCity"
                    {...register('originCity')}
                    placeholder="e.g. Mombasa"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.originCity && (
                    <p className="text-red-500 text-xs mt-1">{errors.originCity.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="originCountry" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Origin Country *
                  </label>
                  <select
                    id="originCountry"
                    {...register('originCountry')}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all bg-white"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.originCountry && (
                    <p className="text-red-500 text-xs mt-1">{errors.originCountry.message}</p>
                  )}

                  <AnimatePresence>
                    {originCountry === 'Other' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <label htmlFor="originCountryOther" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Specify Origin Country *
                        </label>
                        <input
                          id="originCountryOther"
                          {...register('originCountryOther')}
                          placeholder="e.g. South Sudan"
                          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                        {errors.originCountryOther && (
                          <p className="text-red-500 text-xs mt-1">{errors.originCountryOther.message}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <label htmlFor="destinationCity" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Destination City *
                  </label>
                  <input
                    id="destinationCity"
                    {...register('destinationCity')}
                    placeholder="e.g. Kampala"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.destinationCity && (
                    <p className="text-red-500 text-xs mt-1">{errors.destinationCity.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="destinationCountry" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Destination Country *
                  </label>
                  <select
                    id="destinationCountry"
                    {...register('destinationCountry')}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all bg-white"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.destinationCountry && (
                    <p className="text-red-500 text-xs mt-1">{errors.destinationCountry.message}</p>
                  )}

                  <AnimatePresence>
                    {destinationCountry === 'Other' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <label htmlFor="destinationCountryOther" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Specify Destination Country *
                        </label>
                        <input
                          id="destinationCountryOther"
                          {...register('destinationCountryOther')}
                          placeholder="e.g. Democratic Republic of Congo"
                          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                        {errors.destinationCountryOther && (
                          <p className="text-red-500 text-xs mt-1">{errors.destinationCountryOther.message}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-5"
            >
              <h3 className="font-outfit font-bold text-navy-900 text-xl">Step 2: Cargo Details</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="cargoType" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Cargo Type *
                  </label>
                  <select
                    id="cargoType"
                    {...register('cargoType')}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all bg-white"
                  >
                    <option value="">Select cargo type</option>
                    {CARGO_TYPES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.cargoType && (
                    <p className="text-red-500 text-xs mt-1">{errors.cargoType.message}</p>
                  )}

                  <AnimatePresence>
                    {cargoType === 'Other' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <label htmlFor="cargoTypeOther" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Specify Cargo Type *
                        </label>
                        <input
                          id="cargoTypeOther"
                          {...register('cargoTypeOther')}
                          placeholder="e.g. Perishable cut flowers"
                          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                        {errors.cargoTypeOther && (
                          <p className="text-red-500 text-xs mt-1">{errors.cargoTypeOther.message}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Estimated Weight (kg) *
                  </label>
                  <input
                    id="weight"
                    {...register('weight')}
                    type="number"
                    placeholder="e.g. 5000"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.weight && (
                    <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Volume (m³) <span className="text-slate-400 font-normal">Optional</span>
                  </label>
                  <input
                    id="volume"
                    {...register('volume')}
                    type="number"
                    placeholder="e.g. 20"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Special Requirements <span className="text-slate-400 font-normal">Optional</span>
                  </label>
                  <textarea
                    id="specialRequirements"
                    {...register('specialRequirements')}
                    rows={3}
                    placeholder="e.g. Refrigerated transport, fragile items, hazmat certification required..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-5"
            >
              <h3 className="font-outfit font-bold text-navy-900 text-xl">Step 3: Your Contact Details</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    placeholder="John Mwangi"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company <span className="text-slate-400 font-normal">Optional</span>
                  </label>
                  <input
                    id="company"
                    {...register('company')}
                    placeholder="Your company name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    {...register('phone')}
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="flex gap-3">
                    {(['phone', 'whatsapp', 'email'] as const).map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          {...register('contactMethod')}
                          value={method}
                          className="accent-orange-500"
                        />
                        <span className="text-sm text-slate-700 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-2 text-slate-600 hover:text-navy-900 font-medium text-sm transition-colors"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              id={`quote-next-step-${step}`}
              className="flex items-center gap-2 bg-navy-900 hover:bg-navy-600 text-white font-outfit font-bold text-sm px-6 py-3 rounded-xl transition-all active:scale-95"
            >
              Next Step
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="submit"
              id="quote-submit-btn"
              disabled={loading}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-outfit font-bold text-sm px-8 py-3 rounded-xl transition-all active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Quote Request
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
