"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/munkak", label: "Munkák" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/rolam", label: "Rólam" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-400 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#08080a] rounded-[7px] flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
              <span className="font-bold text-xs tracking-tighter text-white">2F</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-[0.15em] text-sm uppercase text-white">
              TwoFrame
            </span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase -mt-1 font-medium">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-violet-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] bg-white/5 border border-white/15 text-white hover:bg-violet-600 hover:border-violet-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            <span>Kérj ajánlatot</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-400/50"
          aria-label="Navigáció megnyitása"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#08080a]/98 backdrop-blur-xl border-t border-white/[0.08] z-40 md:hidden flex flex-col justify-between p-8 animate-fade-in">
          <nav className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-light uppercase tracking-[0.15em] transition-colors ${
                    isActive ? "text-violet-400 font-normal" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-4">
            <Link
              href="/kapcsolat"
              className="w-full text-center py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 text-white hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/30"
            >
              Kérj ajánlatot
            </Link>
            <div className="text-center text-xs text-zinc-400 mt-2">
              <span>kapcsolat@twoframe.hu</span> • <span>+36 70 516 8766</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
