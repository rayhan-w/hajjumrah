import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Hajj & Umrah Blog — Tips, Guides & Updates | Al-Samsuddin" },
      {
        name: "description",
        content:
          "Hajj and Umrah guides for Bangladeshi pilgrims — visa process, packing tips, registration updates and spiritual articles.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Guides"
        subtitle="Practical guides, spiritual reflections and the latest Hajj & Umrah updates"
        crumbs={[{ label: "Blog" }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-xl leading-tight text-primary">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-auto pt-4 text-xs text-muted-foreground">
                  {p.date} · {p.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
