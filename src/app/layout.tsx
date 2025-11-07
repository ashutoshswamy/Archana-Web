import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://becozlifematters.in"),
  title: {
    default:
      "Archana Phaltankar - Insurance & Financial Planning Expert | Becoz Life Matters",
    template: "%s | Becoz Life Matters",
  },
  description:
    "Expert insurance and financial planning services in India with 28+ years of experience. Specializing in life insurance, health insurance, mutual funds, retirement planning, and comprehensive wealth management solutions. Trusted advisor for families seeking financial security. Because Life Matters.",
  keywords: [
    "insurance advisor India",
    "financial planning services",
    "life insurance policy",
    "health insurance plans",
    "mutual funds investment",
    "retirement planning India",
    "wealth management services",
    "LIC agent India",
    "term insurance plans",
    "mediclaim policy",
    "SIP investment India",
    "financial advisor near me",
    "Archana Phaltankar",
    "becoz life matters",
    "portfolio management services",
    "tax planning India",
    "child education planning",
    "investment advisory services",
    "insurance consultant India",
    "best financial planner",
    "money management services",
    "asset allocation strategy",
    "family financial planning",
    "insurance agent Mumbai",
    "financial planning expert",
    "wealth creation strategies",
    "goal-based investing",
    "HDFC life insurance",
    "ICICI Prudential",
    "comprehensive insurance solutions",
    "certified financial planner",
    "risk management services",
    "pension plans India",
    "savings and investment plans",
    "financial security planning",
  ],
  authors: [{ name: "Archana Phaltankar" }],
  creator: "Archana Phaltankar",
  publisher: "Becoz Life Matters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://becozlifematters.in",
    siteName: "Becoz Life Matters",
    title: "Archana Phaltankar - Insurance & Financial Planning Expert | 28+ Years Experience",
    description:
      "Expert insurance and financial planning services with 28+ years of experience. Life insurance, health insurance, mutual funds, retirement planning, wealth management. Trusted financial advisor in India. Because Life Matters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archana Phaltankar - Insurance & Financial Planning Expert | 28+ Years",
    description:
      "Expert insurance and financial planning services with 28+ years of experience. Life insurance, health insurance, mutual funds, retirement planning. Because Life Matters.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here after setting up GSC
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://becozlifematters.in",
  },
  category: "Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://becozlifematters.in/#organization",
        name: "Becoz Life Matters",
        description:
          "Professional insurance and financial planning services with 28+ years of expertise in life insurance, health insurance, mutual funds, retirement planning, and comprehensive wealth management. Trusted financial advisor serving families across India.",
        url: "https://becozlifematters.in",
        telephone: "+91-8308844841",
        email: "archana.phaltankar@becozlifematters.in",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "India",
        },
        sameAs: [],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1000",
          bestRating: "5",
          worstRating: "1"
        },
        priceRange: "₹₹",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Financial Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Life Insurance Planning",
                description: "Comprehensive life insurance solutions including term plans, endowment policies, and retirement plans"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Health Insurance",
                description: "Medical and health insurance coverage for individuals and families"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mutual Funds Investment",
                description: "Strategic mutual fund investments and portfolio management services"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Retirement Planning",
                description: "Comprehensive retirement and pension planning solutions"
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://becozlifematters.in/#person",
        name: "Archana Phaltankar",
        jobTitle: "Financial Planner & Insurance Advisor",
        description:
          "Experienced financial planner and insurance advisor with 28+ years of expertise in insurance and comprehensive wealth management. Specialized in life insurance, health insurance, mutual funds, and retirement planning.",
        url: "https://becozlifematters.in",
        telephone: "+91-8308844841",
        email: "archu.phaltankar@gmail.com",
        worksFor: {
          "@id": "https://becozlifematters.in/#organization",
        },
        knowsAbout: [
          "Life Insurance",
          "Health Insurance",
          "Financial Planning",
          "Mutual Funds",
          "Retirement Planning",
          "Wealth Management",
          "Investment Advisory",
          "Risk Management",
          "Tax Planning",
          "Portfolio Management"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://becozlifematters.in/#website",
        url: "https://becozlifematters.in",
        name: "Becoz Life Matters",
        description:
          "Expert insurance and financial planning services in India",
        publisher: {
          "@id": "https://becozlifematters.in/#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        serviceType: "Life Insurance",
        provider: {
          "@id": "https://becozlifematters.in/#organization",
        },
        areaServed: "IN",
      },
      {
        "@type": "Service",
        serviceType: "Health Insurance",
        provider: {
          "@id": "https://becozlifematters.in/#organization",
        },
        areaServed: "IN",
      },
      {
        "@type": "Service",
        serviceType: "Mutual Funds Investment",
        provider: {
          "@id": "https://becozlifematters.in/#organization",
        },
        areaServed: "IN",
      },
      {
        "@type": "Service",
        serviceType: "Financial Planning",
        provider: {
          "@id": "https://becozlifematters.in/#organization",
        },
        areaServed: "IN",
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
