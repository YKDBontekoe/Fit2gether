import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  alias: {
    '~/*': './*',
  },
  runtimeConfig: {
    public: {
      publicUrl: process.env.PUBLIC_URL,
    },
  },
  router: {
    base: '/Fit2gether/',
  },
  generate: {
    fallback: '404.html',
  },
  srcDir: 'src',
  css: ['~/assets/styles/main.scss', '~/assets/styles/nav-style.css'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
