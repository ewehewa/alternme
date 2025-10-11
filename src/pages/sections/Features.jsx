import { Shield, CheckCircle, Settings } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
