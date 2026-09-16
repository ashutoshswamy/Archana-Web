import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment & Mutual Funds Services | Archana Phaltankar",
  description:
    "Expert investment advisory and mutual fund services in India. Strategic asset allocation, SIP planning, portfolio management, and goal-based investing with 28+ years of experience. Grow your wealth wisely with professional guidance.",
  keywords: [
    "mutual funds investment India",
    "investment advisory services",
    "SIP investment plans",
    "portfolio management services",
    "asset allocation strategy",
    "goal-based investing",
    "wealth creation India",
    "investment planning",
    "mutual fund advisor India",
    "equity mutual funds",
    "debt mutual funds",
    "hybrid funds India",
    "financial portfolio management",
    "investment consultant India",
    "best mutual funds India",
    "SIP calculator",
    "systematic investment plan",
    "long-term investment planning",
    "retirement investment planning",
    "tax-saving mutual funds",
    "ELSS funds India",
    "best SIP plans",
    "mutual fund returns",
    "investment portfolio diversification",
    "wealth management services",
  ],
  openGraph: {
    title: "Investment & Mutual Funds Services | Becoz Life Matters",
    description:
      "Expert investment advisory and mutual fund services with strategic asset allocation and portfolio management. Achieve your financial goals with 28+ years of professional guidance.",
    url: "https://becozlifematters.in/investments",
    siteName: "Becoz Life Matters",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Archana Phaltankar - Becoz Life Matters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment & Mutual Funds Services | Archana Phaltankar",
    description:
      "Expert investment advisory and mutual fund services. Strategic asset allocation and portfolio management for wealth creation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://becozlifematters.in/investments",
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
};

export default function InvestmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://becozlifematters.in/investments#service",
    name: "Investment and Mutual Funds Advisory Services",
    description:
      "Comprehensive investment advisory and mutual fund services including SIP planning, portfolio management, asset allocation, and goal-based investing strategies.",
    provider: {
      "@type": "FinancialService",
      name: "Becoz Life Matters",
      url: "https://becozlifematters.in",
      telephone: "+91-8308844841",
      email: "archu.phaltankar@gmail.com",
    },
    serviceType: "Investment Advisory",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Investment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mutual Funds Investment",
            description:
              "Strategic mutual fund investments with SIP planning and portfolio management for long-term wealth creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Financial Advisory",
            description:
              "Comprehensive financial planning and advisory services for goal-based investing and wealth management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asset Allocation",
            description:
              "Strategic asset allocation strategies to optimize portfolio returns while managing risk",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portfolio Management",
            description:
              "Professional portfolio management services to maximize returns and achieve financial objectives",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
