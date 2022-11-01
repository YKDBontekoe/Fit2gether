<template>
  <fieldset>
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">Who are you?</h3>
    <input
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
    <input
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
    <input
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
