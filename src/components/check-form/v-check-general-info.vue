<template>
  <fieldset>
    <label for="Age">Age</label>
    <input id="Age" type="number" name="Age" required />

    <label for="BMI">Body Mass Index (BMI)</label>
    <input id="BMI" type="number" name="BMI (Body Mass Index)" required />
    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      v-model:previous-model-value="previousChildModelValue"
      :next-form="nextForm"
      :previous-form="previousForm"
    />
  </fieldset>
</template>

<script>
import { FormStages } from '@/types/enums/FormStages';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler';

export default {
  name: 'VCheckGeneralInfo',
  components: { VCheckStateHandler },
  props: {
    nextModelValue: { type: String, default: '' },
    previousModelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:nextModelValue', 'update:previousModelValue'],
  data() {
    return {
      nextChildModelValue: '',
      previousChildModelValue: '',
    };
  },
  computed: {
    nextForm() {
      return FormStages.Health;
    },
    previousForm() {
      return FormStages.Personal;
    },
  },
  watch: {
    nextChildModelValue(val) {
      this.$emit('update:nextModelValue', val);
    },
    previousChildModelValue(val) {
      this.$emit('update:previousModelValue', val);
    },
  },
};
</script>

<style scoped></style>
