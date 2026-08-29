import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "/munkak", label: "Munkák" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/rolam", label: "Rólam" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-white/[0.07] text-zinc-400">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">

          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex flex-col leading-none w-max" aria-label="TwoFrame Studio — Főoldal">
              <span className="font-semibold tracking-[0.18em] text-sm uppercase text-white">
                TwoFrame
              </span>
              <span className="text-[9px] tracking-[0.32em] text-zinc-500 uppercase font-medium mt-0.5">
                Studio
              </span>
            </Link>

            <p className="text-sm text-zinc-400 max-w-[300px] leading-relaxed font-light">
              Vizuális tartalom előadóknak, eseményeknek és márkáknak.
            </p>

            <div className="flex items-center gap-3 text-[11px] tracking-wider text-zinc-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Elérhető új projektekre</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-zinc-300 font-medium">
              Navigáció
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-zinc-300 font-medium">
              Területek
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/szolgaltatasok#live-events" className="hover:text-white transition-colors duration-200">
                  Live &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok#brands-commercial" className="hover:text-white transition-colors duration-200">
                  Brands &amp; Commercial
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok#portrait-editorial" className="hover:text-white transition-colors duration-200">
                  Portré &amp; Editorial
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok#content-partnership" className="hover:text-violet-400 transition-colors duration-200">
                  Content Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-zinc-300 font-medium">
              Elérhetőség
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:kapcsolat@twoframe.hu"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                <span>kapcsolat@twoframe.hu</span>
              </a>
              <a
                href="tel:+36705168766"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-3.5 h-3.5 shrink-0 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                <span>+36 70 516 8766</span>
              </a>
              <p className="text-zinc-500 text-xs mt-1">Budapest &bull; Magyarország</p>

              <Link
                href="/kapcsolat"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white border border-white/15 hover:bg-violet-600 hover:border-violet-500 px-4 py-2.5 rounded-full transition-all duration-300 w-max mt-1"
              >
                <span>Projekt indítása</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <span>© {new Date().getFullYear()} TwoFrame Studio. Minden jog fenntartva.</span>
          <div className="flex items-center gap-5">
            <a href="https://twoframe.hu" className="hover:text-zinc-300 transition-colors tracking-wider">
              twoframe.hu
            </a>
            <span className="text-zinc-700">/</span>
            <span>Alapító: Szabó Barnabás</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
