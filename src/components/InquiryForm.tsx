"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  RefreshCw,
} from "lucide-react";
import {
  PROJECT_TYPES,
  BUDGET_RANGES,
  ProjectType,
  BudgetRange,
  mapQueryToProjectType,
  contactFormSchema,
} from "@/lib/contact-schema";

export default function InquiryForm() {
  const searchParams = useSearchParams();

  // Initial state derived from query params if available
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientName: "",
    projectType: "Koncert / fellépés" as ProjectType,
    date: "",
    location: "",
    budget: "" as BudgetRange | "",
    socialOrWebsite: "",
    description: "",
    company_fax_hp: "", // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle URL preselection (e.g. /kapcsolat?tipus=concert or /kapcsolat?project=Élő%20koncert)
  useEffect(() => {
    const tipusParam = searchParams.get("tipus") || searchParams.get("service") || searchParams.get("type");
    const projectParam = searchParams.get("project");

    if (tipusParam) {
      const matchedType = mapQueryToProjectType(tipusParam);
      setFormData((prev) => ({ ...prev, projectType: matchedType }));
    }

    if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description || `Érdeklődés a(z) "${projectParam}" projekttel kapcsolatban. `,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (generalError) {
      setGeneralError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    setFieldErrors({});

    // 1. Client-side validation using Zod
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setFieldErrors(errors);
      setGeneralError("Kérjük, javítsd a kiemelt mezőkben lévő hibákat a küldéshez.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
        setGeneralError(
          result.error || "A megkeresés küldése nem sikerült. Kérjük, próbáld újra!"
        );
        setIsSubmitting(false);
        return;
      }

      // Success
      setIsSuccess(true);
      setIsSubmitting(false);

      // Future analytics event placeholder
      // window.dataLayer?.push({ event: 'project_inquiry_submitted', project_type: formData.projectType });
    } catch (err) {
      console.error("Submission network error:", err);
      setGeneralError(
        "Hálózati hiba történt. Kérjük, ellenőrizd az internetkapcsolatot vagy próbáld újra pár másodperc múlva."
      );
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      clientName: "",
      projectType: "Koncert / fellépés",
      date: "",
      location: "",
      budget: "",
      socialOrWebsite: "",
      description: "",
      company_fax_hp: "",
    });
    setFieldErrors({});
    setGeneralError(null);
  };

  // SUCCESS STATE
  if (isSuccess) {
    return (
      <div className="w-full bg-[#0d0d12]/95 border border-violet-500/30 rounded-3xl p-8 sm:p-14 backdrop-blur-xl relative overflow-hidden text-center animate-fade-in shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto py-6">
          <div className="w-20 h-20 rounded-full bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400 mb-8 shadow-lg shadow-violet-900/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-4">
            Köszönöm a megkeresést!
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-10">
            Megkaptam a projekt részleteit. Hamarosan jelentkezem a megadott elérhetőségen.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 shadow-xl"
            >
              <span>Vissza a főoldalra</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-medium uppercase tracking-[0.18em] bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Új ajánlatkérés küldése</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE FORM STATE
  return (
    <div className="w-full bg-[#0d0d12]/95 border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Subtle Purple Background Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 relative z-10">
        {/* Hidden Honeypot field for bot protection */}
        <div style={{ display: "none" }} aria-hidden="true">
          <label htmlFor="company_fax_hp">Do not fill this</label>
          <input
            type="text"
            id="company_fax_hp"
            name="company_fax_hp"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_fax_hp}
            onChange={handleChange}
          />
        </div>

        {/* Global Error Banner */}
        {generalError && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 flex items-center gap-3 text-red-200 text-xs sm:text-sm animate-fade-in"
          >
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{generalError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Név (Required) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-wider text-zinc-300 font-medium flex items-center justify-between"
            >
              <span>Név</span>
              <span className="text-[11px] text-violet-400 font-normal">Kötelező</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              placeholder="Pl. Kovács Péter"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full bg-[#121217] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                fieldErrors.name
                  ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                  : "border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              }`}
            />
            {fieldErrors.name && (
              <span id="name-error" className="text-xs text-red-400 mt-0.5">
                {fieldErrors.name}
              </span>
            )}
          </div>

          {/* Email cím (Required) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-wider text-zinc-300 font-medium flex items-center justify-between"
            >
              <span>Email cím</span>
              <span className="text-[11px] text-violet-400 font-normal">Kötelező</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              placeholder="peter@pelda.hu"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full bg-[#121217] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                fieldErrors.email
                  ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                  : "border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              }`}
            />
            {fieldErrors.email && (
              <span id="email-error" className="text-xs text-red-400 mt-0.5">
                {fieldErrors.email}
              </span>
            )}
          </div>

          {/* Telefonszám (Optional) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-xs uppercase tracking-wider text-zinc-400 font-medium flex items-center justify-between"
            >
              <span>Telefonszám</span>
              <span className="text-[11px] text-zinc-500 lowercase font-normal">opcionális</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+36 30 123 4567"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            />
          </div>

          {/* Cég / előadó / márka neve (Optional) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="clientName"
              className="text-xs uppercase tracking-wider text-zinc-400 font-medium flex items-center justify-between"
            >
              <span>Cég / Előadó / Márka neve</span>
              <span className="text-[11px] text-zinc-500 lowercase font-normal">opcionális</span>
            </label>
            <input
              id="clientName"
              name="clientName"
              type="text"
              placeholder="Pl. Zenekar, Brand vagy Vállalkozás"
              value={formData.clientName}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            />
          </div>

          {/* Projekt típusa (Required) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="projectType"
              className="text-xs uppercase tracking-wider text-zinc-300 font-medium flex items-center justify-between"
            >
              <span>Projekt típusa</span>
              <span className="text-[11px] text-violet-400 font-normal">Kötelező</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.projectType}
              value={formData.projectType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors cursor-pointer"
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} className="bg-zinc-900 text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Tervezett költségkeret (Optional) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="budget"
              className="text-xs uppercase tracking-wider text-zinc-400 font-medium flex items-center justify-between"
            >
              <span>Tervezett költségkeret</span>
              <span className="text-[11px] text-zinc-500 lowercase font-normal">opcionális</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors cursor-pointer"
            >
              <option value="" className="bg-zinc-900 text-zinc-400">
                Válassz sávot (nem kötelező)
              </option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range} className="bg-zinc-900 text-white">
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Dátum (Optional) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="text-xs uppercase tracking-wider text-zinc-400 font-medium flex items-center justify-between"
            >
              <span>Tervezett dátum / időszak</span>
              <span className="text-[11px] text-zinc-500 lowercase font-normal">opcionális</span>
            </label>
            <input
              id="date"
              name="date"
              type="text"
              placeholder="Pl. 2025. tavasz / Konkrét dátum"
              value={formData.date}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            />
          </div>

          {/* Helyszín (Optional) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-xs uppercase tracking-wider text-zinc-400 font-medium flex items-center justify-between"
            >
              <span>Helyszín</span>
              <span className="text-[11px] text-zinc-500 lowercase font-normal">opcionális</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Pl. Budapest / Stúdió / Egyéb város"
              value={formData.location}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            />
          </div>
        </div>

        {/* Instagram / weboldal link (Optional) */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="socialOrWebsite"
            className="text-xs uppercase tracking-wider text-zinc-400 font-medium flex items-center justify-between"
          >
            <span>Instagram / Weboldal link</span>
            <span className="text-[11px] text-zinc-500 lowercase font-normal">opcionális</span>
          </label>
          <input
            id="socialOrWebsite"
            name="socialOrWebsite"
            type="text"
            placeholder="instagram.com/felhasznalonev vagy weboldalcim.hu"
            value={formData.socialOrWebsite}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-[#121217] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
          />
        </div>

        {/* Projekt leírása (Required) */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-xs uppercase tracking-wider text-zinc-300 font-medium flex items-center justify-between"
          >
            <span>Projekt rövid leírása</span>
            <span className="text-[11px] text-violet-400 font-normal">Kötelező</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            aria-required="true"
            aria-invalid={!!fieldErrors.description}
            aria-describedby={fieldErrors.description ? "description-error" : undefined}
            placeholder="Mesélj az elképzelésedről, a céljaidról, a kért formátumokról (fotó, videó, social anyagok)..."
            value={formData.description}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-[#121217] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-y min-h-[120px] ${
              fieldErrors.description
                ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                : "border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            }`}
          />
          {fieldErrors.description && (
            <span id="description-error" className="text-xs text-red-400 mt-0.5">
              {fieldErrors.description}
            </span>
          )}
        </div>

        {/* Submit Button & Subtext */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
          <span className="text-xs text-zinc-400 font-light order-2 sm:order-1">
            * Projektek egyedi ajánlat alapján. 24 órán belüli válaszgarancia.
          </span>

          <button
            type="submit"
            disabled={isSubmitting}
            className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-xl shadow-violet-950/50 hover:shadow-violet-900/80 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Küldés folyamatban...</span>
              </>
            ) : (
              <>
                <span>Beszéljünk a projektről</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
