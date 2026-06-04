import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // tanstackStart already runs router generation + auto code-splitting.
    // Do NOT also add TanStackRouterVite — it double-transforms route files
    // and produces a "Duplicate declaration hot" compile error.
    tanstackStart(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
