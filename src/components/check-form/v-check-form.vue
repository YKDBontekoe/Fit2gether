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
    this.initForm();
  },
  methods: {
    initForm() {
      this.formData = {
        personalData: {
          emailAddress: '',
          firstName: '',
          lastName: ''
        },
        healthData: {
          diabetes: 0.0,
          diffWalk: 0.0,
          fruits: 0.0,
          genHlth: 0.0,
          highBP: 0.0,
          highChol: 0.0,
          mentHlth: 0.0,
          sex: 0.0,
          physActivity: 0.0,
          physHlth: 0.0,
          smoker: 0.0,
          stroke: 0.0,
          veggies: 0.0,
        },
        generalData: {
          age: 0,
          bmi: 0,
        }
      };
    },
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
