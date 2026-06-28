# Implementation Plan

Concrete build order for the Jai Ganesh Tyres site (see `ARCHITECTURE.md` for the why).

## Step 0 — Foundation ✅
- Next.js 15 (App Router) + TypeScript + Tailwind v4 + lucide-react.
- Design tokens in `app/globals.css`; `cn()` helper; self-hosted fonts (Poppins + Inter).
- Single-source content model in `content/` (site, branches, services, brands, reviews).

## Step 1 — Layout & shared UI
- Root layout: fonts, metadata defaults, Header (with mobile Sheet menu), Footer, JSON-LD.
- `StickyContactBar` (mobile): Call · WhatsApp · Directions.
- UI primitives: Button, Card, Badge, Section, Container.

## Step 2 — Home page
Hero → services grid → brands strip → why-us → branch cards → reviews → gallery preview → CTA.

## Step 3 — Content-driven pages
- `/services` + `/services/[slug]` (generateStaticParams from content) + Service JSON-LD.
- `/branches` + `/branches/[slug]` (map embed, directions, hours) + LocalBusiness JSON-LD.
- `/about`, `/contact`, `/brands`, `/gallery`.

## Step 4 — Backend (lead capture)
- `lib/schema.ts` (Zod), `lib/supabase.ts` (server-only service client), `lib/notify.ts` (Resend).
- `/api/booking`, `/api/contact`, `/api/callback` route handlers: Turnstile → validate → insert → notify.
- `BookingForm` + `CallbackForm` client components with graceful Call/WhatsApp fallback.
- Supabase `leads` table + RLS (SQL in `supabase/schema.sql`).

## Step 5 — SEO & polish
- `sitemap.ts`, `robots.ts`, per-page metadata, OG image, favicon set.
- Lighthouse pass (≥95), a11y check, security headers in `next.config`.

## Step 6 — Launch checklist
- Swap placeholder phones/addresses/maps/photos for real data (`content/branches.ts`).
- Create `.env` from `.env.example` (Supabase, Resend, Turnstile keys).
- Deploy to Vercel, connect domain, set env vars.
- Google Business Profiles + Search Console + GA4.

## Local dev
```bash
npm install
cp .env.example .env.local   # fill in keys (site runs without them; forms log to console)
npm run dev                  # http://localhost:3000
```
