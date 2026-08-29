# TwoFrame Studio — Hivatalos Weboldal

> „Vizuális tartalom előadóknak, eseményeknek és márkáknak.”

Prémium, modern kreatív stúdió weboldal letisztult, sötét tónusú szerkesztői (editorial) vizuális identitással.

---

## ⚡️ Főbb Jellemzők

- **Sötét szerkesztői esztétika**: Kifejezetten a mély tónusú zenei, rendezvény és márkavizuálok bemutatására tervezve, finom lila akcentusokkal (`#8b5cf6`).
- **Nagyfelbontású képközpontú galéria**: Kategóriánként szűrhető portfólió (Live & Events, Commercial & Brands, Portrait & Editorial) beépített billentyűzet-vezérelt teljes képernyős Lightbox funkcióval.
- **Részletes szolgáltatásismertetők**:
  - `01` **Live & Events**: Koncertek, fellépések és események vizuális dokumentálása.
  - `02` **Brands & Commercial**: Fotó- és videótartalom márkáknak, vendéglátóhelyeknek és vállalkozásoknak.
  - `03` **Portrait & Editorial**: Portré, előadói promo, modell és personal branding tartalom.
  - `04` **Content Partnership (Kiemelt)**: Rendszeres vizuális tartalom folyamatos márkanövekedéshez.
- **Ajánlatkérő rendszer**: Átfogó, reszponzív űrlap valós idejű visszajelzéssel és egyedi költségkeret-opciókkal.
- **SEO & Teljesítmény**: Next.js App Router, SSR/SSG előrenderelés, OpenGraph metaadatok, dinamikus sitemap és robots.txt.

---

## 🛠 Technológiai Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Nyelv**: [TypeScript](https://www.typescriptlang.org/)
- **Stílusok**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikonok**: [Lucide React](https://lucide.dev/)
- **Betűtípusok**: [Google Fonts](https://fonts.google.com/) (Inter, Syne)

---

## 🚀 Fejlesztői Környezet Indítása

1. **Függőségek telepítése:**
   ```bash
   npm install
   ```

2. **Fejlesztői szerver indítása:**
   ```bash
   npm run dev
   ```
   Nyisd meg a böngészőben: [http://localhost:3000](http://localhost:3000)

3. **Production Build készítése:**
   ```bash
   npm run build
   ```

4. **Production szerver futtatása:**
   ```bash
   npm run start
   ```

---

## 📁 Projekt Struktúra

```
├── public/
│   ├── images/               # Nagyfelbontású vizuális anyagok és WebP fotók
│   ├── logo.png              # TwoFrame Studio logó
│   └── CNAME                 # Egyedi domain beállítás (twoframe.hu)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Fő layout, betűtípusok, navigáció és lábléc
│   │   ├── page.tsx          # Főoldal (Hero, Kiemelt munkák, Szakterületek, Partnerség)
│   │   ├── munkak/           # Portfólió galéria szűrőkkel és Lightbox modal-lal
│   │   ├── szolgaltatasok/   # Szolgáltatások részletes bemutatása
│   │   ├── rolam/            # Szabó Barnabás kreatív igazgató bemutatkozása
│   │   ├── kapcsolat/        # Ajánlatkérő űrlap és stúdió elérhetőségek
│   │   ├── globals.css       # Sötét téma stílusok és egyedi CSS osztályok
│   │   ├── sitemap.ts        # Dinamikus sitemap generátor
│   │   └── robots.ts         # Robot szabályok
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky, üveghatású navigációs sáv és mobil menü
│   │   ├── Footer.tsx        # Prémium lábléc és elérhetőségek
│   │   ├── ProjectCard.tsx   # Szerkesztői kártya lebegő effektekkel
│   │   ├── Lightbox.tsx      # Teljes képernyős képnézegető
│   │   └── InquiryForm.tsx   # Ajánlatkérő űrlap
│   ├── data/
│   │   ├── projects.ts       # Munkák és projektek adatstruktúrája
│   │   └── services.ts       # Szolgáltatások adatstruktúrája
│   └── lib/
│       └── utils.ts          # Segédfüggvények (cn helper)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 🌐 Kapcsolat

- **Weboldal**: [twoframe.hu](https://twoframe.hu)
- **Email**: [kapcsolat@twoframe.hu](mailto:kapcsolat@twoframe.hu)
- **Telefon**: +36 70 516 8766
- **Alapító & Kreatív Igazgató**: Szabó Barnabás

© 2024 TwoFrame Studio. Minden jog fenntartva.
