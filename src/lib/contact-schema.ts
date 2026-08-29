import { z } from "zod";

export const PROJECT_TYPES = [
  "Koncert / fellépés",
  "Rendezvény",
  "Brand / commercial",
  "Portré / editorial",
  "Havi content együttműködés",
  "Videós tartalom",
  "Egyéb",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const BUDGET_RANGES = [
  "50 000 Ft alatt",
  "50 000 – 100 000 Ft",
  "100 000 – 200 000 Ft",
  "200 000 – 400 000 Ft",
  "400 000 Ft felett",
  "Még nem tudom",
] as const;

export type BudgetRange = (typeof BUDGET_RANGES)[number];

// Schema for inquiry validation
export const contactFormSchema = z.object({
  // Required fields
  name: z
    .string()
    .trim()
    .min(2, "Kérjük, add meg a neved (legalább 2 karakter).")
    .max(100, "A név nem lehet hosszabb 100 karakternél."),
  email: z
    .string()
    .trim()
    .email("Kérjük, érvényes email címet adj meg.")
    .max(120, "Az email cím maximum 120 karakter lehet."),
  projectType: z.enum(PROJECT_TYPES, {
    message: "Kérjük, válassz egy érvényes projekt típust.",
  }),
  description: z
    .string()
    .trim()
    .min(10, "Kérjük, írj legalább 10 karakteres rövid leírást a projektről.")
    .max(3000, "A leírás maximum 3000 karakter lehet."),

  // Optional fields
  phone: z
    .string()
    .trim()
    .max(40, "A telefonszám maximum 40 karakter lehet.")
    .optional()
    .or(z.literal("")),
  clientName: z
    .string()
    .trim()
    .max(120, "A név/márkanév maximum 120 karakter lehet.")
    .optional()
    .or(z.literal("")),
  date: z
    .string()
    .trim()
    .max(100, "A dátum mező maximum 100 karakter lehet.")
    .optional()
    .or(z.literal("")),
  location: z
    .string()
    .trim()
    .max(120, "A helyszín maximum 120 karakter lehet.")
    .optional()
    .or(z.literal("")),
  budget: z
    .enum(BUDGET_RANGES)
    .optional()
    .or(z.literal("")),
  socialOrWebsite: z
    .string()
    .trim()
    .max(200, "A link mező maximum 200 karakter lehet.")
    .optional()
    .or(z.literal("")),

  // Honeypot field (must be empty for humans)
  company_fax_hp: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Maps query parameters (e.g. ?tipus=concert or ?service=live-events) to official ProjectType option
 */
export function mapQueryToProjectType(queryParam?: string | null): ProjectType {
  if (!queryParam) return "Koncert / fellépés";

  const param = queryParam.toLowerCase().trim();

  if (param.includes("concert") || param.includes("koncert") || param.includes("live") || param.includes("fellepes") || param.includes("fellépés")) {
    return "Koncert / fellépés";
  }
  if (param.includes("event") || param.includes("rendezveny") || param.includes("rendezvény")) {
    return "Rendezvény";
  }
  if (param.includes("commercial") || param.includes("brand") || param.includes("marka") || param.includes("márka")) {
    return "Brand / commercial";
  }
  if (param.includes("portrait") || param.includes("portre") || param.includes("portré") || param.includes("editorial")) {
    return "Portré / editorial";
  }
  if (param.includes("partner") || param.includes("content") || param.includes("havi") || param.includes("tartalom")) {
    return "Havi content együttműködés";
  }
  if (param.includes("video") || param.includes("videó") || param.includes("aftermovie") || param.includes("recap")) {
    return "Videós tartalom";
  }

  return "Egyéb";
}
