# Jai Ganesh Tyres — Website Architecture

> A fast, SEO-first, lead-generation + booking website for a family-run tyre business
> with two branches in Pune. Built to rank on Google, build trust, and make it one tap
> for a customer to call / WhatsApp / get directions / book a service.

**Status:** Design locked, implementation in progress.
**Last updated:** 2026-06-28

---

## 1. Business context

| | Branch 1 (Dad) | Branch 2 (Brother) |
|---|---|---|
| Name | Jay Ganesh Tyres & Greasing Center | Jai Ganesh Wheel Care |
| Area | Bibvewadi (Upper Indira Nagar, Dolphin Chowk), Pune | Kondhwa Budruk (Tilekar Nagar, Burani Masjid), Pune |
| Focus | Tyre sales, greasing/lubrication, puncture, nitrogen | Wheel alignment & balancing, tyre fitting |

**Brand strategy:** present as **one brand, two branches** — "Jai Ganesh Tyres, 2 branches
across South-East Pune". Shared trust + double the local-search footprint.

**Primary goal:** Leads & bookings (not e-commerce). Convert local "tyre shop near me"
searches into calls, WhatsApp chats, directions, and booking requests.

**Maintainer:** technical (you). Therefore: code-first content (no CMS), cheapest hosting,
fastest possible site.

---

## 2. Goals & non-goals

**Goals**
- Rank for local intent: "tyre shop near me", "wheel alignment Kondhwa", "puncture repair Bibvewadi".
- Sub-2s load on a mid-range phone on 4G.
- One-tap Call / WhatsApp / Directions on every screen.
- Capture leads (booking + callback) with instant owner notification.
- Trust: real photos, real Google reviews, brands, years in business.
- Trivial to maintain by editing typed content files + redeploy.

**Non-goals (now)**
- No online payments, cart, or live inventory.
- No user accounts/login.
- No CMS/admin content editor (content lives in the repo).

> The data layer and routing are structured so a Phase-3 catalog/e-commerce can be added
> later without a rewrite (see §11).

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSG/ISR → static HTML for speed + SEO; React for interactive parts. |
| Language | **TypeScript** | Typed content + safer code. |
| Styling | **Tailwind CSS v4** + **shadcn/ui** | Fast, consistent, mobile-first; design tokens in CSS vars. |
| Images | **next/image** + self-hosted assets | Automatic resize/format (AVIF/WebP), lazy loading. |
| Content | **Typed TS data files** in `/content` | No CMS; edit + redeploy. |
| DB | **Supabase (Postgres)**, free tier | Stores bookings/leads; built-in table UI = admin. |
| Notifications | **Resend** (email) + **WhatsApp click + MSG91** (SMS, optional) | Owner gets each lead instantly. |
| Spam | **Cloudflare Turnstile** (free) | Protects forms. |
| Analytics | **Vercel Analytics + GA4 + Google Search Console** | Traffic, queries, conversions. |
| Hosting | **Vercel** (free/Hobby) | Global CDN, Git deploys, serverless API routes. |
| Maps | **Google Maps embed + Directions links** | Branch locations + navigation. |

**Running cost:** ~₹0–500/month + domain (~₹800/yr).

---

## 4. System diagram

```
        Customer's phone (Google → "tyre shop near me")
                         │
                         ▼
        ┌──────────────────────────────────────────────┐
        │   Next.js site (SSG/ISR) on Vercel CDN         │
        │   • Home / Services / Branches / Book / etc.   │
        │   • Sticky mobile bar: Call · WhatsApp · Maps  │
        └───────────────┬───────────────────────────────┘
                        │
        ┌───────────────┼─────────────────────────────┐
        │               │                             │
   One-tap actions   Booking/Contact form        Static content
   tel: / wa.me /     POST /api/booking            (from /content
   Maps directions    POST /api/contact             TS data files)
                        │
                        ▼
              ┌──────────────────────┐
              │ Serverless route      │
              │ 1. Turnstile verify   │
              │ 2. Zod validate       │
              │ 3. Insert → Supabase  │
              │ 4. Notify owner       │
              └─────────┬────────────┘
                        │
          ┌─────────────┼──────────────┐
          ▼             ▼              ▼
   Supabase row   Email (Resend)   WhatsApp/SMS
   (lead history) to owner+you     to branch owner
```

---

## 5. Frontend

### 5.1 Site map

```
/                         Home
/services                 Services overview
/services/[slug]          One landing page per service  ← SEO engine
/brands                   Tyre brands stocked
/branches                 Both locations
/branches/[slug]          Per-branch local landing page  ← local SEO
/book                     Booking form
/gallery                  Photo gallery
/about                    Family story / trust
/contact                  Phones, WhatsApp, maps, hours
/privacy, /terms          Legal
```

Service slugs: `tyre-fitting`, `wheel-alignment`, `wheel-balancing`, `puncture-repair`,
`nitrogen-filling`, `greasing`, `tyre-rotation`.

Branch slugs: `bibvewadi`, `kondhwa`.

### 5.2 Design system (tokens)

Defined as CSS variables in `app/globals.css`, consumed via Tailwind theme.

- **Brand:** deep blue/charcoal (trust, automotive) + a high-energy accent
  (amber/orange = tyres, alerts, CTAs). Ganesha-inspired warm gold as secondary.
- **Type:** `Poppins`/`Inter` (headings + body via next/font, self-hosted, no layout shift).
- **Scale:** modular type scale, 8px spacing grid, 2xl rounded corners, soft shadows.
- **Components (shadcn):** Button, Card, Badge, Accordion (FAQ), Dialog (booking), Input,
  Select, Sheet (mobile menu), Tabs.
- **Accessibility:** WCAG AA contrast, focus rings, semantic landmarks, alt text on all images,
  `prefers-reduced-motion` respected.

### 5.3 Key components

- `StickyContactBar` — mobile bottom bar: Call · WhatsApp · Directions (highest converter).
- `Hero` — headline + trust line + primary CTAs + hero image.
- `ServiceCard`, `BrandStrip`, `BranchCard` (with map + directions), `ReviewCard`,
  `Gallery`, `BookingForm`, `CallbackForm`, `FAQ`, `Footer` (both phones/addresses/hours).

### 5.4 Per-page composition

- **Home:** Hero → services grid → brands strip → why-us → branch cards → reviews →
  gallery preview → final CTA.
- **Service page:** what it is → why it matters → signs you need it → price range → FAQ →
  "Book at nearest branch" CTA + Service JSON-LD.
- **Branch page:** address + map + directions + hours + phone/WhatsApp + services at this
  branch + photos + reviews + LocalBusiness JSON-LD.

---

## 6. Backend

Minimal, serverless, no separate server to run.

### 6.1 API routes (Next.js Route Handlers)

| Route | Method | Purpose |
|---|---|---|
| `/api/booking` | POST | Validate → store → notify (full booking). |
| `/api/contact` | POST | General enquiry. |
| `/api/callback` | POST | Name + phone only (lowest friction). |

Each route: **Turnstile verify → Zod validate → Supabase insert → notify (email + optional
SMS) → JSON response**. Rate-limited per IP.

### 6.2 Data model (Supabase / Postgres)

```sql
-- enums
create type branch   as enum ('bibvewadi','kondhwa');
create type vehicle  as enum ('car','bike','suv','commercial');
create type lead_kind as enum ('booking','callback','contact');
create type lead_status as enum ('new','contacted','done','cancelled');

create table leads (
  id             uuid primary key default gen_random_uuid(),
  kind           lead_kind   not null,
  branch         branch,
  service        text,
  vehicle_type   vehicle,
  vehicle_model  text,
  name           text        not null,
  phone          text        not null,
  preferred_slot timestamptz,
  message        text,
  status         lead_status not null default 'new',
  source         text,            -- utm / page
  created_at     timestamptz not null default now()
);

create index leads_status_idx on leads (status, created_at desc);
create index leads_branch_idx on leads (branch, created_at desc);
```

Row Level Security ON; inserts only via service-role key in the server route (never from the
browser). Owner views leads in the Supabase Table Editor (free admin UI), or a tiny
read-only `/admin` page behind a shared password (Phase 2).

### 6.3 Notifications

- **Email (Resend):** formatted lead to the right branch owner + you (always-on record).
- **WhatsApp:** owner receives leads either via SMS deep-link or, in Phase 2, the official
  WhatsApp Business API template. For launch, the **owner's WhatsApp click-to-chat** from the
  site + email notification is enough — the email is the reliable channel, WhatsApp is the
  customer's preferred contact channel.

> Note: the *customer-facing* WhatsApp button uses `wa.me/<branch number>` — zero backend.

---

## 7. Assets strategy (real, high-quality, licensed)

All photos: **Unsplash** & **Pexels** — free for commercial use, no attribution required.
Brand logos: official vector sources (Brandfetch / brand press assets) — used nominatively
to indicate brands stocked. All assets **downloaded and self-hosted** in `/public` (optimized
via next/image) — never hotlinked, for speed + reliability. See `ASSETS.md` for the exact
curated list, source URLs, and licenses.

Asset categories: hero (garage/tyre fitting), service thumbnails (alignment, balancing,
puncture, nitrogen), branch/“our shop” photos (replace with real shop photos at launch),
brand logos, OG/social share image, favicon/app icons.

> **Launch requirement:** swap stock “our shop” photos for **real photos of both shops** —
> authenticity is a major local-trust and conversion factor.

---

## 8. SEO & growth (the actual growth engine)

1. **Google Business Profile (GBP) for both branches** — correct category (Tire shop),
   services, hours, photos, link to matching branch page. *Biggest lever for walk-ins.*
2. **Per-service + per-branch pages** with `LocalBusiness` and `Service` JSON-LD, unique
   titles/meta, clean URLs → rank for "near me" + service+area queries.
3. **Consistent NAP** (Name/Address/Phone) across site, GBP, JustDial.
4. **Reviews engine** — counter QR + link to leave a Google review; steady flow = ranking + trust.
5. **Area landing pages** (Phase 2): Bibvewadi, Kondhwa, Wanowrie, Salisbury Park, etc.
6. **Tips blog** (Phase 2): "signs you need new tyres", "alignment vs balancing".
7. **Hindi/Marathi toggle** (Phase 2): reach + trust in Pune.
8. **sitemap.xml + robots.txt**, Search Console + GA4, fast Core Web Vitals.

---

## 9. Performance, security, quality

- **Performance:** SSG/ISR, next/image, self-hosted fonts, minimal JS, Lighthouse ≥ 95.
- **Security:** secrets server-side only; Supabase RLS; Turnstile + rate limiting; input
  validation (Zod); security headers (CSP, HSTS) via `next.config`.
- **Privacy:** privacy policy; collect only name/phone/vehicle; no third-party trackers beyond GA4.
- **Resilience:** form still surfaces Call/WhatsApp fallback if submit fails.

---

## 10. Repo structure

```
jai-ganesh-tyres/
├─ app/
│  ├─ layout.tsx                 root layout, fonts, metadata, JSON-LD
│  ├─ page.tsx                   home
│  ├─ globals.css                design tokens + Tailwind
│  ├─ services/page.tsx
│  ├─ services/[slug]/page.tsx
│  ├─ branches/page.tsx
│  ├─ branches/[slug]/page.tsx
│  ├─ book/page.tsx
│  ├─ brands/page.tsx
│  ├─ gallery/page.tsx
│  ├─ about/page.tsx
│  ├─ contact/page.tsx
│  ├─ sitemap.ts  robots.ts
│  └─ api/{booking,contact,callback}/route.ts
├─ components/                   UI + sections
├─ content/                      services.ts, branches.ts, brands.ts, reviews.ts, site.ts
├─ lib/                          supabase.ts, notify.ts, schema.ts (Zod), seo.ts (JSON-LD)
├─ public/                       images, logos, icons, og
├─ ARCHITECTURE.md  ASSETS.md  IMPLEMENTATION_PLAN.md  README.md
└─ .env.example
```

**Single source of truth:** `content/branches.ts` holds each branch's name, address, phone,
WhatsApp, Google Maps embed + directions URL, hours, and services. Every page and the footer
read from it — update once, reflected everywhere.

---

## 11. Roadmap

**Phase 1 — Launch (this build)**
All pages, design system, real assets, one-tap contact, booking/contact/callback + Supabase +
notifications, full SEO (schema/sitemap/meta), analytics.

**Phase 2 — Grow**
Review-request flow, offers banner, tips blog, area pages, Hindi/Marathi toggle, `/admin`
leads view, WhatsApp Business API notifications.

**Phase 3 — Optional commerce**
Tyre price/size finder by vehicle (catalog), Razorpay advance booking, full store, service
reminders. Data layer already structured to allow this without a rewrite.

---

## 12. Open items (need real data before launch)

- [ ] Exact phone + WhatsApp numbers for both branches
- [ ] Exact addresses + Google Maps place links/embeds
- [ ] Confirmed service list per branch + price ranges
- [ ] Tyre brands actually stocked
- [ ] Real photos of both shops + team
- [ ] Domain name + Google Business Profile access
- [ ] Years in business / founding year for "About"
