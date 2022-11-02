<template>
  <fieldset>
    <h2 class="text-primary">Welcome</h2>
    <img
      class="welcome-image"
      src="@/assets/images/welcome-image.jpg"
      alt="Welcome image"
    />
    <p class="text-xl" style="margin-top: 1rem">
      <span class="text-primary fw-bold">Welcome</span> to the heart disease
      test. This form is designed to make a prediction based on your individual
      data. It is <strong class="text-primary">not</strong> a medical diagnosis.
      If you have any questions, please contact your doctor. Read more about how
      we calculate the risk
      <NuxtLink class="text-decoration-none fw-bold" to="/explain"
        >here</NuxtLink
      >. And if you are interested in the privacy policy, you can read it
      <NuxtLink class="text-decoration-none fw-bold" to="/privacy"
        >here</NuxtLink
      >.
    </p>
    <p>
      The form contains 15 questions and statements regarding your personal well
      being and is split up in 4 sections: personal details, general
      information, health and finally the result. Please answer them as honestly
      as possible. The more accurate your answers are, the more accurate the
      prediction will be. The survey takes about 5 minutes. If you are ready to
      go, click the button below.
    </p>
    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      :has-previous="false"
      :next-form="nextForm"
    />
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler';
import { FormStages } from '@/types/check-form/enums/FormStages';
export default defineComponent({
  name: 'VCheckExplanation',
  components: { VCheckStateHandler },
  props: {
    nextModelValue: { type: String, default: '' },
  },
  emits: ['update:nextModelValue'],
  data() {
    return {
      nextChildModelValue: '',
    };
  },
  computed: {
    nextForm() {
      return FormStages.Personal;
    },
  },
  watch: {
    nextChildModelValue(val) {
      this.$emit('update:nextModelValue', val);
    },
  },
});
</script>

<style scoped>
.welcome-image {
  width: 150px;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}
</style>
