import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | TwoFrame Studio",
  description: "A TwoFrame Studio hivatalos Adatkezelési Tájékoztatója és adatvédelmi nyilatkozata a GDPR szabályozásnak megfelelően.",
  alternates: { canonical: "/adatkezeles" },
};

export default function PrivacyPage() {
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
          Adatvédelem &amp; GDPR
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
          Adatkezelési Tájékoztató
        </h1>
        <p className="text-zinc-400 text-sm font-light">
          Hatályos: 2026. január 1-től &bull; TwoFrame Studio
        </p>
      </header>

      <div className="space-y-10 text-sm text-zinc-300 font-light leading-relaxed">
        {/* 1. Adatkezelő */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">1. Az Adatkezelő megnevezése</h2>
          <p>
            A jelen tájékoztató célja, hogy rögzítse a <strong>TwoFrame Studio</strong> (Alapító / Képviselő: Szabó Barnabás; Székhely: Budapest, Magyarország; E-mail: <a href="mailto:kapcsolat@twoframe.hu" className="text-violet-300 hover:underline">kapcsolat@twoframe.hu</a>; Telefonszám: +36 70 516 8766; Weboldal: <a href="https://twoframe.hu" className="text-violet-300 hover:underline">twoframe.hu</a>, a továbbiakban: <strong>Adatkezelő</strong>) által alkalmazott adatvédelmi és adatkezelési elveket.
          </p>
        </section>

        {/* 2. Kezelt adatok köre */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">2. A kezelt személyes adatok köre</h2>
          <p>A weboldalon található kapcsolatfelvételi és ajánlatkérő űrlap kitöltése során az alábbi személyes adatok megadására kerülhet sor:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li><strong>Név</strong> (azonosításhoz és közvetlen kapcsolattartáshoz)</li>
            <li><strong>E-mail cím</strong> (az árajánlat megküldéséhez és egyeztetéshez)</li>
            <li><strong>Telefonszám</strong> (opcionális, sürgős egyeztetéshez)</li>
            <li><strong>Cég / előadó neve, social link</strong> (a projekt igényeinek megértéséhez)</li>
            <li><strong>Projekt leírása és tervezett időpontja</strong> (az ajánlat elkészítéséhez)</li>
          </ul>
        </section>

        {/* 3. Adatkezelés célja és jogalapja */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">3. Az adatkezelés célja és jogalapja</h2>
          <p>
            <strong>Cél:</strong> A megkeresések fogadása, árajánlat készítése, a megbízással kapcsolatos kommunikáció és a szerződéskötés előkészítése.
          </p>
          <p>
            <strong>Jogalap:</strong> Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR) 6. cikk (1) bekezdés b) pontja alapján olyan szerződéskötést megelőző lépések megtétele, amelyek az érintett kérésére történnek, valamint a 6. cikk (1) bekezdés a) pontja szerinti önkéntes hozzájárulás.
          </p>
        </section>

        {/* 4. Időtartam */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">4. Az adatok megőrzésének időtartama</h2>
          <p>
            Az Adatkezelő a beérkezett ajánlatkéréseket és kapcsolódó adatokat legfeljebb a megkereséstől számított 1 évig őrzi meg, amennyiben nem jön létre szerződéses jogviszony. Létrejött megbízás esetén a számviteli és adójogi kötelezettségeknek megfelelően a számlázási adatokat a törvényben előírt ideig (8 év) kezeli.
          </p>
        </section>

        {/* 5. Érintetti jogok */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">5. Az érintettek jogai</h2>
          <p>Az érintett bármikor kérelmezheti az Adatkezelőtől:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li>a rá vonatkozó személyes adatokhoz való hozzáférést,</li>
            <li>az adatok helyesbítését vagy törlését,</li>
            <li>az adatkezelés korlátozását,</li>
            <li>a megadott hozzájárulás bármikori visszavonását.</li>
          </ul>
          <p>
            A kérelmeket a <a href="mailto:kapcsolat@twoframe.hu" className="text-violet-300 hover:underline">kapcsolat@twoframe.hu</a> e-mail címre küldött írásos nyilatkozattal lehet benyújtani.
          </p>
        </section>

        {/* 6. Jogorvoslat */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white tracking-tight">6. Jogorvoslati lehetőségek</h2>
          <p>
            Amennyiben az érintett megítélése szerint a személyes adatai kezelése nem felel meg a jogszabályi előírásoknak, panasszal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, 1055 Budapest, Falk Miksa utca 9-11., <a href="https://naih.hu" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:underline">naih.hu</a>), vagy bírósághoz fordulhat.
          </p>
        </section>
      </div>
    </div>
  );
}
