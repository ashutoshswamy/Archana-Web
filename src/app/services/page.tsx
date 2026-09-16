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
import { motion, AnimatePresence } from "framer-motion";

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

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
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
                  { name: "Services", href: "/services", active: true },
                  { name: "Partners", href: "/#partners" },
                  { name: "Investments", href: "/investments" },
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
                      { name: "Services", href: "/services", active: true },
                      { name: "Partners", href: "/#partners" },
                      { name: "Investments", href: "/investments" },
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

      <main>
        {/* Intro */}
        <section className="bg-[var(--paper)] border-t-2 border-[var(--brass)] py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className="eyebrow text-xs sm:text-sm text-[var(--brass)] pb-2 border-b-2 border-[var(--brass)] inline-block mb-4"
                variants={fadeInUp}
              >
                What We Offer
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight"
                variants={fadeInUp}
              >
                Comprehensive Financial Services
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-600"
                variants={fadeInUp}
              >
                Tailored insurance and advisory solutions to secure your
                family&rsquo;s future and grow your wealth, backed by 28 years
                of experience.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="border border-[var(--line)] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 sm:items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex-shrink-0">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(to bottom right, ${service.accent}, ${service.accentDark})`,
                    }}
                  >
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </motion.div>

                <div>
                  <motion.h2
                    className="text-xl sm:text-2xl font-bold text-[var(--ink)] mb-2"
                    variants={fadeInUp}
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    className="text-sm sm:text-base text-gray-600 max-w-2xl"
                    variants={fadeInUp}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}

            {/* CTA to Investments Page */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
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
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="bg-[var(--paper)] py-16 sm:py-20 md:py-24">
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
                Trusted Brands
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight max-w-2xl"
                variants={fadeInUp}
              >
                Our Service Partners
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
                variants={fadeInUp}
              >
                Collaborating with India&rsquo;s leading insurance and
                financial institutions
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {partners.map((partner) => (
                <motion.div
                  key={partner.name}
                  className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--line)] flex flex-col items-center justify-center text-center hover:border-[var(--brand)]"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
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
                </motion.div>
              ))}
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
                Not Sure Which Plan Fits You?
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl opacity-80"
                variants={fadeInUp}
              >
                Talk it through with Archana directly — get a recommendation
                tailored to your family and goals.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
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
