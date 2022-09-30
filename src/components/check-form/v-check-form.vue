<template>
  <div>
    <form id='msform'>
      <VCheckProgressBar v-model:current-form='currentForm' />
      <VCheckPersonalForm
        v-if='isPersonalFormName'
        v-model:next-model-value='nextModel'
        v-model:form-data='formData'
      />
      <VCheckGeneralInfo
        v-if='isGeneralFormName'
        v-model:form-data='formData'
        v-model:next-model-value='nextModel'
        v-model:previous-model-value='previousModel'
      />
      <VCheckHealthForm
        v-if='isHealthFormName'
        :form-data='formData'
        v-model:next-model-value='nextModel'
        v-model:previous-model-value='previousModel'
      />
      <VCheckResultForm v-if='isResultFormName' :form-data='formData' />
    </form>
  </div>
</template>

<script lang='ts'>
import VCheckHealthForm from '@/components/check-form/v-check-health-form.vue';
import VCheckPersonalForm from '@/components/check-form/v-check-personal-form.vue';
import VCheckProgressBar from '@/components/check-form/v-check-progress-bar.vue';
import VCheckResultForm from '@/components/check-form/v-check-result-form.vue';
import { FormStages } from '@/types/check-form/enums/FormStages';
import VCheckGeneralInfo from '@/components/check-form/v-check-general-info.vue';
import { defineComponent } from 'vue';
import { FormCheckType } from '@/types/check-form/FormCheckType';

export default defineComponent({
  name: 'VCheckForm',
  components: {
    VCheckGeneralInfo,
    VCheckResultForm,
    VCheckProgressBar,
    VCheckHealthForm,
    VCheckPersonalForm
  },
  data() {
    return {
      formData: { personalData: {}, healthData: {}, generalData: {} } as FormCheckType,
      currentForm: FormStages.Personal,
      nextModel: '',
      previousModel: ''
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
    }
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
    }
  }
});
</script>
