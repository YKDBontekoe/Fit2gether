<template>
  <ul id="progressbar">
    <li class="active">Personal Details</li>
    <li :class="isHealth">Health Details</li>
    <li :class="isResult">Result</li>
  </ul>
</template>

<script>
import { FormStages } from '@/types/enums/FormStages';

export default {
  name: 'VCheckProgressBar',
  props: {
    currentForm: { type: String, default: '' },
  },
  computed: {
    isHealth() {
      return this.currentForm === FormStages.Health ||
        this.currentForm === FormStages.Result
        ? 'active'
        : '';
    },
    isResult() {
      return this.currentForm === FormStages.Result ? 'active' : '';
    },
  },
};
</script>

<style scoped></style>
