<template>
  <fieldset>
    <h2 class="fs-title">General Data</h2>
    <h3 class="fs-subtitle">Basic data about you</h3>

    <label for="Age">Age</label>
    <input
      id="Age"
      type="number"
      name="Age"
      :value="formData.generalData.age"
      required
      @input="
        $emit('update:formData', updateProperty('age', $event.target.value))
      "
    />

    <label for="BMI">Body Mass Index (BMI)</label>
    <div class="input-group mb-3">
      <input
        id="BMI"
        type="number"
        name="BMI (Body Mass Index)"
        :value="formData.generalData.bmi"
        required
        @input="
          $emit('update:formData', updateProperty('bmi', $event.target.value))
        "
      />
      <small class="w-100 text-muted"
        >If you don't know your BMI click
        <a href="https://www.calculator.net/bmi-calculator.html" target="_blank"
          >here</a
        >
      </small>
    </div>

    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      v-model:previous-model-value="previousChildModelValue"
      :next-form="nextForm"
      :previous-form="previousForm"
    />
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue';
import { FormStages } from '@/types/check-form/enums/FormStages';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler';

export default defineComponent({
  name: 'VCheckGeneralInfo',
  components: { VCheckStateHandler },
  props: {
    formData: { type: Object, required: true },
    nextModelValue: { type: String, default: '' },
    previousModelValue: {
      type: String,
      default: '',
    },
  },
  emits: [
    'update:nextModelValue',
    'update:previousModelValue',
    'update:formData',
  ],
  data() {
    return {
      i_formData: this.formData,
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
  methods: {
    updateProperty(propName, propVal) {
      this.i_formData.generalData[propName] = propVal;
      return this.formData;
    },
  },
});
</script>
