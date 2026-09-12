import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Polityka cookies MV Studio",
  alternates: { canonical: "/polityka-cookies" },
};

export default function CookiePolicyPage() {
  return (
    <PageShell>
      <article className="legal-page">
        <div className="legal-content" data-reveal>
          <h1>Polityka cookies MV Studio</h1>
          <p>Informacje dotyczące mechanizmów zapisywanych lokalnie w przeglądarce podczas korzystania z serwisu.</p>

          <section className="legal-section">
            <h2>Aktualnie stosowane mechanizmy</h2>
            <p>
              W aktualnej wersji serwisu zapisywana jest wyłącznie decyzja użytkownika dotycząca cookies.
              Serwis nie korzysta z narzędzi analitycznych, marketingowych ani zewnętrznych osadzeń.
            </p>
          </section>

          <section className="legal-section">
            <h2>Niezbędny zapis decyzji</h2>
            <p>
              Zapis obejmuje wybraną decyzję, wersję konfiguracji oraz datę jej zapisania. Jest przechowywany
              lokalnie w przeglądarce do czasu zmiany decyzji lub usunięcia danych witryny przez użytkownika.
            </p>
            <p>Dane nie są przekazywane dostawcom zewnętrznym.</p>
          </section>

          <section className="legal-section">
            <h2>Zmiana decyzji</h2>
            <p>
              Ustawienia można zmienić w dowolnym momencie za pomocą linku „Zmień ustawienia cookies” w stopce.
            </p>
          </section>

          <p><Link href="/polityka-prywatnosci">Przejdź do Polityki prywatności.</Link></p>
        </div>
      </article>
    </PageShell>
  );
}
