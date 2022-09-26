<template>
  <div
    :style="{
      backgroundImage:
        'url(' + require('@/assets/images/check-page-background.jpg') + ')',
    }"
  >
    <form id="msform">
      <VCheckProgressBar v-model:current-form="currentForm" />
      <VCheckPersonalForm
        v-if="isPersonalFormName"
        v-model:next-model-value="nextModel"
        :first-name-model-value="formData.personal.firstName"
        :last-name-model-value="formData.personal.lastName"
        :email-address-model-value="formData.personal.emailAddress"
      />
      <VCheckHealthForm
        v-if="isHealthFormName"
        v-model:next-model-value="nextModel"
        v-model:previous-model-value="previousModel"
      />
      <VCheckResultForm v-if="isResultFormName" />
    </form>
  </div>
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
      currentForm: FormStages.Personal,
      nextModel: '',
      previousModel: '',
    };
  },
  computed: {
    isPersonalFormName() {
      return FormStages.Personal === this.currentForm;
    },
    isHealthFormName() {
      return FormStages.Health === this.currentForm;
    },
    isResultFormName() {
      return FormStages.Result === this.currentForm;
    },
  },
  watch: {
    nextModel(val) {
      this.currentForm = val;
    },
    previousModel(val) {
      this.currentForm = val;
    },
  },
};
</script>
