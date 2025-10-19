import { useState } from "react";
import {
  LayoutDashboard,
  Key,
  Phone,
  Gift,
  MessageCircle,
  Mail,
  FileText,
  CreditCard,
  Menu,
  X,
  User,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Activation", icon: Key },
    { name: "Contact Us", icon: Phone },
    { name: "Refer & Earn", icon: Gift },
    { name: "Request Features", icon: MessageCircle },
    { name: "Mail History", icon: Mail },
    { name: "Receipts History", icon: FileText },
    { name: "Payment History", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col md:flex-row text-slate-900">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-white px-4 py-3 shadow">
        <h1 className="text-xl font-bold text-blue-600">Alternme</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-blue-100"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-xl flex flex-col p-6 z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center mb-8 md:block">
          <h1 className="text-2xl font-bold text-blue-600">Alternme</h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden text-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-100 text-slate-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="mt-8 border-t border-slate-200 pt-4">
          <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all">
            Message Us
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Dashboard</h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Welcome back! Here's your overview.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
              Newbie
            </div>
            <div className="relative group">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer">
                T
              </div>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-40">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 w-full text-left text-slate-700">
                  <User className="w-4 h-4" /> Profile
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 w-full text-left text-slate-700">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold">Your Plan</h3>
            <p className="text-sm opacity-80">Premium Access</p>
            <div className="mt-4">
              <p className="text-2xl font-bold">No Active Plan 🔥</p>
              <p className="text-sm mt-2">Expires: N/A</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-blue-600 font-semibold">Flash Wallet</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              Access
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-blue-600 font-semibold">Receipt Generator</p>
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition">
              Create (free)
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-blue-600 font-semibold">Total Mails</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">0</h2>
            <p className="text-slate-500 text-sm">Emails sent</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-blue-600 font-semibold">Total Receipts</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">1</h2>
            <p className="text-slate-500 text-sm">Receipts generated</p>
          </div>
        </div>

        {/* Progress / Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center sm:text-left">
            <h3 className="text-blue-600 font-semibold">Status Level</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">Newbie</p>
            <p className="text-slate-500 text-sm sm:text-base">
              Current rank
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center sm:text-left">
            <h3 className="text-blue-600 font-semibold">Next Level</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">0%</p>
            <p className="text-slate-500 text-sm sm:text-base">
              To Advanced status
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
