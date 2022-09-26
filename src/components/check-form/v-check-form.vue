<template>
  <form id="msform">
    <VCheckProgressBar current-form="currentForm" />
    <VCheckPersonalForm
      v-if="currentForm === getPersonalFormName"
      :first-name-model-value="formData.personal.firstName"
      :last-name-model-value="formData.personal.lastName"
      :email-address-model-value="formData.personal.emailAddress"
      :next-model-value="nextModel"
    />
    <VCheckHealthForm
      v-if="currentForm === getHealthFormName"
      :next-model-value="nextModel"
      :previous-model-value="nextModel"
    />
    <VCheckResultForm v-if="currentForm === getResultFormName" />
  </form>
</template>

<script lang="ts">
import VCheckHealthForm from '@/components/check-form/v-check-health-form.vue';
import VCheckPersonalForm from '@/components/check-form/v-check-personal-form.vue';
import VCheckProgressBar from '@/components/check-form/v-check-progress-bar.vue';
import VCheckResultForm from '@/components/check-form/v-check-result-form.vue';
import { FormStages } from '@/types/enums/FormStages';

export default {
  name: 'VCheckForm',
  components: {
    VCheckResultForm,
    VCheckProgressBar,
    VCheckHealthForm,
    VCheckPersonalForm,
  },
  data() {
    return {
      formData: {
        personal: {},
        health: {},
      },
      currentForm: FormStages.Personal.toString(),
      nextModel: '',
      previousModel: '',
    };
  },
  computed: {
    getPersonalFormName() {
      return FormStages.Personal;
    },
    getHealthFormName() {
      return FormStages.Health;
    },
    getResultFormName() {
      return FormStages.Result;
    },
  },
  watch: {
    nextModel: {
      handler(val) {
        this.currentForm = val;
      },
    },
    previousModel: {
      handler(val) {
        this.currentForm = val;
      },
    },
  },
  methods: {
    showForm(formName) {
      return !this.formData[formName][formName + 'DataSubmitted'];
    },
  },
};
</script>
