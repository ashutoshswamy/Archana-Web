"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";

const OFFICE_ADDRESS =
  "214, Business Point, Narayan Chambers, 555 Narayan Peth, Pune, Maharashtra 411030";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&output=embed`;

const desktopNavItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/#partners" },
  { name: "Investments", href: "/investments" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact", active: true },
];

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useReveal<HTMLElement>({ axis: "y", distance: -100, duration: 0.6, fade: false });
  const logoRef = useReveal<HTMLDivElement>({ axis: "x", distance: -20, delay: 0.2, duration: 0.5 });
  const desktopNavRef = useReveal<HTMLDivElement>({ axis: "y", distance: -20, delay: 0.3, duration: 0.5 });
  const ctaRef = useReveal<HTMLAnchorElement>({ axis: "x", distance: 20, delay: 0.4, duration: 0.5 });

  const introRef = useReveal<HTMLDivElement>({ stagger: 0.15, delay: 0.1, axis: "y", distance: 30 });
  const formRef = useReveal<HTMLDivElement>({ axis: "y", distance: 20, duration: 0.6, onScroll: true });
  const infoRef = useReveal<HTMLDivElement>({ axis: "y", distance: 20, duration: 0.6, delay: 0.1, onScroll: true });

  const footerRef = useReveal<HTMLElement>({ axis: "none", duration: 0.5, onScroll: true });
  const footerGridRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

  const floatRef = useReveal<HTMLAnchorElement>({ axis: "scale", delay: 1, duration: 0.6, ease: "back.out(1.7)" });

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header>
        <nav
          ref={navRef}
          className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex justify-between items-center">
              <div ref={logoRef}>
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                  <Image src="/logo.png" alt="Becoz Life Matters logo" width={36} height={36} className="w-8 h-8 sm:w-9 sm:h-9" />
                  <div>
                    <div className="font-bold text-gray-800 text-base sm:text-lg">
                      Archana Phaltankar
                    </div>
                    <div className="text-xs text-gray-500">Financial Planner</div>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div ref={desktopNavRef} className="hidden lg:flex gap-8 text-sm font-medium text-gray-600">
                {desktopNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-block transition-transform duration-200 hover:scale-105 ${
                      item.active
                        ? "text-[var(--brand)]"
                        : "hover:text-[var(--brand)]"
                    } relative group`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 ${
                        item.active ? "w-full" : "w-0 group-hover:w-full"
                      } h-0.5 bg-[var(--brand)] transition-all`}
                    ></span>
                  </Link>
                ))}
              </div>

              {/* Desktop CTA Button */}
              <a
                ref={ctaRef}
                href="tel:+918308844841"
                className="hidden sm:flex bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:shadow-xl transition-all duration-300 items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Get in Touch</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[var(--brand)] transition-colors active:scale-90"
                aria-label="Toggle menu"
              >
                <span className="relative block w-6 h-6">
                  <Menu
                    className={`absolute inset-0 transition-all duration-200 ${
                      mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-200 ${
                      mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`}
                  />
                </span>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
                mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col space-y-4">
                  {desktopNavItems.map((item, index) => (
                    <div
                      key={item.name}
                      className={`transition-all duration-300 ${
                        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                      }`}
                      style={{ transitionDelay: mobileMenuOpen ? `${100 + index * 60}ms` : "0ms" }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${
                          item.active
                            ? "text-[var(--brand)]"
                            : "text-gray-600 hover:text-[var(--brand)]"
                        } transition-colors font-medium flex items-center gap-2`}
                      >
                        <ChevronRight className="w-4 h-4" />
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  <a
                    href="tel:+918308844841"
                    className={`bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 sm:hidden active:scale-95 transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? `${100 + desktopNavItems.length * 60}ms` : "0ms" }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Intro */}
        <section className="bg-[var(--paper)] border-t-2 border-[var(--brass)] py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={introRef} className="max-w-2xl">
              <div className="eyebrow text-xs sm:text-sm text-[var(--brass)] pb-2 border-b-2 border-[var(--brass)] inline-block mb-4">
                Get in Touch
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight">
                Let&rsquo;s Talk About Your Financial Future
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Call, email, or visit the office in Pune. For a detailed
                query, send a message below and hear back within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Details + Form + Map */}
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div ref={formRef} className="bg-[var(--ink)] rounded-lg p-4 sm:p-6">
              <ContactForm />
            </div>

            {/* Info + Map */}
            <div ref={infoRef} className="space-y-8">
              <div className="bg-white border border-[var(--line)] rounded-lg p-6 sm:p-8">
                <div className="w-10 h-1 bg-[var(--brass)] mb-6" />
                <div className="space-y-6">
                  <div className="flex items-start gap-4 border-b border-[var(--line)] pb-5">
                    <Phone className="w-5 h-5 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <a
                        href="tel:+918308844841"
                        className="text-base font-semibold text-[var(--ink)] hover:text-[var(--brand)] transition-colors"
                      >
                        +91-8308844841
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b border-[var(--line)] pb-5">
                    <MessageCircle className="w-5 h-5 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">WhatsApp</div>
                      <a
                        href="https://wa.me/918308844841"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-[var(--ink)] hover:text-[var(--brand)] transition-colors"
                      >
                        +91-8308844841
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b border-[var(--line)] pb-5">
                    <Mail className="w-5 h-5 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <a
                        href="mailto:archu.phaltankar@gmail.com"
                        className="text-base font-semibold text-[var(--ink)] hover:text-[var(--brand)] transition-colors break-words"
                      >
                        archu.phaltankar@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Office</div>
                      <p className="text-base font-semibold text-[var(--ink)] leading-relaxed">
                        214, Business Point, Narayan Chambers,
                        <br />
                        555 Narayan Peth, Pune-411030, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--line)] rounded-lg overflow-hidden">
                <iframe
                  src={MAP_EMBED_SRC}
                  className="w-full h-72 sm:h-80"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location on Google Maps"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[var(--ink)] text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div ref={footerGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2">
              <div className="mb-4">
                <div className="font-bold text-lg sm:text-xl">
                  Archana Phaltankar
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Because Life Matters
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">
                Your trusted partner for insurance and financial planning with
                28 years of excellence in securing families and creating wealth.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "Investments", href: "/investments" },
                  { name: "Testimonials", href: "/#testimonials" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name} className="transition-transform duration-300 hover:translate-x-1">
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {["Life Insurance", "General Insurance", "LIC Agency", "Investment Advisory"].map(
                  (item) => (
                    <li key={item} className="transition-transform duration-300 hover:translate-x-1 hover:text-white">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        ref={floatRef}
        href="tel:+918308844841"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center gap-2 sm:gap-3 font-semibold group hover:scale-110 active:scale-90"
      >
        <div className="animate-phone-wiggle">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="hidden md:inline text-sm sm:text-base">Call Now</span>
      </a>
    </div>
  );
}
