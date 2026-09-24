import type { Metadata } from "next";
import Showroom from "./Showroom";

export const metadata: Metadata = {
  title: "Interaktywne strony 3D i WebGL | MV Studio",
  description: "Poznaj możliwości interaktywnych stron 3D, WebGL i Three.js tworzonych przez MV Studio.",
  alternates: { canonical: "/interaktywne-3d/" },
  robots: { index: true, follow: true },
};

export default function LabPage() {
  return <Showroom />;
}
