<template>
  <div>
    <form id="msform">
      <VCheckProgressBar v-model:current-form="currentForm" />
      <VCheckPersonalForm
        v-if="isPersonalFormName"
        v-model:next-model-value="nextModel"
        :first-name-model-value="formData.personal.firstName"
        :last-name-model-value="formData.personal.lastName"
        :email-address-model-value="formData.personal.emailAddress"
      />
      <VCheckGeneralInfo
        v-if="isGeneralFormName"
        v-model:next-model-value="nextModel"
        v-model:previous-model-value="previousModel"
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
import VCheckGeneralInfo from '@/components/check-form/v-check-general-info.vue';

export default {
  name: 'VCheckForm',
  components: {
    VCheckGeneralInfo,
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
    isGeneralFormName() {
      return FormStages.General === this.currentForm;
    },
    isResultFormName() {
      return FormStages.Result === this.currentForm;
    },
  },
  mounted() {
    this.$watch('nextModel', this.nextModelWatcher);
    this.$watch('previousModel', this.previousModelWatcher);
  },
  methods: {
    nextModelWatcher(newVal) {
      if (FormStages.None !== newVal) {
        this.currentForm = newVal;
      }
    },
    previousModelWatcher(newVal) {
      this.currentForm = newVal;
      this.nextModel = FormStages.None;
    },
  },
};
</script>
