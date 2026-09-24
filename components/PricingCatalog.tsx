import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import {
  basePriceExclusions,
  nextPricing,
  valuationFactors,
  wordpressPricing,
  woocommercePricing,
} from "@/data/pricing";
import { additionalMaintenanceWork, maintenancePackages } from "@/data/site-content";

function PackageCard({ item }: { item: { name: string; price: string; audience: string; features: readonly string[]; featured?: boolean } }) {
  return (
    <article className={`catalog-card${item.featured ? " catalog-card--featured" : ""}`} data-reveal={true} data-cursor-theme={item.featured ? "dark" : undefined}>
      {item.featured ? <span className="catalog-badge">Rekomendowany</span> : null}
      <div className="catalog-card-top"><span>Pakiet</span><span>cena od</span></div>
      <h3>{item.name}</h3>
      <p className="catalog-price">{item.price}</p>
      <p className="catalog-audience"><strong>Dla kogo:</strong> {item.audience}</p>
      <ul className="catalog-card-features">{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <Link className="catalog-cta" href="/contact">Zapytaj o pakiet <ArrowIcon /></Link>
    </article>
  );
}

export function PricingCatalog() {
  return (
    <>
      <section className="pricing-catalog" aria-labelledby="pricing-catalog-title">
        <div className="pricing-catalog-intro" data-reveal>
          <div>
            <span className="eyebrow">Cennik · Pakiety</span>
            <h2 id="pricing-catalog-title">Wybierz poziom<br />dla swojego projektu.</h2>
          </div>
          <p>Podane ceny są cenami „od”. Ostateczna wycena zależy od zakresu, materiałów i funkcji uzgodnionych dla konkretnej strony.</p>
        </div>

        <section className="pricing-group" id="wordpress" aria-labelledby="wordpress-pricing-title">
          <div className="pricing-group-heading" data-reveal>
            <span className="eyebrow">01 · WordPress</span>
            <h2 id="wordpress-pricing-title">Łatwe zarządzanie<br />treścią.</h2>
            <p>Uniwersalna opcja dla firm, które chcą samodzielnie edytować stronę i rozwijać ją etapami.</p>
          </div>
          <div className="catalog-grid">{wordpressPricing.map((item) => <PackageCard item={item} key={item.name} />)}</div>
        </section>

        <section className="pricing-group pricing-group--woo" id="woocommerce" aria-labelledby="woocommerce-pricing-title">
          <div className="pricing-group-heading" data-reveal>
            <span className="eyebrow">02 · WooCommerce</span>
            <h2 id="woocommerce-pricing-title">Prosty sklep<br />na dobry start.</h2>
            <p>Podstawowy sklep internetowy na WordPressie i WooCommerce. Integracje oraz większy zakres ustalamy indywidualnie.</p>
          </div>
          <div className="catalog-grid catalog-grid--single"><PackageCard item={woocommercePricing} /></div>
        </section>

        <section className="pricing-group pricing-group--next" id="nextjs-typescript" aria-labelledby="next-pricing-title">
          <div className="pricing-group-heading" data-reveal>
            <span className="eyebrow">03 · Next.js</span>
            <h2 id="next-pricing-title">Indywidualna warstwa<br />premium.</h2>
            <p>Dedykowany projekt w React, Next.js i TypeScript dla marek, które potrzebują szybkości i niestandardowego doświadczenia.</p>
          </div>
          <div className="catalog-grid">{nextPricing.map((item) => <PackageCard item={item} key={item.name} />)}</div>
          <p className="pricing-note" data-reveal>Proste animacje GSAP są częścią wybranych pakietów. Dodatkowe interakcje, WebGL i Three.js analizujemy oraz wyceniamy indywidualnie. Nie są elementem każdego projektu.</p>
        </section>

        <section className="pricing-section maintenance-pricing pricing-group--maintenance" aria-labelledby="maintenance-title">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Utrzymanie strony</span>
            <h2 id="maintenance-title">Pakiety utrzymania<br />i opieki nad stroną.</h2>
          </div>
          <p className="pricing-intro" data-reveal>
            Pakiety utrzymania i opieki nad stroną obejmują hosting, bezpieczeństwo,
            kopie zapasowe, aktualizacje i wsparcie, zależnie od wybranego zakresu.
          </p>
          <div className="pricing-grid maintenance-grid">
            {maintenancePackages.map((item, index) => (
              <article className={`pricing-card maintenance-card${item.featured ? " is-featured" : ""}`} data-cursor-theme={item.featured ? "dark" : undefined} key={item.name} data-reveal>
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

        <section className="pricing-notes" aria-labelledby="valuation-title">
          <article data-reveal>
            <span className="eyebrow">Wycena projektu</span>
            <h2 id="valuation-title">Co wpływa na końcową wycenę?</h2>
            <ul>{valuationFactors.map((factor) => <li key={factor}>{factor}</li>)}</ul>
          </article>
          <article data-reveal>
            <span className="eyebrow">Zakres podstawowy</span>
            <h2>Co nie jest zawarte w podstawowej cenie?</h2>
            <ul>{basePriceExclusions.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </section>

        <section className="pricing-final-cta" data-reveal data-cursor-theme="dark">
          <span className="eyebrow">Następny krok</span>
          <h2>Poproś o indywidualną<br />wycenę.</h2>
          <p>Opowiedz nam o firmie, treściach i planowanym zakresie. Wrócimy z rozwiązaniem dopasowanym do projektu.</p>
          <Link className="circle-link" href="/contact"><span>Porozmawiajmy</span><ArrowIcon /></Link>
        </section>
      </section>
    </>
  );
}
