"use client";

const OPEN_COOKIE_SETTINGS_EVENT = "mvstudio:open-cookie-settings";

export function CookieSettingsButton() {
  return (
    <button
      className="footer-cookie-settings"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      Zmień ustawienia cookies
    </button>
  );
}

export { OPEN_COOKIE_SETTINGS_EVENT };
