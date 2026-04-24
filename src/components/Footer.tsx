import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Youtube, Instagram } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-emerald text-primary-foreground">
      <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl">Al-Samsuddin</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">
            Hajj &amp; Umrah Kafela
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Proudly serving Bangladeshi pilgrims for over two decades. Government-approved Hajj
            agency under the leadership of Haji Samsuddin.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[
              { to: "/packages", l: "All Packages" },
              { to: "/gallery", l: "Gallery" },
              { to: "/blog", l: "Blog" },
              { to: "/about", l: "About Us" },
              { to: "/payment", l: "Payment Info" },
              { to: "/contact", l: "Contact" },
            ].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="hover:text-accent">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-accent">Our Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Hajj Packages</li>
            <li>Umrah Packages</li>
            <li>Family Umrah</li>
            <li>Visa Processing</li>
            <li>Air Ticketing</li>
            <li>Hotel Booking</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${site.whatsapp}`}>{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved · Proprietor: {site.owner}
        </div>
      </div>
    </footer>
  );
}
