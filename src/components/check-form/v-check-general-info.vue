<template>
  <fieldset>
    <h2 class="fs-title">General Data</h2>
    <h3 class="fs-subtitle">General data about you</h3>

    <div class="form-container">
      <div class="col-lg-5">
        <label for="Age" class="control-label col-sm label-left"
          >What is your age?</label
        >
        <input
          id="Age"
          type="number"
          name="Age"
          :value="formData.generalData.age"
          class="form-control"
          required
          @input="
            $emit('update:formData', updateProperty('age', $event.target.value))
          "
        />
      </div>

      <div class="col-lg-5">
        <p>What is your gender?</p>
        <VRadioGroup
          id="Sex"
          :v-model="formData.generalData.sex"
          :options="[1.0, 0.0]"
          :options-alias="['Male', 'Female']"
          :is-required="true"
          radio-group-name="Sex"
          @change="
            $emit('update:formData', updateProperty('sex', $event.target.value))
          "
        />
      </div>
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
import VRadioGroup from '@/components/input/v-radio-group';

export default defineComponent({
  name: 'VCheckGeneralInfo',
  components: { VRadioGroup, VCheckStateHandler },
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
