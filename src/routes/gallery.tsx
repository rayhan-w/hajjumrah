import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/hero-kaaba.jpg";
import madinah from "@/assets/madinah.jpg";
import hotel from "@/assets/hotel-makkah.jpg";
import aerial from "@/assets/makkah-aerial.jpg";
import pilgrims from "@/assets/pilgrims.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Holy Places, Hotels & Pilgrims | Al-Samsuddin Hajj" },
      {
        name: "description",
        content:
          "Photo gallery of Makkah, Madinah, our partner hotels and pilgrim journeys with Al-Samsuddin Hajj & Umrah Kafela.",
      },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, cat: "Makkah", title: "Kaaba at Sunset" },
  { src: madinah, cat: "Madinah", title: "Masjid an-Nabawi" },
  { src: aerial, cat: "Makkah", title: "Haram Aerial View" },
  { src: hotel, cat: "Hotels", title: "5★ Hotel with Haram View" },
  { src: pilgrims, cat: "Pilgrims", title: "Our Hajj Group 2025" },
  { src: hero, cat: "Makkah", title: "Tawaf at Fajr" },
  { src: madinah, cat: "Madinah", title: "Green Dome" },
  { src: hotel, cat: "Hotels", title: "Madinah Hotel Lobby" },
  { src: pilgrims, cat: "Pilgrims", title: "Family Umrah Group" },
];

const cats = ["All", "Makkah", "Madinah", "Hotels", "Pilgrims"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = items.filter((i) => cat === "All" || i.cat === cat);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Glimpses from our pilgrims' sacred journeys"
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                cat === c
                  ? "bg-gradient-emerald text-primary-foreground"
                  : "border border-border bg-card hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(it.src)}
              className="group block w-full overflow-hidden rounded-2xl shadow-soft transition hover:shadow-elegant"
            >
              <div className="relative">
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-deep/90 to-transparent p-4 text-left">
                  <div className="text-xs font-semibold uppercase text-accent">{it.cat}</div>
                  <div className="font-display text-lg text-primary-foreground">{it.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-emerald-deep/95 p-4 backdrop-blur"
        >
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white">
            <X />
          </button>
          <img src={open} alt="" className="max-h-[88vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </>
  );
}
