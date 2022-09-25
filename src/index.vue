<template>
  <DefaultLayout>
    <Home />
  </DefaultLayout>
</template>

<script lang="ts" setup></script>
<script>
import DefaultLayout from './layouts/default-layout'
import Home from './pages/home'
export default {
  components: { Home, DefaultLayout },
}
</script>
