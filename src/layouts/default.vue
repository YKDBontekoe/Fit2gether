<template>
  <div>
    <nav-bar />
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<script>
import NavBar from '../components/NavBar'
export default {
  components: { NavBar },
}
</script>
