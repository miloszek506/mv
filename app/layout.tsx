import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mvstudio.pl"),
  title: {
    default: "MV Studio — Strony internetowe dla firm",
    template: "%s — MV Studio",
  },
  description:
    "MV Studio projektuje i wdraża strony internetowe oraz zapewnia hosting, utrzymanie i opiekę nad stronami WordPress w Bielsku-Białej.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MV Studio — Strony internetowe dla firm",
    description:
      "Nowoczesne strony internetowe tworzone z myślą o Twojej firmie.",
    url: "https://mvstudio.pl",
    siteName: "MV Studio",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}<CustomCursor /></body>
    </html>
  );
}
