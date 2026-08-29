"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientName: "",
    projectType: "Live & Events",
    date: "",
    location: "Budapest",
    description: "",
    budget: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setStatus("error");
      setErrorMessage("Kérjük, töltsd ki a kötelező mezőket (Név, Email, Projekt leírása).");
      return;
    }

    setStatus("submitting");

    // Simulate API request or mailto action
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        clientName: "",
        projectType: "Live & Events",
        date: "",
        location: "Budapest",
        description: "",
        budget: "",
      });
    }, 800);
  };

  return (
    <div className="w-full bg-[#0d0d12]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle Purple Accent Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {status === "success" ? (
        <div className="py-12 flex flex-col items-center text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400 mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-light tracking-tight text-white mb-2">
            Köszönjük a megkeresést!
          </h3>
          <p className="text-sm text-zinc-400 max-w-md mb-8">
            Az üzeneted sikeresen megérkezett. Hamarosan, legkésőbb 24 órán belül
            felvesszük veled a kapcsolatot a részletekkel és az egyedi ajánlattal.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Új üzenet küldése
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
          <div className="border-b border-white/[0.06] pb-4 mb-2">
            <span className="text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold block mb-1">
              Projekt Ajánlatkérés
            </span>
            <h3 className="text-xl sm:text-2xl font-normal text-white">
              Beszéljünk az elképzeléseidről
            </h3>
          </div>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center gap-3 text-red-200 text-xs">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Név */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Név <span className="text-violet-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Pl. Kovács Péter"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Email cím <span className="text-violet-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="peter@pelda.hu"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              />
            </div>

            {/* Telefonszám */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Telefonszám
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+36 30 123 4567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              />
            </div>

            {/* Cég / előadó neve */}
            <div className="flex flex-col gap-2">
              <label htmlFor="clientName" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Cég / Előadó neve
              </label>
              <input
                id="clientName"
                name="clientName"
                type="text"
                placeholder="Pl. Zenekar vagy Márkanév"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              />
            </div>

            {/* Projekt típusa */}
            <div className="flex flex-col gap-2">
              <label htmlFor="projectType" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Projekt típusa
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors cursor-pointer"
              >
                <option value="Live & Events" className="bg-zinc-900 text-white">Live & Events (Koncert / Esemény)</option>
                <option value="Brands & Commercial" className="bg-zinc-900 text-white">Brands & Commercial (Márka / Reklámfilm)</option>
                <option value="Portrait & Editorial" className="bg-zinc-900 text-white">Portrait & Editorial (Portré / Lookbook)</option>
                <option value="Content Partnership" className="bg-zinc-900 text-white">Content Partnership (Havi rendszeres tartalom)</option>
                <option value="Egyéb" className="bg-zinc-900 text-white">Egyéb egyedi projekt</option>
              </select>
            </div>

            {/* Dátum / Időkeret */}
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Tervezett dátum / időszak
              </label>
              <input
                id="date"
                name="date"
                type="text"
                placeholder="Pl. 2025. tavasz / Konkrét dátum"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              />
            </div>

            {/* Helyszín */}
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Helyszín
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Pl. Budapest / Stúdió / Országos"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              />
            </div>

            {/* Tervezett költségkeret (optional) */}
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Tervezett költségkeret <span className="text-zinc-500 font-normal lowercase">(opcionális)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors cursor-pointer"
              >
                <option value="" className="bg-zinc-900 text-zinc-400">Válassz sávot (nem kötelező)</option>
                <option value="150k - 300k HUF" className="bg-zinc-900 text-white">150.000 - 300.000 Ft</option>
                <option value="300k - 600k HUF" className="bg-zinc-900 text-white">300.000 - 600.000 Ft</option>
                <option value="600k - 1.2M HUF" className="bg-zinc-900 text-white">600.000 - 1.200.000 Ft</option>
                <option value="1.2M+ HUF" className="bg-zinc-900 text-white">1.200.000 Ft felett</option>
                <option value="Partnership / Havi" className="bg-zinc-900 text-white">Havi partnerség / Folyamatos</option>
              </select>
            </div>
          </div>

          {/* Projekt rövid leírása */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              Projekt rövid leírása <span className="text-violet-400">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Írd le röviden az elképzelésedet, a célokat, a kért formátumokat (fotó, videó, social anyagok)..."
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-500 order-2 sm:order-1">
              * Kötelező mezők. Projektek egyedi ajánlat alapján.
            </span>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-lg shadow-violet-900/40 disabled:opacity-50 hover:shadow-violet-800/60"
            >
              <span>{status === "submitting" ? "Küldés folyamatban..." : "Beszéljünk a projektről"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
