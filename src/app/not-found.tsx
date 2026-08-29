import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 — Az oldal nem található | TwoFrame Studio",
  description: "A keresett oldal nem található a TwoFrame Studio weboldalán.",
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 sm:px-8 pt-32 pb-20">
      <div className="max-w-md mx-auto text-center flex flex-col items-center animate-fade-in">
        <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-4">
          404 &ensp;·&ensp; Hiba
        </span>

        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
          Ez az oldal nincs a képen.
        </h1>

        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-10">
          A keresett oldal nem található vagy áthelyezésre került.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Vissza a főoldalra</span>
          </Link>

          <Link
            href="/munkak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[11px] font-medium uppercase tracking-[0.2em] border border-white/15 text-zinc-300 hover:text-white transition-all"
          >
            <span>Munkáink</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
