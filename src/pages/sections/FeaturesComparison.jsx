import React from "react"
import {
  Shield,
  Infinity,
  Headphones,
  Rocket,
} from "lucide-react" // Replacing Font Awesome icons

const features = [
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Total Security",
    description: "Military-grade encryption protects all your transactions and data",
    delay: "animation-delay-100",
  },
  {
    icon: <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "No Limits",
    description: "Send unlimited emails daily with no restrictions",
    delay: "animation-delay-200",
  },
  {
    icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our expert team",
    delay: "animation-delay-300",
  },
  {
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Instant Setup",
    description: "Get started immediately after subscription activation",
    delay: "animation-delay-400",
  },
]

const FeaturesComparison = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Why Choose Alternme?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every subscription includes powerful features designed for professional crypto operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group animate-fade-in-up ${feature.delay}`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesComparison
