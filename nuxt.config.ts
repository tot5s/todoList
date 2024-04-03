// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=0.8,maximum-scale=0.8,user-scaleable=no,viewport-fit=cover'
        },
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/tailwind.css'
  ]
})
