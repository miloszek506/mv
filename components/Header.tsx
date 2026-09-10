"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site-content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="MV Studio — strona główna">
        MV<span>•</span>STUDIO
      </Link>
      <nav className="desktop-nav" aria-label="Główna nawigacja">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-contact" href="/contact">
        Porozmawiajmy <span aria-hidden="true">↘</span>
      </Link>
    </header>
  );
}
