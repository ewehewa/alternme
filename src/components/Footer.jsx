import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img
                src="https://www.ALTERNME.com/storage/app/public/logos/2QXqmK7sNhjklDEc4eXybf64I62408DXYepUq5LK.gif"
                alt="ALTERNME"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
              Advanced crypto wallet flasher platform powered by cutting-edge AI
              technology. Professional tools for flashing and mailing crypto
              wallets with maximum security and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/telegram"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 group"
              >
                <i className="fab fa-telegram text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"></i>
              </Link>
              <Link
                to="/tiktok"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 group"
              >
                <i className="fab fa-tiktok text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"></i>
              </Link>
              <Link
                to="/instagram"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 group"
              >
                <i className="fab fa-instagram text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"></i>
              </Link>
              <Link
                to="/youtube"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 group"
              >
                <i className="fab fa-youtube text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-slate-900 dark:text-slate-100">
              Quick Access
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/video_tutorials"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-slate-900 dark:text-slate-100">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-600 dark:text-slate-400">
                <i className="fas fa-envelope mr-2 text-primary-500"></i>
                <Link
                  to="/contact"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  info@ALTERNME.com
                </Link>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                <i className="fab fa-telegram mr-2 text-primary-500"></i>
                <Link
                  to="/telegram"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Telegram Channel
                </Link>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                <i className="fas fa-globe mr-2 text-primary-500"></i>
                Global Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 ALTERNME - All rights reserved by ONETOOLZ
          </p>
          <p className="text-primary-600 dark:text-primary-400 text-sm font-display mt-2 md:mt-0">
            Powered by Advanced AI Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
