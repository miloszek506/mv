import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

type PageHeroProps = {
  eyebrow: string;
  title: readonly [string, string];
  description: string;
  index: string;
  variant: "about" | "projects" | "services" | "contact";
  action?: { href: string; label: string };
};

export function PageHero({ eyebrow, title, description, index, variant, action }: PageHeroProps) {
  return (
    <section className={`hero subpage-hero subpage-hero--${variant}`} aria-labelledby="page-title">
      <div className="hero-kicker">
        <span className="status-dot" aria-hidden="true" />
        {eyebrow}
      </div>
      <h1 className="hero-title subpage-title" id="page-title">
        <span>{title[0]}</span>
        <span className="hero-title-second">{title[1]}</span>
      </h1>
      <div className="hero-bottom subpage-hero-bottom">
        <p>{description}</p>
        {action ? (
          <Link className="circle-link" href={action.href}>
            <span>{action.label}</span><ArrowIcon />
          </Link>
        ) : null}
      </div>
      <div className="hero-index" aria-hidden="true">{index} / 05</div>
    </section>
  );
}
