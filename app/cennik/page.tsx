import type { Metadata } from "next";

export { default } from "../services/page";

export const metadata: Metadata = {
  title: "Cennik stron internetowych i opieki WordPress",
  description: "Pakiety wykonania stron oraz utrzymania i opieki nad stronami WordPress w MV Studio.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cennik stron internetowych | MV Studio",
    description: "Sprawdź pakiety wykonania strony i późniejszej opieki technicznej.",
    url: "/cennik",
  },
};
