import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { preset: "vercel" },
    }),
    TanStackRouterVite({ autoCodeSplitting: true }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
