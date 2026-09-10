import Link from "next/link";
import { contact, navigation } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/" aria-label="MV Studio — strona główna">
        MV<span>•</span>STUDIO
      </Link>
      <nav className="footer-links" aria-label="Nawigacja w stopce">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-meta">
        <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
        <a href={contact.privacyPolicy} target="_blank" rel="noreferrer">Polityka prywatności ↗</a>
        <p>© 2026 MV Studio</p>
      </div>
    </footer>
  );
}
