import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Cloudflare plugin MUST come before tanstackStart
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    // tanstackStart already runs router generation + auto code-splitting.
    // Do NOT also add TanStackRouterVite — it double-transforms route files
    // and produces a "Duplicate declaration hot" compile error.
    // Prerender every route to static HTML so the site can be served from any
    // static host (GitHub Pages) with real crawlable markup per URL.
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
    }),

    // viteReact must follow tanstackStart so the automatic JSX runtime is
    // applied to the generated client entry (otherwise: "React is not defined").
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
