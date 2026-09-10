import Link from "next/link";
import { contact, navigation } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-footer>
      <div className="footer-lead">
        <span className="eyebrow">Nowy projekt</span>
        <h2>Stwórzmy coś,<br />co działa.</h2>
        <Link className="footer-cta" href="/contact">Porozmawiajmy <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand-block">
          <Link className="brand" href="/" aria-label="MV Studio — strona główna">MV<span>•</span>STUDIO</Link>
          <p>Projektujemy i wdrażamy nowoczesne strony internetowe dla małych i lokalnych firm.</p>
        </div>
        <nav className="footer-links" aria-label="Nawigacja w stopce">
          <Link href="/">Home</Link>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {contact.phones.map((phone, index) => <a href={contact.phoneHrefs[index]} key={phone}>{phone}</a>)}
          <span>{contact.city}</span>
        </div>
        <div className="footer-socials">
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href={contact.privacyPolicy} target="_blank" rel="noreferrer">Polityka prywatności ↗</a>
        </div>
      </div>
      <p className="footer-copyright">© 2026 MV Studio. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
}
