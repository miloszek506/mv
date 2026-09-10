import type { ReactNode } from "react";
import { AnimationController } from "@/components/AnimationController";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main>
      <AnimationController />
      <Header />
      {children}
      <SiteFooter />
    </main>
  );
}
