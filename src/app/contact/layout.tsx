import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Archana Phaltankar",
  description:
    "Get in touch with Archana Phaltankar for insurance and financial planning services in Pune. Call, email, or visit the office — find us on the map.",
  alternates: {
    canonical: "https://becozlifematters.in/contact",
  },
  openGraph: {
    title: "Contact Us | Becoz Life Matters",
    description:
      "Get in touch for insurance and financial planning services in Pune. Call, email, or visit the office.",
    url: "https://becozlifematters.in/contact",
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
    title: "Contact Us | Archana Phaltankar",
    description:
      "Get in touch for insurance and financial planning services in Pune.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://becozlifematters.in/contact#contactpage",
    name: "Contact Archana Phaltankar",
    about: {
      "@id": "https://becozlifematters.in/#organization",
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
