import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactForm } from "@/components/ContactForm";
import { AnimationController } from "@/components/AnimationController";
import { FaqList } from "@/components/FaqList";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceOffers } from "@/data/services";
import { InteractiveServices } from "@/components/InteractiveServices";

export const metadata: Metadata = {
  title: "Strony WordPress, WooCommerce i Next.js | Bielsko-Biała",
  description:
    "MV Studio tworzy strony WordPress, sklepy WooCommerce i strony premium w Next.js dla firm z Bielska-Białej i nie tylko.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Strony WordPress, WooCommerce i Next.js | MV Studio",
    description: "Nowoczesne strony, sklepy i interaktywne doświadczenia cyfrowe dopasowane do celu biznesowego.",
    url: "/",
    images: [{ url: "/images/mv-studio-og.png", width: 3024, height: 1718, alt: "MV Studio: nowoczesne strony internetowe" }],
  },
};

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
  {
    number: "06",
    title: "Wspieramy po starcie",
    description:
      "Po publikacji możemy pomóc w hostingu, aktualizacjach i dalszym rozwoju strony.",
  },
];

const reasons = [
  "Projekt dopasowany do firmy",
  "Czytelna strona na każdym ekranie",
  "Szybkość i podstawy widoczności w Google",
  "Wsparcie także po publikacji",
] as const;

export default function Home() {
  return (
    <main className="home-page">
      <AnimationController />
      <Header />
      <section className="hero" id="start" aria-labelledby="hero-title">
        <span className="hero-orbit hero-orbit--large" aria-hidden="true" />
        <span className="hero-orbit hero-orbit--small" aria-hidden="true" />
        <span className="hero-signal" aria-hidden="true" />
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Bielsko-Biała · Projektowanie · Wdrożenia
        </div>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-mask"><span className="hero-title-word">MV</span></span>
          <span className="hero-title-mask hero-title-second"><span className="hero-title-word">Studio</span></span>
        </h1>

        <div className="hero-bottom">
          <p>
            Projektujemy strony WordPress, sklepy WooCommerce i indywidualne
            doświadczenia w Next.js. Technologię dobieramy do sposobu pracy,
            treści i celu firmy, a nie odwrotnie.
          </p>
          <div className="hero-actions">
            <Link className="circle-link" href="/contact">
              <span>Wyceń projekt</span>
              <ArrowIcon />
            </Link>
            <Link className="text-link" href="/projects">
              Zobacz projekty <ArrowIcon />
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
            MV Studio tworzymy we dwóch: Miłosz i Vova. Łączymy kreatywność z
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
            <Link className="text-link" href="/about">Poznaj MV Studio <ArrowIcon /></Link>
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
        <InteractiveServices services={serviceOffers} />
        <Link className="section-cta text-link" href="/services">Poznaj ofertę i technologie <ArrowIcon /></Link>
      </section>

      <ProjectsSection scrollDrivenDemo />

      <section className="process-section" id="proces" aria-labelledby="process-title">
        <div className="section-heading process-heading" data-reveal>
          <span className="eyebrow">04 · Proces</span>
          <h2 id="process-title">
            Od pierwszej rozmowy
            <br />do gotowej strony.
          </h2>
        </div>
        <div className="process-timeline" data-process-timeline>
          <span className="process-progress" aria-hidden="true" />
          <ol className="process-list">
          {processSteps.map((step, index) => (
            <li className={index === 0 ? "is-active" : undefined} key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
          </ol>
        </div>
        <Link className="section-cta text-link" href="/contact">Opowiedz nam o swojej stronie <ArrowIcon /></Link>
      </section>

      <section className="principles-section home-principles" aria-labelledby="principles-title">
        <div className="principles-intro" data-reveal>
          <span className="eyebrow">Podejście MV Studio</span>
          <h2 id="principles-title">Strona powinna dobrze wyglądać<br />i dobrze prowadzić dalej.</h2>
          <p>
            Łączymy indywidualny projekt z czytelną strukturą, responsywnym
            układem i rozwiązaniami dopasowanymi do potrzeb firmy.
          </p>
        </div>
        <ol className="principles-list">
          {reasons.map((reason, index) => (
            <li key={reason}><span>0{index + 1}</span>{reason}</li>
          ))}
        </ol>
      </section>

      <FaqList />

      <section className="contact-section" id="kontakt" aria-labelledby="contact-title" data-cursor-theme="dark">
        <div className="contact-intro" data-reveal>
          <span className="eyebrow">05 · Kontakt</span>
          <h2 id="contact-title">
            Masz coś
            <br />w głowie?
          </h2>
          <p>Zamień swój pomysł w konkretną realizację.</p>
        </div>
        <div className="contact-details" data-reveal>
          <a href="mailto:kontakt@mvstudio.pl">kontakt@mvstudio.pl <ArrowIcon /></a>
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
