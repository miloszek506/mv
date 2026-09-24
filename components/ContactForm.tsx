"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Zapytanie ze strony MV Studio: ${name}`);
    const body = encodeURIComponent(
      `Imię: ${name}\nE-mail: ${email}\nBudżet: ${budget}\n\nOpis projektu:\n${message}`,
    );

    setStatus("Otwieram aplikację pocztową. Formularz nie zapisuje danych.");
    window.location.href = `mailto:kontakt@mvstudio.pl?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="form-disclosure">
        Formularz nie wysyła danych na serwer. Po zatwierdzeniu otworzy Twoją
        aplikację pocztową z przygotowaną wiadomością.
      </p>
      <label>
        <span>Imię</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Adres e-mail</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Budżet</span>
        <input name="budget" type="text" inputMode="numeric" required />
      </label>
      <label>
        <span>Opisz krótko projekt</span>
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit">
        Przygotuj wiadomość <ArrowIcon />
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
