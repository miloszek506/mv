import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import {
  additionalMaintenanceWork,
  maintenancePackages,
  processSteps,
  websitePackages,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Cennik stron i opieki WordPress",
  description: "Cennik MV Studio: tworzenie stron internetowych oraz pakiety hostingu, utrzymania, aktualizacji i opieki nad stroną WordPress.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Cennik · Strony internetowe i opieka"
        title={["Zakres", "i ceny"]}
        description="Projektujemy strony internetowe i zapewniamy ich regularne utrzymanie — od hostingu i aktualizacji WordPressa po bieżącą opiekę techniczną."
        index="04"
        variant="services"
        action={{ href: "/contact", label: "Zapytaj o wycenę" }}
      />
      <section className="pricing-section maintenance-pricing" aria-labelledby="maintenance-title">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Utrzymanie strony</span>
          <h2 id="maintenance-title">Spokój po<br />publikacji.</h2>
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
              <Link className="pricing-cta" href="/contact">Zapytaj o pakiet <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
        <aside className="additional-work" data-reveal>
          <div><span className="eyebrow">Prace dodatkowe</span><strong>{additionalMaintenanceWork.price}</strong></div>
          <p>{additionalMaintenanceWork.description} {additionalMaintenanceWork.examples}</p>
        </aside>
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
              <strong>{item.price}</strong><Link className="text-link" href="/contact">Zapytaj ↗</Link>
            </article>
          ))}
        </div>
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
