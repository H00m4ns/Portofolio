export default defineNuxtConfig({
  ssr: false,
  app: {
  // Base URL for GitHub Pages deployment (repo is hosted under https://<user>.github.io/Portofolio/)
  baseURL: '/Portofolio/',
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
