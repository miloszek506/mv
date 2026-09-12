import type { Metadata } from "next";

export { default } from "../services/page";

export const metadata: Metadata = {
  title: "Cennik stron WordPress, WooCommerce i Next.js",
  description: "Przejrzysty cennik MV Studio: strony WordPress, sklepy WooCommerce i indywidualne realizacje Next.js. Podane ceny są cenami od.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cennik stron WordPress, WooCommerce i Next.js | MV Studio",
    description: "Pakiety stron, sklepów i realizacji premium z jasnym zakresem oraz cenami od.",
    url: "/cennik",
    images: [{ url: "/images/mv-studio-og.png", width: 3024, height: 1718, alt: "MV Studio — nowoczesne strony internetowe" }],
  },
};
