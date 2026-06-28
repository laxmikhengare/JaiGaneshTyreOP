// SINGLE SOURCE OF TRUTH for both shops. Every page + the footer reads from here.
// Replace the PLACEHOLDER phone numbers, exact addresses, and Google Maps URLs at launch.

export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  owner: string;
  phone: string; // E.164 for tel:
  phoneDisplay: string;
  whatsapp: string; // digits only for wa.me
  area: string;
  addressLines: string[];
  pincode: string;
  city: string;
  // Google Maps: replace with the real place embed + directions links.
  mapEmbedSrc: string;
  directionsUrl: string;
  geo: { lat: number; lng: number };
  hours: { days: string; time: string }[];
  serviceSlugs: string[];
  photos: string[];
};

export const branches: Branch[] = [
  {
    slug: "bibvewadi",
    name: "Jay Ganesh Tyres & Greasing Center",
    shortName: "Bibvewadi Branch",
    owner: "Vaibhav Khengare", // dad's name
    phone: "+919822352333",
    phoneDisplay: "+91 98223 52333",
    whatsapp: "919822352333",
    area: "Bibvewadi",
    addressLines: [
      "Near Upper Indira Nagar, Dolphin Chowk",
      "Bibvewadi",
    ],
    pincode: "411037",
    city: "Pune",
    mapEmbedSrc:
      "https://www.google.com/maps?q=Jay+Ganesh+Tyres+Greasing+Center+Bibvewadi+Pune&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Jay+Ganesh+Tyres+Greasing+Center+Bibvewadi+Pune",
    geo: { lat: 18.4575, lng: 73.865 },
    hours: [
      { days: "Mon – Sat", time: "9:00 AM – 9:00 PM" },
      { days: "Sunday", time: "10:00 AM – 6:00 PM" },
    ],
    serviceSlugs: [
      "tyre-fitting",
      "puncture-repair",
      "nitrogen-filling",
      "greasing",
      "tyre-rotation",
    ],
    photos: ["/images/shop-mechanic-1.jpg", "/images/tyres-stack.jpg"],
  },
  {
    slug: "kondhwa",
    name: "Jai Ganesh Wheel Care",
    shortName: "Kondhwa Branch",
    owner: "Laukik Khengare", // brother's name
    phone: "+9173787 40641",
    phoneDisplay: "+91 73787 40641",
    whatsapp: "9190903 81313",
    area: "Kondhwa Budruk",
    addressLines: ["Near Burani Masjid, Tilekar Nagar", "Kondhwa Budruk"],
    pincode: "411048",
    city: "Pune",
    mapEmbedSrc:
      "https://www.google.com/maps?q=Jai+Ganesh+Wheel+Care+Kondhwa+Budruk+Pune&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Jai+Ganesh+Wheel+Care+Kondhwa+Budruk+Pune",
    geo: { lat: 18.4636, lng: 73.8951 },
    hours: [
      { days: "Mon – Sat", time: "9:00 AM – 9:00 PM" },
      { days: "Sunday", time: "10:00 AM – 6:00 PM" },
    ],
    serviceSlugs: [
      "wheel-alignment",
      "wheel-balancing",
      "tyre-fitting",
      "puncture-repair",
    ],
    photos: ["/images/shop-mechanic-2.jpg", "/images/service-wheel-alignment.jpg"],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);
