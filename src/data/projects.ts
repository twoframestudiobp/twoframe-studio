/**
 * ============================================================================
 * TWOFRAME STUDIO - PORTFÓLIÓ & ESETTANULMÁNY ADATOK
 * ============================================================================
 */

export type ProjectCategory = "live" | "commercial" | "portrait";

export interface GalleryImage {
  src: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "wide" | "square" | "full";
  caption?: string;
}

export interface Project {
  slug: string;
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: "Live & Events" | "Commercial" | "Portré & Editorial";
  shortDescription: string;
  description?: string;
  year: string;
  location: string;
  client: string;
  coverImage: string;
  image: string;
  galleryImages: GalleryImage[];
  featured: boolean;
  services: string[];
  layoutSpan?: "regular" | "tall" | "wide" | "hero";
  projectDescription?: string;
  challenge?: string;
  approach?: string;
  result?: string;
}

export const projects: Project[] = [
  // ==========================================
  // 1. LIVE & EVENTS (Fényfesztiválok, Színpad, Koncertek)
  // ==========================================
  {
    slug: "latvany-es-fenyfesztival",
    id: "latvany-es-fenyfesztival",
    title: "Látvány & Fényfesztivál",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "Nagyszabású fényinstallációk, térbeli fényshow-k és esti rendezvények dokumentációja.",
    year: "2026",
    location: "Budapest, HU",
    client: "Fényfesztivál & Rendezvény",
    coverImage: "/portfolio/live/IMG_8435.webp",
    image: "/portfolio/live/IMG_8435.webp",
    featured: true,
    layoutSpan: "hero",
    services: ["Eseményfotózás", "Látványdokumentáció", "Éjszakai fotózás", "Aftermovie"],
    projectDescription:
      "A nagyszabású kültéri fényinstallációk, a látványelemek és a látogatói élmény éjszakai fotózása. A projekt célja a monumentális fénykompozíciók tiszta, vibráló megörökítése volt.",
    challenge:
      "A nagy kontrasztkülönbségek és az éjszakai sötétség mellett a fényforrások tiszta, kiégésmentes rögzítése.",
    approach:
      "Nagy dinamikatartományú expozíció-kezelés és precíz éjszakai színhőmérséklet-beállítás.",
    result:
      "Látványos, magával ragadó vizuális anyag a rendezvény promóciójához és sajtómegjelenéseihez.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_8435.webp",
        alt: "Fényfesztivál mozdony kompozíció",
        aspect: "wide",
        caption: "A látványos kivilágított mozdony installáció.",
      },
      {
        src: "/portfolio/live/IMG_8444.webp",
        alt: "Kivilágított repülőgép installáció",
        aspect: "wide",
        caption: "Fényjáték és térbeli fényinstalláció.",
      },
      {
        src: "/portfolio/live/IMG_8433.webp",
        alt: "Fényalagút és látvány",
        aspect: "landscape",
        caption: "Az esti sétaútvonal fényei.",
      },
      {
        src: "/portfolio/live/IMG_8447.webp",
        alt: "Éjszakai részlet",
        aspect: "portrait",
        caption: "Fénykompozíció az éjszakai térben.",
      },
      {
        src: "/portfolio/live/IMG_8480.webp",
        alt: "Hangulati kép",
        aspect: "portrait",
        caption: "A fényfesztivál hangulata.",
      },
    ],
  },
  {
    slug: "elo-koncert-es-szinpad",
    id: "elo-koncert-es-szinpad",
    title: "Élő Koncert & Színpad",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "Nagyszínpadi koncertvilágítás, élő fellépés és zenészek a színpadon.",
    year: "2026",
    location: "Budapest, HU",
    client: "Zenei Produkció",
    coverImage: "/portfolio/live/IMG_8819.webp",
    image: "/portfolio/live/IMG_8819.webp",
    featured: true,
    layoutSpan: "regular",
    services: ["Koncertfotózás", "Színpadi fényshow", "Turné tartalom"],
    projectDescription:
      "A nagyszínpad fénycsóvái és a zenekar élő fellépésének lendülete. A képeken a fénysugarak geometriája és a fellépők energiája dominál.",
    challenge: "A villódzó stroboszkópok és gyors színpadmozgások éles rögzítése.",
    approach: "Gyors záridők és precíz expozíció-időzítés a fénycsúcsok pillanatában.",
    result: "Erőteljes, modern koncertfotók a zenekar hivatalos csatornáira.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_8819.webp",
        alt: "Koncert nagyszínpad",
        aspect: "wide",
        caption: "Színpadi fénysugarak a koncert csúcspontján.",
      },
      {
        src: "/portfolio/live/IMG_8836.webp",
        alt: "Színpadi pillanat",
        aspect: "landscape",
        caption: "A nagyszínpad fényei és a fellépők dinamikája.",
      },
      {
        src: "/portfolio/live/IMG_8622.webp",
        alt: "Fellépő a színpadon",
        aspect: "landscape",
        caption: "Zenekari pillanatkép akcióban.",
      },
      {
        src: "/portfolio/live/IMG_8628.webp",
        alt: "Színpadi sziluett",
        aspect: "landscape",
        caption: "Fények és a zenész sziluettje.",
      },
      {
        src: "/portfolio/live/IMG_8634.webp",
        alt: "Koncertzárás",
        aspect: "landscape",
        caption: "A koncert fináléja.",
      },
    ],
  },
  {
    slug: "turne-es-backstage",
    id: "turne-es-backstage",
    title: "Turné & Backstage",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "A fellépések mögötti világ, hangbeállás és a turné ritmusa.",
    year: "2026",
    location: "Turné, HU",
    client: "Turné Stáb",
    coverImage: "/portfolio/live/IMG_8459.webp",
    image: "/portfolio/live/IMG_8459.webp",
    featured: false,
    layoutSpan: "wide",
    services: ["Dokumentarista fotózás", "Backstage hozzáférés", "Turnéfilm"],
    projectDescription:
      "A fellépésre való felkészülés, a színpad mögötti momentumok és a zenészek közvetlen hangulata.",
    challenge: "Hiteles, spontán pillanatok megörökítése zavarás nélkül.",
    approach: "Kompakt vázak és meleg filmes színvilág.",
    result: "Értékes turné-archívum és social tartalomcsomag.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_8459.webp",
        alt: "Turné előkészület",
        aspect: "landscape",
        caption: "Backstage pillanat a koncert előtt.",
      },
      {
        src: "/portfolio/live/IMG_8460.webp",
        alt: "Színpadra lépés előtt",
        aspect: "landscape",
        caption: "Fókuszált momentum.",
      },
      {
        src: "/portfolio/live/IMG_8481.webp",
        alt: "Turné részlet",
        aspect: "portrait",
        caption: "A turnéélet képei.",
      },
      {
        src: "/portfolio/live/IMG_8506.webp",
        alt: "Koncert momentum",
        aspect: "portrait",
        caption: "A színpadra lépés pillanata.",
      },
    ],
  },

  // ==========================================
  // 2. COMMERCIAL & BRANDS (Előadói show, Márka, Lookbook)
  // ==========================================
  {
    slug: "elo-show-produkcio",
    id: "elo-show-produkcio",
    title: "Élő Show & Produkció",
    category: "commercial",
    categoryLabel: "Commercial",
    shortDescription: "Nagyszabású élő show, filmes kék-lila színpadkép és énekes előadói produkció.",
    year: "2026",
    location: "Budapest, HU",
    client: "Produkciós Iroda",
    coverImage: "/portfolio/commercial/IMG_4565.webp",
    image: "/portfolio/commercial/IMG_4565.webp",
    featured: true,
    layoutSpan: "wide",
    services: ["Show fotózás", "Előadói branding", "Sajtócsomag", "Social Video"],
    projectDescription:
      "Professzionális színpadi show-műsor és énekesnő látványos, nemzetközi színvonalú fotózása monumentális kék/lila háttérvilágítással és pirotechnikával.",
    challenge: "A grandiózus látványvilág és az énekes finom arckifejezéseinek egyidejű kiemelése.",
    approach: "Közép- és nagylátószögű kompozíciók, gazdag lila/kék tónusok és filmes retus.",
    result: "Címlap- és sajtókész promóciós anyag a produkció számára.",
    galleryImages: [
      {
        src: "/portfolio/commercial/IMG_4565.webp",
        alt: "Énekesnő a nagyszínpadon",
        aspect: "wide",
        caption: "A nagyszínpad monumentális látványvilága.",
      },
      {
        src: "/portfolio/commercial/IMG_4554.webp",
        alt: "Énekes előadói fókusz",
        aspect: "wide",
        caption: "Közeli momentum az énekes intenzív jelenlétéről.",
      },
      {
        src: "/portfolio/commercial/IMG_4550.webp",
        alt: "Színpadi koreográfia",
        aspect: "portrait",
        caption: "A show koreográfiája és fényei.",
      },
      {
        src: "/portfolio/commercial/IMG_4547.webp",
        alt: "Show pillanat",
        aspect: "landscape",
        caption: "A produkció fénypontja.",
      },
    ],
  },
  {
    slug: "brand-content",
    id: "brand-content",
    title: "Brand Content & Kampány",
    category: "commercial",
    categoryLabel: "Commercial",
    shortDescription: "Kortárs márkaidentitást építő fotó- és videósorozat digitális kampányokhoz.",
    year: "2026",
    location: "Budapest, HU",
    client: "Kreatív Brand",
    coverImage: "/portfolio/commercial/IMG_4570.webp",
    image: "/portfolio/commercial/IMG_4570.webp",
    featured: true,
    layoutSpan: "wide",
    services: ["Social Media Tartalom", "Termék- & Modellfotózás", "Rövid videók", "Havi Tartalomcsomag"],
    projectDescription:
      "A márka vizuális kommunikációjának megújítása prémium, mégis közvetlen esztétikával. A fotók a modern digitális platformok elvárásaihoz lettek igazítva.",
    challenge: "Egységes vizuális nyelvet alkotni, amely a hírfolyamban azonnal kitűnik.",
    approach: "Dinamikus kompozíciók, természetes textúrák és letisztult színpaletta.",
    result: "3x-os elköteleződés-növekedés a közösségi csatornákon.",
    galleryImages: [
      {
        src: "/portfolio/commercial/IMG_4570.webp",
        alt: "Brand Content vezérkép",
        aspect: "wide",
        caption: "Márkaatmoszféra és prémium környezet.",
      },
      {
        src: "/portfolio/commercial/IMG_4574.webp",
        alt: "Termék és modell részlet",
        aspect: "portrait",
        caption: "Közeli részletgazdag textúrák és kompozíció.",
      },
      {
        src: "/portfolio/commercial/IMG_4577.webp",
        alt: "Kampányfotó sorozat",
        aspect: "portrait",
        caption: "Vertikális social-ready formátum.",
      },
      {
        src: "/portfolio/commercial/IMG_4576.webp",
        alt: "Márka részlet",
        aspect: "landscape",
        caption: "Editorial stílusú márkakampány kép.",
      },
    ],
  },

  // ==========================================
  // 3. PORTRÉ & EDITORIAL (Sakk sorozat, Fashion Lookbook, Stúdió Portré)
  // ==========================================
  {
    slug: "editorial-sakk-sorozat",
    id: "editorial-sakk-sorozat",
    title: "Editorial Portrésorozat",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Karakteres, intim megvilágítású sakktáblás editorial portrésorozat.",
    year: "2026",
    location: "Budapest, HU",
    client: "Modell & Alkotó",
    coverImage: "/portfolio/portrait/DSC02537_.webp",
    image: "/portfolio/portrait/DSC02537_.webp",
    featured: true,
    layoutSpan: "tall",
    services: ["Editorial Portré", "Magazin fotózás", "Karakter Styling"],
    projectDescription:
      "Kifinomult megvilágítású, filmes tónusú editorial portrésorozat. A fókusz a tekintet mélységén, a sakktábla és a figura kapcsolatán, valamint a lágy ellenfényeken van.",
    challenge: "Érzelmi mélységet és intim, filmes atmoszférát teremteni a kompozícióban.",
    approach: "Irányított lágy ellenfények és meleg tónusú filmszimuláció alkalmazása.",
    result: "Kiemelkedő minőségű editorial és sajtó-portfólió anyag.",
    galleryImages: [
      {
        src: "/portfolio/portrait/DSC02537_.webp",
        alt: "Editorial portré nyitókép",
        aspect: "portrait",
        caption: "Hangulati portré a sakktábla felett.",
      },
      {
        src: "/portfolio/portrait/DSC02553_.webp",
        alt: "Karakteres tekintet",
        aspect: "portrait",
        caption: "Intim pillanat és fókuszált tekintet.",
      },
      {
        src: "/portfolio/portrait/DSC02564_.webp",
        alt: "Portré beállítás",
        aspect: "portrait",
        caption: "Finom fény-árnyék kontrasztok.",
      },
      {
        src: "/portfolio/portrait/DSC02568_.webp",
        alt: "Részlet és kompozíció",
        aspect: "portrait",
        caption: "Filmes atmoszféra és kompozíció.",
      },
      {
        src: "/portfolio/portrait/DSC02574_.webp",
        alt: "Közeli portré",
        aspect: "portrait",
        caption: "Természetes elegancia és textúrák.",
      },
      {
        src: "/portfolio/portrait/DSC02576_.webp",
        alt: "Fény-játék a hajon",
        aspect: "portrait",
        caption: "Lágy ellenfényes beállítás.",
      },
      {
        src: "/portfolio/portrait/DSC02589_.webp",
        alt: "Editorial zárókép",
        aspect: "portrait",
        caption: "Karakteres záró momentum.",
      },
    ],
  },
  {
    slug: "fashion-editorial-lookbook",
    id: "fashion-editorial-lookbook",
    title: "Fashion & Editorial Lookbook",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Modern divat, stúdió lookbook és kortárs editorial modellfotózás.",
    year: "2026",
    location: "Budapest, HU",
    client: "Modellügynökség & Brand",
    coverImage: "/portfolio/portrait/_Aug_27_2026_at_10_35_00_PM_1_.webp",
    image: "/portfolio/portrait/_Aug_27_2026_at_10_35_00_PM_1_.webp",
    featured: false,
    layoutSpan: "regular",
    services: ["Lookbook Fotózás", "Fashion Editorial", "Modell Portfólió"],
    projectDescription:
      "Kortárs divat- és stílussorozat stúdiókörnyezetben, letisztult beállításokkal és precíz fényformálással.",
    challenge: "A modern divatesztétika és a modell egyéniségének egyensúlya.",
    approach: "Formázott kemény és lágy fények ötvözése, ritmikus pózok.",
    result: "Nemzetközi színvonalú modell- és márkaportfólió.",
    galleryImages: [
      {
        src: "/portfolio/portrait/_Aug_27_2026_at_10_35_00_PM_1_.webp",
        alt: "Fashion lookbook vezérkép",
        aspect: "portrait",
        caption: "Modern stúdió divatbeállítás.",
      },
      {
        src: "/portfolio/portrait/_Aug_27_2026_at_10_35_00_PM_2_.webp",
        alt: "Kollekció fotó",
        aspect: "portrait",
        caption: "Karakteres póz és megvilágítás.",
      },
      {
        src: "/portfolio/portrait/_Aug_27_2026_at_10_35_00_PM_3_.webp",
        alt: "Részlet és textúra",
        aspect: "portrait",
        caption: "Ruházat és részletgazdagság.",
      },
      {
        src: "/portfolio/portrait/_Aug_27_2026_at_10_41_52_PM_1_.webp",
        alt: "Editorial kompozíció",
        aspect: "portrait",
        caption: "Hangulati képkocka.",
      },
      {
        src: "/portfolio/portrait/_Aug_27_2026_at_02_29_03_PM_1_.webp",
        alt: "Stílus sorozat",
        aspect: "portrait",
        caption: "Kortárs formák és színek.",
      },
    ],
  },
  {
    slug: "studio-karakter-portre",
    id: "studio-karakter-portre",
    title: "Stúdió Karakterportré",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Letisztult vonalak, mély tónusok és karakteres arcok.",
    year: "2026",
    location: "Budapest, HU",
    client: "Előadói & Művész Portfólió",
    coverImage: "/portfolio/portrait/DSC02213.webp",
    image: "/portfolio/portrait/DSC02213.webp",
    featured: false,
    layoutSpan: "tall",
    services: ["Stúdiófotózás", "Karakterportré", "Magazin Editorial"],
    projectDescription:
      "Letisztult, mély tónusú stúdiófotózás, ahol a figyelem az arckifejezésre és a karakteres megvilágításra irányul.",
    challenge: "Minimális díszlettel maximális kifejezőerőt elérni.",
    approach: "Egyfényes irányított megvilágítás és finom élfények.",
    result: "Időtálló portréanyag sajtó- és profilhasználatra.",
    galleryImages: [
      {
        src: "/portfolio/portrait/DSC02213.webp",
        alt: "Stúdió karakterportré",
        aspect: "portrait",
        caption: "Letisztult formák és természetes fényirányok.",
      },
      {
        src: "/portfolio/portrait/018C245B-DF73-437B-87C4-B4DC3EA75354.webp",
        alt: "Előadói portré",
        aspect: "portrait",
        caption: "Kifejező stúdióvilágítás és forma.",
      },
      {
        src: "/portfolio/portrait/047C323A-D01B-477B-887D-BD65ED1D7FB4.webp",
        alt: "Mély tónusú portré",
        aspect: "portrait",
        caption: "Mély tónusok és fókuszált tekintet.",
      },
      {
        src: "/portfolio/portrait/1BF76D2F-97F9-44E0-A117-3D1E51D24642.webp",
        alt: "Promo sorozat",
        aspect: "portrait",
        caption: "Modern promóciós portré.",
      },
      {
        src: "/portfolio/portrait/DE046A05-65EC-448A-9918-A4D8640DB8A0.webp",
        alt: "Karakter beállítás",
        aspect: "portrait",
        caption: "Erős tekintet és kontrasztok.",
      },
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prevProject: Project;
  nextProject: Project;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const total = projects.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  return {
    prevProject: projects[prevIndex],
    nextProject: projects[nextIndex],
  };
}
