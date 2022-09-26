<template>
  <fieldset>
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">Tell us something more about you</h3>
    <input
      type="text"
      placeholder="First Name"
      required
      @input="$emit('update:firstNameModelValue', $event.target.value)"
    />
    <input
      type="text"
      placeholder="Last Name"
      required
      @input="$emit('update:lastNameModelValue', $event.target.value)"
    />
    <input
      type="email"
      placeholder="Email"
      required
      @input="$emit('update:emailAddressModelValue', $event.target.value)"
    />

    <input
      type="button"
      name="next"
      class="next action-button bg-primary"
      value="Next"
      @click="$emit('update:nextModelValue', nextForm)"
    />
  </fieldset>
</template>

<script lang="ts">
import { FormStages } from '@/types/enums/FormStages';

export default {
  name: 'VCheckPersonalForm',
  props: {
    firstNameModelValue: { type: String, default: '' },
    lastNameModelValue: { type: String, default: '' },
    emailAddressModelValue: { type: String, default: '' },
    nextModelValue: { type: Boolean, default: false },
  },
  emits: [
    'update:firstNameModelValue',
    'update:lastNameModelValue',
    'update:emailAddressModelValue',
    'update:nextModelValue',
  ],
  computed: {
    nextForm() {
      return FormStages.Health;
    },
  },
};
</script>

<style scoped></style>
