// @ts-ignore
import { defineNuxtConfig } from 'nuxt'
import vuetify from './src/plugins/vuetify'

export default defineNuxtConfig({
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  alias: {
    '~/*': './*',
  },
  modules: [
    // @ts-ignore
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    // eslint-disable-next-line require-await,@typescript-eslint/no-unused-vars
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(vuetify)
      )
    },
  ],
  runtimeConfig: {
    public: {
      publicUrl: process.env.PUBLIC_URL,
    },
  },
  srcDir: './src/',
  css: ['vuetify/styles', 'mdi/css/materialdesignicons.min.css'],
  vite: {
    // @ts-ignore
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
})
