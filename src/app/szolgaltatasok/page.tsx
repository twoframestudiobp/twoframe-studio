import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Film,
  Camera,
  Repeat,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Szolgáltatások | TwoFrame Studio",
  description:
    "Live & Events koncertfotózás, Brands & Commercial videógyártás, Portrait & Editorial fotózás és havi Content Partnership együttműködések.",
};

const getServiceIcon = (id: string) => {
  switch (id) {
    case "live-events":
      return <Zap className="w-6 h-6 text-violet-400" />;
    case "brands-commercial":
      return <Film className="w-6 h-6 text-violet-400" />;
    case "portrait-editorial":
      return <Camera className="w-6 h-6 text-violet-400" />;
    case "content-partnership":
      return <Repeat className="w-6 h-6 text-violet-400" />;
    default:
      return <Sparkles className="w-6 h-6 text-violet-400" />;
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="max-w-3xl mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Szolgáltatásaink</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
          Vizuális Megoldások
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed mb-6">
          A nyers zenei színpadi energiától a letisztult márkakampányokig és a folyamatos
          havi tartalomgyártásig. Nem pusztán fájlokat adunk át, hanem a márkád vizuális
          jelenlétét emeljük új szintre.
        </p>

        {/* Pricing Policy Banner */}
        <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300">
          <Info className="w-4 h-4 text-violet-400 shrink-0" />
          <span>
            <strong className="text-white font-medium">Árazási elvünk:</strong> Minden projekt más volumenű és összetettségű. <span className="text-violet-300 font-medium">Projektek egyedi ajánlat alapján.</span>
          </span>
        </div>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-20">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-32 rounded-3xl p-8 sm:p-12 border transition-all duration-300 ${
              service.isPartnership
                ? "bg-gradient-to-br from-violet-950/30 via-[#0e0e14] to-zinc-950 border-violet-500/40 shadow-2xl shadow-violet-950/20"
                : "bg-zinc-950/80 border-white/[0.08]"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Text & Content */}
              <div className={`lg:col-span-7 flex flex-col gap-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-500 tracking-wider">
                        {service.number}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {service.isPartnership && (
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-[11px] uppercase tracking-widest font-semibold">
                      Kiemelt Partnerség
                    </span>
                  )}
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-base sm:text-lg text-violet-300/90 font-normal">
                  {service.tagline}
                </p>

                {/* Main Description */}
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Target Audience: Kiknek szól */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Kiknek ajánljuk:
                  </span>
                  <p className="text-sm text-zinc-200 font-normal">{service.forWhom}</p>
                </div>

                {/* Deliverables: Készülő tartalmak */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                    Készülő tartalmak & Formátumok:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight Quote */}
                <div className="text-xs text-zinc-400 italic border-l-2 border-violet-500 pl-3 py-0.5">
                  ★ {service.highlight}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
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
                    className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-md ${
                      service.isPartnership
                        ? "bg-violet-600 hover:bg-violet-500 text-white"
                        : "bg-white text-zinc-950 hover:bg-zinc-200"
                    }`}
                  >
                    <span>Ajánlatkérés ehhez a területhez</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className={`lg:col-span-5 relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-300 font-light flex items-center justify-between">
                    <span className="uppercase tracking-widest text-[10px] text-violet-400 font-semibold">
                      TwoFrame Stúdió Minőség
                    </span>
                    <span className="font-mono text-zinc-400">4K • RAW • EDITORIAL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Global Bottom CTA */}
      <div className="mt-24 text-center max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-3xl font-normal text-white mb-3">
          Nem vagy biztos benne, mire van pontosan szükséged?
        </h3>
        <p className="text-zinc-400 text-sm font-light mb-8">
          Keress minket bizalommal, és segítünk kiválasztani a céljaidhoz és költségkeretedhez legjobban illeszkedő formátumot.
        </p>
        <Link
          href="/kapcsolat"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-xl"
        >
          <span>Lépj kapcsolatba velünk</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
