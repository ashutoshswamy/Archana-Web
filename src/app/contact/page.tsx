"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";

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

const OFFICE_ADDRESS =
  "214, Business Point, Narayan Chambers, 555 Narayan Peth, Pune, Maharashtra 411030";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&output=embed`;

export default function Contact() {
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
                  { name: "Services", href: "/services" },
                  { name: "Partners", href: "/#partners" },
                  { name: "Investments", href: "/investments" },
                  { name: "Testimonials", href: "/#testimonials" },
                  { name: "Contact", href: "/contact", active: true },
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
                      { name: "Investments", href: "/investments" },
                      { name: "Testimonials", href: "/#testimonials" },
                      { name: "Contact", href: "/contact", active: true },
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
                Get in Touch
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 tracking-tight"
                variants={fadeInUp}
              >
                Let&rsquo;s Talk About Your Financial Future
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-600"
                variants={fadeInUp}
              >
                Call, email, or visit the office in Pune. For a detailed
                query, send a message below and hear back within 24 hours.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Details + Form + Map */}
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              className="bg-[var(--ink)] rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Info + Map */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
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
            </motion.div>
          </div>
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
