import { useEffect } from "react";

const LiveActivity = () => {
  useEffect(() => {
    const container = document.querySelector(".live-feed");
    if (!container) return;

    const interval = setInterval(() => {
      const first = container.firstElementChild;
      if (first) {
        first.classList.add("opacity-0", "translate-y-3", "transition-all", "duration-500");
        setTimeout(() => {
          container.appendChild(first);
          first.classList.remove("opacity-0", "translate-y-3");
        }, 500);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">
          Live Activity
        </h2>

        <div className="flex items-center justify-center mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Streaming live data...
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">
          See real-time activity from our network, showing users interacting with our system globally.
        </p>

        {/* Live Feed Section */}
        <div className="live-feed max-w-5xl mx-auto space-y-3">
          {/* Transaction 1 */}
          <div className="flex items-center justify-between bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md rounded-xl px-4 py-3 shadow-glow transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/90 flex items-center justify-center text-white font-bold text-xs">
                US
              </div>
              <div className="text-left">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  Deposit confirmed
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">from California, USA</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
              +$2,300
            </span>
          </div>

          {/* Transaction 2 */}
          <div className="flex items-center justify-between bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md rounded-xl px-4 py-3 shadow-glow transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500/90 flex items-center justify-center text-white font-bold text-xs">
                JP
              </div>
              <div className="text-left">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  Withdrawal processed
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">from Tokyo, Japan</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-red-600 dark:text-red-400">
              -$1,050
            </span>
          </div>

          {/* Transaction 3 */}
          <div className="flex items-center justify-between bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md rounded-xl px-4 py-3 shadow-glow transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/90 flex items-center justify-center text-white font-bold text-xs">
                NG
              </div>
              <div className="text-left">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  New registration
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">from Lagos, Nigeria</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
              Joined
            </span>
          </div>

          {/* Transaction 4 */}
          <div className="flex items-center justify-between bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md rounded-xl px-4 py-3 shadow-glow transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-500/90 flex items-center justify-center text-white font-bold text-xs">
                DE
              </div>
              <div className="text-left">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  Wallet funded
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">from Berlin, Germany</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
              +$4,100
            </span>
          </div>
        </div>

        {/* Explorer Button */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium hover:scale-105 transition-all"
          >
            <i className="fas fa-search mr-2"></i> Explorer
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveActivity;
