import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CookieConsent } from "@/components/CookieConsent";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mvstudio.pl"),
  title: {
    default: "MV Studio — Strony internetowe dla firm",
    template: "%s — MV Studio",
  },
  description:
    "MV Studio projektuje strony WordPress, sklepy WooCommerce i indywidualne strony premium w Next.js oraz TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MV Studio — Strony internetowe dla firm",
    description:
      "Strony WordPress, sklepy WooCommerce i dopracowane doświadczenia cyfrowe tworzone z myślą o celu firmy.",
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
      <body>{children}<CookieConsent /><CustomCursor /></body>
    </html>
  );
}
