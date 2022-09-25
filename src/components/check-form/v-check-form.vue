<template>
  <form id="msform">
    <VCheckProgressBar />
    <VCheckPersonalForm />
    <VCheckHealthForm />
  </form>
</template>

<script>
import VCheckPersonalForm from './v-check-personal-form'
import VCheckHealthForm from './v-check-health-form'
import VCheckProgressBar from './v-check-progress-bar'
export default {
  name: 'VCheckForm',
  components: { VCheckProgressBar, VCheckHealthForm, VCheckPersonalForm },
  methods: {},
}
</script>

<style scoped></style>
