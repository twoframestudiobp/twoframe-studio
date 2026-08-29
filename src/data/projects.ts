export interface Project {
  id: string;
  title: string;
  client: string;
  category: "live" | "commercial" | "portrait";
  categoryLabel: string;
  image: string;
  year: string;
  description: string;
  aspect?: "portrait" | "landscape" | "square";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "live-concert-stage",
    title: "Stage Energy & Lighting",
    client: "Live Arena Showcase",
    category: "live",
    categoryLabel: "Live & Events",
    image: "/images/IMG_4565.webp",
    year: "2024",
    description: "Élő koncert atmoszféra és színpadi dinamika rögzítése nagyfelbontású vizuális anyagokban.",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "artist-portrait-mood",
    title: "Editorial Artist Session",
    client: "Artist Promo",
    category: "portrait",
    categoryLabel: "Portrait & Editorial",
    image: "/images/IMG_4579.webp",
    year: "2024",
    description: "Karakteres, mély tónusú stúdióportrék és előadói arculatfotózás.",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "brand-commercial-vibes",
    title: "Urban Brand Campaign",
    client: "Streetwear & Lifestyle",
    category: "commercial",
    categoryLabel: "Brands & Commercial",
    image: "/images/IMG_4570.webp",
    year: "2024",
    description: "Modern, fiatalos márkaidentitást kifejező életmód és termék vizuális kampány.",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "live-performance-motion",
    title: "Club & Festival Nights",
    client: "Festival Series",
    category: "live",
    categoryLabel: "Live & Events",
    image: "/images/IMG_4550.webp",
    year: "2024",
    description: "A közönség és a fellépő közötti feszültség és eufória megörökítése.",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "portrait-studio-expression",
    title: "Minimal Studio Series",
    client: "Personal Branding",
    category: "portrait",
    categoryLabel: "Portrait & Editorial",
    image: "/images/IMG_4545.webp",
    year: "2024",
    description: "Letisztult, minimalista portrék modern világítással és határozott jelenléttel.",
    aspect: "portrait",
    featured: false,
  },
  {
    id: "live-crowd-atmosphere",
    title: "Sound & Vision Live",
    client: "Concert Tour",
    category: "live",
    categoryLabel: "Live & Events",
    image: "/images/IMG_4554.webp",
    year: "2024",
    description: "Turnédokumentáció, backstage pillanatok és élő fellépések vizuális narratívája.",
    aspect: "portrait",
    featured: false,
  },
  {
    id: "commercial-product-editorial",
    title: "Atmosphere & Venue Story",
    client: "Hospitality & Interior",
    category: "commercial",
    categoryLabel: "Brands & Commercial",
    image: "/images/IMG_4574.webp",
    year: "2024",
    description: "Prémium terek és vendégélmények esztétikus, filmes hatású megjelenítése.",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "portrait-cinematic-character",
    title: "Cinematic Character Study",
    client: "Editorial Lookbook",
    category: "portrait",
    categoryLabel: "Portrait & Editorial",
    image: "/images/IMG_4576.webp",
    year: "2024",
    description: "Erőteljes kontrasztok és filmes hangulatú portrésorozat.",
    aspect: "portrait",
    featured: false,
  },
  {
    id: "commercial-lifestyle-detail",
    title: "Modern Aesthetics",
    client: "Creative Brand Collaboration",
    category: "commercial",
    categoryLabel: "Brands & Commercial",
    image: "/images/IMG_4577.webp",
    year: "2024",
    description: "Részletgazdag vizuális elemek, amelyek támogatják a márkapozicionálást.",
    aspect: "square",
    featured: false,
  },
];
