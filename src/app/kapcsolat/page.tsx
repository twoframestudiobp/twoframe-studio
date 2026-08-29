import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { Mail, Phone, MapPin, Sparkles, Clock, Globe, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Kapcsolat | TwoFrame Studio",
  description:
    "Kérj ajánlatot koncertfotózásra, videógyártásra, portréfotózásra vagy havi tartalompartnerségre. TwoFrame Studio Budapest.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="max-w-3xl mb-14 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Kapcsolatfelvétel</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
          Kezdjük el a közös munkát.
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
          Töltsd ki az alábbi ajánlatkérő űrlapot az elképzeléseiddel, vagy keress minket közvetlenül
          az elérhetőségeinken.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Studio Contact Card */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex flex-col gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-violet-400 font-semibold block mb-1">
                Közvetlen Elérhetőség
              </span>
              <h2 className="text-2xl font-normal text-white tracking-tight">
                TwoFrame Studio
              </h2>
              <span className="text-xs text-zinc-400 font-light">twoframe.hu</span>
            </div>

            <div className="flex flex-col gap-4 text-sm border-t border-white/[0.08] pt-6">
              <a
                href="mailto:kapcsolat@twoframe.hu"
                className="flex items-center gap-3 text-zinc-300 hover:text-violet-300 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                    Email
                  </span>
                  <span className="text-sm font-medium">kapcsolat@twoframe.hu</span>
                </div>
              </a>

              <a
                href="tel:+36705168766"
                className="flex items-center gap-3 text-zinc-300 hover:text-violet-300 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                    Telefon
                  </span>
                  <span className="text-sm font-medium">+36 70 516 8766</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                    Helyszín
                  </span>
                  <span className="text-sm">Budapest & Országosan</span>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 flex items-center gap-3 text-xs text-zinc-300">
              <Clock className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Garantált válasz 24 órán belül munkanapokon.</span>
            </div>
          </div>

          {/* Social / Portfolio quick note */}
          <div className="p-6 rounded-2xl bg-zinc-950/40 border border-white/[0.06] text-xs text-zinc-400 flex flex-col gap-2">
            <span className="text-white font-medium">Sürgős forgatás vagy esemény?</span>
            <p className="font-light leading-relaxed">
              Ha a projekted azonnali rendelkezésre állást igényel (pl. hétvégi fellépés), hívj minket telefonon a leggyorsabb egyeztetéshez.
            </p>
          </div>
        </div>

        {/* Right Column: Premium Inquiry Form */}
        <div className="lg:col-span-8">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
