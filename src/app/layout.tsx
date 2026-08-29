import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TwoFrame Studio | Vizuális tartalom előadóknak, eseményeknek és márkáknak",
  description:
    "Fotó, videó és kreatív tartalom előadóknak, rendezvényeknek és prémium márkáknak. Koncertek, kampányfilmek, portrék és tartalompartnerség Budapesten.",
  keywords: [
    "TwoFrame Studio",
    "koncertfotózás",
    "rendezvényvideó",
    "aftermovie",
    "márkavideó",
    "kreatív stúdió Budapest",
    "portréfotózás",
    "előadói promó",
    "tartalomgyártás",
  ],
  authors: [{ name: "Szabó Barnabás", url: "https://twoframe.hu" }],
  creator: "TwoFrame Studio",
  metadataBase: new URL("https://twoframe.hu"),
  openGraph: {
    title: "TwoFrame Studio | Prémium Vizuális Tartalom",
    description:
      "Vizuális tartalom előadóknak, eseményeknek és márkáknak. Fotó, videó és kreatív tartalom, amely építi a brandedet.",
    url: "https://twoframe.hu",
    siteName: "TwoFrame Studio",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/images/IMG_4565.webp",
        width: 1200,
        height: 630,
        alt: "TwoFrame Studio - Vizuális Tartalomgyártás",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TwoFrame Studio | Vizuális Tartalomgyártás",
    description:
      "Vizuális tartalom előadóknak, eseményeknek és márkáknak. Fotó, videó és kreatív tartalom.",
    images: ["/images/IMG_4565.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-[#08080a] text-zinc-100 antialiased min-h-screen flex flex-col selection:bg-violet-600/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
