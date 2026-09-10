import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactForm } from "@/components/ContactForm";
import { AnimationController } from "@/components/AnimationController";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    number: "01",
    title: "Projekt i wdrożenie strony",
    description:
      "Od pierwszego układu po działającą stronę. Indywidualny projekt, responsywny wygląd i przejrzysta nawigacja.",
  },
  {
    number: "02",
    title: "Optymalizacja",
    description:
      "Szybkie ładowanie, podstawy widoczności w Google oraz funkcje dopasowane do potrzeb biznesu.",
  },
  {
    number: "03",
    title: "Hosting i wsparcie",
    description:
      "Pomoc przy konfiguracji domeny i hostingu, certyfikat SSL, kopie zapasowe, aktualizacje i wsparcie techniczne.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Poznajemy firmę",
    description:
      "Rozmawiamy o biznesie, odbiorcach, celach i informacjach, które powinny znaleźć się na stronie.",
  },
  {
    number: "02",
    title: "Układamy strukturę",
    description:
      "Ustalamy kolejność treści i sposób, w jaki użytkownik będzie poruszał się po stronie.",
  },
  {
    number: "03",
    title: "Projektujemy",
    description:
      "Dobieramy typografię, kolory, obrazy i elementy interfejsu zgodne z charakterem marki.",
  },
  {
    number: "04",
    title: "Wdrażamy",
    description:
      "Budujemy stronę, przygotowujemy wersję mobilną i konfigurujemy uzgodnione funkcje.",
  },
  {
    number: "05",
    title: "Sprawdzamy",
    description:
      "Testujemy stronę na telefonie i komputerze, sprawdzamy formularze, linki i elementy techniczne.",
  },
];

export default function Home() {
  return (
    <main>
      <AnimationController />
      <Header />
      <section className="hero" id="start" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Bielsko-Biała · Projektowanie · Wdrożenia
        </div>

        <h1 id="hero-title" className="hero-title">
          <span>MV</span>
          <span className="hero-title-second">Studio</span>
        </h1>

        <div className="hero-bottom">
          <p>
            Projektujemy i wdrażamy strony internetowe dla małych i lokalnych
            firm. Zaczynamy od poznania biznesu, a dopiero później przechodzimy
            do projektu.
          </p>
          <div className="hero-actions">
            <Link className="circle-link" href="/contact">
              <span>Wyceń projekt</span>
              <span aria-hidden="true">↘</span>
            </Link>
            <Link className="text-link" href="/projects">
              Zobacz projekty <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          01 / 06
        </div>
      </section>

      <section className="about-section" id="o-nas" aria-labelledby="about-title">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">01 · O nas</span>
          <h2 id="about-title">
            Dwie perspektywy.
            <br />Jeden wspólny cel.
          </h2>
        </div>
        <div className="about-grid" data-reveal>
          <p className="about-lead">
            MV Studio tworzymy we dwóch — Miłosz i Vova. Łączymy kreatywność z
            praktycznym podejściem do biznesu.
          </p>
          <div className="about-copy">
            <p>
              Zaczęło się od prostych projektów wykonywanych dla znajomych. Z
              czasem zainteresowanie projektowaniem stron przerodziło się w
              osobny projekt, który rozwijamy jako MV Studio.
            </p>
            <p>
              Dzisiaj zajmujemy się projektowaniem, wdrażaniem i utrzymaniem
              stron internetowych przede wszystkim dla małych i lokalnych firm.
            </p>
            <Link className="text-link" href="/about">Poznaj MV Studio ↗</Link>
          </div>
        </div>
        <div className="founders" aria-label="Współzałożyciele MV Studio" data-reveal>
          <article>
            <span>Design · UX/UI</span>
            <h3>Vova</h3>
            <p>
              Odpowiada za projektowanie stron oraz UX/UI, łącząc estetykę z
              funkcjonalnością i potrzebami użytkownika.
            </p>
          </article>
          <article>
            <span>Technologia · Wdrożenie</span>
            <h3>Miłosz</h3>
            <p>
              Odpowiada za techniczną stronę projektów, szybkość działania,
              wdrożenie i poprawne działanie funkcji.
            </p>
          </article>
        </div>
      </section>

      <section className="services-section" id="uslugi" aria-labelledby="services-title">
        <div className="section-heading services-heading" data-reveal>
          <span className="eyebrow">02 · Usługi</span>
          <h2 id="services-title">
            Od pomysłu do strony,
            <br />która pracuje dla firmy.
          </h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">↘</span>
            </article>
          ))}
        </div>
        <Link className="section-cta text-link" href="/services">Zobacz pakiety i ceny ↗</Link>
      </section>

      <ProjectsSection />

      <section className="process-section" id="proces" aria-labelledby="process-title">
        <div className="section-heading process-heading" data-reveal>
          <span className="eyebrow">04 · Proces</span>
          <h2 id="process-title">
            Od pierwszej rozmowy
            <br />do gotowej strony.
          </h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
        <div className="contact-intro" data-reveal>
          <span className="eyebrow">05 · Kontakt</span>
          <h2 id="contact-title">
            Masz coś
            <br />w głowie?
          </h2>
          <p>Zamień swój pomysł w konkretną realizację.</p>
        </div>
        <div className="contact-details" data-reveal>
          <a href="mailto:kontakt@mvstudio.pl">kontakt@mvstudio.pl ↗</a>
          <a href="tel:+48505780066">+48 505 780 066</a>
          <a href="tel:+48884631429">+48 884 631 429</a>
          <span>Bielsko-Biała</span>
        </div>
        <div data-reveal>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
