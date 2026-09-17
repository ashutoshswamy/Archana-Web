"use client";

import Image from "next/image";
import {
  Phone,
  Shield,
  TrendingUp,
  Target,
  Check,
  Menu,
  X,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const desktopNavItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/#partners" },
  { name: "Investments", href: "/investments", active: true },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

const allocation = [
  { pct: 30, offset: 0, color: "var(--risk-safe)" },
  { pct: 45, offset: 30, color: "var(--brand)" },
  { pct: 25, offset: 75, color: "var(--risk-high)" },
];

const allocationLegend = [
  { label: "Safe", pct: "30%", color: "var(--risk-safe)" },
  { label: "Medium Risk", pct: "45%", color: "var(--brand)" },
  { label: "High Growth", pct: "25%", color: "var(--risk-high)" },
];

export default function Investments() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useReveal<HTMLElement>({ axis: "y", distance: -100, duration: 0.6, fade: false });
  const logoRef = useReveal<HTMLDivElement>({ axis: "x", distance: -20, delay: 0.2, duration: 0.5 });
  const desktopNavRef = useReveal<HTMLDivElement>({ axis: "y", distance: -20, delay: 0.3, duration: 0.5 });
  const ctaRef = useReveal<HTMLAnchorElement>({ axis: "x", distance: 20, delay: 0.4, duration: 0.5 });

  const heroContentRef = useReveal<HTMLDivElement>({ stagger: 0.15, delay: 0.1, axis: "y", distance: 30 });
  const heroGraphicRef = useReveal<HTMLDivElement>({ axis: "x", distance: 20, delay: 0.4, duration: 0.6 });
  const donutRef = useReveal<SVGGElement>({ stagger: 0.15, delay: 0.6, duration: 0.5, axis: "scale" });
  const legendRef = useReveal<HTMLDivElement>({ stagger: 0.1, delay: 1.1, duration: 0.4, axis: "y", distance: 8 });

  const servicesHeaderRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const servicesCardsRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const mutualFundsListRef = useReveal<HTMLUListElement>({ stagger: 0.1, axis: "x", distance: -10, onScroll: true });
  const advisoryListRef = useReveal<HTMLUListElement>({ stagger: 0.1, axis: "x", distance: -10, onScroll: true });

  const allocationHeaderRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const allocationCardsRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const safeListRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "x", distance: -10, onScroll: true });
  const mediumListRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "x", distance: -10, onScroll: true });
  const highListRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "x", distance: -10, onScroll: true });
  const safeBarRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "scaleX", delay: 0.2, onScroll: true });
  const mediumBarRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "scaleX", delay: 0.2, onScroll: true });
  const highBarRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "scaleX", delay: 0.2, onScroll: true });

  const ctaBandRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

  const footerRef = useReveal<HTMLElement>({ axis: "none", duration: 0.5, onScroll: true });
  const footerGridRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

  const floatRef = useReveal<HTMLAnchorElement>({ axis: "scale", delay: 1, duration: 0.6, ease: "back.out(1.7)" });

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Sticky Navigation */}
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

      {/* Hero Section */}
      <main>
        <section className="relative overflow-hidden bg-[var(--paper)] border-t-2 border-[var(--brass)]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
              <div ref={heroContentRef} className="space-y-6 sm:space-y-8">
                <div className="eyebrow text-xs sm:text-sm text-[var(--brass)] pb-2 border-b-2 border-[var(--brass)] inline-block">
                  Investment Advisory
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ink)] leading-[1.05] tracking-tight">
                  Build Your
                  <span className="block font-light italic text-[var(--brand)]">
                    Financial Future
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Strategic investment planning tailored to your goals. Expert
                  guidance for wealth creation through mutual funds and
                  comprehensive financial advisory services.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <a
                    href="tel:+918308844841"
                    className="bg-[var(--brand)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[var(--brand-dark)] transition-all duration-300 text-center hover:-translate-y-0.5 active:scale-[0.97]"
                  >
                    Talk to an Advisor
                  </a>
                  <Link
                    href="/contact"
                    className="bg-transparent text-[var(--ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold border-2 border-[var(--line)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300 text-center inline-block"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>

              {/* Allocation graphic */}
              <div ref={heroGraphicRef} className="relative lg:mt-2 flex flex-col items-center">
                <div className="absolute w-64 h-64 bg-[var(--brand)]/10 rounded-full blur-3xl -z-10" />

                <svg viewBox="0 0 300 300" className="w-full max-w-[260px]" aria-hidden="true">
                  <g ref={donutRef}>
                    {allocation.map((seg) => (
                      <circle
                        key={seg.color}
                        cx="150"
                        cy="150"
                        r="90"
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="34"
                        pathLength={100}
                        strokeDasharray={`${seg.pct} ${100 - seg.pct}`}
                        strokeDashoffset={-seg.offset}
                        transform="rotate(-90 150 150)"
                        style={{ transformOrigin: "150px 150px" }}
                      />
                    ))}
                  </g>
                  <circle cx="150" cy="150" r="62" fill="var(--paper)" />
                  <foreignObject x="90" y="120" width="120" height="60">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <span className="text-xs text-gray-500 leading-tight">
                        Sample
                        <br />
                        Portfolio Mix
                      </span>
                    </div>
                  </foreignObject>
                </svg>

                <div ref={legendRef} className="w-full max-w-[260px] mt-6 space-y-2">
                  {allocationLegend.map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: row.color }}
                        />
                        {row.label}
                      </span>
                      <span className="font-semibold text-[var(--ink)]">{row.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Services Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={servicesHeaderRef} className="mb-12 sm:mb-16">
              <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                Our Investment Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl">
                Comprehensive Investment Solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Expert guidance for wealth creation and financial planning
              </p>
            </div>

            <div ref={servicesCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Mutual Funds */}
              <div className="group bg-white border-[var(--line)] p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:-translate-y-2.5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Mutual Funds
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Strategic investment solutions for long-term wealth creation
                </p>
                <ul ref={mutualFundsListRef} className="space-y-3 sm:space-y-4">
                  {["SIP & Portfolio Management", "Wealth Creation Strategies", "Goal-Based Investing", "Diversified Fund Selection"].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                    >
                      <Check className="w-5 h-5 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financial Advisory */}
              <div className="group bg-white border-[var(--line)] p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:-translate-y-2.5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--brass)] to-[#96692a] rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Financial Advisory
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Expert guidance for comprehensive financial planning
                </p>
                <ul ref={advisoryListRef} className="space-y-3 sm:space-y-4">
                  {["Goal-Based Planning", "Risk Assessment", "Personalized Solutions", "Comprehensive Financial Review"].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                    >
                      <Check className="w-5 h-5 text-[var(--brass)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Allocation Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={allocationHeaderRef} className="mb-12 sm:mb-16">
              <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                Portfolio Management
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl">
                Smart Asset Allocation
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Choose the investment strategy that aligns with your risk
                appetite and financial goals
              </p>
            </div>

            <div ref={allocationCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Safe Portfolio */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:border-[var(--risk-safe)] hover:-translate-y-2.5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--risk-safe)] to-[#2d5a44] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Safe Portfolio
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--risk-safe)] to-transparent mb-4 sm:mb-6"></div>
                <div ref={safeListRef} className="space-y-3 sm:space-y-4">
                  {[
                    { text: "5-6% Guaranteed Returns", bold: false },
                    { text: "Tax Free Returns", bold: false },
                    { text: "100% Capital Protection", bold: true },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--risk-safe)] flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-gray-700 ${item.bold ? "font-semibold" : ""}`}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div ref={safeBarRef} className="contents">
                      <div className="h-2 w-full bg-[var(--risk-safe)] rounded" />
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Medium Risk Portfolio */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:border-[var(--brand)] hover:-translate-y-2.5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Medium Risk
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--brand)] to-transparent mb-4 sm:mb-6"></div>
                <div ref={mediumListRef} className="space-y-3 sm:space-y-4">
                  {[
                    { text: "10-12% Returns", bold: false },
                    { text: "Tax Free/Taxable Options", bold: false },
                    { text: "Partial Capital Protection", bold: true },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--brand)] flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-gray-700 ${item.bold ? "font-semibold" : ""}`}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div ref={mediumBarRef} className="contents">
                      <div className="h-2 w-full bg-[var(--brand)] rounded" />
                      <div className="h-2 w-full bg-[var(--brand)] rounded" />
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* High Growth Portfolio */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:border-[var(--risk-high)] hover:-translate-y-2.5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--risk-high)] to-[#8f3f2a] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  High Growth
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--risk-high)] to-transparent mb-4 sm:mb-6"></div>
                <div ref={highListRef} className="space-y-3 sm:space-y-4">
                  {[
                    { text: "15-18% Returns", bold: false },
                    { text: "Taxable Returns", bold: false },
                    { text: "Market-Linked Returns", bold: true },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--risk-high)] flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-gray-700 ${item.bold ? "font-semibold" : ""}`}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div ref={highBarRef} className="contents">
                      <div className="h-2 w-full bg-[var(--risk-high)] rounded" />
                      <div className="h-2 w-full bg-[var(--risk-high)] rounded" />
                      <div className="h-2 w-full bg-[var(--risk-high)] rounded" />
                    </div>
                  </div>
                </div>
              </div>
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
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-80">
                Get personalized investment advice and portfolio management
                solutions tailored to your financial goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+918308844841"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-white/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:border-white transition-colors"
              >
                Schedule Consultation
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
