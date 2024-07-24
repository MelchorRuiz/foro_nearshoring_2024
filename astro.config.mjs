import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://foro-nearshoring.igeco.mx',
  integrations: [tailwind(), react(), sitemap({
    filter: (page) => 
      page !== 'https://foro-nearshoring.igeco.mx/gracias-por-registrarte/' &&
      page !== 'https://foro-nearshoring.igeco.mx/en/thanks-for-registering/',
    i18n: {
      defaultLocale: "es",
      locales: {
        es: 'es-ES',
        en: 'en-US'
      }
    }
  })],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});