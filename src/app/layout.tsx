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
    "Expert insurance and financial planning services in India with 26+ years of experience. Life insurance, health insurance, mutual funds, retirement planning, and wealth management solutions. Because Life Matters.",
  keywords: [
    "insurance advisor India",
    "financial planning",
    "life insurance",
    "health insurance",
    "mutual funds",
    "retirement planning",
    "wealth management",
    "LIC agent",
    "term insurance",
    "mediclaim",
    "SIP investment",
    "financial advisor",
    "Archana Phaltankar",
    "becoz life matters",
    "portfolio management",
    "tax planning",
    "child education planning",
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
    title: "Archana Phaltankar - Insurance & Financial Planning Expert",
    description:
      "Expert insurance and financial planning services with 26+ years of experience. Life insurance, health insurance, mutual funds, retirement planning. Because Life Matters.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Becoz Life Matters - Financial Planning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archana Phaltankar - Insurance & Financial Planning Expert",
    description:
      "Expert insurance and financial planning services with 26+ years of experience. Because Life Matters.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code", // Add your Google Search Console verification code
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
          "Professional insurance and financial planning services with expertise in life insurance, health insurance, mutual funds, and wealth management.",
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
        },
      },
      {
        "@type": "Person",
        "@id": "https://becozlifematters.in/#person",
        name: "Archana Phaltankar",
        jobTitle: "Financial Planner & Insurance Advisor",
        description:
          "Experienced financial planner with 26+ years in insurance and wealth management.",
        url: "https://becozlifematters.in",
        telephone: "+91-8308844841",
        email: "archana.phaltankar@becozlifematters.in",
        worksFor: {
          "@id": "https://becozlifematters.in/#organization",
        },
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
