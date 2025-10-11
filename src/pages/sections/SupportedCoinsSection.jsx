import React from "react";
import { ArrowRight, Zap } from "lucide-react"; // Lucide icons

const SupportedCoinsSection = () => {
  const coins = [
    { name: "BITCOIN", icon: "/assets/images/vector-1.png", delay: "100" },
    { name: "ETHEREUM", icon: "/assets/images/vector-2.png", delay: "200" },
    { name: "USDT", icon: "/assets/images/vector-3.png", delay: "300" },
    { name: "SOLANA", icon: "/assets/images/vector-4.png", delay: "400" },
    { name: "BNB", icon: "/assets/images/vector-5.png", delay: "500" },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Popular Cryptocurrencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Every Coin Available
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Support for all major cryptocurrencies and tokens with seamless
            integration
          </p>
        </div>

        {/* Coins Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {coins.map((coin) => (
            <div
              key={coin.name}
              className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-center animate-fade-in-up animation-delay-${coin.delay}`}
            >
              <img
                src={coin.icon}
                alt={coin.name}
                className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-xs sm:text-base">
                {coin.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Flash Now Button */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <a
            href="/dashboard"
            className="flex items-center justify-center mx-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-105 w-fit"
          >
            Flash Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportedCoinsSection;
