export type Package = {
  slug: string;
  type: "Hajj" | "Umrah";
  title: string;
  category: "Economy" | "Standard" | "Premium" | "VIP";
  duration: string;
  price: string;
  priceNote?: string;
  hotelMakkah: string;
  hotelMadinah: string;
  distanceMakkah: string;
  distanceMadinah: string;
  airline: string;
  visaIncluded: boolean;
  meals: string;
  transport: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  description: string;
  image: string;
};

export const packages: Package[] = [
  {
    slug: "umrah-economy-14",
    type: "Umrah",
    title: "Economy Umrah Package",
    category: "Economy",
    duration: "14 Days",
    price: "1,85,000",
    priceNote: "BDT per person",
    hotelMakkah: "Al Massa Hotel (3★)",
    hotelMadinah: "Dar Al Eiman (3★)",
    distanceMakkah: "400m from Haram",
    distanceMadinah: "300m from Masjid Nabawi",
    airline: "Saudia / Biman",
    visaIncluded: true,
    meals: "Breakfast & Dinner",
    transport: "AC Bus + Ziyarah",
    highlights: ["Visa Included", "AC Hotel Room", "Sharing 4 Person", "Ziyarah Tour"],
    inclusions: [
      "Umrah Visa Processing",
      "Round trip air ticket",
      "Hotel accommodation (4-bed sharing)",
      "Daily breakfast & dinner",
      "Ziyarah in Makkah & Madinah",
      "Airport transfer",
      "Experienced Mualim guide",
    ],
    exclusions: ["Lunch", "Personal expenses", "Laundry", "Zam-Zam water (extra)"],
    description:
      "Affordable yet comfortable Umrah journey with experienced guidance, clean accommodation near both holy mosques, and complete visa support.",
    image: "/images/pkg-economy.jpg",
  },
  {
    slug: "umrah-standard-15",
    type: "Umrah",
    title: "Standard Umrah Package",
    category: "Standard",
    duration: "15 Days",
    price: "2,45,000",
    priceNote: "BDT per person",
    hotelMakkah: "Snood Ajyad (4★)",
    hotelMadinah: "Al Eiman Royal (4★)",
    distanceMakkah: "200m from Haram",
    distanceMadinah: "150m from Masjid Nabawi",
    airline: "Saudia Direct",
    visaIncluded: true,
    meals: "Full Board (3 meals)",
    transport: "Private AC Coach",
    highlights: ["4★ Hotels", "Triple Sharing", "Full Board", "Direct Flight"],
    inclusions: [
      "Umrah Visa Processing",
      "Saudia direct return flight",
      "4★ hotel triple sharing",
      "3 meals (Bangladeshi cuisine)",
      "Complete Ziyarah package",
      "Airport pickup & drop",
      "Mualim guide & training",
    ],
    exclusions: ["Personal shopping", "Phone calls", "Optional tours"],
    description:
      "Our most popular Umrah package offering 4-star hotels close to the Haram, full meals, and direct Saudia flights for a truly comfortable spiritual journey.",
    image: "/images/pkg-standard.jpg",
  },
  {
    slug: "umrah-premium-15",
    type: "Umrah",
    title: "Premium Umrah Package",
    category: "Premium",
    duration: "15 Days",
    price: "3,25,000",
    priceNote: "BDT per person",
    hotelMakkah: "Pullman Zamzam (5★)",
    hotelMadinah: "Pullman Madinah (5★)",
    distanceMakkah: "Inside Haram complex",
    distanceMadinah: "100m from Masjid Nabawi",
    airline: "Saudia / Emirates",
    visaIncluded: true,
    meals: "Full Buffet",
    transport: "Luxury Coach + GMC",
    highlights: ["5★ Hotels", "Double Sharing", "Buffet Meals", "Haram View Rooms"],
    inclusions: [
      "Premium Umrah visa",
      "Direct Saudia/Emirates flight",
      "5★ hotel double sharing",
      "Full buffet (international)",
      "Luxury Ziyarah with GMC",
      "Private airport transfer",
      "Senior Mualim guide",
    ],
    exclusions: ["Personal expenses", "Laundry beyond limits"],
    description:
      "Experience Umrah in true luxury with 5-star accommodations steps from the Haram, gourmet dining, and personalized service throughout your journey.",
    image: "/images/pkg-premium.jpg",
  },
  {
    slug: "hajj-standard-2026",
    type: "Hajj",
    title: "Hajj Standard Package 2026",
    category: "Standard",
    duration: "38 Days",
    price: "6,95,000",
    priceNote: "BDT per person (Govt. approved)",
    hotelMakkah: "Azka Al Safa (4★)",
    hotelMadinah: "Dar Al Taqwa (4★)",
    distanceMakkah: "350m from Haram",
    distanceMadinah: "200m from Masjid Nabawi",
    airline: "Biman / Saudia",
    visaIncluded: true,
    meals: "3 Meals Daily",
    transport: "AC Bus all journey",
    highlights: ["Govt. Approved", "Mina Tent A/C", "Maktab 1-3", "Trained Mualim"],
    inclusions: [
      "Government approved Hajj visa",
      "Return air ticket",
      "Hotel accommodation Makkah & Madinah",
      "AC Mina tent (Maktab 1-3)",
      "All meals during Hajj days",
      "Qurbani arrangement",
      "Hajj training programs in Dhaka",
      "24/7 Mualim support",
    ],
    exclusions: ["Personal expenses", "Optional Ziyarah extensions"],
    description:
      "Complete government-approved Hajj package with all rituals professionally arranged. Premium Mina Maktab, experienced Mualim, and full pre-departure training included.",
    image: "/images/pkg-hajj-std.jpg",
  },
  {
    slug: "hajj-vip-2026",
    type: "Hajj",
    title: "Hajj VIP Package 2026",
    category: "VIP",
    duration: "30 Days",
    price: "11,50,000",
    priceNote: "BDT per person",
    hotelMakkah: "Hilton Suites Makkah (5★)",
    hotelMadinah: "Oberoi Madinah (5★)",
    distanceMakkah: "Adjacent to Haram",
    distanceMadinah: "Front of Masjid Nabawi",
    airline: "Emirates / Qatar Business",
    visaIncluded: true,
    meals: "5★ Buffet",
    transport: "Private GMC Suburban",
    highlights: ["VIP Maktab", "5★ Suites", "Private Tent", "Business Class"],
    inclusions: [
      "VIP Hajj visa",
      "Business class return flight",
      "5★ hotel double sharing suites",
      "VIP Mina Maktab (A/C cabin)",
      "Premium Qurbani",
      "Private Ziyarah with guide",
      "Personal Khadem service",
    ],
    exclusions: ["Personal shopping"],
    description:
      "Our most exclusive Hajj experience: business class flights, 5-star suites, VIP Mina cabins and personal khadem service throughout the sacred days.",
    image: "/images/pkg-hajj-vip.jpg",
  },
  {
    slug: "umrah-family-12",
    type: "Umrah",
    title: "Family Umrah Package",
    category: "Standard",
    duration: "12 Days",
    price: "2,15,000",
    priceNote: "BDT per person (min 4)",
    hotelMakkah: "Anjum Hotel (4★)",
    hotelMadinah: "Taiba Front (4★)",
    distanceMakkah: "250m from Haram",
    distanceMadinah: "Front of Masjid Nabawi",
    airline: "Saudia",
    visaIncluded: true,
    meals: "Breakfast & Dinner",
    transport: "Family AC Coach",
    highlights: ["Family Room", "Female Guide", "Kid Friendly", "Direct Flight"],
    inclusions: [
      "Umrah visa for full family",
      "Family hotel rooms",
      "Bangladeshi meals",
      "Female Mualima available",
      "Ziyarah by AC coach",
      "Airport assistance",
    ],
    exclusions: ["Lunch", "Children below 2 charges"],
    description:
      "Specially designed for families with children and elderly members. Comfortable family rooms, female guides, and gentle pace for everyone to enjoy the journey.",
    image: "/images/pkg-family.jpg",
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
