<template>
  <fieldset>
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">Who are you?</h3>
    <div class="form-container">
      <div class="col-lg-5">
        <label class="control-label col-sm label-left" for="first-name"
          >Your first name</label
        >
        <input
          id="first-name"
          type="text"
          placeholder="First Name"
          class="form-control"
          :value="formData.personalData.firstName"
          required
          @change="
            $emit(
              'update:formData',
              updateProperty('firstName', $event.target.value)
            )
          "
        />
      </div>
      <div class="col-lg-5">
        <label class="control-label col-sm label-left" for="last-name"
          >Your last name</label
        >
        <input
          id="last-name"
          type="text"
          placeholder="Last Name"
          :value="formData.personalData.lastName"
          class="form-control"
          required
          @change="
            $emit(
              'update:formData',
              updateProperty('lastName', $event.target.value)
            )
          "
        />
      </div>
      <div class="col-lg-5">
        <label class="control-label col-sm label-left" for="email"
          >Your email (optional)</label
        >
        <input
          id="email"
          type="email"
          placeholder="Email"
          :value="formData.personalData.emailAddress"
          class="form-control"
          required
          @change="
            $emit(
              'update:formData',
              updateProperty('emailAddress', $event.target.value)
            )
          "
        />
      </div>
    </div>

    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      :has-previous="true"
      :next-form="nextForm"
      :previous-form="previousForm"
    />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormStages } from '@/types/check-form/enums/FormStages';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler.vue';

export default defineComponent({
  name: 'VCheckPersonalForm',
  components: { VCheckStateHandler },
  props: {
    formData: { type: Object, required: true },
    nextModelValue: { type: String, default: '' },
  },
  emits: ['update:formData', 'update:nextModelValue'],
  data() {
    return {
      i_formData: this.formData,
      nextChildModelValue: '',
    };
  },
  computed: {
    nextForm() {
      return FormStages.General;
    },
    previousForm() {
      return FormStages.Explanation;
    },
  },
  watch: {
    nextChildModelValue(val) {
      this.$emit('update:nextModelValue', val);
    },
  },
  methods: {
    updateProperty(propName, propVal) {
      this.i_formData.personalData[propName] = propVal;
      return this.formData;
    },
  },
});
</script>

<style scoped></style>
