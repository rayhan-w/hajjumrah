import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { site, telLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/payment", label: "Payment" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="hidden bg-gradient-emerald text-primary-foreground md:block">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <span className="opacity-90">📞 24/7 Support · {site.hours}</span>
          <span className="opacity-90">✉ {site.email}</span>
        </div>
      </div>
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" width={44} height={44} className="h-11 w-11" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-primary md:text-xl">
              Al-Samsuddin
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Hajj &amp; Umrah Kafela
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={telLink}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={telLink}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
