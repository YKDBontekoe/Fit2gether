<template>
  <ul v-if="!isResult" id="progressbar">
    <li class="active">Information</li>
    <li :class="isPersonal">Personal Details</li>
    <li :class="isGeneral">General Info</li>
    <li :class="isHealth">Health Details</li>
    <li :class="isResult">Result</li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import { FormStages } from '@/types/check-form/enums/FormStages';

export default defineComponent({
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
    isGeneral() {
      return this.currentForm === FormStages.General ||
        this.currentForm === FormStages.Health ||
        this.currentForm === FormStages.Result
        ? 'active'
        : '';
    },
    isPersonal() {
      return this.currentForm === FormStages.General ||
        this.currentForm === FormStages.Health ||
        this.currentForm === FormStages.Result ||
        this.currentForm === FormStages.Personal
        ? 'active'
        : '';
    },
    isResult() {
      return this.currentForm === FormStages.Result ? 'active' : '';
    },
  },
});
</script>

<style scoped></style>
