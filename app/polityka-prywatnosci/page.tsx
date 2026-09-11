import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Polityka prywatności MV Studio",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <article className="legal-page">
        <div className="legal-content" data-reveal>
          <h1>Polityka prywatności MV Studio</h1>
          <p>Data ostatniej aktualizacji: 28 lipca 2026 r.</p>

          <section className="legal-section">
            <h2>1. Administrator danych</h2>
            <p>Administratorem danych osobowych jest MV Studio z siedzibą w Bielsku-Białej.</p>
            <p>W sprawach dotyczących ochrony danych osobowych można skontaktować się z nami pod adresem e-mail: <a href="mailto:kontakt@mvstudio.pl">kontakt@mvstudio.pl</a>.</p>
          </section>

          <section className="legal-section">
            <h2>2. Jakie dane zbieramy?</h2>
            <p>Za pośrednictwem formularza kontaktowego możemy zbierać następujące dane:</p>
            <ul>
              <li>imię,</li>
              <li>adres e-mail,</li>
              <li>numer telefonu (jeżeli zostanie podany),</li>
              <li>treść wiadomości.</li>
            </ul>
            <p>Podanie danych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na przesłane zapytanie.</p>
          </section>

          <section className="legal-section">
            <h2>3. Cel przetwarzania danych</h2>
            <p>Dane osobowe przetwarzamy wyłącznie w celu:</p>
            <ul>
              <li>odpowiedzi na przesłane zapytania,</li>
              <li>przygotowania oferty,</li>
              <li>kontaktu z potencjalnym klientem,</li>
              <li>realizacji współpracy.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Podstawa prawna przetwarzania</h2>
            <p>Dane przetwarzane są zgodnie z obowiązującymi przepisami prawa, w szczególności na podstawie:</p>
            <ul>
              <li>zgody osoby kontaktującej się,</li>
              <li>działań zmierzających do zawarcia umowy,</li>
              <li>prawnie uzasadnionego interesu administratora polegającego na prowadzeniu korespondencji z klientami.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Okres przechowywania danych</h2>
            <p>Dane przechowujemy wyłącznie przez okres niezbędny do prowadzenia korespondencji, przygotowania oferty lub realizacji współpracy, a następnie usuwamy je zgodnie z obowiązującymi przepisami.</p>
          </section>

          <section className="legal-section">
            <h2>6. Odbiorcy danych</h2>
            <p>Dane mogą być przekazywane wyłącznie podmiotom wspierającym funkcjonowanie strony internetowej, takim jak dostawca hostingu lub operator poczty elektronicznej, wyłącznie w zakresie niezbędnym do świadczenia usług.</p>
          </section>

          <section className="legal-section">
            <h2>7. Prawa użytkownika</h2>
            <p>Każda osoba, której dane dotyczą, ma prawo do:</p>
            <ul>
              <li>dostępu do swoich danych,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>wniesienia sprzeciwu,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Pliki cookies</h2>
            <p>Strona wykorzystuje pliki cookies niezbędne do prawidłowego działania serwisu oraz poprawy jego funkcjonalności.</p>
            <p>Cookies mogą być wykorzystywane również przez narzędzia analityczne, jeżeli zostaną uruchomione przez administratora strony.</p>
          </section>

          <section className="legal-section">
            <h2>9. Bezpieczeństwo danych</h2>
            <p>Dokładamy wszelkich starań, aby chronić dane osobowe przed nieuprawnionym dostępem, utratą lub zniszczeniem. Strona korzysta z szyfrowanego połączenia SSL.</p>
          </section>

          <section className="legal-section">
            <h2>10. Kontakt</h2>
            <p>W przypadku pytań dotyczących niniejszej Polityki prywatności prosimy o kontakt:</p>
            <p>E-mail: <a href="mailto:kontakt@mvstudio.pl">kontakt@mvstudio.pl</a></p>
            <p>MV Studio</p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
