import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Eye, Flame } from "lucide-react";

export const metadata = {
  title: "Rólam | TwoFrame Studio",
  description:
    "Szabó Barnabás, a TwoFrame Studio alapítója és kreatív igazgatója. Vizuális történetmesélés, modern tartalomgyártás és hosszú távú kreatív partnerségek.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
        {/* Left: Portrait Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
            <Image
              src="/images/IMG_4579.webp"
              alt="Szabó Barnabás - TwoFrame Studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-widest text-violet-400 font-semibold block mb-1">
                Alapító & Kreatív Igazgató
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-white">
                Szabó Barnabás
              </h2>
            </div>
          </div>
        </div>

        {/* Right: Concise & Confident Statement */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold w-max">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kreatív Igazgató</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.15]">
            Vizuális történetmesélés kompromisszumok nélkül.
          </h1>

          <div className="space-y-4 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              A <strong className="text-white font-medium">TwoFrame Studio</strong>-t azzal a vízióval
              hoztam létre, hogy a zenei szféra nyers energiáját és a modern divat- valamint
              márkavilág kifinomult esztétikáját ötvözzük.
            </p>
            <p>
              Nem sablonokat készítünk. Akár egy aréna koncert fellépéséről, akár egy feltörekvő
              ruhamárka kampányáról vagy egy előadó lemezborítójáról van szó, a célunk mindig
              ugyanaz: olyan anyagokat alkotni, amelyek azonnal megragadják a figyelmet és
              hosszú távon építik a brand értékét.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <Flame className="w-5 h-5 text-violet-400 mb-2" />
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
                Élő Energia
              </h4>
              <p className="text-xs text-zinc-400 font-light">
                Koncertek, turnék és rendezvények filmes dokumentálása.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <Eye className="w-5 h-5 text-violet-400 mb-2" />
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
                Márkaidentitás
              </h4>
              <p className="text-xs text-zinc-400 font-light">
                Karakteres imázsfilmek és vizuális social kampányok.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <ShieldCheck className="w-5 h-5 text-violet-400 mb-2" />
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
                Partnerség
              </h4>
              <p className="text-xs text-zinc-400 font-light">
                Megbízható, rendszeres havi tartalomgyártás.
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/kapcsolat"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-950/40"
            >
              <span>Vedd fel a kapcsolatot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/munkak"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>Munkáink</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Workflow / Studio Standard */}
      <div className="p-8 sm:p-14 rounded-3xl bg-zinc-950/80 border border-white/[0.08] relative overflow-hidden">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold block mb-2">
            Hogyan Dolgozunk
          </span>
          <h3 className="text-2xl sm:text-4xl font-normal text-white">
            A koncepciótól a kész kampányig
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-violet-400">01 / KONCEPCIÓ</span>
            <h4 className="text-base font-medium text-white">Irányvonal & Tervezés</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Megértjük az előadó vagy márka céljait, moodboardot és forgatási/fotózási tervet készítünk.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-violet-400">02 / GYÁRTÁS</span>
            <h4 className="text-base font-medium text-white">Forgatás & Fotózás</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Professzionális kamerákkal, dedikált világítással és határozott rendezéssel rögzítjük az anyagot.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-violet-400">03 / UTÓMUNKA</span>
            <h4 className="text-base font-medium text-white">Color Grading & Edit</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Egyedi filmes színkorrekció, precíz retusálás, ritmikus vágás és hangutómunka.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-violet-400">04 / ÁTADÁS</span>
            <h4 className="text-base font-medium text-white">Ready-to-Post</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Többféle felbontásban, social-ready formátumokban (9:16, 4:5, 16:9) azonnali publikálásra készen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
