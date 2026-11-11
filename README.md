# Forbes Gray | Website Developer Edinburgh

Nuxt 4 site for [forbesgray.co.uk](https://forbesgray.co.uk) (formerly forbesg.github.io), replacing the Gridsome site in [forbes-gridsome](https://github.com/forbesg/forbes-gridsome).

## Setup

Requires Node `^22.22.3 || ^24.15.0 || >=26`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build to .output/public
```

## Hosting

The live site is [forbesgray.co.uk](https://forbesgray.co.uk) on Cloudflare Pages. The Pages project's production branch is `cloudflare-pages`.

The old address, forbesg.github.io, is now a forwarding site. On every push to `main`, the GitHub workflow builds the site, then `scripts/github-forwarding.mjs` replaces each page with one that forwards to the same path on forbesgray.co.uk. Don't set a custom domain on the GitHub Pages repo: the wallchart project sites (`/Euro-2016-WallChart/`, `/world-cup-wall-chart/`) must stay on forbesg.github.io.

### Cloudflare Pages

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo, then:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `pnpm generate` |
| Build output directory | `dist` |
| Environment variable `NODE_VERSION` | `24` |
| Environment variable `NUXT_SITE_URL` | `https://forbesgray.co.uk` (production only) |

Cloudflare sets `CF_PAGES=1` during builds, so Nitro uses its `cloudflare_pages_static` preset, which writes:

- `dist/_redirects`: real 301s from the moved pages in `routeRules`
- `dist/_headers`: security headers, and cache times for images and media

Visitor stats come from Cloudflare Web Analytics, turned on in the Pages project (Metrics → Web Analytics). Cloudflare adds its beacon script to each page itself, so the site has no analytics code of its own.

Preview deployments without `NUXT_SITE_URL` still use `https://forbesgray.co.uk` for their canonical URLs, so they don't compete with the live site.

To try a Cloudflare build locally (delete any old `.output` first: a stale one gets copied into `dist`):

```bash
rm -rf .output dist
CF_PAGES=1 pnpm generate
npx wrangler pages dev dist
```

### Site address

`NUXT_SITE_URL` drives the canonical URLs, Open Graph tags, sitemap, robots.txt and structured data. Without it the site uses `https://forbesgray.co.uk`.
