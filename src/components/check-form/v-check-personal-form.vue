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

    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      :has-previous="false"
      :next-form="nextForm"
    />
  </fieldset>
</template>

<script lang="ts">
import { FormStages } from '@/types/enums/FormStages';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler.vue';

export default {
  name: 'VCheckPersonalForm',
  components: { VCheckStateHandler },
  props: {
    firstNameModelValue: { type: String, default: '' },
    lastNameModelValue: { type: String, default: '' },
    emailAddressModelValue: { type: String, default: '' },
    nextModelValue: { type: String, default: '' },
  },
  emits: [
    'update:firstNameModelValue',
    'update:lastNameModelValue',
    'update:emailAddressModelValue',
    'update:nextModelValue',
  ],
  data() {
    return {
      nextChildModelValue: '',
    };
  },
  computed: {
    nextForm() {
      return FormStages.General;
    },
  },
  watch: {
    nextChildModelValue(val) {
      this.$emit('update:nextModelValue', val);
    },
  },
};
</script>
