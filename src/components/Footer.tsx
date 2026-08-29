import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-white/[0.08] text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand & Statement */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08080a] rounded-[7px] flex items-center justify-center">
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

            <p className="text-sm text-zinc-300 max-w-sm leading-relaxed font-light">
              Vizuális tartalom előadóknak, eseményeknek és márkáknak. Fotó, videó és kreatív
              tartalom, amely építi a brandedet.
            </p>

            <div className="flex items-center gap-4 text-xs tracking-wider uppercase text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Elérhető új projektekre • 2024 / 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
              Navigáció
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Főoldal
                </Link>
              </li>
              <li>
                <Link href="/munkak" className="hover:text-white transition-colors">
                  Munkák
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok" className="hover:text-white transition-colors">
                  Szolgáltatások
                </Link>
              </li>
              <li>
                <Link href="/rolam" className="hover:text-white transition-colors">
                  Rólam
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="hover:text-white transition-colors">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
              Szolgáltatások
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/szolgaltatasok#live-events" className="hover:text-white transition-colors">
                  Live & Events
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok#brands-commercial" className="hover:text-white transition-colors">
                  Brands & Commercial
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok#portrait-editorial" className="hover:text-white transition-colors">
                  Portrait & Editorial
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok#content-partnership" className="hover:text-violet-400 text-violet-300/90 transition-colors font-medium">
                  Content Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
              Elérhetőség
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:kapcsolat@twoframe.hu"
                className="flex items-center gap-2.5 hover:text-violet-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                <span>kapcsolat@twoframe.hu</span>
              </a>
              <a
                href="tel:+36705168766"
                className="flex items-center gap-2.5 hover:text-violet-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                <span>+36 70 516 8766</span>
              </a>
              <div className="flex items-center gap-2.5 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>Budapest, Magyarország</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/kapcsolat"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white bg-white/5 hover:bg-violet-600 hover:border-violet-500 border border-white/10 px-4 py-2 rounded-full transition-all duration-300"
                >
                  <span>Projekt indítása</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} TwoFrame Studio. Minden jog fenntartva.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400 tracking-wider">twoframe.hu</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">Alapító & Kreatív Igazgató: Szabó Barnabás</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
