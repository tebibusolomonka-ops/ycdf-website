"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {/* The user will upload their logo image as public/logo.png */}
            <img 
              src="/logo.png" 
              alt="YCDF Logo" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all relative group ${isScrolled ? "text-slate-600 hover:text-teal-dark hover:bg-slate-50" : "text-slate-700 hover:text-teal-dark hover:bg-slate-100/50"}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal rounded-full group-hover:w-6 transition-all" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/volunteer"
              className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-6"
            >
              Get Involved
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-slate-800 hover:bg-slate-200/50"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-slate-200 transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold text-slate-900">YCDF</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-500 hover:text-slate-900 p-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-600 hover:text-teal-dark hover:bg-slate-50 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <Link
                href="/volunteer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center text-center"
              >
                Get Involved
              </Link>
            </div>
            <div className="mt-8 space-y-3 text-sm text-slate-500">
              <a
                href="tel:+251118685001"
                className="flex items-center gap-2 hover:text-teal-dark"
              >
                <Phone size={14} />
                +251 118 685001
              </a>
              <a
                href="mailto:info@ycdfet.org"
                className="flex items-center gap-2 hover:text-teal-dark"
              >
                <Mail size={14} />
                info@ycdfet.org
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
