import React from "react";
import FAQ from "../sections/Faq";
const Contact = () => {
  return (
    <>
    <main className="pt-16 lg:pt-20">
        
     <section className="relative min-h-screen flex flex-col lg:flex-row items-start justify-center gap-10 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 dark:bg-blue-800/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Card */}
          <div className="relative bg-white/80 dark:bg-slate-900/70 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse animation-delay-300"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Support Icon */}
              <div className="relative inline-block mb-8 sm:mb-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-headset text-white text-2xl sm:text-3xl animate-pulse"></i>
                </div>
                {/* Online Status */}
                <div className="absolute bottom-6 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 animate-pulse">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-2">
                Live Support Team
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-8">
                Get help from our support specialists <br />
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Available 24/7
                </span>
              </p>

              {/* Chat Button */}
              <button
                id="open-chat"
                className="btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 sm:py-5 rounded-2xl font-semibold text-white inline-flex items-center justify-center group text-base sm:text-lg shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <i className="fas fa-comment mr-3 group-hover:animate-bounce"></i>
                Start Live Chat
                <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-1"></i>
              </button>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4">
                <i className="fas fa-shield-alt mr-1 text-blue-500"></i>
                Secure & Private Communication
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <FAQ/>
    </>
  );
};

export default Contact;
