"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Wallet, Menu, X, ArrowRight } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Wallet className="w-7 h-7 text-blue-600" />
          <span className="text-xl font-extrabold text-slate-900">ALTERNME</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-700">
          <Link to="/" className="hover:text-blue-600 hover:underline">Home</Link>
          <Link to="/features" className="hover:text-blue-600 hover:underline">Features</Link>
          <Link to="/about" className="hover:text-blue-600 hover:underline">About</Link>
          <Link to="/pricing" className="hover:text-blue-600 hover:underline">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            to="/start"
            className="flex items-center px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4 font-medium">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/features" className="block hover:text-blue-600">Features</Link>
          <Link to="/about" className="block hover:text-blue-600">About</Link>
          <Link to="/pricing" className="block hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="block hover:text-blue-600">Contact</Link>
          <Link
            to="/login"
            className="block w-full text-center border border-blue-200 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50"
          >
            Login
          </Link>
          <Link
            to="/start"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
