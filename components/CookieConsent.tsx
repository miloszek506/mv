"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/CookieSettingsButton";

const CONSENT_STORAGE_KEY = "mvstudio-cookie-consent";
const CONFIGURATION_VERSION = "1";

type ConsentChoice = "all" | "necessary";
type ConsentPanel = "summary" | "settings";

type ConsentRecord = {
  choice: ConsentChoice;
  configurationVersion: string;
  updatedAt: string;
};

function getStoredConsent(): ConsentRecord | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!value) return null;

    const record = JSON.parse(value) as Partial<ConsentRecord>;
    if (
      (record.choice !== "all" && record.choice !== "necessary") ||
      record.configurationVersion !== CONFIGURATION_VERSION ||
      typeof record.updatedAt !== "string"
    ) {
      return null;
    }

    return record as ConsentRecord;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [panel, setPanel] = useState<ConsentPanel>("summary");
  const dialogRef = useRef<HTMLElement>(null);
  const summaryActionRef = useRef<HTMLButtonElement>(null);
  const settingsTitleRef = useRef<HTMLHeadingElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const initializeBanner = window.setTimeout(() => {
      setIsVisible(!getStoredConsent());
      setIsReady(true);
    }, 0);

    const openSettings = () => {
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setPanel("settings");
      setIsVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => {
      window.clearTimeout(initializeBanner);
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animationFrame = window.requestAnimationFrame(() => {
      if (panel === "settings") {
        settingsTitleRef.current?.focus();
      } else {
        summaryActionRef.current?.focus();
      }
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (panel === "settings") {
          setPanel("summary");
        } else {
          setIsVisible(false);
          openerRef.current?.focus();
        }
        return;
      }

      if (panel !== "settings" || event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]'),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, panel]);

  const saveChoice = (choice: ConsentChoice) => {
    const record: ConsentRecord = {
      choice,
      configurationVersion: CONFIGURATION_VERSION,
      updatedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Private browsing can prevent persistent storage. The banner remains usable in this session.
    }

    setIsVisible(false);
    openerRef.current?.focus();
  };

  if (!isReady || !isVisible) return null;

  return (
    <aside
      className="cookie-banner"
      ref={dialogRef}
      role="dialog"
      aria-modal={panel === "settings"}
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      {panel === "summary" ? (
        <div className="cookie-banner-content">
          <p className="cookie-banner-eyebrow">Prywatność</p>
          <h2 id="cookie-consent-title">Cookies, tylko gdy są potrzebne.</h2>
          <p id="cookie-consent-description">
            Strona zapisuje wyłącznie Twoją decyzję dotyczącą cookies. Nie korzysta obecnie
            z analityki, marketingu ani zewnętrznych osadzeń.
          </p>
          <div className="cookie-banner-actions" aria-label="Wybór ustawień cookies">
            <button ref={summaryActionRef} className="cookie-action cookie-action--primary" type="button" onClick={() => saveChoice("all")}>
              Akceptuję wszystkie
            </button>
            <button className="cookie-action" type="button" onClick={() => saveChoice("necessary")}>
              Odrzucam opcjonalne
            </button>
            <button className="cookie-action" type="button" onClick={() => setPanel("settings")}>
              Ustawienia cookies
            </button>
          </div>
          <Link className="cookie-policy-link" href="/polityka-cookies">Polityka cookies</Link>
        </div>
      ) : (
        <div className="cookie-settings-content">
          <div className="cookie-settings-heading">
            <div>
              <p className="cookie-banner-eyebrow">Ustawienia cookies</p>
              <h2 id="cookie-consent-title" ref={settingsTitleRef} tabIndex={-1}>Kontrola pozostaje po Twojej stronie.</h2>
            </div>
            <button className="cookie-back" type="button" onClick={() => setPanel("summary")}>
              Wróć
            </button>
          </div>
          <p id="cookie-consent-description">
            W aktualnej wersji serwisu stosujemy wyłącznie mechanizm niezbędny do zapamiętania Twojej decyzji.
          </p>
          <section className="cookie-category" aria-labelledby="necessary-cookies-title">
            <div className="cookie-category-heading">
              <h3 id="necessary-cookies-title">Niezbędne</h3>
              <span>Aktywne</span>
            </div>
            <dl>
              <div><dt>Cel</dt><dd>Zapamiętanie decyzji dotyczącej cookies.</dd></div>
              <div><dt>Usługi</dt><dd>Własny zapis decyzji w pamięci przeglądarki.</dd></div>
              <div><dt>Typ danych</dt><dd>Wybór użytkownika, wersja konfiguracji i data zapisu.</dd></div>
              <div><dt>Okres</dt><dd>Do zmiany decyzji lub usunięcia danych witryny w przeglądarce.</dd></div>
              <div><dt>Dostawcy zewnętrzni</dt><dd>Brak.</dd></div>
            </dl>
          </section>
          <div className="cookie-settings-actions">
            <button className="cookie-action cookie-action--primary" type="button" onClick={() => saveChoice("all")}>
              Akceptuję wszystkie
            </button>
            <button className="cookie-action" type="button" onClick={() => saveChoice("necessary")}>
              Odrzucam opcjonalne
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
