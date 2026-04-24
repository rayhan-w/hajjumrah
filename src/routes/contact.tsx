import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Al-Samsuddin Hajj & Umrah, Paltan Dhaka" },
      {
        name: "description",
        content:
          "Visit our office in Paltan, Dhaka or contact Haji Samsuddin directly via phone, WhatsApp or email for Hajj & Umrah package inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Visit our Paltan office or reach out anytime — we reply within hours"
        crumbs={[{ label: "Contact" }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { Icon: MapPin, title: "Office Address", value: site.address },
              { Icon: Phone, title: "Phone", value: site.phoneDisplay, href: telLink },
              { Icon: MessageCircle, title: "WhatsApp", value: site.phoneDisplay, href: whatsappLink() },
              { Icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}` },
              { Icon: Clock, title: "Office Hours", value: site.hours },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-accent-foreground shadow-gold">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-primary hover:text-accent">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-primary">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Purana+Paltan+Dhaka&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <h2 className="font-display text-3xl text-primary">Send a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and we'll respond on WhatsApp within hours.
            </p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
