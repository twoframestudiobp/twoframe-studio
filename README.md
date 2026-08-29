# TwoFrame Studio — Hivatalos Weboldal & Kreatív Rendszer

> „Vizuális tartalom előadóknak, eseményeknek és márkáknak.”

Prémium, modern kreatív stúdió weboldal szerkesztői (editorial) vizuális identitással, dinamikus esettanulmány (case study) rendszerrel, teljes körű SEO & Core Web Vitals optimalizációval és Resend email integrációval.

---

## ⚡️ Főbb Jellemzők & Architektúra

- **Keresőoptimalizálás (SEO) & Felfedezhetőség**:
  - **Egyedi metaadatok minden oldalon**: Pontosan megtervezett címek (`<title>`), leírások (`<meta name="description">`) és kanonikus URL-ek (`rel="canonical"`).
  - **Dinamikus Esettanulmány SEO (`/munkak/[slug]`)**: Automatikusan generált OpenGraph címkék, képek és leírások a `src/data/projects.ts` adatbázisból.
  - **Strukturált Adatok (JSON-LD)**: Szabványos Schema.org `Organization`, `ProfessionalService` és `CreativeWork` jelölések a Google Rich Search találatokhoz.
  - **Dinamikus Sitemap & Robots**: Automatikusan frissülő `sitemap.xml` és `robots.txt` az összes statikus és dinamikus oldal lefedésével.
  - **Egyedi 404 Oldal (`/not-found`)**: Márkához illeszkedő, elegáns hibakezelés magyar nyelven.
- **Képteljesítmény & Core Web Vitals (LCP, CLS, INP)**:
  - Korszerű AVIF és WebP képtömörítés a Next.js Image pipeline segítségével.
  - Reszponzív méretezés (`sizes`), hogy mobileszközökre ne töltődjenek le feleslegesen nagy felbontású desktop fotók.
  - Prioritásos betöltés (`priority`) kizárólag a hajtás feletti (hero) nyitóképeknél, alatta tiszta lazy loading.
  - `prefers-reduced-motion` akadálymentességi támogatás a mozgásérzékeny felhasználóknak.
- **Szerkesztői Portfólió & Esettanulmányok (`/munkak`)**:
  - Minimalista kategóriaszűrők (**Összes**, **Live & Events**, **Commercial**, **Portré & Editorial**).
  - Magazinszerű aszimmetrikus rács és részletes esettanulmány oldalak.
- **Professzionális Ajánlatkérő Rendszer (`/kapcsolat`)**:
  - Zod validált űrlap valós idejű és szerveroldali hibajelzéssel, URL alapú kategória-előválasztással és spamvédelemmel (Honeypot + Rate Limit).
  - Resend email kézbesítés közvetlen Reply-To beállítással.

---

## 🌐 Domain & SEO Konfiguráció

A weboldal kanonikus alapértelmezett URL-je a `https://twoframe.hu`.

Szükség esetén a kanonikus címet a `.env.local` fájlban vagy a tárhely környezeti változóiban állíthatod be:

```env
# Kanonikus weboldal URL (alapértelmezett: https://twoframe.hu)
NEXT_PUBLIC_SITE_URL=https://twoframe.hu

# Resend Email beállítások
RESEND_API_KEY=re_123456789_abcdefg
CONTACT_TO_EMAIL=kapcsolat@twoframe.hu
CONTACT_FROM_EMAIL=TwoFrame Studio <onboarding@resend.dev>
```

### Hol találhatók az alapértelmezett SEO beállítások?
- **Globális SEO konstansok**: [`src/lib/site-config.ts`](file:///src/lib/site-config.ts)
- **Főoldali Layout & JSON-LD**: [`src/app/layout.tsx`](file:///src/app/layout.tsx)
- **Strukturált Adatok komponens**: [`src/components/JsonLd.tsx`](file:///src/components/JsonLd.tsx)
- **Dinamikus Sitemap**: [`src/app/sitemap.ts`](file:///src/app/sitemap.ts)
- **Robots szabályok**: [`src/app/robots.ts`](file:///src/app/robots.ts)
- **Web App Manifest**: [`src/app/manifest.ts`](file:///src/app/manifest.ts)

---

## 🛠 Technológiai Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation & Dynamic API Routes)
- **Nyelv**: [TypeScript](https://www.typescriptlang.org/)
- **Validáció**: [Zod](https://zod.dev/)
- **Email Kézbesítés**: [Resend](https://resend.com)
- **Stílusok**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikonok**: [Lucide React](https://lucide.dev/)
- **Betűtípusok**: [Google Fonts](https://fonts.google.com/) (`next/font` Inter & Syne)

---

## 🚀 Fejlesztői Környezet & Build

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev

# Production build készítése és ellenőrzése
npm run build

# Production szerver futtatása
npm run start
```

---

## 📁 Projekt Struktúra

```
├── public/
│   ├── portfolio/            # Kategóriákra bontott portfólió fotók (live, commercial, portrait)
│   ├── logo.png              # TwoFrame Studio logó és favicon
│   └── CNAME                 # Egyedi domain (twoframe.hu)
├── src/
│   ├── app/
│   │   ├── api/contact/      # Resend email API végpont & spam szűrés
│   │   ├── kapcsolat/        # Kapcsolat oldal & űrlap
│   │   ├── munkak/           # Portfólió & dinamikus esettanulmányok ([slug])
│   │   ├── szolgaltatasok/   # Szolgáltatásismertetők
│   │   ├── rolam/            # Kreatív igazgató bemutatkozása
│   │   ├── not-found.tsx     # Egyedi 404 hibaoldal
│   │   ├── layout.tsx        # Fő layout, betűtípusok és JSON-LD
│   │   ├── page.tsx          # Főoldal
│   │   ├── sitemap.ts        # Dinamikus sitemap generátor
│   │   ├── robots.ts         # Robots.txt szabályok
│   │   └── manifest.ts       # Web app manifest
│   ├── components/
│   │   ├── JsonLd.tsx        # Schema.org strukturált adatkezelő
│   │   ├── InquiryForm.tsx   # Ajánlatkérő űrlap
│   │   ├── PortfolioFilters.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── PortfolioProject.tsx
│   │   ├── CaseStudyGallery.tsx
│   │   ├── ProjectNavigation.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.ts       # Portfólió és esettanulmány adatmodell
│   │   └── services.ts       # Szolgáltatások adatmodell
│   └── lib/
│       ├── site-config.ts    # Központi SEO és weboldal konfiguráció
│       ├── contact-schema.ts # Zod validációs séma
│       └── utils.ts
├── .env.example
└── README.md
```

© 2024 TwoFrame Studio. Minden jog fenntartva.
