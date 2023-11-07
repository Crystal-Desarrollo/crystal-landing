import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://crystal-desarrollo.github.io',
  base: '/crystal-landing',
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  }
});