import { defineConfig } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },
});
