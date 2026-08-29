import React, { Suspense } from "react";
import InquiryForm from "@/components/InquiryForm";
import { Mail, Phone, MapPin, Sparkles, Clock } from "lucide-react";

export const metadata = {
  title: "Kapcsolat | TwoFrame Studio",
  description:
    "Dolgozzunk együtt. Mesélj röviden a projektről, és hamarosan jelentkezem a részletekkel. TwoFrame Studio Budapest.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-14 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Projekt Egyeztetés</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.1] mb-5">
          Dolgozzunk együtt.
        </h1>

        <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed mb-3">
          Mesélj röviden a projektről, és hamarosan jelentkezem a részletekkel.
        </p>

        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
          Koncert, esemény, brand content, portré vagy hosszabb távú együttműködés — nézzük meg, mit tudunk kihozni belőle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Studio Info */}
        <aside className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
          {/* Studio Contact Card */}
          <div className="p-8 rounded-3xl bg-zinc-950/90 border border-white/[0.08] flex flex-col gap-6 shadow-xl">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-violet-400 font-semibold block mb-1">
                Közvetlen Kapcsolat
              </span>
              <h2 className="text-2xl font-normal text-white tracking-tight">
                TwoFrame Studio
              </h2>
              <span className="text-xs text-zinc-400 font-mono">twoframe.hu</span>
            </div>

            <div className="flex flex-col gap-5 text-sm border-t border-white/[0.08] pt-6">
              {/* Email */}
              <a
                href="mailto:kapcsolat@twoframe.hu"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-violet-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                    Email
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-violet-200">
                    kapcsolat@twoframe.hu
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+36705168766"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-violet-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                    Telefon
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-violet-200">
                    +36 70 516 8766
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                    Bázis & Lokáció
                  </span>
                  <span className="text-sm text-zinc-200">Budapest • Országos</span>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/20 flex items-center gap-3 text-xs text-zinc-300">
              <Clock className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Garantált válasz 24 órán belül munkanapokon.</span>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-6 rounded-2xl bg-zinc-950/40 border border-white/[0.06] text-xs text-zinc-400 flex flex-col gap-2">
            <span className="text-white font-medium">Sürgős forgatás vagy hétvégi koncert?</span>
            <p className="font-light leading-relaxed">
              Ha a projekted azonnali rendelkezésre állást igényel, keress minket telefonon a leggyorsabb egyeztetéshez.
            </p>
          </div>
        </aside>

        {/* Right Column: Premium Inquiry Form */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <Suspense
            fallback={
              <div className="w-full h-96 rounded-3xl bg-zinc-950/80 border border-white/10 flex items-center justify-center text-zinc-500">
                Űrlap betöltése...
              </div>
            }
          >
            <InquiryForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
