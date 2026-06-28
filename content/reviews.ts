// Replace with real Google reviews at launch (keep them genuine).
export type Review = { name: string; rating: number; text: string; branch?: string };

export const reviews: Review[] = [
  {
    name: "Rohan P.",
    rating: 5,
    text: "Honest pricing and quick tyre fitting. The owner guided me to the right tyre for my Swift without overselling.",
    branch: "Bibvewadi",
  },
  {
    name: "Imran S.",
    rating: 5,
    text: "Got wheel alignment and balancing done at Kondhwa. Car feels much smoother now and no more steering pull.",
    branch: "Kondhwa",
  },
  {
    name: "Sneha K.",
    rating: 5,
    text: "Fast puncture repair late in the evening. Friendly staff and fair rate. Highly recommend.",
    branch: "Bibvewadi",
  },
  {
    name: "Amit J.",
    rating: 5,
    text: "Been coming here for years for all my car's tyre needs. Trustworthy and skilled — a proper family business.",
    branch: "Kondhwa",
  },
];

export const aggregateRating = { value: 4.8, count: 120 };
