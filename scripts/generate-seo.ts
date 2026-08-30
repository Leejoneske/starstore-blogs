// Generates every crawlable artifact from src/lib/posts.ts at build time:
// sitemap.xml, rss.xml, atom.xml and llms.txt. Runs via `prebuild`, so adding a
// post to posts.ts is the only edit needed — nothing here is hand-maintained.
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import {
  posts,
  SITE_URL,
  APP_URL,
  AMBASSADOR_URL,
  BOT_URL,
  toRfc822,
  toRfc3339,
} from "../src/lib/posts";

const OUT_DIR = resolve(process.cwd(), "public");
const TITLE = "StarStore Insights";
const DESCRIPTION =
  "Guides and updates on Telegram Stars, USDT payouts on TON, referrals, and the StarStore Telegram Mini App.";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const postUrl = (slug: string) => `${SITE_URL}/blog/${slug}`;
// The freshest post date doubles as the feed/sitemap timestamp, so a rebuild
// with no content change produces a byte-identical file (no git churn, and no
// misleading "everything changed today" signal to crawlers).
const latest = posts.reduce(
  (a, p) => ((p.updated ?? p.date) > a ? (p.updated ?? p.date) : a),
  posts[0].date,
);

function write(name: string, body: string) {
  const out = resolve(OUT_DIR, name);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, body, "utf8");
  return name;
}

/* ── sitemap.xml ─────────────────────────────────────────────────────────── */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><lastmod>${latest}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
${posts
  .map(
    (p) =>
      `  <url><loc>${postUrl(p.slug)}</loc><lastmod>${p.updated ?? p.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

/* ── rss.xml ─────────────────────────────────────────────────────────────── */
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(TITLE)}</title>
    <link>${SITE_URL}/</link>
    <description>${esc(DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${toRfc822(latest)}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${posts
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${postUrl(p.slug)}</link>
      <guid isPermaLink="true">${postUrl(p.slug)}</guid>
      <pubDate>${toRfc822(p.date)}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.dek)}</description>${
        p.hero ? `\n      <enclosure url="${SITE_URL}${p.hero}" type="image/jpeg" />` : ""
      }
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

/* ── atom.xml ────────────────────────────────────────────────────────────── */
const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${esc(TITLE)}</title>
  <subtitle>${esc(DESCRIPTION)}</subtitle>
  <id>${SITE_URL}/</id>
  <link href="${SITE_URL}/" />
  <link href="${SITE_URL}/atom.xml" rel="self" type="application/atom+xml" />
  <updated>${toRfc3339(latest)}</updated>
  <author><name>StarStore</name><uri>${APP_URL}</uri></author>
${posts
  .map(
    (p) => `  <entry>
    <title>${esc(p.title)}</title>
    <id>${postUrl(p.slug)}</id>
    <link href="${postUrl(p.slug)}" />
    <published>${toRfc3339(p.date)}</published>
    <updated>${toRfc3339(p.updated ?? p.date)}</updated>
    <category term="${esc(p.category)}" />
    <summary>${esc(p.dek)}</summary>
  </entry>`,
  )
  .join("\n")}
</feed>
`;

/* ── llms.txt ────────────────────────────────────────────────────────────── */
const llms = `# ${TITLE}

> ${DESCRIPTION}

StarStore is a Telegram Mini App for buying and selling Telegram Stars and Telegram Premium subscriptions, settled in USDT on the TON network. This blog publishes practical guides, product updates, and a knowledge base for users.

## Articles

${posts.map((p) => `- [${p.title}](${postUrl(p.slug)}): ${p.dek}`).join("\n")}

## Pages

- [Home / Latest issue](${SITE_URL}/): Index of all articles.

## StarStore

- [StarStore Mini App](${BOT_URL}): Open the product in Telegram.
- [starstore.app](${APP_URL}): Main product site — buy and sell Telegram Stars.
- [Ambassador programme](${AMBASSADOR_URL}): StarStore ambassador and referral portal.

## Optional

- [RSS feed](${SITE_URL}/rss.xml)
- [Atom feed](${SITE_URL}/atom.xml)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;

const written = [
  write("sitemap.xml", sitemap),
  write("rss.xml", rss),
  write("atom.xml", atom),
  write("llms.txt", llms),
];
console.log(`✓ SEO artifacts for ${posts.length} posts → public/{${written.join(",")}}`);
