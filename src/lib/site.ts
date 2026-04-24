export const site = {
  name: "Al-Samsuddin Hajj & Umrah",
  owner: "Haji Samsuddin",
  tagline: "Your Trusted Partner for a Sacred Journey",
  phone: "+880 1711-000000",
  phoneDisplay: "+880 1711-000000",
  whatsapp: "8801711000000",
  email: "info@samsuddinhajj.com",
  address: "Paltan Tower, Purana Paltan, Dhaka-1000, Bangladesh",
  hours: "Sat – Thu: 9:00 AM – 8:00 PM",
};

export const whatsappLink = (msg = "Assalamu Alaikum, I am interested in your Hajj/Umrah package.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${site.phone.replace(/\s|-/g, "")}`;
