<template>
  <fieldset>
    <h2 class="fs-title">Results</h2>
    <h3 class="fs-subtitle">Your current health</h3>
    <p>{{ JSON.stringify(formData) }}</p>
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VCheckResultForm',
  props: {
    formData: { type: Object, required: true },
  },
});
</script>

<style scoped></style>
