import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { getPost, posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — Al-Samsuddin Blog` },
            { name: "description", content: loaderData.excerpt },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.excerpt },
            { property: "og:image", content: loaderData.cover },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="container mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl text-primary">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-accent underline">
        Back to blog
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.date} · ${post.readTime} · ${post.category}`}
        crumbs={[{ to: "/blog", label: "Blog" }, { label: post.category }]}
      />
      <article className="container mx-auto max-w-3xl px-4 py-14">
        <img src={post.cover} alt={post.title} className="h-80 w-full rounded-3xl object-cover shadow-elegant" />
        <div className="prose prose-lg mt-8 max-w-none text-foreground">
          {post.content.map((para, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-foreground/85">
              {para}
            </p>
          ))}
        </div>
      </article>
      <section className="container mx-auto max-w-7xl px-4 pb-20">
        <h2 className="font-display text-2xl text-primary">More Articles</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-accent"
            >
              <span className="text-xs font-semibold uppercase text-accent">{p.category}</span>
              <h3 className="mt-1 font-display text-lg text-primary">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
