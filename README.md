# Becoz Life Matters - Insurance & Financial Planning Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC)](https://tailwindcss.com/)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green)](https://developers.google.com/search)

Professional website for Archana Phaltankar's insurance and financial planning services with 28+ years of experience. Featuring comprehensive SEO optimization, a responsive editorial design, and a working contact form backed by Supabase + Resend.

## 🌟 Features

- **SEO Optimized**: Per-page meta tags, canonical URLs, Open Graph, Twitter Cards, and JSON-LD structured data
- **Mobile-First Design**: Fully responsive across all devices
- **Performance Optimized**: Next.js 16 with image optimization, lazy loading, and compression
- **Working Contact Form**: Submissions are stored in Supabase and emailed via Resend
- **Modern UI/UX**: DM Sans typography, forest/brass brand palette, Framer Motion animations
- **PWA-ready icons**: Full favicon set + web manifest

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashutoshswamy/Archana-Web.git
cd archana-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables — create `.env.local` in the project root:
```env
NEXT_PUBLIC_SITE_URL=https://becozlifematters.in
NEXT_PUBLIC_SITE_NAME=Becoz Life Matters
NEXT_PUBLIC_PHONE=+918308844841
NEXT_PUBLIC_EMAIL=archu.phaltankar@gmail.com

# Supabase (stores contact form submissions)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Resend (sends the contact form notification email)
RESEND_API_KEY=your-resend-api-key
```

> The Supabase `contacts` table must have Row Level Security enabled with policies scoped to what the anon key is allowed to do (insert-only from the API route). Never rely on the key being secret — it is a `NEXT_PUBLIC_` value.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
archana-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: metadata, icons, JSON-LD, DM Sans font
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles, brand color tokens
│   │   ├── sitemap.ts           # XML sitemap generation
│   │   ├── investments/         # /investments — investment advisory + risk-tier breakdown
│   │   ├── services/            # /services — service summaries + partner logos
│   │   ├── contact/             # /contact — contact form + embedded Google Map
│   │   └── api/contact/         # POST route: validates, stores in Supabase, emails via Resend
│   ├── components/
│   │   └── ContactForm.tsx      # Shared contact form (used on /contact)
│   └── lib/
│       └── supabase.ts          # Supabase client (server-side use only)
├── public/
│   ├── robots.txt               # Search engine directives
│   ├── site.webmanifest         # PWA manifest
│   ├── favicon.ico, favicon-16x16.png, favicon-32x32.png
│   ├── apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
│   ├── logo.png                 # Nav mark
│   ├── og-image.png             # Open Graph share image (1200x630)
│   └── [partner logos, portrait]
├── next.config.ts               # Image optimization + security headers
└── package.json
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: DM Sans (Google Fonts)
- **Backend**: Supabase (contact submissions), Resend (transactional email)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel (recommended)

## 🔍 SEO Features

✅ **Meta Tags** — dynamic per-page titles, descriptions, and canonical URLs

✅ **Structured Data (Schema.org)** — FinancialService, Person, WebSite, Service, and ContactPage JSON-LD

✅ **Open Graph & Twitter Cards** — shared `/og-image.png` (1200×630) wired into every page's metadata

✅ **Technical SEO** — auto-generated XML sitemap (`/sitemap.xml`), `robots.txt`, mobile-first layout

✅ **Security Headers** — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy (see `next.config.ts`)

## 📱 Pages

### Home (`/`)
Hero, About, Services overview, Partner logos, Testimonials, and a contact CTA band.

### Services (`/services`)
Brief summaries of Life Insurance, General Insurance, and LIC Agency, plus the Service Partners grid.

### Investments (`/investments`)
Mutual funds, financial advisory, and a Safe / Medium / High risk-tier breakdown.

### Contact (`/contact`)
Contact form (stores to Supabase, emails via Resend), phone/WhatsApp/email/address, and an embedded Google Map of the Pune office.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables listed above
4. Deploy

The site redeploys automatically on every push to the main branch.

## 🔒 Security Notes

- Contact form input is HTML-escaped before being embedded in the notification email (prevents HTML/script injection into the email body).
- Server errors return a generic message to the client; details are logged server-side only.
- `.env*` files are gitignored — no secrets are committed.
- No known vulnerable dependencies flagged beyond the standard `npm audit` advisories for the pinned framework versions; run `npm audit` periodically and `npm update` to stay current.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👤 Contact

**Archana Phaltankar**
- Phone / WhatsApp: +91-8308844841
- Email: archu.phaltankar@gmail.com
- Website: [becozlifematters.in](https://becozlifematters.in)

---

**Built for Becoz Life Matters**

*Last Updated: September 2026*
