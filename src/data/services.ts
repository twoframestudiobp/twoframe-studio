export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  forWhom: string;
  deliverables: string[];
  highlight: string;
  image: string;
  isPartnership?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "live-events",
    number: "01",
    title: "LIVE & EVENTS",
    tagline: "Koncertek, fellépések és események vizuális dokumentálása.",
    description:
      "A koncertek és rendezvények energiája megismételhetetlen. Olyan felvételeket és aftermovie-kat készítünk, amelyek nem csupán dokumentálnak, hanem újra átélhetővé teszik az élményt és eladják a következő fellépésed jegyeit.",
    forWhom: "Zenekaroknak, előadóknak, fesztiváloknak, turnéknak és rendezvényszervezőknek.",
    deliverables: [
      "Dinamikus színpadi és backstage fotózás",
      "Függőleges Social Recap videók (Reels, TikTok)",
      "Nagyfelbontású sajtó- és promóciós fotócsomag",
      "Koncertfilm és aftermovie vágás professzionális hangutómunkával",
    ],
    highlight: "24 órán belüli gyorsválogatás azonnali közösségi média megosztáshoz.",
    image: "/portfolio/live/IMG_4565.webp",
  },
  {
    id: "brands-commercial",
    number: "02",
    title: "BRANDS & COMMERCIAL",
    tagline: "Fotó- és videótartalom márkáknak, vendéglátóhelyeknek és vállalkozásoknak.",
    description:
      "A mai digitális zajban a középszerű vizuális tartalom észrevétlen marad. Olyan modern, filmes hatású kampányanyagokat és közösségi média tartalmakat gyártunk, amelyek hitelesen és vonzóan mutatják be a vállalkozásodat.",
    forWhom: "Márkáknak, éttermeknek, bároknak, divatcégeknek és prémium szolgáltatóknak.",
    deliverables: [
      "Márkaimázs filmek és promóciós videók",
      "Koncepció- és termékfotózás webshopra és közösségi médiára",
      "Helyszín- és hangulatbemutató visual assetek",
      "Rövid, konverziót támogató videós hirdetéskreatívok",
    ],
    highlight: "Komplett vizuális styling és kreatív koncepció a márkád stílusára szabva.",
    image: "/portfolio/commercial/IMG_4570.webp",
  },
  {
    id: "portrait-editorial",
    number: "03",
    title: "PORTRAIT & EDITORIAL",
    tagline: "Portré, előadói promo, modell és personal branding tartalom.",
    description:
      "A karakteres portré az első számú névjegyed. Legyen szó előadói promóról, lemezborítóról vagy egyedi lookbookról, a képeink határozott, prémium és emlékezetes kisugárzást kölcsönöznek neked.",
    forWhom: "Zenészeknek, DJ-knek, alkotóknak, modelleknek és magabiztos szakembereknek.",
    deliverables: [
      "Stúdió és lokációs művészi portrésorozatok",
      "Lemezborító, single artwork és streaming promóképek",
      "Sajtó- és média portfólió készítés",
      "Modell és ruhamárka lookbook fotózás",
    ],
    highlight: "Személyre szabott fénybeállítások és professzionális kreatív irányítás a fotózás alatt.",
    image: "/portfolio/portrait/IMG_4545.webp",
  },
  {
    id: "content-partnership",
    number: "04",
    title: "CONTENT PARTNERSHIP",
    tagline: "Rendszeres vizuális tartalom olyan márkáknak és előadóknak, akik folyamatosan szeretnének friss és professzionális anyagokat.",
    description:
      "A következetes minőség kulcsfontosságú. Hosszú távú tartalomgyártási partnerségünk keretében havonta tervezett fotó- és videós forgatásokkal biztosítjuk, hogy a felületeid sose fogyjanak ki az igényes tartalomból.",
    forWhom: "Olyan előadóknak és vállalkozásoknak, akik folyamatosan növekedni akarnak és nem szeretnének minden hónapban új stábot keresni.",
    deliverables: [
      "Havi fix tartalomgyártási napok és forgatások",
      "Folyamatosan frissülő fotó- és rövidvideó (Reels/Shorts) csomagok",
      "Elsőbbségi rendelkezésre állás és rugalmas ütemezés",
      "Stratégiai vizuális irányvonal és márkaidentitás fenntartása",
    ],
    highlight: "Kiszámítható havi együttműködés, kevesebb adminisztráció, maximális kreatív összhang.",
    image: "/portfolio/commercial/IMG_4574.webp",
    isPartnership: true,
  },
];
