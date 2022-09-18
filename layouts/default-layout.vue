<template>
  <div>
    <v-nav-bar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>
<script lang="ts" setup></script>
<script>
import VNavBar from '../components/v-nav-bar'
export default {
  components: { VNavBar },
}
</script>
