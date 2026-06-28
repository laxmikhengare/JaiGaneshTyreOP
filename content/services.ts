export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string; // lucide icon name
  image: string;
  priceFrom?: string;
  intro: string;
  why: string;
  signs: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "tyre-fitting",
    name: "Tyre Sales & Fitting",
    short: "Genuine new tyres for cars, bikes & SUVs, expertly fitted.",
    icon: "CircleDot",
    image: "/images/service-tyre-fitting.jpg",
    priceFrom: "Best market price",
    intro:
      "We stock genuine tyres from all leading brands for cars, bikes, SUVs and commercial vehicles, and fit them with proper tools and care.",
    why: "The right tyre, correctly fitted, keeps you safe, saves fuel and lasts longer. We help you pick the correct size and type for your vehicle and budget.",
    signs: [
      "Tread is worn below the wear indicator",
      "Cracks, bulges or cuts on the tyre",
      "Frequent punctures or air loss",
      "Tyres are more than 5–6 years old",
    ],
    faq: [
      { q: "Do you stock my vehicle's tyre size?", a: "We carry most common car and bike sizes and can arrange others quickly. WhatsApp us your tyre size (printed on the sidewall) for a quick price." },
      { q: "Which brands do you sell?", a: "All leading Indian and global brands. Tell us your budget and we'll recommend the best value option." },
    ],
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    short: "Computerised alignment for a straight, safe, fuel-efficient drive.",
    icon: "Crosshair",
    image: "/images/service-wheel-alignment.jpg",
    priceFrom: "₹ on request",
    intro:
      "Precise wheel alignment corrects the angles of your wheels so they point exactly where they should — protecting your tyres and improving handling.",
    why: "Bad alignment wears your tyres unevenly, pulls the car to one side and wastes fuel. Regular alignment makes tyres last far longer.",
    signs: [
      "Car pulls to the left or right",
      "Steering wheel is off-centre when driving straight",
      "Uneven or rapid tyre wear",
      "Steering feels loose or vibrates",
    ],
    faq: [
      { q: "How often should I get alignment done?", a: "Every 10,000 km, after hitting a big pothole, or whenever you fit new tyres." },
      { q: "Alignment or balancing — what's the difference?", a: "Alignment sets wheel angles; balancing evens out weight so wheels spin smoothly. Many cars need both." },
    ],
  },
  {
    slug: "wheel-balancing",
    name: "Wheel Balancing",
    short: "Smooth, vibration-free rides with precision weight balancing.",
    icon: "Disc3",
    image: "/images/service-wheel-balancing.jpg",
    priceFrom: "₹ on request",
    intro:
      "Wheel balancing evens out the weight around each wheel and tyre so they rotate smoothly at high speed.",
    why: "Unbalanced wheels cause vibration, uneven tyre wear and strain on suspension parts. Balancing gives a comfortable, safer ride.",
    signs: [
      "Steering or seat vibrates at higher speeds",
      "Uneven tyre wear",
      "After fitting new tyres",
    ],
    faq: [
      { q: "Do you balance after every new tyre?", a: "Yes — we balance every newly fitted tyre as standard." },
    ],
  },
  {
    slug: "puncture-repair",
    name: "Puncture Repair",
    short: "Fast, reliable tubeless & tube puncture repairs.",
    icon: "Wrench",
    image: "/images/service-puncture-repair.jpg",
    priceFrom: "Affordable",
    intro:
      "Quick and durable puncture repairs for tubeless and tube-type tyres, done the right way so they hold.",
    why: "A properly repaired puncture is safe and long-lasting. We inspect the tyre and use the correct repair method, not a temporary patch.",
    signs: [
      "Tyre keeps losing air",
      "A nail or sharp object stuck in the tread",
      "Tyre went flat",
    ],
    faq: [
      { q: "Can every puncture be repaired?", a: "Most tread punctures can. Sidewall damage usually means the tyre should be replaced for safety." },
    ],
  },
  {
    slug: "nitrogen-filling",
    name: "Nitrogen Filling",
    short: "Nitrogen air for stable pressure & longer tyre life.",
    icon: "Wind",
    image: "/images/service-nitrogen.jpg",
    priceFrom: "Affordable",
    intro:
      "Nitrogen keeps tyre pressure more stable across temperatures, improving mileage and tyre life.",
    why: "Nitrogen leaks out slower than normal air and runs cooler, so your pressure stays correct for longer — better for safety and fuel economy.",
    signs: [
      "Pressure drops often",
      "Long highway drives",
      "Want better mileage and tyre life",
    ],
    faq: [
      { q: "Is nitrogen really better?", a: "It holds pressure longer and runs cooler. It's a small, worthwhile upgrade, especially for highway driving." },
    ],
  },
  {
    slug: "greasing",
    name: "Greasing & Lubrication",
    short: "Thorough greasing to keep moving parts running smoothly.",
    icon: "Droplets",
    image: "/images/service-greasing.jpg",
    priceFrom: "₹ on request",
    intro:
      "Complete greasing and lubrication of your vehicle's key moving parts to reduce wear and noise.",
    why: "Regular greasing protects suspension and joints, prevents premature wear and keeps your drive quiet and smooth.",
    signs: [
      "Squeaks or creaks over bumps",
      "Due for periodic service",
      "Stiff steering or suspension",
    ],
    faq: [
      { q: "How often is greasing needed?", a: "Typically with each major service or every few thousand km — ask us based on your vehicle." },
    ],
  },
  {
    slug: "tyre-rotation",
    name: "Tyre Rotation",
    short: "Even out tyre wear and extend tyre life.",
    icon: "RotateCw",
    image: "/images/service-tyre-rotation.jpg",
    priceFrom: "Affordable",
    intro:
      "Rotating tyres between positions evens out wear so all four last longer.",
    why: "Front and rear tyres wear differently. Rotating them at the right interval maximises the life of the full set.",
    signs: [
      "Front tyres wearing faster than rear",
      "Due every 8,000–10,000 km",
    ],
    faq: [
      { q: "How often should tyres be rotated?", a: "Around every 8,000–10,000 km for even wear." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
