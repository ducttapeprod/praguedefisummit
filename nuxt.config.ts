// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  ssr: false,
  srcDir: 'src/',
  target: 'static',
  app: {
    head: {
      charset: 'utf-16',
      title: 'DeFi Prague',
      meta: [
        { name: 'DeFi Prague', content: 'DeFi Prague' }
      ]
    }
  }
})
