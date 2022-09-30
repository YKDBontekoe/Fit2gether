<template>
  <div>
    <v-nav-bar />
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<script>
import { defineComponent } from 'vue';
import VNavBar from '../components/v-nav-bar';

export default defineComponent({
  name: 'DefaultLayout',
  components: { VNavBar },
});
</script>
