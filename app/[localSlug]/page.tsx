import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ArrowIcon } from "@/components/ArrowIcon";
import { localPages } from "@/data/local-pages";
import styles from "./local.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return localPages.map(({ slug }) => ({ localSlug: slug })); }
function findPage(slug: string) { return localPages.find((page) => page.slug === slug); }

export async function generateMetadata({ params }: { params: Promise<{ localSlug: string }> }): Promise<Metadata> {
  const page = findPage((await params).localSlug);
  if (!page) notFound();
  const title = `Strony internetowe ${page.city}`;
  const description = `Projektowanie stron internetowych ${page.location}. WordPress, WooCommerce i Next.js. Sprawdź zakres prac, sposób współpracy i ofertę MV Studio.`;
  return { title, description, alternates: { canonical: `/${page.slug}/` }, openGraph: { title: `${title} | MV Studio`, description, url: `/${page.slug}/`, images: [{ url: "/images/mv-studio-og.png", alt: "MV Studio: projektowanie stron internetowych" }] } };
}

export default async function LocalPage({ params }: { params: Promise<{ localSlug: string }> }) {
  const page = findPage((await params).localSlug);
  if (!page) notFound();
  return <PageShell>
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Ścieżka nawigacji"><Link href="/">MV Studio</Link><span aria-hidden="true">/</span><span>{page.city}</span></nav>
      <header className={styles.hero}>
        <p className="eyebrow">Projektowanie · wdrożenie · rozwój</p>
        <h1>Strony internetowe <span>{page.city}</span></h1>
        <p>{page.lead}</p>
        <Link className="text-link" href="/contact/">Porozmawiajmy o Twojej stronie <ArrowIcon /></Link>
      </header>
      <section className={styles.section} aria-labelledby="local-offer" data-reveal>
        <h2 id="local-offer">{page.heading}</h2>
        {page.paragraphs.map((text) => <p key={text}>{text}</p>)}
        {"project" in page && <Link className="text-link" href={page.project}>Zobacz case study Benvenuti a Napoli <ArrowIcon /></Link>}
      </section>
      <section className={styles.section} aria-labelledby="technology-title">
        <p className="eyebrow">Technologia dopasowana do celu</p><h2 id="technology-title">Jaką stronę możemy przygotować?</h2>
        <div className={styles.cards}>
          <article data-reveal><h3>WordPress</h3><p>Strona One Page lub serwis z podstronami, gdy potrzebujesz samodzielnie zmieniać treści. Zakres może obejmować ofertę, formularz, podstawowe SEO, konfigurację cookies i wdrożenie.</p><Link className="text-link" href="/cennik/#wordpress">Pakiety WordPress <ArrowIcon /></Link></article>
          <article data-reveal><h3>WooCommerce</h3><p>Podstawowy sklep z produktami, kategoriami i koszykiem. Płatności i dostawę konfigurujemy w uzgodnionym zakresie. Integracje hurtowni, ERP oraz niestandardowe funkcje wyceniamy osobno.</p><Link className="text-link" href="/cennik/#woocommerce">Oferta sklepu <ArrowIcon /></Link></article>
          <article data-reveal><h3>Next.js</h3><p>Indywidualny projekt w React i TypeScript z technicznym SEO, responsywnością i wybranymi animacjami GSAP. Interakcje WebGL i Three.js wymagają osobnej analizy zakresu.</p><Link className="text-link" href="/cennik/#nextjs-typescript">Pakiety Next.js <ArrowIcon /></Link></article>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="preparation-title" data-reveal><h2 id="preparation-title">{page.exampleTitle}</h2><ul>{page.checklist.map((text) => <li key={text}>{text}</li>)}</ul></section>
      <section className={styles.section} aria-labelledby="delivery-title" data-reveal>
        <h2 id="delivery-title">Od pierwszej rozmowy do publikacji</h2>
        <p>Ustalamy odbiorców, cel strony i potrzebne podstrony. Następnie przygotowujemy strukturę oraz kierunek wizualny, uzgadniamy treści i wdrażamy projekt. Przed publikacją sprawdzamy wersję mobilną, nawigację, formularze oraz działanie strony. Zakres poprawek i późniejszej opieki ustalamy w ofercie.</p>
        <p>Współpracę możemy prowadzić zdalnie. MV Studio jest związane z Bielskiem-Białą; ta oferta dotyczy firm {page.location}, nie oznacza oddzielnego biura w tym mieście.</p>
        <h3>Co obejmuje przygotowanie pod wyszukiwarki?</h3>
        <p>Czytelną strukturę nagłówków, indywidualne tytuły i opisy podstron, prawidłowe adresy canonical, linkowanie wewnętrzne i sitemapę. Dbamy również o wersję mobilną oraz przygotowanie obrazów. Widoczność zależy także od treści, konkurencji i dalszych działań. Samo wdrożenie strony nie gwarantuje pozycji w Google.</p>
        <Link className="text-link" href="/projects/">Obejrzyj rzeczywiste realizacje <ArrowIcon /></Link>
      </section>
      <section className={styles.section} aria-labelledby="questions-title"><h2 id="questions-title">Przed rozpoczęciem współpracy</h2>
        <details><summary>{page.question}</summary><p>{page.answer}</p></details>
        <details><summary>Od czego zależy cena strony?</summary><p>Od liczby podstron, ilości treści, zakresu projektu i animacji, integracji oraz migracji starej strony. Znaczenie mają też materiały, wymagania SEO i rundy poprawek. <Link href="/cennik/">Cennik</Link> pokazuje ceny od i zakres pakietów; ostateczną wycenę przygotowujemy po rozmowie.</p></details>
        <details><summary>Co przygotować do wyceny?</summary><p>Opis firmy i oferty, cel strony, planowaną liczbę podstron, dostępne zdjęcia i teksty oraz listę potrzebnych funkcji. Jeśli masz obecną stronę, prześlij jej adres i wskaż, co wymaga zmiany.</p></details>
        <Link className="text-link" href="/contact/">Poproś o indywidualną wycenę <ArrowIcon /></Link>
      </section>
    </div>
  </PageShell>;
}
