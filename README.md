# Segecha Group – Website

**Production-ready Next.js 14 website for Segecha Group Ltd., a logistics and freight company operating across East Africa.**

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Hook Form + Zod | Form validation |
| Lucide React | Icons |
| Syne + Inter (next/font) | Typography |

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages Built

| Page | Route | Description |
|---|---|---|
| Home | `/` | Full homepage with hero, services, map, stats, testimonials |
| Services | `/services` | Services overview |
| Long-Haul Freight | `/services/long-haul-freight` | Service detail page |
| Cross-Border Transport | `/services/cross-border-transport` | Service detail page |
| Fleet Tracking | `/services/fleet-tracking-dispatch` | Service detail page |
| Warehouse & Distribution | `/services/warehouse-distribution` | Service detail page |
| Routes | `/routes` | All East Africa freight corridors |
| About | `/about` | Company story, fleet, team, certifications |
| Get a Quote | `/quote` | 3-step quote wizard |
| FAQ | `/faq` | Categorized FAQ with JSON-LD schema |
| Contact | `/contact` | Contact form, phone, WhatsApp, map |

## Components

```
components/
├── Navbar.tsx              # Sticky nav with mobile drawer
├── Footer.tsx              # 4-column footer + WhatsApp float
├── WhatsAppButton.tsx      # Fixed WhatsApp floating button
├── HeroHome.tsx            # Animated SVG map hero
├── ServiceCard.tsx         # Reusable service card
├── StatsCounter.tsx        # Animated count-up stats
├── TestimonialSlider.tsx   # Auto-play testimonial carousel
├── QuoteForm.tsx           # 3-step wizard form
├── RouteMap.tsx            # Interactive SVG East Africa map
├── FAQAccordion.tsx        # Accessible accordion
├── CTABanner.tsx           # Reusable CTA banner
└── JsonLd.tsx              # Structured data injector
```

## SEO Features

- **Unique `<title>` and meta description** on every page
- **Canonical URLs** on all pages
- **Open Graph tags** for social sharing
- **JSON-LD structured data**: Organization, LocalBusiness, WebSite, Service, FAQPage schemas
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **robots.txt**: Allows Google, Bing, and all major AI crawlers (GPTBot, ClaudeBot, etc.)
- **AI Search Optimization (GEO)**: "What is X?" sections with specific facts and figures on all service/route pages

## Environment Variables

See `.env.example` for all required variables.

### Email Setup for Quote Form

The quote form sends data to `/api/quote`. In production, integrate one of:

1. **Resend** (recommended):
   ```bash
   npm install resend
   ```
   Add `RESEND_API_KEY` to `.env.local`

2. **Nodemailer** (SMTP):
   Add `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` etc.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Self-hosted
```bash
npm run build
npm start
```

## Design System

| Token | Value |
|---|---|
| Primary Dark (Navy) | `#0A1628` |
| Accent (Orange) | `#F97316` |
| Secondary Navy | `#1E3A5F` |
| Light Text | `#F8FAFC` |
| Dark Text | `#1E293B` |
| Body Font | Inter |
| Heading Font | Syne |

## Contact

**Segecha Group Ltd.**
Mombasa Port, Shed 12, Port Reitz Road, Mombasa, Kenya
- Phone: +254 721 762 828
- Phone: +254 107 971 792
- WhatsApp: https://wa.me/254107971792
