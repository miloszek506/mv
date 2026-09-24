import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { PricingCatalog } from "@/components/PricingCatalog";
import { StructuredData } from "@/components/StructuredData";
import { processSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Cennik stron WordPress, WooCommerce i Next.js",
  description: "Przejrzysty cennik MV Studio: strony WordPress, sklepy WooCommerce i indywidualne realizacje Next.js. Podane ceny są cenami od.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cennik stron WordPress, WooCommerce i Next.js | MV Studio",
    description: "Pakiety stron, sklepów i realizacji premium z jasnym zakresem oraz cenami od.",
    url: "/services",
    images: [{ url: "/images/mv-studio-og.png", width: 3024, height: 1718, alt: "MV Studio: nowoczesne strony internetowe" }],
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Cennik MV Studio",
        description: "Pakiety wykonania stron WordPress, WooCommerce i Next.js.",
      }} />
      <Breadcrumbs items={[{ label: "Strona główna", href: "/" }, { label: "Cennik" }]} />
      <PageHero
        eyebrow="Cennik · Strony, sklepy i doświadczenia"
        title={["Cennik", "stron"]}
        description="Od prostych stron WordPress, przez podstawowe sklepy WooCommerce, po indywidualne realizacje premium w Next.js. Podane ceny są cenami od. Końcowy zakres ustalamy dla konkretnego projektu."
        index="04"
        variant="services"
        action={{ href: "/contact", label: "Zapytaj o wycenę" }}
      />
      <PricingCatalog />
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
