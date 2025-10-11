import React from "react";
import { Lock, Wallet, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Alternme – The Crypto Wallet Mailer
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
              Launched in 2023, Alternme is the first AI-powered platform built
              for mailing and flashing all types of crypto wallets with complete
              privacy and security.
            </p>

            {/* Feature List */}
            <div className="space-y-6 sm:space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="text-primary-600 dark:text-primary-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Total Privacy
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    All wallet mails are encrypted and fully hidden from third
                    parties with military-grade security.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wallet className="text-primary-600 dark:text-primary-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    All Wallets Supported
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Flash any crypto wallet including Trust, MetaMask, Coinbase,
                    and 100+ other platforms.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="text-primary-600 dark:text-primary-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Advanced AI Tools
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Activate keys, track mails, and manage everything with our
                    intelligent automation system.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="assets2/media/images/about-img-2.gif"
              alt="About Alternme"
              className="w-full h-auto rounded-lg sm:rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
