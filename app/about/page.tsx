import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "O nas | Projektowanie stron Bielsko-Biała",
  description: "Poznaj Miłosza i Vovę, współzałożycieli MV Studio z Bielska-Białej.",
  alternates: { canonical: "/about" },
};

const principles = [
  "Nie robimy szablonów bez strategii",
  "Każda strona ma cel biznesowy",
  "Łączymy design, marketing i UX",
  "Stawiamy na szybkość i konwersję",
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="O nas · MV Studio"
        title={["Jak", "zaczęliśmy"]}
        description="Zaczęliśmy od prostych stron i projektów dla znajomych. Tak powstało MV Studio — miejsce, w którym łączymy kreatywność z biznesem."
        index="02"
        variant="about"
        action={{ href: "/contact", label: "Porozmawiajmy" }}
      />
      <section className="about-section about-story" aria-labelledby="founders-title">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Współzałożyciele</span>
          <h2 id="founders-title">Dwóch twórców,<br />jeden cel.</h2>
        </div>
        <div className="founders" aria-label="Współzałożyciele MV Studio" data-reveal>
          <article>
            <div className="team-image-wrap team-image-wrap--vova" data-team-image>
              <Image src="/images/vova.png" alt="Portret Vovy, współzałożyciela MV Studio" fill sizes="(max-width: 760px) 100vw, 46vw" />
            </div>
            <span>Design · UX/UI</span><h3>Vova</h3>
            <p>Odpowiada za design oraz UX/UI. Łączy estetykę z potrzebami użytkownika i funkcjonalnością, dbając o czytelny, nowoczesny i intuicyjny projekt.</p>
          </article>
          <article>
            <div className="team-image-wrap team-image-wrap--milosz" data-team-image>
              <Image src="/images/milosz.png" alt="Portret Miłosza, współzałożyciela MV Studio" fill sizes="(max-width: 760px) 100vw, 46vw" />
            </div>
            <span>Technologia · WordPress</span><h3>Miłosz</h3>
            <p>Odpowiada za techniczną stronę projektów i wdrożenia w WordPressie — szybkość, funkcje, jakość techniczną i nowe technologie.</p>
          </article>
        </div>
      </section>
      <section className="principles-section" aria-labelledby="principles-title">
        <div className="principles-intro" data-reveal>
          <span className="eyebrow">Dlaczego my?</span>
          <h2 id="principles-title">Design spotyka biznes.</h2>
          <p>Łączymy nowoczesny wygląd z podejściem biznesowym, aby strona pomagała budować profesjonalny wizerunek i pozyskiwać klientów.</p>
        </div>
        <ol className="principles-list">
          {principles.map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}</li>)}
        </ol>
        <Link className="section-cta text-link" href="/contact">Opowiedz nam o projekcie <ArrowIcon /></Link>
      </section>
    </PageShell>
  );
}
