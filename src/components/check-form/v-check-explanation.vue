<template>
  <fieldset>
    <h2 class="fs-title">Welcome</h2>
    <p></p>
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

<style scoped></style>
