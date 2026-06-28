// Brands stocked. Confirm the real list with the shops.
// To show official logos, add files to public/brands/ and set `logo`.
export type Brand = { name: string; logo?: string };

export const brands: Brand[] = [
  { name: "MRF" },
  { name: "Apollo" },
  { name: "CEAT" },
  { name: "Bridgestone" },
  { name: "JK Tyre" },
  { name: "Goodyear" },
  { name: "Michelin" },
  { name: "TVS Eurogrip" },
];
