import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, HeartHandshake, Plane, ShieldCheck, Star, Users } from "lucide-react";
import hero from "@/assets/hero-kaaba.jpg";
import madinah from "@/assets/madinah.jpg";
import pilgrims from "@/assets/pilgrims.jpg";
import { packages } from "@/lib/packages";
import { posts } from "@/lib/blog";
import { InquiryForm } from "@/components/InquiryForm";
import { site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Samsuddin Hajj & Umrah Kafela — Hajj 2026 from Bangladesh" },
      {
        name: "description",
        content:
          "Book affordable Hajj 2026 and Umrah packages from Dhaka with Al-Samsuddin Hajj & Umrah Kafela. Government approved, run by Haji Samsuddin in Paltan.",
      },
      { property: "og:title", content: "Al-Samsuddin Hajj & Umrah — Hajj 2026 from Bangladesh" },
      {
        property: "og:description",
        content: "Government approved Hajj agency in Paltan, Dhaka. Trusted by 5000+ pilgrims.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: BadgeCheck, title: "Govt. Approved", desc: "Licensed Hajj agency under Ministry of Religious Affairs." },
  { icon: ShieldCheck, title: "100% Trusted", desc: "Over 20 years of experience serving pilgrims." },
  { icon: Plane, title: "Direct Flights", desc: "Saudia & Biman direct flights from Dhaka." },
  { icon: HeartHandshake, title: "24/7 Support", desc: "Round-the-clock Mualim support in KSA." },
];

const testimonials = [
  {
    name: "Md. Abdul Karim",
    place: "Dhaka",
    text: "Alhamdulillah, my Umrah journey with Al-Samsuddin was beyond expectations. Hotel was steps away from Haram and the Mualim was very knowledgeable.",
    rating: 5,
  },
  {
    name: "Fatema Begum",
    place: "Chattogram",
    text: "Performed Hajj with my husband. Everything from visa to Mina tent was perfectly arranged. Haji Samsuddin himself looked after us. Highly recommended.",
    rating: 5,
  },
  {
    name: "Nazmul Hasan",
    place: "Sylhet",
    text: "Best price and best service. We took the family Umrah package — kids enjoyed and parents had a peaceful spiritual journey.",
    rating: 5,
  },
];

function HomePage() {
  const featured = packages.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Kaaba at Masjid al-Haram"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative mx-auto max-w-7xl px-4 py-28 md:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-accent">
              Hajj 2026 · Booking Open
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-balance md:text-7xl">
              Your Sacred Journey, <span className="text-accent">Our Sacred Trust</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Government-approved Hajj &amp; Umrah Kafela led by Haji Samsuddin — serving Bangladeshi pilgrims from Paltan, Dhaka for over two decades.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-accent-foreground shadow-gold transition hover:scale-[1.02]"
              >
                View Packages <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
              {[
                { n: "5000+", l: "Pilgrims Served" },
                { n: "20+", l: "Years Experience" },
                { n: "4.9★", l: "Customer Rating" },
              ].map((s) => (
                <div key={s.l} className="border-l border-accent/40 pl-4">
                  <div className="font-display text-2xl font-semibold text-accent">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-accent-foreground shadow-gold">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-primary">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="arabic-pattern py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Featured</span>
              <h2 className="mt-2 font-display text-4xl font-semibold text-primary md:text-5xl">
                Our Popular Packages
              </h2>
            </div>
            <Link
              to="/packages"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              View all packages →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PackageCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <img
              src={pilgrims}
              alt="Pilgrims"
              loading="lazy"
              width={1280}
              height={896}
              className="rounded-3xl shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-gold p-5 shadow-gold md:block">
              <Award className="h-8 w-8 text-accent-foreground" />
              <div className="mt-1 font-display text-xl font-semibold text-accent-foreground">
                Best Agency
              </div>
              <div className="text-xs text-accent-foreground/80">Paltan, Dhaka 2024</div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">About Us</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-primary md:text-5xl">
              Led by Haji Samsuddin
            </h2>
            <p className="mt-4 text-muted-foreground">
              Established with one mission — to serve every Bangladeshi pilgrim with honesty,
              comfort and complete spiritual guidance. Our office in Paltan has been a trusted name
              for Hajj and Umrah for more than two decades.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Government-licensed Hajj agency",
                "Direct contracts with hotels in Makkah & Madinah",
                "Trained Bangla-speaking Mualim team",
                "Full pre-departure training in Paltan office",
                "Transparent pricing — no hidden costs",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link
                to="/about"
                className="rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Read Our Story
              </Link>
              <a
                href={telLink}
                className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Testimonials</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-primary md:text-5xl">
              Words from Our Pilgrims
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-card p-7 shadow-soft">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-emerald text-primary-foreground">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.place}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Gallery</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-primary md:text-5xl">
              Holy Places &amp; Hotels
            </h2>
          </div>
          <Link to="/gallery" className="text-sm font-semibold text-primary hover:underline">
            See full gallery →
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <img src={hero} alt="Makkah" loading="lazy" className="h-72 w-full rounded-2xl object-cover shadow-soft md:row-span-2 md:h-full" />
          <img src={madinah} alt="Madinah" loading="lazy" className="h-72 w-full rounded-2xl object-cover shadow-soft" />
          <img src={pilgrims} alt="Pilgrims" loading="lazy" className="h-72 w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </section>

      {/* INQUIRY + BLOG */}
      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Online Inquiry</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-primary">
              Plan Your Journey
            </h2>
            <p className="mt-2 text-muted-foreground">
              Send us your details and our team will contact you on WhatsApp within hours.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <InquiryForm />
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">From the Blog</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-primary">Latest Articles</h2>
            <div className="mt-6 space-y-4">
              {posts.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:border-accent"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-24 w-28 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-xs font-semibold uppercase text-accent">{p.category}</span>
                    <h3 className="mt-1 font-display text-lg leading-tight text-primary">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.date} · {p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PackageCard({ p }: { p: (typeof packages)[number] }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative h-52 overflow-hidden bg-gradient-emerald">
        <img
          src={p.type === "Hajj" ? hero : madinah}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
          {p.type} · {p.category}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
          {p.duration}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-primary">{p.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.highlights.slice(0, 3).map((h) => (
            <span key={h} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
              {h}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-xs text-muted-foreground">Starting from</div>
            <div className="font-display text-2xl font-semibold text-primary">৳ {p.price}</div>
          </div>
          <Link
            to="/packages/$slug"
            params={{ slug: p.slug }}
            className="rounded-full bg-gradient-emerald px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
