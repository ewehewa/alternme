import React from "react";
import { ArrowRight } from "lucide-react";

const ChildPanelSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-50 to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-in-up">
            <img
              src="assets/images/about-img.png"
              alt="Child Panel"
              className="w-full h-auto rounded-lg sm:rounded-2xl shadow-soft-lg"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fas fa-rocket mr-2"></i>
              Launch Your Platform
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Create Your Own Alternme Platform
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
              With Alternme's Child Panel feature, you can instantly create
              your own wallet mailing and flashing platform. Simply purchase a
              domain and point its DNS to our server IP your website will be
              fully functional and ready to use.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Your panel works just like Alternme. Users can mail/flash, and
              interact with a professional system designed for crypto operations
              with full admin control.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
              Generate activation keys, sell access to users, and manage
              everything with our comprehensive admin dashboard. It's everything
              you need to run your own platform made simple.
            </p>


<a
  href="https://doompanel.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-105"
>
  Create Panel
  <ArrowRight className="ml-2 w-5 h-5" />
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildPanelSection;
