/**
 * ============================================================================
 * TWOFRAME STUDIO - PORTFÓLIÓ & ESETTANULMÁNY ADATOK
 * ============================================================================
 *
 * KÉPEK CSERÉJE & ÚJ PROJEKTEK HOZZÁADÁSA:
 * ----------------------------------------------------------------------------
 * 1. Helyezd el az új fényképeket a `/public/portfolio/<kategória>/` mappában:
 *    - Live & Events:      /public/portfolio/live/
 *    - Commercial & Brands: /public/portfolio/commercial/
 *    - Portré & Editorial:  /public/portfolio/portrait/
 *
 * 2. Az alábbi listában frissítsd a `coverImage` és `galleryImages` elérési útvonalakat.
 * 3. Minden projekt automatikusan generál egy dedikált esettanulmány oldalt a `/munkak/[slug]` alatt.
 * 4. A `featured: true` értékű projektek megjelennek a főoldal kiemelt válogatásában is.
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
  id: string; // Visszafelé kompatibilitás
  title: string;
  category: ProjectCategory;
  categoryLabel: "Live & Events" | "Commercial" | "Portré & Editorial";
  shortDescription: string;
  description?: string; // Visszafelé kompatibilitás
  year: string;
  location: string;
  client: string;
  coverImage: string;
  image: string; // Visszafelé kompatibilitás
  galleryImages: GalleryImage[];
  featured: boolean;
  services: string[];
  layoutSpan?: "regular" | "tall" | "wide" | "hero"; // Szerkesztői aszimmetrikus rácshoz
  projectDescription?: string;
  challenge?: string; // Koncepció / Feladat
  approach?: string;  // Megközelítés & Megvalósítás
  result?: string;    // Eredmény & Vizuális Hatás
}

export const projects: Project[] = [
  {
    slug: "elo-koncert",
    id: "elo-koncert",
    title: "Élő koncert",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "Színpadi atmoszféra, fényeffektek és a fellépés nyers energiájának megörökítése.",
    year: "2024",
    location: "Budapest, HU",
    client: "Élő Produkció",
    coverImage: "/portfolio/live/IMG_4565.webp",
    image: "/portfolio/live/IMG_4565.webp",
    featured: true,
    layoutSpan: "hero",
    services: ["Színpadi koncertfotózás", "Backstage dokumentáció", "Függőleges Social Recap", "4K Aftermovie"],
    projectDescription:
      "A projekt célja az élő zenei élmény intenzitásának és a monumentális színpadi látványvilágnak a hiteles, magával ragadó dokumentálása volt. A képeken a fények játéka és az előadó színpadi jelenléte áll a fókuszban.",
    challenge:
      "A dinamikusan változó színpadi fények és az extrém alacsony háttérvilágítás mellett precízen rögzíteni az előadó és a közönség közötti érzelmi kapcsolatot.",
    approach:
      "Nagy fényerejű prime objektívekkel, manuális expozíció-kontrollal és filmes tónusú utómunkával dolgoztunk, amely kiemeli a mély feketéket és a ragyogó lila/kék színpadi fénycsóvákat.",
    result:
      "Azonnal publikálható, nagyfelbontású vizuális anyagcsomag, amely mind a sajtómegjelenésekben, mind a közösségi média kampányokban maximális elérést biztosított.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_4565.webp",
        alt: "Színpadi fényshow és fellépés pillanata",
        aspect: "wide",
        caption: "A színpadi látványvilág és a monumentális fények kompozíciója.",
      },
      {
        src: "/portfolio/live/IMG_4550.webp",
        alt: "Közönség és előadó dinamikája",
        aspect: "landscape",
        caption: "Az aréna atmoszférája és az élő fellépés feszültsége.",
      },
      {
        src: "/portfolio/live/IMG_4554.webp",
        alt: "Színpadi előadói fókusz",
        aspect: "portrait",
        caption: "Közeli momentum az előadó intenzív jelenlétéről.",
      },
    ],
  },
  {
    slug: "artist-portrait",
    id: "artist-portrait",
    title: "Artist Portrait",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Mély tónusú, karakteres stúdióportrék és előadói arculatfotózás.",
    year: "2024",
    location: "Budapest Stúdió",
    client: "Előadói Portfólió",
    coverImage: "/portfolio/portrait/IMG_4579.webp",
    image: "/portfolio/portrait/IMG_4579.webp",
    featured: true,
    layoutSpan: "tall",
    services: ["Koncepciótervezés", "Stúdió portréfotózás", "Editorial retusálás", "Lemezborító adaptációk"],
    projectDescription:
      "Egy modern, határozott előadói arculat megteremtése volt a feladat. A minimális díszlet és a kontrasztos fényvezetés révén a tekintet és az egyéni karakter került a vizuális narratíva középpontjába.",
    challenge:
      "Olyan időtálló, letisztult vizuális stílust kialakítani, amely nem sablonos stúdiófotó, hanem azonnal megkülönbözteti az előadót a digitális streaming felületeken.",
    approach:
      "Irányított kemény és lágy fények kombinációját használtuk matt sötét háttér előtt. A finom textúrákra és a természetes bőrtónusok melletti mély árnyékokra összpontosítottunk.",
    result:
      "Egységes vizuális anyag sajtókommunikációhoz, streaming profilokhoz és social media bannerekhez.",
    galleryImages: [
      {
        src: "/portfolio/portrait/IMG_4579.webp",
        alt: "Editorial stúdióportré",
        aspect: "portrait",
        caption: "Karakteres megvilágítás és mély árnyékok játéka.",
      },
      {
        src: "/portfolio/portrait/IMG_4545.webp",
        alt: "Letisztult portré kompozíció",
        aspect: "portrait",
        caption: "Minimál esztétika és határozott jelenlét.",
      },
      {
        src: "/portfolio/portrait/IMG_4576.webp",
        alt: "Karakterközpontú beállítás",
        aspect: "landscape",
        caption: "Filmes hangulatú editorial beállítás.",
      },
    ],
  },
  {
    slug: "brand-content",
    id: "brand-content",
    title: "Brand Content",
    category: "commercial",
    categoryLabel: "Commercial",
    shortDescription: "Fiatalos, filmes hatású életmód és termékkampány márkaépítéshez.",
    year: "2024",
    location: "Budapest, HU",
    client: "Márkaidentitás",
    coverImage: "/portfolio/commercial/IMG_4570.webp",
    image: "/portfolio/commercial/IMG_4570.webp",
    featured: true,
    layoutSpan: "tall",
    services: ["Kreatív koncepció", "Kampányfotózás", "Social Media Asset Pack", "Rövid videós formátumok"],
    projectDescription:
      "A modern városi kultúrára és a prémium életérzésre épülő kampány vizuális megvalósítása. Olyan tartalmakat készítettünk, amelyek organikus és hirdetési felületeken is azonnal felkeltik a figyelmet.",
    challenge:
      "A termékek természetes kontextusba helyezése túlerőltetett reklámérzet nélkül, megőrizve a prémium esztétikát.",
    approach:
      "Természetes fények és finom mesterséges derítések ötvözése dinamikus kameramozgással és ritmikus kompozíciókkal.",
    result:
      "Magas konverziót és pozitív márkamegítélést hozó vizuális csomag social platformokra és webes felületekre.",
    galleryImages: [
      {
        src: "/portfolio/commercial/IMG_4570.webp",
        alt: "Urban márka kampányfotó",
        aspect: "portrait",
        caption: "Karakteres városi hangulat és termékelhelyezés.",
      },
      {
        src: "/portfolio/commercial/IMG_4574.webp",
        alt: "Enteriőr és atmoszféra fotó",
        aspect: "landscape",
        caption: "A tér és a prémium részletek harmonikus megjelenítése.",
      },
      {
        src: "/portfolio/commercial/IMG_4577.webp",
        alt: "Részletgazdag termékfotó",
        aspect: "square",
        caption: "Finom textúrák és letisztult formavilág.",
      },
    ],
  },
  {
    slug: "szinpadi-dinamika",
    id: "szinpadi-dinamika",
    title: "Színpadi Vizuál",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "A közönség és az előadó közötti feszültség és eufória megörökítése.",
    year: "2024",
    location: "Fesztivál Színpad",
    client: "Fesztivál Produkció",
    coverImage: "/portfolio/live/IMG_4550.webp",
    image: "/portfolio/live/IMG_4550.webp",
    featured: true,
    layoutSpan: "wide",
    services: ["Fesztivál dokumentáció", "Színpadi fotózás", "Gyorsválogatás (24h)"],
    projectDescription:
      "Egy monumentális élő fellépés fénypontjainak rögzítése a hangbeállástól a tetőpontig, átadva az élő show sodró dinamikáját.",
    challenge:
      "Gyors mozgások követése extrém fényszitációkban, kompromisszummentes élességgel és hangulattal.",
    approach:
      "Több látószög szimultán alkalmazása, gyors zársebesség és filmes utómunka a koncert atmoszférájának megtartásához.",
    result:
      "Azonnali 24 órás gyorscsomag a közösségi média hírfolyamok dominálására.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_4550.webp",
        alt: "Fesztivál közönség és színpad",
        aspect: "wide",
        caption: "A tömeg energiája a koncert csúcspontján.",
      },
      {
        src: "/portfolio/live/IMG_4565.webp",
        alt: "Látványos színpadi fények",
        aspect: "landscape",
        caption: "A vizuális fénytechnika és a színpad összhangja.",
      },
    ],
  },
  {
    slug: "minimal-studio-portre",
    id: "minimal-studio-portre",
    title: "Minimal Stúdió Portré",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Letisztult portrék modern világítással és határozott jelenléttel.",
    year: "2024",
    location: "Budapest Stúdió",
    client: "Personal Branding",
    coverImage: "/portfolio/portrait/IMG_4545.webp",
    image: "/portfolio/portrait/IMG_4545.webp",
    featured: false,
    layoutSpan: "regular",
    services: ["Stúdió fotózás", "Személyre szabott fénybeállítás", "High-end Beauty retus"],
    projectDescription:
      "Az egyszerűség erejére épülő portrésorozat, ahol a tiszta vonalak, a textúrák és a tekintet ereje teremti meg a prémium hatást.",
    galleryImages: [
      {
        src: "/portfolio/portrait/IMG_4545.webp",
        alt: "Stúdió portré minimál stílusban",
        aspect: "portrait",
      },
      {
        src: "/portfolio/portrait/IMG_4579.webp",
        alt: "Mély tónusú portré",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "turne-dokumentacio",
    id: "turne-dokumentacio",
    title: "Turné Dokumentáció",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "Turnédokumentáció, backstage pillanatok és élő fellépések narratívája.",
    year: "2024",
    location: "Országos Turné",
    client: "Turné Menedzsment",
    coverImage: "/portfolio/live/IMG_4554.webp",
    image: "/portfolio/live/IMG_4554.webp",
    featured: false,
    layoutSpan: "regular",
    services: ["Turnédokumentáció", "Backstage pillanatok", "Sajtófotók"],
    projectDescription:
      "A turné kulisszák mögötti élete és a színpadi pillanatok összefűzése egyetlen vizuális történetté.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_4554.webp",
        alt: "Koncertpillanat",
        aspect: "portrait",
      },
      {
        src: "/portfolio/live/IMG_4565.webp",
        alt: "Színpadi fények",
        aspect: "wide",
      },
    ],
  },
  {
    slug: "atmoszfera-es-terek",
    id: "atmoszfera-es-terek",
    title: "Atmoszféra & Terek",
    category: "commercial",
    categoryLabel: "Commercial",
    shortDescription: "Prémium terek és vendégélmények esztétikus megjelenítése.",
    year: "2024",
    location: "Budapest",
    client: "Vendéglátás & Enteriőr",
    coverImage: "/portfolio/commercial/IMG_4574.webp",
    image: "/portfolio/commercial/IMG_4574.webp",
    featured: false,
    layoutSpan: "wide",
    services: ["Enteriőrfotózás", "Hangulatképek", "Weboldal asset csomag"],
    projectDescription:
      "A helyszín egyedi atmoszférájának és kifinomult belsőépítészeti megoldásainak képi bemutatása a vendégélmény növelésére.",
    galleryImages: [
      {
        src: "/portfolio/commercial/IMG_4574.webp",
        alt: "Enteriőr részlet és fények",
        aspect: "landscape",
      },
      {
        src: "/portfolio/commercial/IMG_4577.webp",
        alt: "Részletgazdag tárgyfotó",
        aspect: "square",
      },
    ],
  },
  {
    slug: "cinematic-lookbook",
    id: "cinematic-lookbook",
    title: "Cinematic Lookbook",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Erőteljes kontrasztok és filmes hangulatú portrésorozat.",
    year: "2024",
    location: "Budapest",
    client: "Editorial Lookbook",
    coverImage: "/portfolio/portrait/IMG_4576.webp",
    image: "/portfolio/portrait/IMG_4576.webp",
    featured: false,
    layoutSpan: "regular",
    services: ["Editorial lookbook", "Styling vezetés", "Kreatív utómunka"],
    projectDescription:
      "Modern editorial sorozat határozott karakterrel, amely ötvözi a divatfotózás és a filmes hangulat elemeit.",
    galleryImages: [
      {
        src: "/portfolio/portrait/IMG_4576.webp",
        alt: "Cinematic portré beállítás",
        aspect: "portrait",
      },
      {
        src: "/portfolio/portrait/IMG_4579.webp",
        alt: "Közeli stúdióportré",
        aspect: "portrait",
      },
    ],
  },
];

/**
 * Helper függvények
 */
export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug || p.id === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prevProject: Project;
  nextProject: Project;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug || p.id === currentSlug);
  const prevIndex = index > 0 ? index - 1 : projects.length - 1;
  const nextIndex = index < projects.length - 1 ? index + 1 : 0;

  return {
    prevProject: projects[prevIndex],
    nextProject: projects[nextIndex],
  };
}
