import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import appCss from "../styles.css?url";
import hajjFavicon from "../hajj.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-emerald px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Al-Samsuddin Hajj & Umrah Kafela — Trusted Hajj Agency in Paltan, Dhaka" },
      {
        name: "description",
        content:
          "Government-approved Hajj & Umrah agency in Paltan, Dhaka. Affordable Hajj 2026 packages, Umrah year-round, visa, hotel & flight by Haji Samsuddin.",
      },
      { name: "author", content: "Al-Samsuddin Hajj & Umrah" },
      { property: "og:title", content: "Al-Samsuddin Hajj & Umrah Kafela — Trusted Hajj Agency in Paltan, Dhaka" },
      {
        property: "og:description",
        content: "Trusted Hajj & Umrah agency in Paltan, Dhaka — by Haji Samsuddin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Al-Samsuddin Hajj & Umrah Kafela — Trusted Hajj Agency in Paltan, Dhaka" },
      { name: "description", content: "Hajj Umrah Planner helps users find and book Hajj and Umrah packages." },
      { property: "og:description", content: "Hajj Umrah Planner helps users find and book Hajj and Umrah packages." },
      { name: "twitter:description", content: "Hajj Umrah Planner helps users find and book Hajj and Umrah packages." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/91f4d350-595a-4b37-a9ad-e57758fa3096/id-preview-ea62aed6--fde5b167-d24d-45bc-828b-11b8afd2b39d.lovable.app-1777004182370.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/91f4d350-595a-4b37-a9ad-e57758fa3096/id-preview-ea62aed6--fde5b167-d24d-45bc-828b-11b8afd2b39d.lovable.app-1777004182370.png" },
    ],
    links: [
      { rel: "icon", href: hajjFavicon, type: "image/jpeg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
