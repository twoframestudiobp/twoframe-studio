import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek (ÁSZF) | TwoFrame Studio",
  description: "A TwoFrame Studio hivatalos Általános Szerződési Feltételei fotós, videós és kreatív szolgáltatásokra.",
  alternates: { canonical: "/aszf" },
};

export default function AszfPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto w-full">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
          <span>Vissza a főoldalra</span>
        </Link>
      </div>

      <header className="mb-12 border-b border-white/[0.08] pb-8">
        <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-3">
          Jogi dokumentum
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
          Általános Szerződési Feltételek
        </h1>
        <p className="text-zinc-400 text-sm font-light">
          Hatályos: 2026. január 1-től visszavonásig &bull; TwoFrame Studio
        </p>
      </header>

      <div className="space-y-10 text-sm text-zinc-300 font-light leading-relaxed">
        {/* 1. Szolgáltató adatai */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">1. A Szolgáltató adatai</h2>
          <p>
            Jelen Általános Szerződési Feltételek (a továbbiakban: <strong>ÁSZF</strong>) a <strong>TwoFrame Studio</strong> (Képviselő / Alapító: Szabó Barnabás; Székhely/Bázis: Budapest, Magyarország; E-mail: <a href="mailto:kapcsolat@twoframe.hu" className="text-violet-300 hover:underline">kapcsolat@twoframe.hu</a>; Telefonszám: +36 70 516 8766; Weboldal: <a href="https://twoframe.hu" className="text-violet-300 hover:underline">twoframe.hu</a>) által nyújtott fotográfiai, videográfiai és kreatív tartalomgyártási szolgáltatások igénybevételének feltételeit tartalmazza.
          </p>
        </section>

        {/* 2. Szolgáltatások köre */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">2. A Szolgáltatások köre</h2>
          <p>A Szolgáltató az alábbi főbb tevékenységi területeken nyújt egyedi és megbízási szerződésen alapuló kreatív szolgáltatásokat:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li><strong>Live &amp; Events:</strong> Koncertek, fellépések, turnék, fesztiválok és rendezvények vizuális rögzítése, aftermovie készítés.</li>
            <li><strong>Brands &amp; Commercial:</strong> Márkakampányok, termék- és imázsfotózás, digitális reklámanyagok és social formátumok (Reels, TikTok) gyártása.</li>
            <li><strong>Portré &amp; Editorial:</strong> Előadói promóciós portrék, lemezborító fotózás, stúdió- és modellfotózás.</li>
            <li><strong>Content Partnership:</strong> Havi rendszerességű, átfogó tartalomgyártási együttműködés előadóknak és márkáknak.</li>
          </ul>
        </section>

        {/* 3. Ajánlatkérés és megrendelés */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">3. Ajánlatkérés, szerződéskötés és díjazás</h2>
          <p>
            A weboldalon keresztül történő kapcsolatfelvétel és ajánlatkérés nem minősül közvetlen megrendelésnek. A megbízás a felek által írásban (elektronikus levélben vagy egyedi megbízási szerződésben) elfogadott és visszaigazolt árajánlat alapján jön létre.
          </p>
          <p>
            A szolgáltatási díjak egyedi kalkuláció alapján kerülnek meghatározásra a projekt jellege, helyszíne, időtartama és a kért átadási formátumok figyelembevételével.
          </p>
        </section>

        {/* 4. Szerzői jogok és felhasználás */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">4. Szerzői jogok és felhasználási jog</h2>
          <p>
            A Szolgáltató által készített valamennyi fénykép, videofelvétel és kreatív anyag szerzői jogi védelem alatt áll. A Megrendelő a szolgáltatási díj teljes megfizetésével a szerződésben rögzített célra és felületekre vonatkozó, nem kizárólagos felhasználási jogot szerez az átadott anyagokra.
          </p>
          <p>
            A Szolgáltató jogosult az elkészült műveket saját portfóliójában, weboldalán (<a href="https://twoframe.hu" className="text-violet-300">twoframe.hu</a>) és szakmai közösségi média felületein referenciaként feltüntetni, kivéve, ha a felek előzetesen írásban titoktartási vagy NDA megállapodást kötöttek.
          </p>
        </section>

        {/* 5. Lemondási feltételek */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">5. Lemondási és módosítási feltételek</h2>
          <p>
            A megbeszélt forgatási vagy fotózási időpont módosítására vagy lemondására a felek kölcsönös egyeztetésével van lehetőség. Amennyiben a Megrendelő a megbeszélt időpont előtt 48 órán belül mondja le az eseményt, a Szolgáltató jogosult a felmerült előzetes költségeinek vagy a megbízási díj egy részének felszámítására.
          </p>
        </section>

        {/* 6. Záró rendelkezések */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">6. Záró rendelkezések</h2>
          <p>
            Jelen ÁSZF-ben nem szabályozott kérdésekben a magyar Polgári Törvénykönyv (Ptk.) és a vonatkozó jogszabályok irányadóak. A felek az esetleges vitás kérdéseket elsősorban békés, tárgyalásos úton rendezik.
          </p>
        </section>
      </div>
    </div>
  );
}
