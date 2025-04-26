"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { Menu, X } from "lucide-react"
import logo from "../assets/images/logo.jpg"

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-navy-900 shadow-md" : "bg-navy-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center justify-center">
            <img src={logo} alt="Keramicka Zaštita Smederevo" className="w-16 h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-grey-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-900">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/gallery">Gallery</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`text-grey-200 hover:text-yellow-500 transition-colors ${
        isActive ? "font-medium text-yellow-500" : ""
      }`}
    >
      {children}
    </Link>
  )
}

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`block py-2 text-grey-200 hover:text-yellow-500 transition-colors ${
        isActive ? "font-medium text-yellow-500" : ""
      }`}
    >
      {children}
    </Link>
  )
}

export default Nav
