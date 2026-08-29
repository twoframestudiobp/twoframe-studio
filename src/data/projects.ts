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
  {
    slug: "elo-koncert",
    id: "elo-koncert",
    title: "Élő koncert",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "Színpadi atmoszféra, fényeffektek és a fellépés nyers energiájának megörökítése.",
    year: "2026",
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
      "Nagy fényerejű prime objektívekkel, manuális expozíció-kontrollal és filmes tónusú utómunkával dolgoztunk, amely kiemeli a mély feketéket és a ragyogó színpadi fénycsóvákat.",
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
        src: "/portfolio/live/IMG_8819.webp",
        alt: "Koncert pillanatkép és aréna atmoszféra",
        aspect: "wide",
        caption: "Az aréna atmoszférája és az élő fellépés feszültsége.",
      },
      {
        src: "/portfolio/live/IMG_8836.webp",
        alt: "Nagyszínpad és fények",
        aspect: "landscape",
        caption: "A nagyszínpad fényei és dinamikája a koncert csúcspontján.",
      },
      {
        src: "/portfolio/live/IMG_8433.webp",
        alt: "Közönség és fellépés",
        aspect: "landscape",
        caption: "Közönség reakció és az előadás energiája.",
      },
      {
        src: "/portfolio/live/IMG_4550.webp",
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
    shortDescription: "Karakteres, filmes hatású előadói portrésorozat stúdióban és külső helyszínen.",
    year: "2026",
    location: "Budapest, HU",
    client: "Előadói Portfólió",
    coverImage: "/portfolio/portrait/IMG_4545.webp",
    image: "/portfolio/portrait/IMG_4545.webp",
    featured: true,
    layoutSpan: "tall",
    services: ["Előadói arculat", "Lemezborító fotózás", "Sajtó & Promo anyagok", "Social Portfólió"],
    projectDescription:
      "Egy feltörekvő zenei előadó számára készítettünk átfogó vizuális portfóliót, amely a közelgő albummegjelenést és a turné promócióját kíséri. A koncepció a nyers, őszinte tekintetekre és a karakteres fény-árnyék kontrasztokra épült.",
    challenge:
      "Olyan portrévilágot teremteni, amely elkerüli a steril stúdiófotó kliséit, és valódi mélységet ad az előadó művészi identitásának.",
    approach:
      "Finoman irányított természetes és formázott mesterséges fények kombinációjával dolgoztunk, filmes tónusú analóg színvilággal.",
    result:
      "Egységes sajtó- és streaming-kész fotósorozat, amely azonnal felhasználtak Spotify borítókon és zenei magazinok címlapján.",
    galleryImages: [
      {
        src: "/portfolio/portrait/IMG_4545.webp",
        alt: "Artist Portrait kiemelt fotó",
        aspect: "portrait",
        caption: "Karakteres előadói közeli portré.",
      },
      {
        src: "/portfolio/portrait/018C245B-DF73-437B-87C4-B4DC3EA75354.webp",
        alt: "Editorial portré beállítás",
        aspect: "portrait",
        caption: "Kifejező stúdióvilágítás és letisztult forma.",
      },
      {
        src: "/portfolio/portrait/047C323A-D01B-477B-887D-BD65ED1D7FB4.webp",
        alt: "Hangulati portré kép",
        aspect: "portrait",
        caption: "Mély tónusok és fókuszált tekintet.",
      },
      {
        src: "/portfolio/portrait/1BF76D2F-97F9-44E0-A117-3D1E51D24642.webp",
        alt: "Promo sorozat részlet",
        aspect: "portrait",
        caption: "Modern zenei promóciós anyag.",
      },
    ],
  },
  {
    slug: "brand-content",
    id: "brand-content",
    title: "Brand Content",
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
    services: ["Social Media Tartalomgyártás", "Termék- & Modellfotózás", "Rövid formátumú videók", "Havi Tartalomcsomag"],
    projectDescription:
      "A márka vizuális kommunikációjának megújítása prémium, mégis fiatalos és közvetlen esztétikával. A fotók és rövid videók a modern digitális platformok elvárásaihoz lettek igazítva.",
    challenge:
      "Egységes vizuális nyelvet alkotni, amely a közösségi média hírfolyamban azonnal kitűnik és fenntartja a prémium márkaértéket.",
    approach:
      "Dinamikus kompozíciók, természetes textúrák és visszafogott, letisztult színpaletta alkalmazása.",
    result:
      "3x-os elköteleződés-növekedés a közösségi csatornákon és egységes digitális márkaélmény.",
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
        src: "/portfolio/commercial/_Aug_27_2026_at_02_29_03_PM_1_.webp",
        alt: "Lookbook kampányfotó",
        aspect: "portrait",
        caption: "Editorial stílusú márkakampány kép.",
      },
    ],
  },
  {
    slug: "szinpadi-dinamika",
    id: "szinpadi-dinamika",
    title: "Színpadi dinamika",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "A fellépés legintenzívebb pillanatai és az előadó közönségkapcsolata.",
    year: "2026",
    location: "Budapest, HU",
    client: "Zenei Produkció",
    coverImage: "/portfolio/live/IMG_4554.webp",
    image: "/portfolio/live/IMG_4554.webp",
    featured: true,
    layoutSpan: "regular",
    services: ["Koncertfotózás", "Színpadi akcióképek", "Turné tartalom"],
    projectDescription:
      "A fellépés legintenzívebb momentumainak rögzítése, ahol a fények, az előadói mozgás és a zenészek közötti harmónia találkozik.",
    challenge: "Gyors mozgások tűéles megörökítése dinamikus fényviszonyok mellett.",
    approach: "Nagy zársebességű manuális fókuszálás és ritmikus kompozíciókezelés.",
    result: "Erőteljes, mozgalmas fotósorozat a zenekar hivatalos csatornáira.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_4554.webp",
        alt: "Színpadi dinamika nyitókép",
        aspect: "wide",
        caption: "Színpadi mozgás és fényhatások.",
      },
      {
        src: "/portfolio/live/IMG_8622.webp",
        alt: "Fellépés momentum",
        aspect: "landscape",
        caption: "Az élő zene nyers energiája.",
      },
      {
        src: "/portfolio/live/IMG_8628.webp",
        alt: "Színpadi pillanat",
        aspect: "landscape",
        caption: "Fénycsóvák és a fellépő sziluettje.",
      },
      {
        src: "/portfolio/live/IMG_8634.webp",
        alt: "Koncert záró pillanat",
        aspect: "landscape",
        caption: "A fellépés csúcspontja.",
      },
    ],
  },
  {
    slug: "minimal-studio-portre",
    id: "minimal-studio-portre",
    title: "Minimal Stúdió Portré",
    category: "portrait",
    categoryLabel: "Portré & Editorial",
    shortDescription: "Letisztult vonalak, precíz világítás és természetes tekintetek.",
    year: "2026",
    location: "Budapest, HU",
    client: "Modell & Alkotó",
    coverImage: "/portfolio/portrait/DSC02213.webp",
    image: "/portfolio/portrait/DSC02213.webp",
    featured: false,
    layoutSpan: "tall",
    services: ["Stúdiófotózás", "Karakterportré", "Magazin Editorial"],
    projectDescription:
      "Letisztult, monokróm és mély tónusú stúdiófotózás, ahol minden felesleges elem eltűnik a fókuszból, teret engedve az arckifejezésnek és a formáknak.",
    challenge: "Minimális eszközhasználattal maximális kifejezőerőt elérni.",
    approach: "Karakteres egyfényes beállítás és finom élvilágítás.",
    result: "Nemzetközi magazin színvonalú portfólió anyag.",
    galleryImages: [
      {
        src: "/portfolio/portrait/DSC02213.webp",
        alt: "Minimal stúdió portré",
        aspect: "portrait",
        caption: "Letisztult formák és természetes fényirányok.",
      },
      {
        src: "/portfolio/portrait/c6655855-b77f-46b2-8e09-32b6a2ae9ae8.webp",
        alt: "Editorial beállítás",
        aspect: "portrait",
        caption: "Magazinos kompozíció és karakter.",
      },
      {
        src: "/portfolio/portrait/e2d7b116-628e-498a-ba8c-f2dbe164ab03.webp",
        alt: "Stúdió sorozat",
        aspect: "portrait",
        caption: "Kifinomult portré részlet.",
      },
      {
        src: "/portfolio/portrait/ad18ce88-d2fa-473b-9939-717c0d95befe.webp",
        alt: "Finom tónusok",
        aspect: "portrait",
        caption: "Kreatív megvilágítás és forma.",
      },
    ],
  },
  {
    slug: "turne-dokumentacio",
    id: "turne-dokumentacio",
    title: "Turné Dokumentáció",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "Backstage, utazás és a fellépések közötti intim pillanatok krónikája.",
    year: "2026",
    location: "Turné, HU",
    client: "Turné Produkció",
    coverImage: "/portfolio/live/DSC02537_.webp",
    image: "/portfolio/live/DSC02537_.webp",
    featured: false,
    layoutSpan: "regular",
    services: ["Dokumentarista fotózás", "Backstage hozzáférés", "Turnéfilm"],
    projectDescription:
      "A turnéélet kendőzetlen, filmes hangulatú bemutatása a próbateremtől az öltözőn át a koncertek utáni levezetésig.",
    challenge: "Észrevétlenül jelen lenni és a legmeghittebb pillanatokat elkapni.",
    approach: "Kompakt, diszkrét felszerelés és meleg tónusú filmszimulációs színkezelés.",
    result: "Hiteles történetmesélés a zenekar legfontosabb mérföldköveiről.",
    galleryImages: [
      {
        src: "/portfolio/live/DSC02537_.webp",
        alt: "Turné pillanat",
        aspect: "portrait",
        caption: "Backstage hangulat és előkészület.",
      },
      {
        src: "/portfolio/live/DSC02553_.webp",
        alt: "Zenészek felkészülése",
        aspect: "portrait",
        caption: "Feszült figyelem a színpadra lépés előtt.",
      },
      {
        src: "/portfolio/live/DSC02568_.webp",
        alt: "Utazás és backstage",
        aspect: "portrait",
        caption: "A turné ritmusa és az út.",
      },
      {
        src: "/portfolio/live/DSC02576_.webp",
        alt: "Koncert után",
        aspect: "portrait",
        caption: "A koncert utáni felszabadult momentum.",
      },
    ],
  },
  {
    slug: "atmoszfera-es-terek",
    id: "atmoszfera-es-terek",
    title: "Atmoszféra és Terek",
    category: "live",
    categoryLabel: "Live & Events",
    shortDescription: "A rendezvényhelyszínek, arénák és a közönség közös energiája.",
    year: "2026",
    location: "Budapest, HU",
    client: "Fesztivál & Esemény",
    coverImage: "/portfolio/live/IMG_8435.webp",
    image: "/portfolio/live/IMG_8435.webp",
    featured: false,
    layoutSpan: "wide",
    services: ["Eseményfotózás", "Tér- és látványrögzítés", "Fesztivál aftermovie"],
    projectDescription:
      "A helyszíni építészet, a fénytechnika és a több ezres tömeg vibráló kapcsolatának nagylátószögű bemutatása.",
    challenge: "A monumentális terek arányainak és a közönség intim reakcióinak egyensúlya.",
    approach: "Szuperszéles látószög és magas dinamikatartományú expozíció.",
    result: "Látványos, reprezentatív vizuális archívum a szervezők és szponzorok számára.",
    galleryImages: [
      {
        src: "/portfolio/live/IMG_8435.webp",
        alt: "Fesztivál tér és fények",
        aspect: "landscape",
        caption: "A rendezvény panorámája és a tömeg.",
      },
      {
        src: "/portfolio/live/IMG_8444.webp",
        alt: "Fények a térben",
        aspect: "portrait",
        caption: "A térbeli fényinstallációk atmoszférája.",
      },
      {
        src: "/portfolio/live/IMG_8447.webp",
        alt: "Éjszakai fényshow",
        aspect: "portrait",
        caption: "Éjszakai fények és hangulat.",
      },
      {
        src: "/portfolio/live/IMG_8480.webp",
        alt: "Közönség élmény",
        aspect: "portrait",
        caption: "A fesztiválközönség energiája.",
      },
    ],
  },
  {
    slug: "cinematic-lookbook",
    id: "cinematic-lookbook",
    title: "Cinematic Lookbook",
    category: "commercial",
    categoryLabel: "Commercial",
    shortDescription: "Filmhatású divat- és stílussorozat modern márkáknak.",
    year: "2026",
    location: "Budapest, HU",
    client: "Divat & Stílus Brand",
    coverImage: "/portfolio/commercial/_Aug_27_2026_at_10_35_00_PM_1_.webp",
    image: "/portfolio/commercial/_Aug_27_2026_at_10_35_00_PM_1_.webp",
    featured: false,
    layoutSpan: "regular",
    services: ["Lookbook Fotózás", "Fashion Editorial", "Kreatív Koncepció"],
    projectDescription:
      "Egy modern divatmárka kollekciójának bemutatása filmes színhőmérséklettel, egyedi helyszíneken és karakteres modellvezetéssel.",
    challenge: "A ruhadarabok részleteinek és a művészi filmes atmoszférának tökéletes harmóniája.",
    approach: "Analóg filmhatású utómunka és természetes fények kiaknázása.",
    result: "Nemzetközi divatkampány színvonalú lookbook anyag.",
    galleryImages: [
      {
        src: "/portfolio/commercial/_Aug_27_2026_at_10_35_00_PM_1_.webp",
        alt: "Cinematic lookbook nyitókép",
        aspect: "portrait",
        caption: "Filmes tónusok és modern stílus.",
      },
      {
        src: "/portfolio/commercial/_Aug_27_2026_at_10_35_00_PM_2_.webp",
        alt: "Kollekció bemutatás",
        aspect: "portrait",
        caption: "Karakteres beállítás és kompozíció.",
      },
      {
        src: "/portfolio/commercial/_Aug_27_2026_at_10_35_00_PM_3_.webp",
        alt: "Részlet és textúra",
        aspect: "portrait",
        caption: "Anyaghasználat és részletek.",
      },
      {
        src: "/portfolio/commercial/_Aug_27_2026_at_10_41_52_PM_1_.webp",
        alt: "Modell kompozíció",
        aspect: "portrait",
        caption: "Hangulati editorial képkocka.",
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
