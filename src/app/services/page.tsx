"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Shield,
  Heart,
  Users,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: Shield,
    accent: "var(--brand)",
    accentDark: "var(--brand-dark)",
    title: "Life Insurance",
    description:
      "Comprehensive life coverage to protect your family's financial future — term and endowment plans, retirement planning, and child education plans, tailored to your stage of life.",
  },
  {
    icon: Heart,
    accent: "var(--brass)",
    accentDark: "#96692a",
    title: "General Insurance",
    description:
      "Protect what you've built — health and mediclaim, vehicle and property, travel and business coverage — with comprehensive protection for your assets and health.",
  },
  {
    icon: Users,
    accent: "var(--ink)",
    accentDark: "#0c1512",
    title: "LIC Agency",
    description:
      "Start a career as an insurance professional. Agent recruitment, training and support, and business development, backed by 28 years of industry relationships.",
  },
];

const partners = [
  {
    logo: "/lic-logo.png",
    alt: "LIC Life Insurance Corporation - India's most trusted insurance provider since 1956",
    name: "Life Insurance Corporation",
    detail: "Since 1956",
  },
  {
    logo: "/icici-lombard-logo.png",
    alt: "ICICI Lombard General Insurance - Comprehensive health and general insurance solutions",
    name: "Nibhay Vaade",
    detail: "General Insurance",
  },
  {
    logo: "/prudent-logo.png",
    alt: "Prudent Corporate Advisory Services - Expert mutual funds and investment advisory",
    name: "Nivesh Through Nivdaan",
    detail: "Mutual Funds",
  },
];

const desktopNavItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", active: true },
  { name: "Partners", href: "/#partners" },
  { name: "Investments", href: "/investments" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useReveal<HTMLElement>({ axis: "y", distance: -100, duration: 0.6, fade: false });
  const logoRef = useReveal<HTMLDivElement>({ axis: "x", distance: -20, delay: 0.2, duration: 0.5 });
  const desktopNavRef = useReveal<HTMLDivElement>({ axis: "y", distance: -20, delay: 0.3, duration: 0.5 });
  const ctaRef = useReveal<HTMLAnchorElement>({ axis: "x", distance: 20, delay: 0.4, duration: 0.5 });

  const introRef = useReveal<HTMLDivElement>({ stagger: 0.15, delay: 0.1, axis: "y", distance: 30 });
  const servicesListRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const servicesCtaRef = useReveal<HTMLDivElement>({ axis: "y", distance: 30, onScroll: true });

  const partnersHeaderRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const partnersGridRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

  const ctaBandRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

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
                What We Offer
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight">
                Comprehensive Financial Services
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Tailored insurance and advisory solutions to secure your
                family&rsquo;s future and grow your wealth, backed by 28 years
                of experience.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
            <div ref={servicesListRef} className="space-y-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-[var(--line)] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 sm:items-center"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(to bottom right, ${service.accent}, ${service.accentDark})`,
                      }}
                    >
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--ink)] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to Investments Page */}
            <div ref={servicesCtaRef}>
              <div className="bg-[var(--paper-tint)] rounded-2xl p-8 sm:p-12 border border-[var(--line)] text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Looking for Investment Solutions?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive investment services including mutual
                  funds, financial advisory, and smart asset allocation
                  strategies.
                </p>
                <Link
                  href="/investments"
                  className="inline-flex bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 items-center gap-2"
                >
                  Explore Investment Options
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="bg-[var(--paper)] py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={partnersHeaderRef} className="mb-12 sm:mb-16">
              <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                Trusted Brands
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl">
                Our Service Partners
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Collaborating with India&rsquo;s leading insurance and
                financial institutions
              </p>
            </div>

            <div ref={partnersGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] flex flex-col items-center justify-center text-center hover:border-[var(--brand)] hover:-translate-y-1"
                >
                  <div className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={180}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                    {partner.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                    {partner.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-[var(--ink)] text-white relative overflow-hidden">
          <div
            ref={ctaBandRef}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="eyebrow text-xs sm:text-sm text-[var(--brass-light)] pb-2 border-b-2 border-[var(--brass)] inline-block mb-4">
                Get Started
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Not Sure Which Plan Fits You?
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-80">
                Talk it through with Archana directly — get a recommendation
                tailored to your family and goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+918308844841"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-white/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-8308844841
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:border-white transition-colors"
              >
                Contact
                <ChevronRight className="w-4 h-4" />
              </Link>
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
