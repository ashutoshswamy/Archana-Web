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
                  { name: "Services", href: "/#services" },
                  { name: "Investments", href: "/investments", active: true },
                  { name: "Partners", href: "/#partners" },
                  { name: "Testimonials", href: "/#testimonials" },
                  { name: "Contact", href: "/#contact" },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                    <Link
                      href={item.href}
                      className={`${
                        item.active
                          ? "text-[#2ba4d8]"
                          : "hover:text-[#2ba4d8]"
                      } transition-colors relative group`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 ${
                          item.active ? "w-full" : "w-0 group-hover:w-full"
                        } h-0.5 bg-[#2ba4d8] transition-all`}
                      ></span>
                    </Link>
                  </motion.div>
                ))}
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
                      { name: "Home", href: "/" },
                      { name: "Services", href: "/#services" },
                      { name: "Investments", href: "/investments", active: true },
                      { name: "Partners", href: "/#partners" },
                      { name: "Testimonials", href: "/#testimonials" },
                      { name: "Contact", href: "/#contact" },
                    ].map((item) => (
                      <motion.div key={item.name} variants={fadeInUp}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`${
                            item.active
                              ? "text-[#2ba4d8]"
                              : "text-gray-600 hover:text-[#2ba4d8]"
                          } transition-colors font-medium flex items-center gap-2`}
                        >
                          <ChevronRight className="w-4 h-4" />
                          {item.name}
                        </Link>
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

      {/* Hero Section */}
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#2ba4d8] border border-blue-100 mb-6"
                variants={fadeInUp}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ba4d8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ba4d8]"></span>
                </span>
                Investment Solutions
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                variants={fadeInUp}
              >
                Build Your
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Financial Future
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Strategic investment planning tailored to your goals. Expert guidance
                for wealth creation through mutual funds and comprehensive financial
                advisory services.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Investment Services Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
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
                Our Investment Services
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Comprehensive Investment Solutions
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
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
                className="group bg-gradient-to-br from-purple-50 to-white p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"
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
                      <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Financial Advisory */}
              <motion.div
                className="group bg-gradient-to-br from-rose-50 to-white p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6"
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
                      <Check className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Asset Allocation Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
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
                Portfolio Management
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Smart Asset Allocation
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
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
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-400"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Safe Portfolio
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mb-4 sm:mb-6"></div>
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
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
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
                      className="h-2 w-full bg-green-400 rounded"
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
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2ba4d8]"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2ba4d8] to-[#1e7fa8] rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Medium Risk
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2ba4d8] to-transparent mb-4 sm:mb-6"></div>
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
                      <Check className="w-4 h-4 text-[#2ba4d8] flex-shrink-0" />
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
                      className="h-2 w-full bg-[#2ba4d8] rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.div
                      className="h-2 w-full bg-[#2ba4d8] rounded"
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
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-400"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  High Growth
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-transparent mb-4 sm:mb-6"></div>
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
                      <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
                      className="h-2 w-full bg-orange-400 rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.div
                      className="h-2 w-full bg-orange-400 rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    />
                    <motion.div
                      className="h-2 w-full bg-orange-400 rounded"
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
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#2ba4d8] via-[#2ba4d8] to-[#1e7fa8] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <motion.div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Ready to Start Your Investment Journey?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Get personalized investment advice and portfolio management solutions
              tailored to your financial goals.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.a
                href="tel:+918308844841"
                className="bg-white text-[#2ba4d8] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2ba4d8] transition-all duration-300 inline-block"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
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
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/#services" },
                  { name: "Investments", href: "/investments" },
                  { name: "Testimonials", href: "/#testimonials" },
                  { name: "Contact", href: "/#contact" },
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
