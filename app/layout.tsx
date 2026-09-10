import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mvstudio.pl"),
  title: {
    default: "MV Studio — Strony internetowe dla firm",
    template: "%s — MV Studio",
  },
  description:
    "Projektujemy i wdrażamy nowoczesne strony internetowe dla małych i lokalnych firm.",
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
      <body>{children}</body>
    </html>
  );
}
