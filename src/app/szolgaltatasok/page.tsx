import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Szolgáltatások — Koncert-, Márka- és Portréfotózás",
  description:
    "Live & Events koncertfotózás és aftermovie, Brands & Commercial tartalomgyártás, Portrait & Editorial portrék és havi Content Partnership együttműködések.",
  alternates: { canonical: "/szolgaltatasok" },
  openGraph: {
    title: "Szolgáltatások — Koncert-, Márka- és Portréfotózás | TwoFrame Studio",
    description:
      "Live & Events koncertfotózás és aftermovie, Brands & Commercial tartalomgyártás, Portrait & Editorial portrék és havi Content Partnership együttműködések.",
    url: `${siteConfig.url}/szolgaltatasok`,
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="max-w-2xl mb-20 animate-fade-in">
        <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-3">
          Szolgáltatások
        </span>
        <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-5">
          Vizuális megoldások,<br />amelyek építik a brandedet.
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-lg">
          A nyers színpadi energiától a letisztult márkakampányokig.
          Minden megbízás egyedi — az árazás is.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-0 divide-y divide-white/[0.06]">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-32 py-16 sm:py-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Text Column */}
              <div className={`lg:col-span-7 flex flex-col gap-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Number + Title */}
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] font-mono text-zinc-600 tracking-widest">
                    {service.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                    {service.title}
                  </h2>
                </div>

                {/* Tagline */}
                <p className="text-base text-violet-300/80 font-light">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-lg">
                  {service.description}
                </p>

                {/* For whom */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-medium block mb-1.5">
                    Kiknek
                  </span>
                  <p className="text-sm text-zinc-300 font-light">{service.forWhom}</p>
                </div>

                {/* Deliverables — simple list, no icon boxes */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-medium block mb-3">
                    Tartalmak &amp; Formátumok
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-zinc-300 px-3 py-1.5 border border-white/[0.08] bg-white/[0.02] font-light"
                        style={{ borderRadius: "2px" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href={`/kapcsolat?tipus=${
                      service.id === "live-events"
                        ? "concert"
                        : service.id === "brands-commercial"
                        ? "commercial"
                        : service.id === "portrait-editorial"
                        ? "portrait"
                        : "partnership"
                    }`}
                    className={`inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                      service.isPartnership
                        ? "bg-violet-600 hover:bg-violet-500 text-white"
                        : "bg-white text-zinc-950 hover:bg-zinc-200"
                    }`}
                  >
                    <span>Ajánlatkérés</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div className={`lg:col-span-5 relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 group" style={{ borderRadius: "3px" }}>
                  <Image
                    src={service.image}
                    alt={`${service.title} — TwoFrame Studio`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-16 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
            Nem vagy biztos, mire van szükséged?
          </h3>
          <p className="text-zinc-500 text-sm font-light">
            Keress minket, és segítünk kiválasztani a megfelelő formátumot.
          </p>
        </div>
        <Link
          href="/kapcsolat"
          className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300"
        >
          <span>Kapcsolat</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
