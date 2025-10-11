"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Wallet, Menu, X, ArrowRight } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setOpen(false) // Close mobile menu
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <Wallet className="w-7 h-7 text-blue-600" />
          <span className="text-xl font-extrabold text-slate-900">ALTERNME</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-700">
          <button onClick={() => handleScroll("home")} className="hover:text-blue-600 hover:underline">
            Home
          </button>
          <button onClick={() => handleScroll("features")} className="hover:text-blue-600 hover:underline">
            Features
          </button>
          <button onClick={() => handleScroll("about")} className="hover:text-blue-600 hover:underline">
            About
          </button>
          <Link to="/pricing" className="hover:text-blue-600 hover:underline">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => handleScroll("login")}
            className="px-5 py-2 rounded-full border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Login
          </button>
          <button
            onClick={() => handleScroll("start")}
            className="flex items-center px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4 font-medium">
          <button onClick={() => handleScroll("home")} className="block w-full text-left hover:text-blue-600">
            Home
          </button>
          <button onClick={() => handleScroll("features")} className="block w-full text-left hover:text-blue-600">
            Features
          </button>
          <button onClick={() => handleScroll("about")} className="block w-full text-left hover:text-blue-600">
            About
          </button>
          <Link to="/pricing" className="block hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/contact" className="block hover:text-blue-600">
            Contact
          </Link>

          <button
            onClick={() => handleScroll("login")}
            className="block w-full text-center border border-blue-200 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50"
          >
            Login
          </button>
          <button
            onClick={() => handleScroll("start")}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}
