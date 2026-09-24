import type { MetadataRoute } from "next";

const siteUrl = "https://mvstudio.pl";

export const dynamic = "force-static";

const publicRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/projects/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projects/avandis/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects/benvenuti-a-napoli/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/cennik/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/polityka-cookies/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/polityka-prywatnosci/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/interaktywne-3d/", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
