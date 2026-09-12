import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageShell } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  return {
    title: `${study.name} | Case study strony internetowej`,
    description: study.heroDescription,
    alternates: { canonical: `/projects/${study.slug}` },
    openGraph: {
      title: `${study.name} — case study | MV Studio`,
      description: study.heroDescription,
      url: `/projects/${study.slug}`,
      images: [{ url: "/images/mv-studio-og.png", width: 3024, height: 1718, alt: "MV Studio — nowoczesne strony internetowe" }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const details = [
    { label: "Typ", value: study.category },
    { label: "Rok", value: study.year ?? "Nie podano" },
    { label: "Technologia", value: study.technology ?? "Nie podano" },
  ];

  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: study.name,
        description: study.heroDescription,
        creator: { "@type": "Organization", name: "MV Studio", url: "https://mvstudio.pl" },
        dateCreated: study.year,
        url: `https://mvstudio.pl/projects/${study.slug}/`,
      }} />
      <Breadcrumbs items={[
        { label: "Strona główna", href: "/" },
        { label: "Portfolio", href: "/projects" },
        { label: study.name },
      ]} />

      <article className="case-study">
        <header className="case-hero" data-reveal>
          <div className="case-hero-topline">
            <span className="eyebrow">Case study · {study.projectId}</span>
            <span className="case-client-label">Realizacja dla klienta</span>
          </div>
          <h1>{study.name}</h1>
          <p>{study.heroDescription}</p>
          <dl className="case-meta">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="case-overview" aria-labelledby="case-overview-title">
          <div data-reveal>
            <span className="eyebrow">Kontekst</span>
            <h2 id="case-overview-title">O projekcie.</h2>
          </div>
          <p data-reveal>{study.clientDescription}</p>
        </section>

        <section className="case-story" aria-label="Problem, cel i rozwiązanie">
          {[
            ["01", "Potrzeba", study.challenge],
            ["02", "Cel projektu", study.goal],
            ["03", "Rozwiązanie", study.solution],
          ].map(([number, title, description]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section className="case-scope" aria-labelledby="case-scope-title" data-cursor-theme="dark">
          <div data-reveal>
            <span className="eyebrow">Zakres prac</span>
            <h2 id="case-scope-title">{study.scopeHeading}</h2>
          </div>
          <ul data-reveal>
            {study.scope.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ul>
        </section>

        <section className="case-screen-section" aria-labelledby="case-screen-title">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Kluczowy ekran</span>
            <h2 id="case-screen-title">System w praktyce.</h2>
          </div>
          <div className={`case-screen${study.image ? "" : " case-screen--placeholder"}`} data-reveal>
            {study.image ? (
              <Image src={study.image} alt={study.imageAlt} width={1800} height={1120} sizes="(max-width: 760px) 94vw, 92vw" />
            ) : (
              <div role="img" aria-label={study.imageAlt}>
                <span>Benvenuti</span><span>a Napoli</span>
              </div>
            )}
          </div>
        </section>

        <section className="case-structure" aria-labelledby="case-structure-title">
          <div data-reveal>
            <span className="eyebrow">Architektura i UX/UI</span>
            <h2 id="case-structure-title">{study.structureHeading}</h2>
          </div>
          <div className="case-structure-content">
            <ol data-reveal>
              {study.structure.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <div data-reveal>
              {study.decisions.map((decision) => <p key={decision}>{decision}</p>)}
            </div>
          </div>
        </section>

        <section className="case-quality" aria-label="Responsywność, SEO i animacje">
          {[
            ["Responsywność", study.responsive],
            ["SEO", study.seo],
            ["Animacje", study.motion],
          ].map(([title, description]) => (
            <article key={title} data-reveal><h2>{title}</h2><p>{description}</p></article>
          ))}
        </section>

        <section className="case-live" data-reveal>
          <div>
            <span className="eyebrow">Działająca realizacja</span>
            <h2>{study.liveHeading}</h2>
          </div>
          {study.liveDescription ? <p className="case-live-description">{study.liveDescription}</p> : null}
          <a className="circle-link" href={study.liveUrl} target="_blank" rel="noopener noreferrer">
            <span>Otwórz stronę</span><ArrowIcon />
          </a>
        </section>

        <section className="case-cta" data-reveal data-cursor-theme="dark">
          <p>Potrzebujesz strony dopasowanej do sposobu działania Twojej firmy?</p>
          <h2>Porozmawiajmy<br />o projekcie.</h2>
          <div>
            <Link className="circle-link" href="/contact"><span>Napisz do nas</span><ArrowIcon /></Link>
            <Link className="text-link" href="/projects">Wróć do portfolio <ArrowIcon /></Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
