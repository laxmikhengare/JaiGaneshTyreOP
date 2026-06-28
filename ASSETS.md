# Assets — sources & licenses

All photos are **real, high-resolution stock** from **Pexels**, downloaded and self-hosted in
`public/images/` (optimized at build/runtime by `next/image`). The
[Pexels License](https://www.pexels.com/license/) allows **free commercial use, no attribution
required, no sign-up**. Attribution is still recorded below as good practice.

> Replace the `shop-*` and `about-team` photos with **real photos of the two shops and team**
> before launch — authenticity drives local trust and conversions.

## Photos (Pexels)

| File | Pexels photo ID | Used for | Source |
|---|---|---|---|
| `hero-alignment.jpg` (3840px) | 3806288 | Home hero | https://www.pexels.com/photo/3806288/ |
| `service-tyre-fitting.jpg` | 6870331 | Tyre fitting service | https://www.pexels.com/photo/6870331/ |
| `service-wheel-alignment.jpg` | 3806280 | Wheel alignment service | https://www.pexels.com/photo/3806280/ |
| `service-wheel-balancing.jpg` | 8985925 | Wheel balancing service | https://www.pexels.com/photo/8985925/ |
| `service-puncture-repair.jpg` | 6870330 | Puncture repair service | https://www.pexels.com/photo/6870330/ |
| `service-nitrogen.jpg` | 18383583 | Nitrogen filling service | https://www.pexels.com/photo/18383583/ |
| `service-greasing.jpg` | 8986137 | Greasing / lubrication | https://www.pexels.com/photo/8986137/ |
| `service-tyre-rotation.jpg` | 17600886 | Tyre rotation service | https://www.pexels.com/photo/17600886/ |
| `tyres-stack.jpg` | 16023877 | Brands / sections | https://www.pexels.com/photo/16023877/ |
| `shop-mechanic-1.jpg` | 6870311 | Branch / why-us | https://www.pexels.com/photo/6870311/ |
| `shop-mechanic-2.jpg` | 8986119 | Branch / why-us | https://www.pexels.com/photo/8986119/ |
| `about-team.jpg` | 3807799 | About page | https://www.pexels.com/photo/3807799/ |

Re-download / resize script lives in commit history (`/tmp/assets.txt` pattern):
`https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=<width>`

## Fonts

- **Poppins** (headings) + **Inter** (body) via `next/font/google` — self-hosted at build,
  SIL Open Font License, no layout shift.

## Brand logos (tyre brands stocked)

Brand names are shown as a styled wordmark strip by default. To use **official logos**
(nominative use — indicating brands sold), drop SV/PNG files into `public/brands/` and set
`logo` in `content/brands.ts`. Official vector sources:

- MRF, Apollo, CEAT, Bridgestone, JK Tyre, Goodyear, Michelin — via
  [Brandfetch](https://brandfetch.com) and [BrandLogos.net](https://brandlogos.net/tag/tire-brands).
- Confirm the **actual brands stocked** with the shops before display.

## Icons

- [lucide-react](https://lucide.dev) (ISC license) for UI/service icons.

## Sources

- [Pexels License](https://www.pexels.com/license/)
- [Pexels — tyre fitting](https://www.pexels.com/search/tire%20fitting/) ·
  [wheel alignment](https://www.pexels.com/search/wheel%20alignment/)
- [Unsplash License](https://unsplash.com/license) (alternative source, also commercial-free)
