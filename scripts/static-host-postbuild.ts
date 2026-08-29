// Prepares dist/client for static hosts (GitHub Pages):
// - .nojekyll so /assets/_* files aren't stripped by Jekyll
// - CNAME for the custom domain
// - 404.html fallback so unknown/deep URLs still boot the app
import { copyFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { SITE_URL } from "../src/lib/posts";

const out = resolve(process.cwd(), "dist/client");
if (!existsSync(out)) {
  console.warn("dist/client not found — skipping static host postbuild");
  process.exit(0);
}

writeFileSync(resolve(out, ".nojekyll"), "");
writeFileSync(resolve(out, "CNAME"), `${new URL(SITE_URL).hostname}\n`);
copyFileSync(resolve(out, "index.html"), resolve(out, "404.html"));

console.log("✓ Static host files written (.nojekyll, CNAME, 404.html)");
