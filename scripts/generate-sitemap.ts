// Auto-generates public/sitemap.xml from src/lib/posts.ts at build time.
// Runs via `prebuild` so new posts appear in the sitemap with no manual edits.
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { posts, SITE_URL } from "../src/lib/posts";

const today = new Date().toISOString().slice(0, 10);

const entries = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0", lastmod: today },
  ...posts.map((p) => ({
    loc: `${SITE_URL}/blog/${p.slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: today,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

const out = resolve(process.cwd(), "public/sitemap.xml");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, xml, "utf8");
console.log(`✓ Generated sitemap with ${entries.length} URLs → public/sitemap.xml`);
