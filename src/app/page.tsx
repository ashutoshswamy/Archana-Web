"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Shield,
  Heart,
  Users,
  Check,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Mr. Anil G Patil",
    role: "Retired Police Officer",
    quote:
      "Thank you very much for your service. Appreciate solutions suggested with the help of appropriate product and services.",
  },
  {
    name: "Adv. Raviraj Kulkarni",
    role: "Advocate",
    quote:
      "I appreciate your suggestions and assistance in obtaining insurance and after sales service.",
  },
  {
    name: "Shreyas Bhasale",
    role: "Business Owner",
    quote:
      "Highly satisfied with the service and support. The advice provided was practical and well-suited to my needs. I truly value the after-sales assistance and care.",
  },
  {
    name: "Dr. Vishwanath Swamy",
    role: "Scientist",
    quote:
      "Impressed by the professionalism and clarity in communication. The solutions provided were insightful and perfectly matched my requirements. Excellent service and follow-up support.",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Partners", href: "#partners" },
  { name: "Testimonials", href: "#testimonials" },
];

const mobileNavItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "/services", isLink: true },
  { name: "Partners", href: "#partners" },
  { name: "Investments", href: "/investments", isLink: true },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "/contact", isLink: true },
];

function GrowthChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const path = svgRef.current?.querySelector<SVGPathElement>(".growth-line");
      const length = path?.getTotalLength() ?? 0;

      gsap.set(".growth-bar", { scaleY: 0, transformOrigin: "bottom" });
      gsap.set(".growth-dot", { scale: 0 });
      gsap.set(".growth-core", { scale: 0 });
      gsap.set(".growth-pulse", { scale: 1, opacity: 0 });
      if (path) gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 0 });

      const tl = gsap.timeline();
      tl.to(".growth-bar", { scaleY: 1, duration: 0.6, ease: "power2.out", stagger: 0.12 }, 0.6);
      if (path) {
        tl.to(path, { opacity: 1, strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, 1.2);
      }
      tl.to(".growth-dot", { scale: 1, duration: 0.4, ease: "back.out(2)", stagger: 0.15 }, 1.3);
      tl.to(".growth-core", { scale: 1, duration: 0.4, ease: "back.out(2)" }, 1.9);
      tl.set(".growth-pulse", { opacity: 0.5 }, 2);
      tl.to(
        ".growth-pulse",
        { scale: 1.6, opacity: 0, duration: 1.1, ease: "power1.inOut", repeat: -1, yoyo: true },
        2
      );
    },
    { scope: svgRef }
  );

  return (
    <svg ref={svgRef} viewBox="0 0 400 300" className="w-full max-w-sm" aria-hidden="true">
      <defs>
        <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="var(--line)" />
        </pattern>
      </defs>

      <rect x="10" y="20" width="380" height="260" fill="url(#dotGrid)" />

      {[70, 140, 210].map((y) => (
        <line key={y} x1="10" y1={y} x2="390" y2={y} stroke="var(--line)" strokeWidth="1" />
      ))}
      <line x1="10" y1="280" x2="390" y2="280" stroke="var(--ink)" strokeOpacity="0.3" strokeWidth="1.5" />

      {[
        { x: 30, h: 70, brass: false },
        { x: 108, h: 105, brass: false },
        { x: 186, h: 140, brass: false },
        { x: 264, h: 185, brass: false },
        { x: 342, h: 235, brass: true },
      ].map((bar) => (
        <g key={bar.x}>
          <line
            x1={bar.x + 24}
            y1="284"
            x2={bar.x + 24}
            y2="290"
            stroke="var(--ink)"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          <rect
            className="growth-bar"
            x={bar.x}
            width="48"
            y={280 - bar.h}
            height={bar.h}
            rx="4"
            fill={bar.brass ? "var(--brass)" : "var(--brand)"}
            style={{ transformBox: "fill-box" }}
          />
        </g>
      ))}

      <path
        className="growth-line"
        d="M 54 210 L 132 175 L 210 140 L 288 95 L 366 45"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeDasharray="6 5"
      />

      {[210, 175, 140, 95].map((y, i) => (
        <circle
          key={y}
          className="growth-dot"
          cx={54 + i * 78}
          cy={y}
          r="4"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="2"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}

      <circle
        className="growth-pulse"
        cx="366"
        cy="45"
        r="10"
        fill="var(--brass)"
        fillOpacity="0.25"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle
        className="growth-core"
        cx="366"
        cy="45"
        r="6"
        fill="var(--ink)"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useReveal<HTMLElement>({ axis: "y", distance: -100, duration: 0.6, fade: false });
  const logoRef = useReveal<HTMLDivElement>({ axis: "x", distance: -20, delay: 0.2, duration: 0.5 });
  const desktopNavRef = useReveal<HTMLDivElement>({ axis: "y", distance: -20, delay: 0.3, duration: 0.5 });
  const ctaRef = useReveal<HTMLAnchorElement>({ axis: "x", distance: 20, delay: 0.4, duration: 0.5 });

  const heroContentRef = useReveal<HTMLDivElement>({ stagger: 0.15, delay: 0.1, axis: "y", distance: 30 });
  const heroGraphicRef = useReveal<HTMLDivElement>({ axis: "x", distance: 20, delay: 0.4, duration: 0.6 });

  const aboutImgRef = useReveal<HTMLDivElement>({ axis: "x", distance: -50, duration: 0.7, onScroll: true });
  const aboutContentRef = useReveal<HTMLDivElement>({ axis: "x", distance: 50, duration: 0.7, onScroll: true });
  const highlightsRef = useReveal<HTMLDivElement>({ stagger: 0.1, axis: "y", distance: 30, onScroll: true });

  const servicesHeaderRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const servicesCardsRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const investCtaRef = useReveal<HTMLDivElement>({ axis: "y", distance: 30, onScroll: true });

  const partnersHeaderRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const partnersGridRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

  const testimonialsHeaderRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });
  const featuredCardRef = useReveal<HTMLDivElement>({ axis: "y", distance: 30, onScroll: true });
  const supportingListRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

  const contactBandRef = useReveal<HTMLDivElement>({ stagger: 0.15, axis: "y", distance: 30, onScroll: true });

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
              <div ref={logoRef} className="flex items-center gap-2 sm:gap-3">
                <Image src="/logo.png" alt="Becoz Life Matters logo" width={36} height={36} className="w-8 h-8 sm:w-9 sm:h-9" />
                <div>
                  <div className="font-bold text-gray-800 text-base sm:text-lg">
                    Archana Phaltankar
                  </div>
                  <div className="text-xs text-gray-500">Financial Planner</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div
                ref={desktopNavRef}
                className="hidden lg:flex gap-8 text-sm font-medium text-gray-600"
              >
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="inline-block transition-transform duration-200 hover:scale-105 hover:text-[var(--brand)] relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all"></span>
                  </a>
                ))}
                <Link
                  href="/services"
                  className="inline-block transition-transform duration-200 hover:scale-105 hover:text-[var(--brand)] relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all"></span>
                </Link>
                <Link
                  href="/investments"
                  className="inline-block transition-transform duration-200 hover:scale-105 hover:text-[var(--brand)] relative group"
                >
                  Investments
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all"></span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-block transition-transform duration-200 hover:scale-105 hover:text-[var(--brand)] relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all"></span>
                </Link>
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
                  {mobileNavItems.map((item, index) => (
                    <div
                      key={item.name}
                      className={`transition-all duration-300 ${
                        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                      }`}
                      style={{ transitionDelay: mobileMenuOpen ? `${100 + index * 60}ms` : "0ms" }}
                    >
                      {item.isLink ? (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-gray-600 hover:text-[var(--brand)] transition-colors font-medium flex items-center gap-2"
                        >
                          <ChevronRight className="w-4 h-4" />
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-gray-600 hover:text-[var(--brand)] transition-colors font-medium flex items-center gap-2"
                        >
                          <ChevronRight className="w-4 h-4" />
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                  <a
                    href="tel:+918308844841"
                    className={`bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 sm:hidden active:scale-95 transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? `${100 + mobileNavItems.length * 60}ms` : "0ms" }}
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

      {/* Hero Section with Modern Design */}
      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-[var(--paper)] border-t-2 border-[var(--brass)]"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
              <div ref={heroContentRef} className="space-y-6 sm:space-y-8">
                <div className="eyebrow text-xs sm:text-sm text-[var(--brass)] pb-2 border-b-2 border-[var(--brass)] inline-block">
                  Insurance &amp; Financial Planning
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ink)] leading-[1.05] tracking-tight">
                  Your Financial
                  <span className="block font-light italic text-[var(--brand)]">
                    Success Partner
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Securing families and lives from unforeseen events, creating
                  wealth through strategic planning, and guiding you towards
                  your financial dreams.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#services"
                    className="bg-[var(--brand)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[var(--brand-dark)] transition-all duration-300 text-center hover:-translate-y-0.5 active:scale-[0.97]"
                  >
                    Explore Services
                  </a>
                  <a
                    href="#contact"
                    className="bg-transparent text-[var(--ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold border-2 border-[var(--line)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300 text-center hover:-translate-y-0.5 active:scale-[0.97]"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>

              {/* Growth graphic */}
              <div ref={heroGraphicRef} className="relative lg:mt-2 flex flex-col items-center">
                <div className="absolute w-64 h-64 bg-[var(--brass)]/10 rounded-full blur-3xl -z-10" />
                <GrowthChart />
                <p className="text-sm text-gray-500 mt-2">
                  Steady, disciplined growth — three decades running
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Owner's Image */}
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Column */}
              <div ref={aboutImgRef} className="order-2 lg:order-1">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--brand)]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "5s" }} />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--brass)]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "5s" }} />

                  {/* Image Container - Circular */}
                  <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/archana.png"
                      alt="Archana Phaltankar - Experienced Financial Planner with 28 years of expertise"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div ref={aboutContentRef} className="order-1 lg:order-2 space-y-6">
                <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                  About Me
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Your Trusted
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)]">
                    Financial Partner
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Hello! I'm <strong>Archana Phaltankar</strong>, a dedicated financial planner with over 28 years of experience helping families and individuals secure their financial future.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  My mission is to protect families from life's uncertainties through comprehensive insurance solutions and create lasting wealth through strategic financial planning.
                </p>

                {/* Key Highlights */}
                <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { title: "28+ Years Experience", subtitle: "Trusted financial advisor" },
                    { title: "1000+ Happy Clients", subtitle: "Families secured" },
                    { title: "Certified Expert", subtitle: "Insurance & investments" },
                    { title: "Personalized Service", subtitle: "Tailored solutions" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                    >
                      <div className="w-10 h-10 bg-[var(--paper-tint)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-[var(--brand)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                  >
                    Let's Connect
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Services Section */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={servicesHeaderRef} className="mb-10 sm:mb-12">
              <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                What We Offer
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl">
                Comprehensive Financial Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Tailored solutions to secure your family's future and grow your
                wealth
              </p>
            </div>

            <div ref={servicesCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Life Insurance */}
              <div className="group bg-white border-[var(--line)] p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:-translate-y-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Life Insurance
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Comprehensive life coverage to protect your family's financial
                  future
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Term & Endowment Plans", "Retirement Planning", "Child Education Plans"].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* General Insurance */}
              <div className="group bg-white border-[var(--line)] p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:-translate-y-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--brass)] to-[#96692a] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  General Insurance
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Protect your assets and health with comprehensive coverage
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Health & Mediclaim", "Vehicle & Property Insurance", "Travel & Business Coverage"].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-[var(--brass)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LIC Agency */}
              <div className="group bg-white border-[var(--line)] p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:-translate-y-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--ink)] to-[#0c1512] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  LIC Agency
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Start your career as an insurance professional
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Agent Recruitment", "Training & Support", "Business Development"].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-[var(--ink)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA to Investments Page */}
            <div ref={investCtaRef} className="mt-12 sm:mt-16 text-center">
              <div className="bg-[var(--paper-tint)] rounded-2xl p-8 sm:p-12 border border-[var(--line)]">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Looking for Investment Solutions?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive investment services including mutual funds,
                  financial advisory, and smart asset allocation strategies.
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

        {/* Partners Section */}
        <section id="partners" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={partnersHeaderRef} className="mb-12 sm:mb-16">
              <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                Trusted Brands
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl">
                Our Service Partners
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Collaborating with India's leading insurance and financial
                institutions
              </p>
            </div>

            <div ref={partnersGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* LIC */}
              <div className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] flex flex-col items-center justify-center text-center hover:border-[var(--brand)] hover:-translate-y-1">
                <div className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center">
                  <Image
                    src="/lic-logo.png"
                    alt="LIC Life Insurance Corporation - India's most trusted insurance provider since 1956"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                  Life Insurance Corporation
                </p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  Since 1956
                </p>
              </div>

              {/* ICICI Lombard */}
              <div className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] flex flex-col items-center justify-center text-center hover:border-[var(--brand)] hover:-translate-y-1">
                <div className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center">
                  <Image
                    src="/icici-lombard-logo.png"
                    alt="ICICI Lombard General Insurance - Comprehensive health and general insurance solutions"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                  Nibhay Vaade
                </p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  General Insurance
                </p>
              </div>

              {/* Prudent */}
              <div className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] flex flex-col items-center justify-center text-center hover:border-[var(--brand)] hover:-translate-y-1">
                <div className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center">
                  <Image
                    src="/prudent-logo.png"
                    alt="Prudent Corporate Advisory Services - Expert mutual funds and investment advisory"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                  Nivesh Through Nivdaan
                </p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  Mutual Funds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div ref={testimonialsHeaderRef} className="mb-12 sm:mb-16">
              <div className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]">
                Client Stories
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Real experiences from families we&apos;ve helped secure their
                financial future
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 sm:gap-8">
              {/* Featured testimonial */}
              <div ref={featuredCardRef} className="bg-[var(--ink)] text-white p-8 sm:p-10 md:p-12 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-1 bg-[var(--brass)] mb-6" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-light italic leading-snug">
                    &ldquo;{testimonials[0].quote}&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h3 className="text-base sm:text-lg font-bold">
                    {testimonials[0].name}
                  </h3>
                  <p className="text-sm text-white/70">{testimonials[0].role}</p>
                </div>
              </div>

              {/* Supporting testimonials — ledger list */}
              <div ref={supportingListRef} className="border border-[var(--line)] rounded-lg divide-y divide-[var(--line)]">
                {testimonials.slice(1).map((t) => (
                  <div key={t.name} className="p-6 sm:p-7">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <h4 className="text-sm sm:text-base font-bold text-[var(--ink)]">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--brand)] font-medium">
                      {t.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Band */}
        <section
          id="contact"
          className="py-16 sm:py-20 md:py-24 bg-[var(--ink)] text-white relative overflow-hidden"
        >
          <div
            ref={contactBandRef}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="eyebrow text-xs sm:text-sm text-[var(--brass-light)] pb-2 border-b-2 border-[var(--brass)] inline-block mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Let&rsquo;s Start Your Financial Journey
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-80">
                Speak with Archana directly, or send a message and hear back
                within 24 hours.
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

      {/* Modern Footer */}
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
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "/services", isLink: true },
                  { name: "Investments", href: "/investments", isLink: true },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "/contact", isLink: true },
                ].map((item) => (
                  <li key={item.name} className="transition-transform duration-300 hover:translate-x-1">
                    {item.isLink ? (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    )}
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
