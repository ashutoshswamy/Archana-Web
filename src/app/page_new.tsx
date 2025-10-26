export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ba4d8] to-[#1e7fa8] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-gray-800 text-lg">
                  Archana Phaltankar
                </div>
                <div className="text-xs text-gray-500">Financial Planner</div>
              </div>
            </div>
            <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-600">
              <a
                href="#home"
                className="hover:text-[#2ba4d8] transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#services"
                className="hover:text-[#2ba4d8] transition-colors relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#allocation"
                className="hover:text-[#2ba4d8] transition-colors relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#partners"
                className="hover:text-[#2ba4d8] transition-colors relative group"
              >
                Partners
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#contact"
                className="hover:text-[#2ba4d8] transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ba4d8] group-hover:w-full transition-all"></span>
              </a>
            </div>
            <a
              href="tel:+918308844841"
              className="bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              📞 Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Modern Design */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2ba4d8]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-[#2ba4d8] border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ba4d8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ba4d8]"></span>
                </span>
                26 Years of Excellence
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Financial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8]">
                  Success Partner
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Securing families and lives from unforeseen events, creating
                wealth through strategic planning, and guiding you towards your
                financial dreams.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-[#2ba4d8] hover:text-[#2ba4d8] transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2ba4d8]">26+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2ba4d8]">1000+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2ba4d8]">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ba4d8]/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-square w-full max-w-sm bg-gradient-to-br from-[#2ba4d8] via-[#2ba4d8] to-[#1e7fa8] rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                    <div className="text-8xl font-bold mb-4">AP</div>
                    <div className="text-xl font-semibold">
                      Archana Phaltankar
                    </div>
                    <div className="text-sm opacity-90 mt-2">
                      Insurance & Financial Expert
                    </div>
                    <div className="mt-8 flex gap-4">
                      <a
                        href="mailto:archu.phaltankar@gmail.com"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                      >
                        <span className="text-2xl">📧</span>
                      </a>
                      <a
                        href="http://www.becozlifematters.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                      >
                        <span className="text-2xl">🌐</span>
                      </a>
                      <a
                        href="tel:+918308844841"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                      >
                        <span className="text-2xl">📱</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 px-6 py-2 rounded-full text-sm font-semibold text-[#2ba4d8] mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions to secure your family's future and grow your
              wealth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Life Insurance */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Life Insurance
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive life coverage to protect your family's financial
                future
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Term & Endowment Plans</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Retirement Planning</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Child Education Plans</span>
                </li>
              </ul>
            </div>

            {/* General Insurance */}
            <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                General Insurance
              </h3>
              <p className="text-gray-600 mb-6">
                Protect your assets and health with comprehensive coverage
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Health & Mediclaim</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Vehicle & Property Insurance</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Travel & Business Coverage</span>
                </li>
              </ul>
            </div>

            {/* Mutual Funds */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mutual Funds
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic investment solutions for long-term wealth creation
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>SIP & Portfolio Management</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Wealth Creation Strategies</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Goal-Based Investing</span>
                </li>
              </ul>
            </div>

            {/* Deposits */}
            <div className="group bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Deposits
              </h3>
              <p className="text-gray-600 mb-6">
                Secure savings options for short and medium-term goals
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Fixed Deposits</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Recurring Deposits</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>Guaranteed Returns</span>
                </li>
              </ul>
            </div>

            {/* LIC Agency */}
            <div className="group bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                LIC Agency
              </h3>
              <p className="text-gray-600 mb-6">
                Start your career as an insurance professional
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Agent Recruitment</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Training & Support</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Business Development</span>
                </li>
              </ul>
            </div>

            {/* Advisory */}
            <div className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Financial Advisory
              </h3>
              <p className="text-gray-600 mb-6">
                Expert guidance for comprehensive financial planning
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span>Goal-Based Planning</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span>Risk Assessment</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span>Personalized Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Asset Allocation Section */}
      <section
        id="allocation"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 px-6 py-2 rounded-full text-sm font-semibold text-[#2ba4d8] mb-4">
              Portfolio Management
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Smart Asset Allocation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the investment strategy that aligns with your risk appetite
              and financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Safe Portfolio */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Safe Portfolio
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-700">5-6% Guaranteed Returns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-700">Tax Free Returns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-700 font-semibold">
                    100% Capital Protection
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-sm text-gray-500">Risk Level:</span>
                <div className="mt-2 flex gap-1">
                  <div className="h-2 w-full bg-green-400 rounded"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Medium Risk Portfolio */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2ba4d8]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2ba4d8] to-[#1e7fa8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Medium Risk
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#2ba4d8] to-transparent mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2ba4d8] rounded-full"></div>
                  <p className="text-gray-700">10-12% Returns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2ba4d8] rounded-full"></div>
                  <p className="text-gray-700">Tax Free/Taxable Options</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2ba4d8] rounded-full"></div>
                  <p className="text-gray-700 font-semibold">
                    Partial Capital Protection
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-sm text-gray-500">Risk Level:</span>
                <div className="mt-2 flex gap-1">
                  <div className="h-2 w-full bg-[#2ba4d8] rounded"></div>
                  <div className="h-2 w-full bg-[#2ba4d8] rounded"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Risk Portfolio */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-400">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                High Growth
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-transparent mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-gray-700">15-18% Returns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-gray-700">Taxable Returns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-gray-700 font-semibold">
                    Market-Linked Returns
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-sm text-gray-500">Risk Level:</span>
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

      {/* Modern Partners Section */}
      <section id="partners" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 px-6 py-2 rounded-full text-sm font-semibold text-[#2ba4d8] mb-4">
              Trusted Brands
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Service Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with India's leading insurance and financial
              institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-5xl font-bold text-amber-600 mb-3">LIC</div>
              <p className="text-sm text-gray-600 font-medium">
                Life Insurance Corporation
              </p>
              <p className="text-xs text-gray-500 mt-2">Since 1956</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold text-orange-600 mb-3">
                ICICI Lombard
              </div>
              <p className="text-sm text-gray-600 font-medium">Nirbhay Vaade</p>
              <p className="text-xs text-gray-500 mt-2">General Insurance</p>
            </div>

            <div className="group bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-bold text-red-600 mb-3">
                Prudent
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Nivesh Through Nivdaan
              </p>
              <p className="text-xs text-gray-500 mt-2">Mutual Funds</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold text-blue-700 mb-3">
                HDFC BANK
              </div>
              <p className="text-sm text-gray-600 font-medium">
                We understand your world
              </p>
              <p className="text-xs text-gray-500 mt-2">Banking Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-[#2ba4d8] via-[#2ba4d8] to-[#1e7fa8] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Start Your Financial Journey
            </h2>
            <p className="text-xl opacity-90">
              Get in touch for personalized financial planning and insurance
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all group">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-lg font-bold mb-2">Phone</h4>
              <a
                href="tel:+918308844841"
                className="text-white/90 group-hover:text-white font-medium"
              >
                +91-8308844841
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all group">
              <div className="text-4xl mb-4">✉️</div>
              <h4 className="text-lg font-bold mb-2">Email</h4>
              <a
                href="mailto:archu.phaltankar@gmail.com"
                className="text-white/90 group-hover:text-white font-medium text-sm break-words"
              >
                archu.phaltankar@gmail.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all group">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-lg font-bold mb-2">Website</h4>
              <a
                href="http://www.becozlifematters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 group-hover:text-white font-medium text-sm hover:underline"
              >
                becozlifematters.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all group">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-lg font-bold mb-2">Location</h4>
              <p className="text-white/90 text-sm">
                214, Business Point,
                <br />
                Narayan Chambers,
                <br />
                555 Narayan Peth,
                <br />
                Pune-411030, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ba4d8] to-[#1e7fa8] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AP</span>
                </div>
                <div>
                  <div className="font-bold text-xl">Archana Phaltankar</div>
                  <div className="text-sm text-gray-400">
                    Because Life Matters
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your trusted partner for insurance and financial planning with
                26 years of excellence in securing families and creating wealth.
              </p>
              <a
                href="http://www.becozlifematters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2ba4d8] hover:text-[#4ba8d8] transition-colors font-medium text-sm"
              >
                www.becozlifematters.com
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#allocation"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Life Insurance</li>
                <li>General Insurance</li>
                <li>Mutual Funds</li>
                <li>Financial Planning</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Archana Phaltankar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href="tel:+918308844841"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#2ba4d8] to-[#1e7fa8] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 flex items-center gap-3 font-semibold group"
      >
        <span className="text-2xl group-hover:animate-bounce">📞</span>
        <span className="hidden md:inline">Call Now</span>
      </a>
    </div>
  );
}
