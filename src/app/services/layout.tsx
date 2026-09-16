import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Financial Services | Archana Phaltankar",
  description:
    "Detailed insurance and financial planning services in India: life insurance, general insurance, and LIC agency opportunities, backed by 28+ years of experience. See our service partners.",
  alternates: {
    canonical: "https://becozlifematters.in/services",
  },
  openGraph: {
    title: "Insurance & Financial Services | Becoz Life Matters",
    description:
      "Life insurance, general insurance, and LIC agency services backed by 28+ years of experience. See our trusted service partners.",
    url: "https://becozlifematters.in/services",
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
    title: "Insurance & Financial Services | Archana Phaltankar",
    description:
      "Life insurance, general insurance, and LIC agency services backed by 28+ years of experience.",
    images: ["/og-image.png"],
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://becozlifematters.in/services#service",
    name: "Insurance and Financial Planning Services",
    description:
      "Life insurance, general insurance, and LIC agency services including term plans, health and vehicle coverage, and agent recruitment.",
    provider: {
      "@type": "FinancialService",
      name: "Becoz Life Matters",
      url: "https://becozlifematters.in",
      telephone: "+91-8308844841",
      email: "archu.phaltankar@gmail.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Life Insurance",
            description:
              "Term, endowment, whole life, retirement, and child education insurance plans.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Insurance",
            description:
              "Health, vehicle, property, travel, and business insurance coverage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LIC Agency",
            description:
              "Insurance agent recruitment, training, and business development support.",
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
