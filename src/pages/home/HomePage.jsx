"use client"

import { Shield, CheckCircle, Settings,  ArrowRight, Zap } from "lucide-react"
    

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-12 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Alternme V1.9
                </span>

                <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
                  Advanced Crypto <br />
                  <span className="text-blue-600">Wallet Control</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                  Explore the power of Alternme  your ultimate AI-powered tool for mailing and flashing crypto
                  wallets. Send any amount of coin or currency with our easy-to-use platform.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-105">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center px-8 py-4 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 text-lg font-semibold shadow-sm transition-all">
                    <Shield className="mr-2 w-5 h-5" />
                    Login
                  </button>
                </div>
              </div>

              {/* Right Floating Icons */}
              <div className="relative h-96 lg:h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* PayPal */}
                    <div className="absolute top-4 right-8 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-blue-700">P</span>
                    </div>

                    {/* Zcash */}
                    <div className="absolute top-16 right-0 w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-white">Z</span>
                    </div>

                    {/* Skrill */}
                    <div className="absolute top-0 right-20 w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-blue-700">S</span>
                    </div>

                    {/* Verge */}
                    <div className="absolute top-32 right-12 w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-white">V</span>
                    </div>

                    {/* Coinbase */}
                    <div className="absolute left-8 top-12 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-blue-700">C</span>
                    </div>

                    {/* Crypto.com */}
                    <div className="absolute left-0 top-32 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-blue-700">⬡</span>
                    </div>

                    {/* Visa */}
                    <div className="absolute left-12 bottom-20 w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-blue-700">V</span>
                    </div>

                    {/* Shield/Security */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-10 h-10 text-blue-700" />
                    </div>

                    {/* Bitcoin */}
                    <div className="absolute bottom-8 right-16 w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-white">₿</span>
                    </div>

                    {/* G Icon */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-blue-700">G</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



{/* Features Section */}
<section className="relative py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
      {/* Privacy */}
      <div className="text-center group animate-fade-in-up animation-delay-100">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
          <Shield className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-lg sm:text-xl font-display font-semibold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
          Total Privacy
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Unique and intriguing security features for those considering privacy and complete anonymity.
        </p>
      </div>

      {/* Results */}
      <div className="text-center group animate-fade-in-up animation-delay-200">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
          <CheckCircle className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-lg sm:text-xl font-display font-semibold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
          Results Guaranteed
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          For professionals chasing results and wallet deliverability success with proven track record.
        </p>
      </div>

      {/* Competence */}
      <div className="text-center group animate-fade-in-up animation-delay-300">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
          <Settings className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-lg sm:text-xl font-display font-semibold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
          Advanced Tools
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Representing a transformative journey through advanced email delivery technology.
        </p>
      </div>
    </div>
  </div>
</section>


     
      </main>
    </div>
  )
}

export default Home
