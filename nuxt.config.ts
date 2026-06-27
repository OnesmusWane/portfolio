import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Each page sets its own full title — no template duplication
      titleTemplate: '%s',
      meta: [
        { name: 'theme-color', content: '#0B0C10' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Onesmus Wane' },
        { name: 'generator', content: 'Nuxt' },
        { name: 'rating', content: 'general' },
        { name: 'revisit-after', content: '30 days' },
      ],
      link: [
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },

  // Pre-render the landing page at build time so crawlers get static HTML
  routeRules: {
    '/': { prerender: true },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
