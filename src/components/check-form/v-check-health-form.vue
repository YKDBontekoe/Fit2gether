<template>
  <fieldset>
    <h2 class="fs-title">Health Data</h2>
    <h3 class="fs-subtitle">How is your current health?</h3>

    <div class="row">
      <label class="form-check-label" for="HighBP"
        >Do you have a high blood pressure (confirmed by a doctor)?</label
      >
      <VRadioGroup
        id="HighBP"
        :v-model="formData.healthData.highBP"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="HighBP"
        @change="
          $emit(
            'update:formData',
            updateProperty('highBP', $event.target.value)
          )
        "
      />

      <label class="form-check-label" for="HighChol"
        >Have you EVER been told by a doctor, nurse or other health professional
        that your blood cholesterol is high?</label
      >
      <VRadioGroup
        id="HighChol"
        :v-model="formData.healthData.highChol"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="HighChol"
        @change="
          $emit(
            'update:formData',
            updateProperty('highChol', $event.target.value)
          )
        "
      />

      <label class="form-check-label" for="Smoker"
        >Have you smoked at least 100 cigarettes in your entire life? [Note: 5
        packs = 100 cigarettes]</label
      >
      <VRadioGroup
        id="Smoker"
        :v-model="formData.healthData.smoker"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="Smoker"
        @change="
          $emit(
            'update:formData',
            updateProperty('smoker', $event.target.value)
          )
        "
      />

      <label class="form-check-label" for="Stroke"
        >Have you ever had a stroke?</label
      >
      <VRadioGroup
        id="Stroke"
        :v-model="formData.healthData.stroke"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="Stroke"
        @change="
          $emit(
            'update:formData',
            updateProperty('stroke', $event.target.value)
          )
        "
      />

      <label class="form-check-label" for="PhysActivity"
        >Adults who reported doing physical activity or exercise during the past
        30 days other than their regular job</label
      >
      <VRadioGroup
        id="PhysActivity"
        :v-model="formData.healthData.physActivity"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="PhysActivity"
        @change="
          $emit(
            'update:formData',
            updateProperty('physActivity', $event.target.value)
          )
        "
      />

      <label class="form-check-label" for="Fruits"
        >Consume Fruit 1 or more times per day</label
      >
      <VRadioGroup
        id="Fruits"
        :v-model="formData.healthData.fruits"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="Fruits"
        @change="
          $emit(
            'update:formData',
            updateProperty('fruits', $event.target.value)
          )
        "
      />

      <label class="form-check-label" for="Veggies"
        >Consume Vegetables 1 or more times per day</label
      >
      <VRadioGroup
        id="Veggies"
        :v-model="formData.healthData.veggies"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="Veggies"
        @change="
          $emit(
            'update:formData',
            updateProperty('veggies', $event.target.value)
          )
        "
      />

      <label for="DiffWalk"
        >Do you have serious difficulty walking or climbing stairs?</label
      >
      <VRadioGroup
        id="DiffWalk"
        :v-model="formData.healthData.diffWalk"
        :options="decisionsValues"
        :options-alias="decisionsAliases"
        :is-required="true"
        radio-group-name="DiffWalk"
        @change="
          $emit(
            'update:formData',
            updateProperty('diffWalk', $event.target.value)
          )
        "
      />
      <label class="form-check-label" for="Sex"
        >Indicate sex of respondent</label
      >
      <VRadioGroup
        id="Sex"
        :v-model="formData.healthData.sex"
        :options="decisionsValues"
        :options-alias="['Male', 'Female']"
        :is-required="true"
        radio-group-name="Sex"
        @change="
          $emit('update:formData', updateProperty('sex', $event.target.value))
        "
      />

      <VSlider
        id="GenHlth"
        slider-text="Would you say that in general your health is?"
        :v-model="formData.healthData.genHlth"
        bad-min-value-name="Bad"
        good-max-value-name="Very Good"
        :is-required="true"
        :step-value="0.5"
        @change="
          $emit(
            'update:formData',
            updateProperty('genHlth', $event.target.value)
          )
        "
      /><br />

      <VSlider
        id="MentHlth"
        slider-text="Now thinking about your mental health, which includes stress,
          depression, and problems with emotions, for how many days during the
          past 30 days was your mental health not good?"
        :v-model="formData.healthData.mentHlth"
        bad-min-value-name="Bad"
        good-max-value-name="Very Good"
        :is-required="true"
        :step-value="0.5"
        @change="
          $emit(
            'update:formData',
            updateProperty('mentHlth', $event.target.value)
          )
        "
      /><br />

      <VSlider
        id="PhysHlth"
        slider-text="Now thinking about your physical health, which includes physical
          illness and injury, for how many days during the past 30 days was your
          physical health not good?"
        :v-model="formData.healthData.physHlth"
        bad-min-value-name="Bad"
        good-max-value-name="Very Good"
        :is-required="true"
        :step-value="0.5"
        @change="
          $emit(
            'update:formData',
            updateProperty('physHlth', $event.target.value)
          )
        "
      />
    </div>
    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      v-model:previous-model-value="previousChildModelValue"
      :next-form="nextForm"
      :previous-form="previousForm"
    />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormStages } from '@/types/check-form/enums/FormStages';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler.vue';
import VRadioGroup from '@/components/input/v-radio-group.vue';
import VSlider from '@/components/input/v-slider.vue';

export default defineComponent({
  name: 'VCheckHealthForm',
  components: { VSlider, VRadioGroup, VCheckStateHandler },
  props: {
    formData: { type: Object, required: true },
    nextModelValue: { type: String, default: '' },
    previousModelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:nextModelValue', 'update:previousModelValue'],
  data() {
    return {
      i_formData: this.formData,
      decisionsValues: [1.0, 0.0],
      decisionsAliases: ['Yes', 'No'],
      nextChildModelValue: '',
      previousChildModelValue: '',
    };
  },
  computed: {
    nextForm() {
      return FormStages.Result;
    },
    previousForm() {
      return FormStages.General;
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
      this.i_formData.healthData[propName] = propVal;
      return this.formData;
    },
  },
});
</script>

<style scoped></style>
