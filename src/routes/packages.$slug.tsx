import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { getPackage, packages } from "@/lib/packages";
import { telLink, whatsappLink, site } from "@/lib/site";
import hero from "@/assets/hero-kaaba.jpg";
import madinah from "@/assets/madinah.jpg";
import hotel from "@/assets/hotel-makkah.jpg";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackage(params.slug);
    if (!pkg) throw notFound();
    return pkg;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — Al-Samsuddin Hajj & Umrah` },
            { name: "description", content: loaderData.description },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.description },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="container mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl text-primary">Package not found</h1>
      <Link to="/packages" className="mt-4 inline-block text-accent underline">
        Back to packages
      </Link>
    </div>
  ),
  component: PackageDetail,
});

function PackageDetail() {
  const p = Route.useLoaderData();

  return (
    <>
      <PageHero
        title={p.title}
        subtitle={`${p.duration} · ${p.category} · Starting from ৳${p.price}`}
        crumbs={[{ to: "/packages", label: "Packages" }, { label: p.category }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img
              src={p.type === "Hajj" ? hero : madinah}
              alt={p.title}
              className="h-80 w-full rounded-3xl object-cover shadow-elegant"
              width={1920}
              height={1080}
            />
            <div className="mt-8">
              <h2 className="font-display text-3xl text-primary">Overview</h2>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Duration", p.duration],
                ["Airline", p.airline],
                ["Hotel Makkah", p.hotelMakkah],
                ["Hotel Madinah", p.hotelMadinah],
                ["Distance Makkah", p.distanceMakkah],
                ["Distance Madinah", p.distanceMadinah],
                ["Meals", p.meals],
                ["Transport", p.transport],
                ["Visa", p.visaIncluded ? "Included" : "Not Included"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-card px-4 py-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="mt-0.5 font-semibold text-foreground">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-primary">What's Included</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {p.inclusions.map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-primary">Not Included</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {p.exclusions.map((x) => (
                    <li key={x} className="flex gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <img
              src={hotel}
              alt="Hotel"
              loading="lazy"
              className="mt-10 h-72 w-full rounded-3xl object-cover shadow-soft"
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl bg-gradient-emerald p-6 text-primary-foreground shadow-elegant">
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Package Price</div>
                <div className="mt-2 font-display text-4xl font-semibold">৳ {p.price}</div>
                <div className="text-xs text-primary-foreground/80">{p.priceNote}</div>
                <div className="mt-5 space-y-2">
                  <a
                    href={whatsappLink(`Inquiry about ${p.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-whatsapp px-4 py-3 text-center text-sm font-semibold"
                  >
                    Book on WhatsApp
                  </a>
                  <a
                    href={telLink}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
                  >
                    <Phone className="h-4 w-4" /> {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-xl text-primary">Quick Inquiry</h3>
                <div className="mt-4">
                  <InquiryForm defaultPackage={p.title} compact />
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl text-primary">Other Packages</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {packages.filter((x) => x.slug !== p.slug).slice(0, 3).map((o) => (
              <Link
                key={o.slug}
                to="/packages/$slug"
                params={{ slug: o.slug }}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:border-accent"
              >
                <div className="text-xs font-semibold uppercase text-accent">{o.type} · {o.category}</div>
                <div className="mt-1 font-display text-lg text-primary">{o.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">৳ {o.price} · {o.duration}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
