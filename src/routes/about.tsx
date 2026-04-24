import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BadgeCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import pilgrims from "@/assets/pilgrims.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Haji Samsuddin Hajj & Umrah Kafela, Paltan Dhaka" },
      {
        name: "description",
        content:
          "Learn about Al-Samsuddin Hajj & Umrah Kafela, a trusted government-approved Hajj agency in Paltan, Dhaka, founded by Haji Samsuddin.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Al-Samsuddin"
        subtitle="A legacy of trust serving Bangladeshi pilgrims for over two decades"
        crumbs={[{ label: "About" }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={pilgrims} alt="Pilgrims" className="rounded-3xl shadow-elegant" />
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Our Story</span>
            <h2 className="mt-2 font-display text-4xl text-primary">
              Founded by Haji Samsuddin
            </h2>
            <p className="mt-4 text-muted-foreground">
              Established more than two decades ago in the heart of Paltan, Dhaka, Al-Samsuddin
              Hajj &amp; Umrah Kafela has grown into one of Bangladesh's most trusted names for
              sacred travel. Founded by Haji Samsuddin himself — a seasoned Hajj guide who has
              personally led thousands of pilgrims — our agency was built on one principle:
              honesty, comfort and complete spiritual care.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today we are a government-licensed Hajj agency under the Ministry of Religious
              Affairs of Bangladesh, with direct hotel contracts in Makkah and Madinah, our own
              trained Bangla-speaking Mualim team in KSA, and a transparent pricing policy.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: BadgeCheck, t: "Licensed", d: "Govt. approved Hajj agency" },
            { Icon: ShieldCheck, t: "Transparent", d: "No hidden costs ever" },
            { Icon: HeartHandshake, t: "Personal Care", d: "Owner attends every batch" },
            { Icon: Award, t: "Award Winning", d: "Best agency Paltan 2024" },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground shadow-gold">
                <v.Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-lg text-primary">{v.t}</div>
              <p className="text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-emerald p-10 text-center text-primary-foreground shadow-elegant">
          <h2 className="font-display text-3xl md:text-4xl">Ready to begin your sacred journey?</h2>
          <p className="mt-3 text-primary-foreground/85">
            Visit our Paltan office or speak directly with Haji Samsuddin.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/packages"
              className="rounded-full bg-gradient-gold px-6 py-3 font-semibold text-accent-foreground shadow-gold"
            >
              Explore Packages
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
