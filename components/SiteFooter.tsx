import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { contact, navigation } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-footer>
      <div className="footer-lead">
        <span className="eyebrow">Nowy projekt</span>
        <h2>Stwórzmy coś,<br />co działa.</h2>
        <Link className="footer-cta" href="/contact">Porozmawiajmy <ArrowIcon /></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand-block">
          <Link className="brand" href="/" aria-label="MV Studio — strona główna">MV<span>•</span>STUDIO</Link>
          <p>Projektujemy strony WordPress, sklepy WooCommerce i indywidualne realizacje premium w Next.js.</p>
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
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowIcon /></a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook <ArrowIcon /></a>
          <Link href={contact.privacyPolicy}>Polityka prywatności</Link>
          <Link href="/polityka-cookies">Polityka cookies</Link>
          <CookieSettingsButton />
        </div>
      </div>
      <p className="footer-copyright">© 2026 MV Studio. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
}
