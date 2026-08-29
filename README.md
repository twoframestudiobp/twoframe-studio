# TwoFrame Studio — Hivatalos Weboldal & Esettanulmány Rendszer

> „Vizuális tartalom előadóknak, eseményeknek és márkáknak.”

Prémium, modern kreatív stúdió weboldal szerkesztői (editorial) vizuális identitással és dinamikus esettanulmány (case study) rendszerrel.

---

## ⚡️ Főbb Jellemzők

- **Szerkesztői Aszimmetrikus Portfólió (`/munkak`)**:
  - Finom, minimalista kategóriaszűrők (**Összes**, **Live & Events**, **Commercial**, **Portré & Editorial**) valós idejű projektszámlálóval.
  - Magazinszerű elrendezés (hero, tall, wide kártyák), nagy méretű fotókkal és visszafogott lebegő animációkkal.
- **Dinamikus Esettanulmány Rendszer (`/munkak/[slug]`)**:
  - Nagyméretű hero nyitókép és specifikációs sáv (Ügyfél, Helyszín, Év, Szolgáltatások).
  - Szerkesztői bevezető és strukturált háttér (Koncepció, Megvalósítás, Eredmény).
  - Változatos képarányokat (panoráma, álló, fekvő) támogató vizuális fotógaléria képaláírásokkal.
  - Előző / Következő projekt közötti közvetlen navigáció.
  - Dedikált konverziós záróblokk (*„Dolgozzunk együtt”*).
- **Megosztott Adatmodell & Főoldali Integráció**:
  - A főoldal kiemelt válogatása automatikusan a `src/data/projects.ts` `featured: true` elemeiből táplálkozik.
  - Nincs redundáns adatismétlés.

---

## 📸 Új Projekt Hozzáadása & Képek Cseréje

1. **Fotók elhelyezése a mappastruktúrában:**
   - Live & Events: `/public/portfolio/live/<fájlnév>.webp`
   - Commercial: `/public/portfolio/commercial/<fájlnév>.webp`
   - Portré & Editorial: `/public/portfolio/portrait/<fájlnév>.webp`

2. **Projekt regisztrálása a `src/data/projects.ts` fájlban:**
   ```typescript
   {
     slug: "uj-projekt-slug",
     title: "Projekt Címe",
     category: "live", // "live" | "commercial" | "portrait"
     categoryLabel: "Live & Events",
     shortDescription: "Rövid összefoglaló a portfólió rácshoz...",
     year: "2025",
     location: "Budapest, HU",
     client: "Ügyfél / Produkció",
     coverImage: "/portfolio/live/uj-kep.webp",
     image: "/portfolio/live/uj-kep.webp",
     featured: true, // Megjelenjen a főoldalon is?
     services: ["Koncertfotózás", "Aftermovie"],
     projectDescription: "Részletes háttértörténet az esettanulmányhoz...",
     challenge: "Koncepció és kihívás...",
     approach: "Megvalósítás és technika...",
     result: "Eredmény...",
     galleryImages: [
       {
         src: "/portfolio/live/uj-kep.webp",
         alt: "Kép leírása",
         aspect: "wide", // "wide" | "portrait" | "landscape" | "square"
         caption: "Opcionális képaláírás..."
       }
     ]
   }
   ```
3. A Next.js a build során automatikusan legenerálja az új esettanulmányt a `/munkak/uj-projekt-slug` címen.

---

## 🛠 Technológiai Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation / SSR)
- **Nyelv**: [TypeScript](https://www.typescriptlang.org/)
- **Stílusok**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikonok**: [Lucide React](https://lucide.dev/)
- **Betűtípusok**: [Google Fonts](https://fonts.google.com/) (Inter, Syne)

---

## 🚀 Fejlesztői Környezet & Build

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver
npm run dev

# Production build tesztelése
npm run build

# Production szerver futtatása
npm run start
```

---

## 📁 Főbb Fájlok

```
├── public/portfolio/         # Kategóriákra bontott portfólió fotók
├── src/
│   ├── app/
│   │   ├── munkak/
│   │   │   ├── page.tsx      # Portfólió főoldal minimalista szűrőkkel
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Dinamikus esettanulmány oldal
│   │   └── sitemap.ts        # Automatikusan frissülő dinamikus sitemap
│   ├── components/
│   │   ├── PortfolioFilters.tsx  # Minimalista szöveges kategóriaszűrők
│   │   ├── PortfolioProject.tsx  # Magazinszerű projektkártya
│   │   ├── PortfolioGrid.tsx     # Aszimmetrikus rács
│   │   ├── CaseStudyGallery.tsx  # Esettanulmány fotógaléria
│   │   └── ProjectNavigation.tsx # Előző/Következő navigáció
│   └── data/
│       └── projects.ts       # Központi portfólió és esettanulmány adatbázis
```

© 2024 TwoFrame Studio. Minden jog fenntartva.
