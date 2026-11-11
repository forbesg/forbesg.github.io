# Forbes Gray | Website Developer Edinburgh

Nuxt 4 rebuild of [forbesg.github.io](https://forbesg.github.io), replacing the Gridsome site in [forbes-gridsome](https://github.com/forbesg/forbes-gridsome).

## Setup

Requires Node `^22.22.3 || ^24.15.0 || >=26`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build to .output/public
```

## Hosting

The live site is on GitHub Pages (`.github/workflows/deploy.yml`, on every push to `main`). It also builds for Cloudflare Pages.

### Cloudflare Pages

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo, then:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `pnpm generate` |
| Build output directory | `dist` |
| Environment variable `NODE_VERSION` | `24` |
| Environment variable `NUXT_SITE_URL` | the live address, e.g. `https://www.example.co.uk` (production only) |

Cloudflare sets `CF_PAGES=1` during builds, so Nitro uses its `cloudflare_pages_static` preset, which writes:

- `dist/_redirects`: real 301s from the moved pages in `routeRules`
- `dist/_headers`: security headers, and cache times for images and media

Leave `NUXT_SITE_URL` unset on preview deployments so their canonical URLs keep pointing at the live site.

To try a Cloudflare build locally (delete any old `.output` first: a stale one gets copied into `dist`):

```bash
rm -rf .output dist
CF_PAGES=1 NUXT_SITE_URL=https://www.example.co.uk pnpm generate
npx wrangler pages dev dist
```

### Moving to a new domain

`NUXT_SITE_URL` drives the canonical URLs, Open Graph tags, sitemap, robots.txt and structured data. Without it the site uses `https://forbesg.github.io`.

Before switching, plan how the old `forbesg.github.io` URLs reach the new domain, and remember the other GitHub Pages projects served under it (`/Euro-2016-WallChart/`, `/world-cup-wall-chart/`).
