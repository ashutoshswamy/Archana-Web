# Becoz Life Matters - Insurance & Financial Planning Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green)](https://developers.google.com/search)

Professional website for Archana Phaltankar's insurance and financial planning services with 28+ years of experience. Featuring comprehensive SEO optimization, responsive design, and modern web technologies.

## 🌟 Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Mobile-First Design**: Fully responsive across all devices
- **Performance Optimized**: Next.js 15 with image optimization, lazy loading, and compression
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **PWA Ready**: Progressive Web App capabilities with manifest and service worker support
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions

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
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
# Edit .env.local with your actual values
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
archana-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata & structured data
│   │   ├── page.tsx            # Home page
│   │   ├── sitemap.ts          # XML sitemap generation
│   │   ├── globals.css         # Global styles
│   │   └── investments/
│   │       ├── layout.tsx      # Investments page layout
│   │       └── page.tsx        # Investments page
│   └── components/
│       └── SEO.tsx             # SEO components (FAQ, Breadcrumb schemas)
├── public/
│   ├── robots.txt              # Search engine directives
│   ├── site.webmanifest        # PWA manifest
│   └── [images]                # Logos, icons, and images
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── SEO-OPTIMIZATION.md         # SEO documentation
└── package.json
```

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Poppins (Google Fonts)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel (recommended)

## 🔍 SEO Features

### Implemented Optimizations

✅ **Meta Tags**
- Dynamic page titles with keywords
- Compelling meta descriptions (150-160 chars)
- Comprehensive keyword lists

✅ **Structured Data (Schema.org)**
- FinancialService organization
- Person (Archana Phaltankar)
- Service offerings
- AggregateRating (4.9/5, 1000+ reviews)
- LocalBusiness information

✅ **Open Graph & Twitter Cards**
- Optimized social sharing
- Custom OG images (1200x630px)
- Platform-specific metadata

✅ **Technical SEO**
- XML sitemap (auto-generated)
- Robots.txt configuration
- Canonical URLs
- Mobile-first indexing
- Core Web Vitals optimization

✅ **Security Headers**
- HSTS, X-Frame-Options
- Content Security Policy
- XSS Protection

See [SEO-OPTIMIZATION.md](./SEO-OPTIMIZATION.md) for complete documentation.

## 📱 Pages

### Home Page (/)
- Hero section with call-to-actions
- About section with owner profile
- Services overview (Life Insurance, General Insurance, LIC Agency)
- Partner logos (LIC, ICICI Lombard, Prudent)
- Client testimonials with ratings
- Contact information

### Investments Page (/investments)
- Investment services overview
- Mutual funds information
- Financial advisory details
- Asset allocation strategies
- SIP planning guidance

## 🎯 Key Metrics

- **Lighthouse Score**: 90+
- **Page Load Time**: < 2s
- **Mobile Friendly**: Yes
- **Core Web Vitals**: Optimized
- **SEO Score**: 95+

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

The site will be automatically deployed with every push to the main branch.

### Other Platforms

The app can be deployed on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (use `env.example` as template):

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
NEXT_PUBLIC_SITE_URL=https://becozlifematters.in
```

### Google Services Setup

1. **Google Search Console**
   - Verify ownership
   - Submit sitemap: `https://becozlifematters.in/sitemap.xml`
   - Monitor search performance

2. **Google Analytics 4**
   - Create GA4 property
   - Add measurement ID to `.env.local`
   - Configure goals and conversions

3. **Google Business Profile**
   - Create/claim business listing
   - Add business information
   - Encourage client reviews

## 📊 Analytics & Monitoring

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Vercel Analytics
- Lighthouse CI
- PageSpeed Insights

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👤 Contact

**Archana Phaltankar**
- Phone: +91-8308844841
- Email: archana.phaltankar@becozlifematters.in
- Website: [becozlifematters.in](https://becozlifematters.in)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- Lucide for beautiful icons
- All clients who trusted our services

---

**Built with ❤️ for Becoz Life Matters**

*Last Updated: November 2025*

