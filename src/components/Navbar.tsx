"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08080a]/95 backdrop-blur-lg border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white group"
          aria-label="TwoFrame Studio — Főoldal"
        >
          {/* Wordmark style logo */}
          <div className="flex flex-col leading-none">
            <span className="font-semibold tracking-[0.18em] text-[13px] uppercase text-white group-hover:text-zinc-200 transition-colors">
              TwoFrame
            </span>
            <span className="text-[9px] tracking-[0.32em] text-zinc-500 uppercase font-medium">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Főnavigáció">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[11px] uppercase tracking-[0.22em] transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-zinc-100 font-normal"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-violet-400/80" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-[0.18em] border border-white/20 text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-300"
          >
            Kérj ajánlatot
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-1 text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
          aria-label={mobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-[#08080a] z-40 md:hidden flex flex-col pt-24 px-8 pb-10">
          {/* Close button stays fixed */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Menü bezárása"
          >
            <X className="w-5 h-5" />
          </button>

          <nav className="flex flex-col gap-1" aria-label="Mobilnavigáció">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-4 text-2xl font-light tracking-tight border-b border-white/[0.06] transition-colors animate-slide-up ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {isActive && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 mr-3 mb-0.5 align-middle" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 flex flex-col gap-3">
            <Link
              href="/kapcsolat"
              className="w-full text-center py-4 rounded-full text-xs font-semibold uppercase tracking-[0.22em] bg-violet-600 hover:bg-violet-500 text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kérj ajánlatot
            </Link>
            <p className="text-center text-[11px] text-zinc-500 mt-1">
              kapcsolat@twoframe.hu
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
