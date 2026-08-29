import React, { Suspense } from "react";
import InquiryForm from "@/components/InquiryForm";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kapcsolat — Projekt Ajánlatkérés",
  description:
    "Dolgozzunk együtt. Kérj egyedi árajánlatot koncert-, esemény-, márka- vagy portréfotózásra, videógyártásra vagy havi tartalompartnerségre.",
  alternates: { canonical: "/kapcsolat" },
  openGraph: {
    title: "Kapcsolat — Projekt Ajánlatkérés | TwoFrame Studio",
    description:
      "Dolgozzunk együtt. Kérj egyedi árajánlatot koncert-, esemény-, márka- vagy portréfotózásra, videógyártásra vagy havi tartalompartnerségre.",
    url: `${siteConfig.url}/kapcsolat`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col">
      {/* Header */}
      <div className="max-w-2xl mb-14 animate-fade-in">
        <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-3">
          Kapcsolat
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1] mb-5">
          Dolgozzunk együtt.
        </h1>

        <p className="text-base text-zinc-400 font-light leading-relaxed max-w-md">
          Mesélj röviden a projektről, és hamarosan jelentkezem a részletekkel. Koncert, brand content, portré vagy hosszabb távú együttműködés — nézzük meg, mit tudunk kihozni belőle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact info — simple, not in a glass card */}
        <aside className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="mailto:kapcsolat@twoframe.hu"
              className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors shrink-0" />
              <span>kapcsolat@twoframe.hu</span>
            </a>
            <a
              href="tel:+36705168766"
              className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors shrink-0" />
              <span>+36 70 516 8766</span>
            </a>
            <p className="text-zinc-500 text-xs ml-7">Budapest &bull; Országos</p>
          </div>

          <div className="border-t border-white/[0.07] pt-5">
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Garantált válasz 24 órán belül munkanapokon.
            </p>
          </div>

          <div className="border-t border-white/[0.07] pt-5">
            <p className="text-xs text-zinc-400 leading-relaxed">
              <span className="text-white font-medium">Sürgős forgatás vagy hétvégi koncert?</span>{" "}
              Keress telefonon a leggyorsabb egyeztetéshez.
            </p>
          </div>
        </aside>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <Suspense
            fallback={
              <div className="w-full h-96 flex items-center justify-center text-zinc-600 text-sm">
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
