import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), react(), tailwind()],
  site: 'https://crystal-desarrollo.com',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite"
    },
  },
})
