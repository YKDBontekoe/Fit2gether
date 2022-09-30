import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', bootstrap);
});
