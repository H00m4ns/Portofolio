export default defineNuxtConfig({
  ssr: false,
  app: {
    // Use root base URL for local development / preview
    baseURL: '/Portofolio',
    buildAssetsDir: '/_nuxt/'
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
