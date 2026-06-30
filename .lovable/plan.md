## Mchanga Afya v2.0 — Enterprise Hardening Plan

Preserve all existing routes, components, backend wiring, and deployment shape. Enhance incrementally.

### Audit summary (current state)
- Stack: TanStack Start + Vite + Tailwind v4 + shadcn. Routes intact: `/`, `/login`, `/admin`, `/agent-dashboard`, `/county-dashboard`, `/farmer-dashboard`.
- Landing sections present: Hero, About, Slides, AIAdvisor, TrustMetrics, RoleAccess, Contact, Footer.
- Auth: 4 roles via `src/lib/auth.ts`, login attempts `http://localhost:4000` then falls back to local session.
- SEO: JSON-LD Organization + OG already on `/`.
- `vercel.json` present with SPA rewrite.

### Changes (scoped, non-destructive)

**1. Hero (`src/components/sections/Hero.tsx`)**
- Add third CTA "Login to Platform" that opens `https://mchanga-akili-hub-main-cr6a.vercel.app/admin` in same tab (alongside existing Explore Platform + Request Demo).
- Add animated SVG GIS/heatmap overlay layer (county-grid + pulse nodes) over hero image while keeping current image visibility.
- Update copy to the exact headline/sub from brief.

**2. Platform Modules section (new `Modules.tsx`)**
- 12 module cards (Soil Analytics, Yield Intelligence, Fertilizer Intelligence, County Dashboard, Field Operations, Lab Network, Food Security, AI Recommendations, Farmer Registry, Agri Research, Carbon Intelligence, Future Marketplace) with icon, 1-line desc, stat, CTA.

**3. County Map section (new `CountyMap.tsx`)**
- Lightweight SVG grid of 47 county tiles with hover state showing mock soil-health/yield stat. No external GIS dep.

**4. Live Metrics section (new `LiveMetrics.tsx`)**
- Animated counters (IntersectionObserver) + mini bar/line/pie via inline SVG. Mock data only.

**5. RoleAccess update**
- Extend role cards to 6 (add Research Partner, Investor) as display-only; keep existing 4 functional roles wired to `/login`.
- Admin card CTA → external admin hub (same tab) per brief.

**6. AIAdvisor / Slides / TrustMetrics / About / Contact / Footer**
- Keep as-is; minor copy polish + accessibility (aria-labels, alt text, semantic landmarks).
- TrustMetrics: ensure wording is "Designed to support collaboration with…" (no false endorsement).

**7. SEO & performance**
- Add Twitter card image/site meta, refine keywords from brief, add `theme-color`, `og:locale=en_KE`.
- Lazy-load below-fold sections via `React.lazy` + Suspense (Modules, CountyMap, LiveMetrics, AIAdvisor, TrustMetrics, RoleAccess, Contact).
- Add `loading="lazy"` + `decoding="async"` to non-hero images; `fetchpriority="high"` preload for hero image via route head.
- Add `sitemap.xml` server route and `public/robots.txt`.

**8. Deployment compatibility**
- Leave `vercel.json` SPA rewrite intact. No SSR-only features introduced. No new native deps.

### Files touched
- Edit: `src/components/sections/Hero.tsx`, `RoleAccess.tsx`, `TrustMetrics.tsx`, `src/routes/index.tsx`, `src/routes/__root.tsx` (preload + theme-color only if needed).
- Create: `src/components/sections/Modules.tsx`, `CountyMap.tsx`, `LiveMetrics.tsx`, `src/routes/sitemap[.]xml.ts`, `public/robots.txt`.
- Untouched: auth, dashboards, api layer, login route, backend contract.

### Out of scope (not doing without confirmation)
- Real GIS / Mapbox integration
- Real LLM wiring for AI Advisor
- Backend changes
- Removing/renaming any existing route or component
