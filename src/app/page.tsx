"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Heart,
  Users,
  Check,
  Menu,
  X,
  ChevronRight,
  Award,
} from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
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
                className="flex items-center gap-2 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div>
                  <div className="font-bold text-gray-800 text-base sm:text-lg">
                    Archana Phaltankar
                  </div>
                  <div className="text-xs text-gray-500">Financial Planner</div>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                className="hidden lg:flex gap-8 text-sm font-medium text-gray-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {["Home", "About", "Services", "Partners", "Testimonials", "Contact"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={item === "Investments" ? undefined : `#${item.toLowerCase()}`}
                      className="hover:text-[#2ba4d8] transition-colors relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                    </motion.a>
                  )
                )}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="/investments"
                    className="hover:text-[#2ba4d8] transition-colors relative group"
                  >
                    Investments
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Desktop CTA Button */}
              <motion.a
                href="tel:+918308844841"
                className="hidden sm:flex bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:shadow-xl transition-all duration-300 items-center gap-2"
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
                className="lg:hidden p-2 text-gray-600 hover:text-[#2ba4d8] transition-colors"
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
                      { name: "Home", href: "#home" },
                      { name: "About", href: "#about" },
                      { name: "Services", href: "#services" },
                      { name: "Investments", href: "/investments", isLink: true },
                      { name: "Partners", href: "#partners" },
                      { name: "Testimonials", href: "#testimonials" },
                      { name: "Contact", href: "#contact" },
                    ].map((item, index) => (
                      <motion.div key={item.name} variants={fadeInUp}>
                        {item.isLink ? (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                          >
                            <ChevronRight className="w-4 h-4" />
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                          >
                            <ChevronRight className="w-4 h-4" />
                            {item.name}
                          </a>
                        )}
                      </motion.div>
                    ))}
                    <motion.a
                      href="tel:+918308844841"
                      className="bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 sm:hidden"
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

      {/* Hero Section with Modern Design */}
      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-[#2ba4d8]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-6 sm:space-y-8 text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#2ba4d8] border border-blue-100"
                  variants={fadeInUp}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ba4d8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ba4d8]"></span>
                  </span>
                  28 Years of Excellence
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  Your Financial
                  <motion.span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Success Partner
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                  variants={fadeInUp}
                >
                  Securing families and lives from unforeseen events, creating
                  wealth through strategic planning, and guiding you towards
                  your financial dreams.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
                  variants={fadeInUp}
                >
                  <motion.a
                    href="#services"
                    className="bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-[#2ba4d8] hover:text-[#2ba4d8] transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Consultation
                  </motion.a>
                </motion.div>

                <motion.div
                  className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-2xl mx-auto"
                  variants={fadeInUp}
                >
                  {[
                    { value: "28+", label: "Years Experience" },
                    { value: "1000+", label: "Happy Clients" },
                    { value: "100%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    >
                      <motion.div
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2ba4d8]"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section with Owner's Image */}
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Column */}
              <motion.div
                className="order-2 lg:order-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-24 h-24 bg-[#2ba4d8]/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Image Container - Circular */}
                  <motion.div
                    className="relative rounded-full overflow-hidden shadow-2xl aspect-square max-w-md mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/archana-updated.png"
                      alt="Archana Phaltankar - Experienced Financial Planner with 28 years of expertise"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                className="order-1 lg:order-2 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="inline-block bg-blue-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#2ba4d8] mb-2"
                  variants={fadeInUp}
                >
                  About Me
                </motion.div>

                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  Your Trusted
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8]">
                    Financial Partner
                  </span>
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                  variants={fadeInUp}
                >
                  Hello! I'm <strong>Archana Phaltankar</strong>, a dedicated financial planner with over 28 years of experience helping families and individuals secure their financial future.
                </motion.p>

                <motion.p
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                  variants={fadeInUp}
                >
                  My mission is to protect families from life's uncertainties through comprehensive insurance solutions and create lasting wealth through strategic financial planning.
                </motion.p>

                {/* Key Highlights */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { title: "28+ Years Experience", subtitle: "Trusted financial advisor" },
                    { title: "1000+ Happy Clients", subtitle: "Families secured" },
                    { title: "Certified Expert", subtitle: "Insurance & investments" },
                    { title: "Personalized Service", subtitle: "Tailored solutions" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-3"
                      variants={fadeInUp}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-[#2ba4d8]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div className="pt-4" variants={fadeInUp}>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Connect
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modern Services Section */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block bg-blue-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#2ba4d8] mb-4"
                variants={fadeInUp}
              >
                What We Offer
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Comprehensive Financial Services
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                variants={fadeInUp}
              >
                Tailored solutions to secure your family's future and grow your
                wealth
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Life Insurance */}
              <motion.div
                className="group bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Life Insurance
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Comprehensive life coverage to protect your family's financial
                  future
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Term & Endowment Plans", "Retirement Planning", "Child Education Plans"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* General Insurance */}
              <motion.div
                className="group bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  General Insurance
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Protect your assets and health with comprehensive coverage
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Health & Mediclaim", "Vehicle & Property Insurance", "Travel & Business Coverage"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* LIC Agency */}
              <motion.div
                className="group bg-gradient-to-br from-cyan-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  LIC Agency
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Start your career as an insurance professional
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Agent Recruitment", "Training & Support", "Business Development"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* CTA to Investments Page */}
            <motion.div
              className="mt-12 sm:mt-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 sm:p-12 border border-gray-100"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Looking for Investment Solutions?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive investment services including mutual funds,
                  financial advisory, and smart asset allocation strategies.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/investments"
                    className="inline-flex bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 items-center gap-2"
                  >
                    Explore Investment Options
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Modern Partners Section */}
        <section id="partners" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block bg-blue-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#2ba4d8] mb-4"
                variants={fadeInUp}
              >
                Trusted Brands
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Our Service Partners
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                variants={fadeInUp}
              >
                Collaborating with India's leading insurance and financial
                institutions
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* LIC */}
              <motion.div
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#2ba4d8]"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/lic-logo.png"
                    alt="LIC Life Insurance Corporation - India's most trusted insurance provider since 1956"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                  Life Insurance Corporation
                </p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  Since 1956
                </p>
              </motion.div>

              {/* ICICI Lombard */}
              <motion.div
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#2ba4d8]"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/icici-lombard-logo.png"
                    alt="ICICI Lombard General Insurance - Comprehensive health and general insurance solutions"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                  Nibhay Vaade
                </p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  General Insurance
                </p>
              </motion.div>

              {/* Prudent */}
              <motion.div
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#2ba4d8]"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="relative w-full h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/prudent-logo.png"
                    alt="Prudent Corporate Advisory Services - Expert mutual funds and investment advisory"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2">
                  Nivesh Through Nivdaan
                </p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  Mutual Funds
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block bg-blue-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#2ba4d8] mb-4"
                variants={fadeInUp}
              >
                Client Stories
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                variants={fadeInUp}
              >
                Real experiences from families we&apos;ve helped secure their
                financial future
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Testimonial 1 */}
              <motion.div
                className="group bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Mr. Anil G Patil
                  </h3>
                  <p className="text-sm sm:text-base text-[#2ba4d8] font-medium">
                    Retired Police Officer
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-[#2ba4d8]/20 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 pl-6">
                    Thank you very much for your service. Appreciate solutions
                    suggested with the help of appropriate product and services.
                  </p>
                </div>
                <div className="flex gap-1 mt-4 sm:mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                className="group bg-gradient-to-br from-cyan-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Adv. Raviraj Kulkarni
                  </h3>
                  <p className="text-sm sm:text-base text-[#2ba4d8] font-medium">
                    Advocate
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-[#2ba4d8]/20 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 pl-6">
                    I appreciate your suggestions and assistance in obtaining
                    insurance and after sales service.
                  </p>
                </div>
                <div className="flex gap-1 mt-4 sm:mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                className="group bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Shreyas Bhasale
                  </h3>
                  <p className="text-sm sm:text-base text-[#2ba4d8] font-medium">
                    Business Owner
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-[#2ba4d8]/20 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 pl-6">
                    Highly satisfied with the service and support. The advice
                    provided was practical and well-suited to my needs. I truly
                    value the after-sales assistance and care.
                  </p>
                </div>
                <div className="flex gap-1 mt-4 sm:mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial 4 */}
              <motion.div
                className="group bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Dr. Vishwanath Swamy
                  </h3>
                  <p className="text-sm sm:text-base text-[#2ba4d8] font-medium">
                    Scientist
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-[#2ba4d8]/20 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 pl-6">
                    Impressed by the professionalism and clarity in
                    communication. The solutions provided were insightful and
                    perfectly matched my requirements. Excellent service and
                    follow-up support.
                  </p>
                </div>
                <div className="flex gap-1 mt-4 sm:mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { value: "1000+", label: "Happy Clients" },
                { value: "28+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`text-center p-4 bg-gradient-to-br ${
                    index === 0
                      ? "from-blue-50"
                      : index === 1
                      ? "from-cyan-50"
                      : "from-blue-50"
                  } to-white rounded-xl border border-gray-100 ${
                    index === 2 ? "sm:col-span-1 col-span-2" : ""
                  }`}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold text-[#2ba4d8] mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Modern Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#2ba4d8] via-[#2ba4d8] to-[#1e7fa8] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                variants={fadeInUp}
              >
                Let's Start Your Financial Journey
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl opacity-90 px-4"
                variants={fadeInUp}
              >
                Get in touch for personalized financial planning and insurance
                solutions
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl hover:bg-white/20 transition-all group"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                </motion.div>
                <h4 className="text-base sm:text-lg font-bold mb-2">Phone</h4>
                <a
                  href="tel:+918308844841"
                  className="text-sm sm:text-base text-white/90 group-hover:text-white font-medium"
                >
                  +91-8308844841
                </a>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl hover:bg-white/20 transition-all group"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                </motion.div>
                <h4 className="text-base sm:text-lg font-bold mb-2">Email</h4>
                <a
                  href="mailto:archu.phaltankar@gmail.com"
                  className="text-xs sm:text-sm text-white/90 group-hover:text-white font-medium break-words"
                >
                  archu.phaltankar@gmail.com
                </a>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl hover:bg-white/20 transition-all group"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                </motion.div>
                <h4 className="text-base sm:text-lg font-bold mb-2">
                  Location
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
                  214, Business Point,
                  <br />
                  Narayan Chambers,
                  <br />
                  555 Narayan Peth,
                  <br />
                  Pune-411030, Maharashtra
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-8 sm:py-10 md:py-12"
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
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Investments", href: "/investments", isLink: true },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
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
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center gap-2 sm:gap-3 font-semibold group"
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
