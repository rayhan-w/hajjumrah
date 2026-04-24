import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { packages } from "@/lib/packages";
import hero from "@/assets/hero-kaaba.jpg";
import madinah from "@/assets/madinah.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Hajj & Umrah Packages 2026 — Al-Samsuddin Hajj Kafela" },
      {
        name: "description",
        content:
          "Browse all Hajj 2026 and Umrah packages from Dhaka — Economy, Standard, Premium and VIP. Government approved with transparent pricing.",
      },
      { property: "og:title", content: "Hajj & Umrah Packages — Al-Samsuddin" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const [filter, setFilter] = useState<"All" | "Hajj" | "Umrah">("All");
  const list = packages.filter((p) => filter === "All" || p.type === filter);

  return (
    <>
      <PageHero
        title="Hajj & Umrah Packages"
        subtitle="Choose the journey that suits your dreams and budget — every package is government approved."
        crumbs={[{ label: "Packages" }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {(["All", "Hajj", "Umrah"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === f
                  ? "bg-gradient-emerald text-primary-foreground shadow-elegant"
                  : "border border-border bg-card text-foreground hover:border-primary"
              }`}
            >
              {f} Packages
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.type === "Hajj" ? hero : madinah}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-accent-foreground">
                  {p.type} · {p.category}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                  {p.duration}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-primary">{p.title}</h3>
                <div className="mt-2 grid grid-cols-2 gap-y-1 text-xs text-muted-foreground">
                  <div>🕋 {p.distanceMakkah}</div>
                  <div>🕌 {p.distanceMadinah}</div>
                  <div>✈ {p.airline}</div>
                  <div>🍽 {p.meals}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Starting from</div>
                    <div className="font-display text-2xl font-semibold text-primary">৳ {p.price}</div>
                  </div>
                  <Link
                    to="/packages/$slug"
                    params={{ slug: p.slug }}
                    className="rounded-full bg-gradient-emerald px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
