import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { pricingPackages, processSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Cennik stron internetowych",
  description: "Pakiety stron internetowych MV Studio: Start od 800 zł, Business od 1500 zł i Premium od 2500 zł.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Cennik · Pakiety stron internetowych"
        title={["Zakres", "i ceny"]}
        description="Trzy punkty wyjścia do rozmowy o stronie. Ostateczny zakres i wycena zależą od potrzeb projektu."
        index="04"
        variant="services"
        action={{ href: "/contact", label: "Zapytaj o wycenę" }}
      />
      <section className="pricing-section" aria-labelledby="pricing-title">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Pakiety</span>
          <h2 id="pricing-title">Wybierz właściwy<br />punkt startu.</h2>
        </div>
        <div className="pricing-grid">
          {pricingPackages.map((item, index) => (
            <article className="pricing-card" key={item.name} data-reveal>
              <div className="pricing-card-top"><span>0{index + 1}</span><p>{item.price}</p></div>
              <h3>{item.name}</h3><p>{item.summary}</p>
              <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className="text-link" href="/contact">Zapytaj o pakiet ↗</Link>
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
