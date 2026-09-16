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
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Investments() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Sticky Navigation */}
      <header>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                  <Image src="/logo.png" alt="Becoz Life Matters logo" width={36} height={36} className="w-8 h-8 sm:w-9 sm:h-9" />
                  <div>
                    <div className="font-bold text-gray-800 text-base sm:text-lg">
                      Archana Phaltankar
                    </div>
                    <div className="text-xs text-gray-500">Financial Planner</div>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                className="hidden lg:flex gap-8 text-sm font-medium text-gray-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "Partners", href: "/#partners" },
                  { name: "Investments", href: "/investments", active: true },
                  { name: "Testimonials", href: "/#testimonials" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                    <Link
                      href={item.href}
                      className={`${
                        item.active
                          ? "text-[var(--brand)]"
                          : "hover:text-[var(--brand)]"
                      } transition-colors relative group`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 ${
                          item.active ? "w-full" : "w-0 group-hover:w-full"
                        } h-0.5 bg-[var(--brand)] transition-all`}
                      ></span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Desktop CTA Button */}
              <motion.a
                href="tel:+918308844841"
                className="hidden sm:flex bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:shadow-xl transition-all duration-300 items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Get in Touch</span>
                <span className="md:hidden">Call</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[var(--brand)] transition-colors"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    className="flex flex-col space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { name: "Home", href: "/" },
                      { name: "Services", href: "/services" },
                      { name: "Partners", href: "/#partners" },
                      { name: "Investments", href: "/investments", active: true },
                      { name: "Testimonials", href: "/#testimonials" },
                      { name: "Contact", href: "/contact" },
                    ].map((item) => (
                      <motion.div key={item.name} variants={fadeInUp}>
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
                      </motion.div>
                    ))}
                    <motion.a
                      href="tel:+918308844841"
                      className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 sm:hidden"
                      variants={fadeInUp}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </motion.a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative overflow-hidden bg-[var(--paper)] border-t-2 border-[var(--brass)]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6 sm:space-y-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="eyebrow text-xs sm:text-sm text-[var(--brass)] pb-2 border-b-2 border-[var(--brass)] inline-block"
                  variants={fadeInUp}
                >
                  Investment Advisory
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ink)] leading-[1.05] tracking-tight"
                  variants={fadeInUp}
                >
                  Build Your
                  <span className="block font-light italic text-[var(--brand)]">
                    Financial Future
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                  variants={fadeInUp}
                >
                  Strategic investment planning tailored to your goals. Expert
                  guidance for wealth creation through mutual funds and
                  comprehensive financial advisory services.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                  variants={fadeInUp}
                >
                  <motion.a
                    href="tel:+918308844841"
                    className="bg-[var(--brand)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[var(--brand-dark)] transition-colors duration-300 text-center"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Talk to an Advisor
                  </motion.a>
                  <Link
                    href="/contact"
                    className="bg-transparent text-[var(--ink)] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold border-2 border-[var(--line)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300 text-center inline-block"
                  >
                    Schedule Consultation
                  </Link>
                </motion.div>
              </motion.div>

              {/* Allocation graphic */}
              <motion.div
                className="relative lg:mt-2 flex flex-col items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="absolute w-64 h-64 bg-[var(--brand)]/10 rounded-full blur-3xl -z-10" />

                <svg viewBox="0 0 300 300" className="w-full max-w-[260px]" aria-hidden="true">
                  {[
                    { pct: 30, offset: 0, color: "var(--risk-safe)" },
                    { pct: 45, offset: 30, color: "var(--brand)" },
                    { pct: 25, offset: 75, color: "var(--risk-high)" },
                  ].map((seg, i) => (
                    <motion.circle
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
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ transformOrigin: "150px 150px" }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
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

                <div className="w-full max-w-[260px] mt-6 space-y-2">
                  {[
                    { label: "Safe", pct: "30%", color: "var(--risk-safe)" },
                    { label: "Medium Risk", pct: "45%", color: "var(--brand)" },
                    { label: "High Growth", pct: "25%", color: "var(--risk-high)" },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      className="flex items-center justify-between text-sm"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                    >
                      <span className="flex items-center gap-2 text-gray-600">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: row.color }}
                        />
                        {row.label}
                      </span>
                      <span className="font-semibold text-[var(--ink)]">{row.pct}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Services Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]"
                variants={fadeInUp}
              >
                Our Investment Services
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl"
                variants={fadeInUp}
              >
                Comprehensive Investment Solutions
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
                variants={fadeInUp}
              >
                Expert guidance for wealth creation and financial planning
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Mutual Funds */}
              <motion.div
                className="group bg-white border-[var(--line)] p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)]"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Mutual Funds
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Strategic investment solutions for long-term wealth creation
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {["SIP & Portfolio Management", "Wealth Creation Strategies", "Goal-Based Investing", "Diversified Fund Selection"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-[var(--brand)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Financial Advisory */}
              <motion.div
                className="group bg-white border-[var(--line)] p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[var(--line)]"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--brass)] to-[#96692a] rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Financial Advisory
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Expert guidance for comprehensive financial planning
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {["Goal-Based Planning", "Risk Assessment", "Personalized Solutions", "Comprehensive Financial Review"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-[var(--brass)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Asset Allocation Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block text-xs sm:text-sm font-semibold text-[var(--brass)] mb-4 uppercase tracking-[0.18em] pb-2 border-b-2 border-[var(--brass)]"
                variants={fadeInUp}
              >
                Portfolio Management
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl"
                variants={fadeInUp}
              >
                Smart Asset Allocation
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
                variants={fadeInUp}
              >
                Choose the investment strategy that aligns with your risk
                appetite and financial goals
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Safe Portfolio */}
              <motion.div
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:border-[var(--risk-safe)]"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--risk-safe)] to-[#2d5a44] rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Safe Portfolio
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--risk-safe)] to-transparent mb-4 sm:mb-6"></div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { text: "5-6% Guaranteed Returns", bold: false },
                    { text: "Tax Free Returns", bold: false },
                    { text: "100% Capital Protection", bold: true },
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-[var(--risk-safe)] flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-gray-700 ${item.bold ? "font-semibold" : ""}`}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <motion.div
                      className="h-2 w-full bg-[var(--risk-safe)] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    />
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </motion.div>

              {/* Medium Risk Portfolio */}
              <motion.div
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:border-[var(--brand)]"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Medium Risk
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--brand)] to-transparent mb-4 sm:mb-6"></div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { text: "10-12% Returns", bold: false },
                    { text: "Tax Free/Taxable Options", bold: false },
                    { text: "Partial Capital Protection", bold: true },
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-[var(--brand)] flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-gray-700 ${item.bold ? "font-semibold" : ""}`}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <motion.div
                      className="h-2 w-full bg-[var(--brand)] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.div
                      className="h-2 w-full bg-[var(--brand)] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    />
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </motion.div>

              {/* High Growth Portfolio */}
              <motion.div
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] hover:border-[var(--risk-high)]"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--risk-high)] to-[#8f3f2a] rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  High Growth
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--risk-high)] to-transparent mb-4 sm:mb-6"></div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { text: "15-18% Returns", bold: false },
                    { text: "Taxable Returns", bold: false },
                    { text: "Market-Linked Returns", bold: true },
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-[var(--risk-high)] flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-gray-700 ${item.bold ? "font-semibold" : ""}`}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <motion.div
                      className="h-2 w-full bg-[var(--risk-high)] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.div
                      className="h-2 w-full bg-[var(--risk-high)] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    />
                    <motion.div
                      className="h-2 w-full bg-[var(--risk-high)] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-[var(--ink)] text-white relative overflow-hidden">
          <motion.div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="max-w-2xl">
              <motion.div
                className="eyebrow text-xs sm:text-sm text-[var(--brass-light)] pb-2 border-b-2 border-[var(--brass)] inline-block mb-4"
                variants={fadeInUp}
              >
                Get Started
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                variants={fadeInUp}
              >
                Ready to Start Your Investment Journey?
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl opacity-80"
                variants={fadeInUp}
              >
                Get personalized investment advice and portfolio management
                solutions tailored to your financial goals.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
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
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-[var(--ink)] text-white py-8 sm:py-10 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="sm:col-span-2" variants={fadeInUp}>
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
            </motion.div>

            <motion.div variants={fadeInUp}>
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
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {["Life Insurance", "General Insurance", "LIC Agency", "Investment Advisory"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5, color: "#ffffff" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Floating Action Button */}
      <motion.a
        href="tel:+918308844841"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center gap-2 sm:gap-3 font-semibold group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
        <span className="hidden md:inline text-sm sm:text-base">Call Now</span>
      </motion.a>
    </div>
  );
}
