<template>
  <div>
    <v-nav-bar />
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<script>
import VNavBar from '../components/v-nav-bar'
export default {
  components: { VNavBar },
}
</script>
