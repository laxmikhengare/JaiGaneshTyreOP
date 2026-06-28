export const site = {
  name: "Jai Ganesh Tyres",
  tagline: "Trusted Tyre & Wheel Care in Pune",
  description:
    "Family-run tyre experts with two branches in Pune — Bibvewadi and Kondhwa. Tyre sales & fitting, wheel alignment, balancing, puncture repair, nitrogen filling and greasing. Genuine tyres, fair prices, expert service.",
  // Update to the real domain before launch.
  url: "https://jaiganeshtyres.in",
  // Primary phone shown in header (use the most-staffed branch).
  primaryPhone: "+919999999999",
  primaryWhatsapp: "919999999999",
  email: "contact@jaiganeshtyres.in",
  establishedYear: 2005,
  ogImage: "/images/hero-alignment.jpg",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Branches", href: "/branches" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
