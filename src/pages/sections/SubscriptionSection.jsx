import React from "react";
import { Crown, Eye, ArrowRight } from "lucide-react"; // Lucide icons
import { motion } from "framer-motion";

const SubscriptionSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/images/discover-img.jpg"
              alt="Subscription"
              className="w-full h-auto rounded-lg sm:rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Premium Access
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6">
              Unlock Everything with One Subscription
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Access every feature on Alternme with just one subscription.
              Choose from Monthly, Quarterly, and Yearly plans with no hidden
              fees or limitations.
            </p>

            <a
              href="/subscription"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105 group"
            >
              <Eye className="w-5 h-5 mr-2" />
              See All Plans
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
