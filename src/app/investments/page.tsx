"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
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

export default function Investments() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Sticky Navigation */}
      <header>
        <nav
          className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <div>
                  <div className="font-bold text-gray-800 text-base sm:text-lg">
                    Archana Phaltankar
                  </div>
                  <div className="text-xs text-gray-500">Financial Planner</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-600">
                <Link
                  href="/"
                  className="hover:text-[#2ba4d8] transition-colors relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                </Link>
                <Link
                  href="/#services"
                  className="hover:text-[#2ba4d8] transition-colors relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                </Link>
                <Link
                  href="/investments"
                  className="text-[#2ba4d8] relative group"
                >
                  Investments
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2ba4d8]"></span>
                </Link>
                <Link
                  href="/#partners"
                  className="hover:text-[#2ba4d8] transition-colors relative group"
                >
                  Partners
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                </Link>
                <Link
                  href="/#testimonials"
                  className="hover:text-[#2ba4d8] transition-colors relative group"
                >
                  Testimonials
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                </Link>
                <Link
                  href="/#contact"
                  className="hover:text-[#2ba4d8] transition-colors relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
                </Link>
              </div>

              {/* Desktop CTA Button */}
              <a
                href="tel:+918308844841"
                className="hidden sm:flex bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 items-center gap-2"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Get in Touch</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#2ba4d8] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Home
                  </Link>
                  <Link
                    href="/#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Services
                  </Link>
                  <Link
                    href="/investments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#2ba4d8] font-medium flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Investments
                  </Link>
                  <Link
                    href="/#partners"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Partners
                  </Link>
                  <Link
                    href="/#testimonials"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Testimonials
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-[#2ba4d8] transition-colors font-medium flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Contact
                  </Link>
                  <a
                    href="tel:+918308844841"
                    className="bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 sm:hidden"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2ba4d8]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#2ba4d8] border border-blue-100 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ba4d8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ba4d8]"></span>
                </span>
                Investment Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8]">
                  Financial Future
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                Strategic investment planning tailored to your goals. Expert guidance
                for wealth creation through mutual funds and comprehensive financial
                advisory services.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Services Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block bg-blue-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#2ba4d8] mb-4">
                Our Investment Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Investment Solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Expert guidance for wealth creation and financial planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Mutual Funds */}
              <div className="group bg-gradient-to-br from-purple-50 to-white p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Mutual Funds
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Strategic investment solutions for long-term wealth creation
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>SIP & Portfolio Management</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Wealth Creation Strategies</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Goal-Based Investing</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Diversified Fund Selection</span>
                  </li>
                </ul>
              </div>

              {/* Financial Advisory */}
              <div className="group bg-gradient-to-br from-rose-50 to-white p-8 sm:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Financial Advisory
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Expert guidance for comprehensive financial planning
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Goal-Based Planning</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Risk Assessment</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Personalized Solutions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive Financial Review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Allocation Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block bg-blue-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#2ba4d8] mb-4">
                Portfolio Management
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Smart Asset Allocation
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Choose the investment strategy that aligns with your risk
                appetite and financial goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Safe Portfolio */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-400">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Safe Portfolio
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mb-4 sm:mb-6"></div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      5-6% Guaranteed Returns
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      Tax Free Returns
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 font-semibold">
                      100% Capital Protection
                    </p>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div className="h-2 w-full bg-green-400 rounded"></div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Medium Risk Portfolio */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2ba4d8]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2ba4d8] to-[#1e7fa8] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Medium Risk
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2ba4d8] to-transparent mb-4 sm:mb-6"></div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#2ba4d8] flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      10-12% Returns
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#2ba4d8] flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      Tax Free/Taxable Options
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#2ba4d8] flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 font-semibold">
                      Partial Capital Protection
                    </p>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div className="h-2 w-full bg-[#2ba4d8] rounded"></div>
                    <div className="h-2 w-full bg-[#2ba4d8] rounded"></div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* High Growth Portfolio */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-400">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  High Growth
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-transparent mb-4 sm:mb-6"></div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      15-18% Returns
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      Taxable Returns
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 font-semibold">
                      Market-Linked Returns
                    </p>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Risk Level:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div className="h-2 w-full bg-orange-400 rounded"></div>
                    <div className="h-2 w-full bg-orange-400 rounded"></div>
                    <div className="h-2 w-full bg-orange-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#2ba4d8] via-[#2ba4d8] to-[#1e7fa8] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get personalized investment advice and portfolio management solutions
              tailored to your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918308844841"
                className="bg-white text-[#2ba4d8] px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2ba4d8] transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
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
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investments"
                    className="hover:text-white transition-colors"
                  >
                    Investments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>Life Insurance</li>
                <li>General Insurance</li>
                <li>LIC Agency</li>
                <li>Investment Advisory</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href="tel:+918308844841"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 flex items-center gap-2 sm:gap-3 font-semibold group"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
        <span className="hidden md:inline text-sm sm:text-base">Call Now</span>
      </a>
    </div>
  );
}
