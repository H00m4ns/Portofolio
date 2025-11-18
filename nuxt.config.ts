export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/styles/theme.css'],
  app: {
  // Base URL for GitHub Pages deployment (repo is hosted under https://<user>.github.io/Portofolio/)
  baseURL: '/Portofolio/',
    buildAssetsDir: '/_nuxt/'
    ,
    head: {
      title: 'Portofolio — James',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'James — Backend Developer. Portfolio tentang microservices, Go (Golang), REST APIs, dan project yang memanfaatkan Docker, Sui token integration, dan sistem terdistribusi.' },
        { name: 'theme-color', content: '#2563eb' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
