export default defineNuxtConfig({
  ssr: false,    
  app: {
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
