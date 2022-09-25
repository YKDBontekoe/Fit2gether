import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  mode: 'spa',
  app: {
    baseURL: '/Fit2gether',
  },
  generate: {
    fallback: '/index.html',
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
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
  srcDir: 'src',
  components: true,
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
