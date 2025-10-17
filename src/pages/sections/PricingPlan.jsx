import React from "react"
import {
  Calendar,
  XCircle,
  CheckCircle,
  CreditCard,
  ArrowRight,
  Crown,
} from "lucide-react"

const PricingPlan = () => {
  const plans = [
    {
      title: "Monthly Plan",
      price: "₦35,000",
      duration: "/ 1 Month",
      link: "https://paylink.monnify.com/monthlykey",
      features: [
        { icon: <Calendar />, text: "1 Month access" },
        { icon: <XCircle className="text-red-500" />, text: "Bulk Sending Not Available" },
        { icon: <CheckCircle />, text: "All wallet types supported" },
        { icon: <CheckCircle />, text: "Unlimited daily emails" },
        { icon: <CheckCircle />, text: "Receipt Generator access" },
        { icon: <CheckCircle />, text: "24/7 priority support" },
        { icon: <CheckCircle />, text: "Fauxchain Explorer access" },
      ],
    },
    {
      title: "Quarterly Plan",
      price: "₦90,000",
      duration: "/ 3 Months",
      link: "https://pay.squadco.com/link/quarterlykeydoom",
      features: [
        { icon: <Calendar />, text: "3 Month access" },
        { icon: <XCircle className="text-red-500" />, text: "Bulk Sending Not Available" },
        { icon: <CheckCircle />, text: "All wallet types supported" },
        { icon: <CheckCircle />, text: "Unlimited daily emails" },
        { icon: <CheckCircle />, text: "Receipt Generator access" },
        { icon: <CheckCircle />, text: "24/7 priority support" },
        { icon: <CheckCircle />, text: "Fauxchain Explorer access" },
      ],
    },
    {
      title: "Yearly Plan",
      price: "₦220,000",
      duration: "/ 1 Year",
      link: "https://pay.squadco.com/yearlykeyfdoom",
      features: [
        { icon: <Calendar />, text: "1 Year access" },
        { icon: <XCircle className="text-red-500" />, text: "Bulk Sending Not Available" },
        { icon: <CheckCircle />, text: "All wallet types supported" },
        { icon: <CheckCircle />, text: "Unlimited daily emails" },
        { icon: <CheckCircle />, text: "Receipt Generator access" },
        { icon: <CheckCircle />, text: "24/7 priority support" },
        { icon: <CheckCircle />, text: "Fauxchain Explorer access" },
      ],
    },
  ]

  return (
    <section
      id="pricing"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 dark:bg-blue-800/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Section Header */}
      <div className="relative text-center mb-12">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <Crown className="w-4 h-4 mr-2" />
          Subscription Plans
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4">
          Choose Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Perfect Plan
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Flexible pricing designed to scale with your needs. No hidden fees
          just powerful crypto wallet tools.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-full bg-white/70 dark:bg-slate-900/70 rounded-xl sm:rounded-2xl p-6 lg:p-8 border-2 border-slate-200 dark:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group-hover:scale-[1.03]">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline justify-center mb-3 sm:mb-4">
                  <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2 text-sm sm:text-base">
                    {plan.duration}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center text-slate-700 dark:text-slate-300 text-sm sm:text-base"
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      {React.cloneElement(feature.icon, {
                        className:
                          feature.icon.props.className ||
                          "w-4 h-4 text-blue-500 dark:text-blue-400",
                      })}
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <CreditCard className="w-4 h-4" />
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingPlan
