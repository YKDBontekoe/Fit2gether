import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // your config will come here
  })

  nuxtApp.vueApp.use(vuetify)
})
