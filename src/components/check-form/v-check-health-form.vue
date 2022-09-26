<template>
  <fieldset>
    <h2 class="fs-title">Health Data</h2>
    <h3 class="fs-subtitle">Your current health</h3>
    <input type="text" name="twitter" placeholder="Twitter" />
    <input type="text" name="facebook" placeholder="Facebook" />
    <input type="text" name="gplus" placeholder="Google Plus" />
    <input
      type="button"
      value="Previous"
      class="previous action-button-previous"
      @click="$emit('update:previousModelValue', previousForm)"
    />
    <input
      type="button"
      value="Next"
      class="next action-button bg-primary"
      @click="$emit('update:nextModelValue', nextForm)"
    />
  </fieldset>
</template>

<script lang="ts">
import { FormStages } from '@/types/enums/FormStages';

export default {
  name: 'VCheckHealthForm',
  props: {
    nextModelValue: { type: Boolean, default: false },
    previousModelValue: { type: Boolean, default: false },
  },
  emits: ['update:nextModelValue', 'update:previousModelValue'],
  computed: {
    nextForm() {
      return FormStages.Result;
    },
    previousForm() {
      return FormStages.Personal;
    },
  },
};
</script>

<style scoped></style>
