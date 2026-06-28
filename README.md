# Jai Ganesh Tyres — Website

Fast, SEO-first lead-generation + booking website for a family-run tyre business with two
branches in Pune. See **ARCHITECTURE.md** for the full design and **IMPLEMENTATION_PLAN.md**
for the build order.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Supabase (leads) · Resend (email) ·
Cloudflare Turnstile (spam) · Vercel hosting.

## Develop
```bash
npm install
cp .env.example .env.local   # optional — site runs without keys (forms log to console)
npm run dev                  # http://localhost:3000
npm run build                # production build
```

## Edit content (no CMS)
All content is typed data in `content/`:
- `branches.ts` — **single source of truth** for both shops (name, address, phone, WhatsApp,
  map, hours, services). Update here and it flows to every page + footer.
- `services.ts`, `brands.ts`, `reviews.ts`, `site.ts`.

## Backend
`app/api/lead/route.ts` handles booking/callback/contact: Turnstile → Zod validate → Supabase
insert → email notify. DB schema: `supabase/schema.sql`. Without env keys it validates and logs
to the console so nothing breaks in dev.

## Launch checklist
See **ARCHITECTURE.md §12** — real phones/addresses/maps, real shop photos, env keys, deploy to
Vercel + domain, Google Business Profiles, Search Console + GA4.

## Assets
Real licensed photos (Pexels) self-hosted in `public/images/` — see **ASSETS.md** for sources.
