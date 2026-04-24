export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "hajj-2026-registration-bangladesh",
    title: "Hajj 2026 Registration from Bangladesh: Complete Guide",
    excerpt:
      "Everything Bangladeshi pilgrims need to know about Hajj 2026 registration, government quota, package costs and required documents.",
    date: "April 18, 2026",
    readTime: "6 min read",
    category: "Hajj Guide",
    cover: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&q=80",
    content: [
      "Hajj is one of the five pillars of Islam and a sacred obligation for every able Muslim. For Bangladeshi pilgrims, the Ministry of Religious Affairs announces the Hajj package and registration each year.",
      "For Hajj 2026, registration will open in early Shawwal. Pilgrims must register through approved agencies like Al-Samsuddin Hajj & Umrah, providing passport (valid 9+ months), NID, medical certificate and 4 photos.",
      "Government Hajj package and Private Hajj package both are available. Our Standard package starts at 6,95,000 BDT and includes flight, hotel, Mina tent (Maktab 1-3), all meals, qurbani and trained Mualim guidance.",
      "Pre-departure training is mandatory and we conduct sessions every Friday at our Paltan office. Contact us to book your seat early as quotas fill quickly.",
    ],
  },
  {
    slug: "umrah-visa-process-2026",
    title: "Umrah Visa Process 2026: Documents & Timeline",
    excerpt:
      "Step-by-step guide to Saudi Umrah visa processing for Bangladeshi citizens including required documents and approval timeline.",
    date: "March 28, 2026",
    readTime: "5 min read",
    category: "Umrah",
    cover: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80",
    content: [
      "Umrah visa for Bangladeshi pilgrims is now processed through the Nusuk platform. The process is faster than ever — typically 3 to 7 working days.",
      "Required documents: passport with 6+ months validity, recent passport-size photo (white background), vaccination certificate (Meningitis ACWY mandatory), and confirmed hotel + flight booking.",
      "Al-Samsuddin Hajj handles the entire visa process for our package customers. You only need to submit documents — we take care of the rest.",
    ],
  },
  {
    slug: "what-to-pack-umrah",
    title: "What to Pack for Umrah: Complete Checklist",
    excerpt:
      "A practical packing list for first-time and returning pilgrims covering ihram, daily wear, medicine and travel essentials.",
    date: "March 10, 2026",
    readTime: "4 min read",
    category: "Travel Tips",
    cover: "https://images.unsplash.com/photo-1597040663338-bc7d20a423d6?w=1200&q=80",
    content: [
      "Packing for Umrah requires planning. Climate in Makkah and Madinah varies seasonally, so prepare accordingly.",
      "Essentials: 2 sets of ihram (men), modest abayas (women), comfortable sandals, prayer mat, tasbih, small Quran, unscented soap and shampoo, basic medicine kit.",
      "Don't forget: power adapter (Type G), portable phone charger, refillable water bottle and a small backpack for daily Haram visits.",
    ],
  },
  {
    slug: "history-of-kaaba",
    title: "The History of the Kaaba: From Ibrahim (AS) to Today",
    excerpt:
      "Discover the rich spiritual history of the Holy Kaaba — from its construction by Prophet Ibrahim (AS) to its place at the heart of Islam.",
    date: "February 22, 2026",
    readTime: "8 min read",
    category: "Spirituality",
    cover: "https://images.unsplash.com/photo-1565015877960-68b32a2c8b89?w=1200&q=80",
    content: [
      "The Kaaba, the House of Allah, was first built by Prophet Ibrahim (AS) and his son Ismail (AS) at Allah's command, as mentioned in Surah Al-Baqarah.",
      "Throughout history the Kaaba has been rebuilt several times — by the Quraysh during the time of Prophet Muhammad ﷺ before prophethood, and later by Abdullah ibn al-Zubayr.",
      "Today the Kaaba stands at the center of Masjid al-Haram, drawing millions of pilgrims every year for Hajj and Umrah.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
