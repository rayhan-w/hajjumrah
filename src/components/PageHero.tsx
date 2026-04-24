import { Link } from "@tanstack/react-router";
import madinah from "@/assets/madinah.jpg";

type Props = { title: string; subtitle?: string; crumbs?: { to?: string; label: string }[] };

export function PageHero({ title, subtitle, crumbs = [] }: Props) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={madinah}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1280}
        height={896}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container relative mx-auto max-w-7xl px-4 py-20 text-center text-primary-foreground md:py-28">
        <h1 className="font-display text-4xl font-semibold md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-base text-primary-foreground/85">{subtitle}</p>
        )}
        {crumbs.length > 0 && (
          <nav className="mt-5 flex items-center justify-center gap-2 text-xs text-accent">
            <Link to="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
