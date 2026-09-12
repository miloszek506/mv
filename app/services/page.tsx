import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ServiceOfferGrid } from "@/components/ServiceOfferGrid";
import { StructuredData } from "@/components/StructuredData";
import { serviceOffers, technologyChoices } from "@/data/services";
import {
  additionalMaintenanceWork,
  maintenancePackages,
  processSteps,
  websitePackages,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "WordPress, WooCommerce i strony Next.js | Oferta",
  description: "Oferta MV Studio: strony WordPress, sklepy WooCommerce, strony premium Next.js i TypeScript, animacje GSAP oraz proste elementy 3D.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "WordPress, WooCommerce i strony Next.js | MV Studio",
    description: "Dobieramy technologię strony do celu: od łatwego w edycji WordPressa po indywidualne realizacje Next.js.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Oferta MV Studio",
        itemListElement: serviceOffers.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `https://mvstudio.pl/services/#${service.slug}`,
        })),
      }} />
      <Breadcrumbs items={[{ label: "Strona główna", href: "/" }, { label: "Oferta" }]} />
      <PageHero
        eyebrow="Oferta · Technologia dopasowana do celu"
        title={["Oferta", "MV Studio"]}
        description="Tworzymy łatwe w zarządzaniu strony WordPress, sklepy WooCommerce i indywidualne realizacje premium w Next.js. Najpierw wybieramy właściwe rozwiązanie, później projektujemy doświadczenie."
        index="04"
        variant="services"
        action={{ href: "/contact", label: "Zapytaj o wycenę" }}
      />
      <section className="offer-section" aria-labelledby="offer-title">
        <div className="section-heading offer-heading" data-reveal>
          <span className="eyebrow">Specjalizacje MV Studio</span>
          <h2 id="offer-title">Jedna marka.<br />Właściwe narzędzie.</h2>
          <p>
            Nie dopasowujemy każdego projektu do jednej technologii. Zakres,
            sposób edycji treści, wydajność i potrzebne interakcje decydują o rozwiązaniu.
          </p>
        </div>
        <ServiceOfferGrid />
      </section>
      <section className="technology-choice-section" aria-labelledby="technology-choice-title" data-cursor-theme="dark">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">WordPress czy Next.js?</span>
          <h2 id="technology-choice-title">Decyzja zaczyna się<br />od sposobu pracy.</h2>
        </div>
        <div className="technology-choice-grid">
          {technologyChoices.map((choice) => (
            <article key={choice.title} data-reveal>
              <h3>{choice.title}</h3>
              <p>{choice.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="website-pricing-section" aria-labelledby="website-pricing-title">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Nowa strona</span>
          <h2 id="website-pricing-title">Pakiety wykonania<br />strony.</h2>
        </div>
        <div className="website-pricing-list">
          {websitePackages.map((item, index) => (
            <article className="website-package" key={item.name} data-reveal>
              <span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.summary}</p></div>
              <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <strong>{item.price}</strong><Link className="text-link" href="/contact">Zapytaj <ArrowIcon /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="pricing-section maintenance-pricing" aria-labelledby="maintenance-title">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Utrzymanie strony</span>
          <h2 id="maintenance-title">Pakiety utrzymania<br />i opieki nad stroną.</h2>
        </div>
        <p className="pricing-intro" data-reveal>
          Pakiety utrzymania i opieki nad stroną obejmują hosting, bezpieczeństwo,
          kopie zapasowe, aktualizacje i wsparcie — zależnie od wybranego zakresu.
        </p>
        <div className="pricing-grid maintenance-grid">
          {maintenancePackages.map((item, index) => (
            <article className={`pricing-card maintenance-card${item.featured ? " is-featured" : ""}`} key={item.name} data-reveal>
              {item.featured ? <span className="pricing-badge">Najczęściej wybierany</span> : null}
              <div className="pricing-card-top"><span>0{index + 1}</span><span>Pakiet</span></div>
              <h3>{item.name}</h3>
              <p className="pricing-price"><strong>{item.price}</strong><span>{item.period}</span></p>
              <p>{item.summary}</p>
              <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className="pricing-cta" href="/contact">Zapytaj o pakiet <ArrowIcon /></Link>
            </article>
          ))}
        </div>
        <aside className="additional-work" data-reveal>
          <div><span className="eyebrow">Prace dodatkowe</span><strong>{additionalMaintenanceWork.price}</strong></div>
          <p>{additionalMaintenanceWork.description} {additionalMaintenanceWork.examples}</p>
        </aside>
      </section>
      <section className="process-section" aria-labelledby="service-process-title">
        <div className="section-heading process-heading" data-reveal>
          <span className="eyebrow">Współpraca</span>
          <h2 id="service-process-title">Trzy etapy.<br />Jasny proces.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step.number}><span>{step.number}</span><div><span className="step-timing">{step.timing}</span><h3>{step.title}</h3></div><p>{step.description}</p></li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
