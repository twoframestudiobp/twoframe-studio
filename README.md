# TwoFrame Studio — Hivatalos Weboldal & Ajánlatkérő Rendszer

> „Vizuális tartalom előadóknak, eseményeknek és márkáknak.”

Prémium, modern kreatív stúdió weboldal szerkesztői (editorial) vizuális identitással, dinamikus esettanulmány (case study) rendszerrel és professzionális ajánlatkérő backenddel.

---

## ⚡️ Főbb Jellemzők

- **Szerkesztői Portfólió & Esettanulmányok (`/munkak`)**:
  - Minimalista kategóriaszűrők (**Összes**, **Live & Events**, **Commercial**, **Portré & Editorial**).
  - Aszimmetrikus magazinszerű rács és dinamikus esettanulmány oldalak (`/munkak/[slug]`).
- **Professzionális Ajánlatkérő Rendszer (`/kapcsolat`)**:
  - Letisztult, gyors űrlap valós idejű és szerveroldali Zod validációval.
  - Természetes magyar mezők és sávos költségkeret választó (*50e Ft alatt* .. *400e Ft felett*).
  - URL alapú automatikus kategória-előválasztás (`/kapcsolat?tipus=concert` vagy `/kapcsolat?tipus=partnership`).
  - Spamvédelem (láthatatlan honeypot mező, szerveroldali rate limiting és karakterkorlátok).
  - Resend email kézbesítés közvetlen Reply-To beállítással a gyors válaszadáshoz.
  - Helyi fejlesztői tesztmód: API kulcs hiányában az ajánlatkérések automatikusan a szerverterminálba naplózódnak.

---

## 📬 Email Szolgáltató Konfigurációja (Resend)

A kapcsolatfelvételi űrlap a modern, megbízható [Resend](https://resend.com) felhőalapú email szolgáltatást használja.

### 1. Szükséges Környezeti Változók

Hozz létre egy `.env.local` fájlt a projekt gyökerében a mellékelt [`.env.example`](file:///.env.example) alapján:

```env
# 1. Resend API kulcs (Regisztráció: https://resend.com -> API Keys)
RESEND_API_KEY=re_123456789_abcdefg

# 2. Címzett email cím (Ide érkeznek az ajánlatkérések)
CONTACT_TO_EMAIL=kapcsolat@twoframe.hu

# 3. Feladó email cím
# Élesítés után a saját domained (pl. TwoFrame Studio <kapcsolat@twoframe.hu>)
# Teszteléskor használható: TwoFrame Studio <onboarding@resend.dev>
CONTACT_FROM_EMAIL=TwoFrame Studio <onboarding@resend.dev>
```

### 2. Hogyan működik a helyi tesztelés (Dev Mode)?

- Ha a `RESEND_API_KEY` **nincs megadva**, a rendszer nem dob hibát, hanem **fejlesztői módban** fut: az űrlap sikeres beküldést jelez a látogatónak, a szerverterminálban pedig formázva megjeleníti a beérkezett projekt adatait.
- Ha a `RESEND_API_KEY` **be van állítva**, a rendszer valódi, biztonságosan formázott HTML és szöveges emailt küld a `CONTACT_TO_EMAIL` címre, a feladó válasz (Reply-To) címe pedig automatikusan az érdeklődő email címe lesz.

### 3. A cél email cím módosítása

A beérkező levelek címét bármikor megváltoztathatod a `CONTACT_TO_EMAIL` környezeti változó átírásával (pl. Vercel vagy egyéb hosting szolgáltató beállításaiban) anélkül, hogy a forráskódot módosítanod kellene.

---

## 🛠 Technológiai Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Actions & API Routes)
- **Nyelv**: [TypeScript](https://www.typescriptlang.org/)
- **Validáció**: [Zod](https://zod.dev/)
- **Email Kézbesítés**: [Resend SDK](https://resend.com)
- **Stílusok**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikonok**: [Lucide React](https://lucide.dev/)

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
├── public/portfolio/         # Portfólió képek kategóriák szerint
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/      # Resend email API végpont & spam szűrés
│   │   ├── kapcsolat/        # Kapcsolat oldal és űrlap
│   │   ├── munkak/           # Portfólió és dinamikus esettanulmányok ([slug])
│   │   ├── szolgaltatasok/   # Szolgáltatásismertetők
│   │   ├── rolam/            # Kreatív igazgató bemutatkozása
│   │   └── page.tsx          # Főoldal
│   ├── components/
│   │   ├── InquiryForm.tsx   # Zod validált ajánlatkérő űrlap
│   │   ├── PortfolioFilters.tsx
│   │   ├── PortfolioGrid.tsx
│   │   └── CaseStudyGallery.tsx
│   ├── data/
│   │   ├── projects.ts       # Portfólió adatstruktúra
│   │   └── services.ts       # Szolgáltatások adatstruktúra
│   └── lib/
│       ├── contact-schema.ts # Zod validációs séma és típusok
│       └── utils.ts
├── .env.example              # Minta környezeti változók
└── README.md
```

© 2024 TwoFrame Studio. Minden jog fenntartva.
