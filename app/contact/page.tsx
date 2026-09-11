import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Kontakt i wycena | Bielsko-Biała",
  description: "Skontaktuj się z MV Studio w Bielsku-Białej i opowiedz nam o planowanej stronie internetowej.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Kontakt · Bielsko-Biała"
        title={["Napisz", "do nas"]}
        description="Opowiedz krótko, czego potrzebuje Twoja firma. Zwykle odpowiadamy w ciągu 24 godzin."
        index="05"
        variant="contact"
      />
      <section className="contact-section contact-page-section" aria-labelledby="contact-form-title" data-cursor-theme="dark">
        <div className="contact-intro" data-reveal>
          <span className="eyebrow">Wycena projektu</span>
          <h2 id="contact-form-title">Zacznijmy<br />rozmowę.</h2>
          <p>Formularz przygotuje wiadomość w Twojej aplikacji pocztowej.</p>
        </div>
        <div className="contact-details" data-reveal>
          <a href={`mailto:${contact.email}`}>{contact.email} ↗</a>
          {contact.phones.map((phone, index) => <a href={contact.phoneHrefs[index]} key={phone}>{phone}</a>)}
          <span>{contact.city}</span>
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
        <div data-reveal><ContactForm /></div>
      </section>
      <FaqList />
    </PageShell>
  );
}
