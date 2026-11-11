// Turns a built copy of the site into a forwarding site for the old
// forbesg.github.io address: every page becomes a tiny page that sends the
// visitor (and Google) to the same path on the new domain.
//
//   node scripts/github-forwarding.mjs <built site dir> <output dir> <new site url>
//
// GitHub Pages can't send 301s, so each page uses a canonical link, an instant
// meta refresh (which Google treats as a permanent redirect) and a JS redirect
// that keeps any query string or #anchor. Any other URL hits 404.html, which
// forwards to the same path on the new domain.
//
// Don't set a custom domain on the GitHub Pages repo: the separate project
// sites under forbesg.github.io (the wallchart apps) must stay where they are.

import { mkdir, readdir, readFile, rm, writeFile, copyFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'

const [built, out, rawSiteUrl] = process.argv.slice(2)
if (!built || !out || !rawSiteUrl) {
  console.error('Usage: node scripts/github-forwarding.mjs <built site dir> <output dir> <new site url>')
  process.exit(1)
}
const siteUrl = rawSiteUrl.replace(/\/+$/, '')
const host = new URL(siteUrl).host

// Files GitHub Pages should keep serving as they are
const KEEP = [
  'google8a35fbd07f4f57c1.html', // Search Console verification for the old address
  'favicon.ico',
]

const escape = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function forwardingPage(target) {
  const href = escape(target)
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>This page has moved to ${host}</title>
<link rel="canonical" href="${href}">
<meta http-equiv="refresh" content="0; url=${href}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
</head>
<body>
<p>This page has moved to <a href="${href}">${href}</a>.</p>
</body>
</html>
`
}

// Unknown paths: forward to the same path on the new domain, and let that
// site show its own 404 if there's nothing there either
const notFoundPage = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>This site has moved to ${host}</title>
<meta name="robots" content="noindex">
<script>location.replace(${JSON.stringify(siteUrl)} + location.pathname + location.search + location.hash)</script>
</head>
<body>
<p>This site has moved to <a href="${escape(siteUrl)}/">${escape(siteUrl)}</a>.</p>
</body>
</html>
`

async function* pages(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    // Nuxt's own folders hold no pages
    if (entry.isDirectory() && !entry.name.startsWith('_'))
      yield* pages(path)
    else if (entry.name === 'index.html')
      yield path
  }
}

await rm(out, { recursive: true, force: true })
await mkdir(out, { recursive: true })

let count = 0
for await (const file of pages(built)) {
  const dir = relative(built, file).split(sep).slice(0, -1)
  const path = dir.length ? `/${dir.join('/')}/` : '/'

  // A page that already forwards (a moved page) goes straight to its final address
  const html = await readFile(file, 'utf8')
  const moved = html.match(/http-equiv="refresh" content="0; url=([^"]+)"/)?.[1]
  const target = siteUrl + (moved?.startsWith('/') ? moved : path)

  await mkdir(join(out, ...dir), { recursive: true })
  await writeFile(join(out, ...dir, 'index.html'), forwardingPage(target))
  count++
}

await writeFile(join(out, '404.html'), notFoundPage)
// Let crawlers in, so they can see the redirects. No sitemap: that lives on the new domain.
await writeFile(join(out, 'robots.txt'), 'User-agent: *\nDisallow:\n')
await writeFile(join(out, '.nojekyll'), '')
for (const name of KEEP)
  await copyFile(join(built, name), join(out, name)).catch(() => {})

console.log(`Wrote ${count} forwarding pages to ${out}, pointing at ${siteUrl}`)
