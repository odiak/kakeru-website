import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), tailwind(), icon()],
})
