<template>
  <fieldset>
    <h1 class="fs-title">Results</h1>
    <p>
      Hello <strong>{{ formData.personalData.firstName }} </strong>,
    </p>
    <p>
      Your risk of having a heart attack in the next 10 years is
      <strong>{{ predictedValue }}</strong
      >. This is based on your answers to the questions in the previous steps.
      If you have any questions, please contact your doctor.
    </p>
    <small class="text-muted"
      >*Based on our calculations you have a {{ parsedPredictedValue }} chance
      at getting cardio vascular disease.</small
    >
    <hr />
    <h5>Tips</h5>
    <v-result-tips :form-data="i_formData" />
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue';
import * as tf from '@tensorflow/tfjs';
import VResultTips from '@/components/check-form/result/v-result-tips';

export default defineComponent({
  name: 'VCheckResult',
  components: { VResultTips },
  props: {
    formData: { type: Object, required: true },
  },
  data() {
    return {
      prediction: 0,
      i_formData: JSON.parse(JSON.stringify(this.formData)),
    };
  },
  computed: {
    predictedValue() {
      if (this.prediction < 0.15) {
        return 'low';
      }

      if (this.prediction < 0.3) {
        return 'medium';
      }

      return 'high';
    },
    parsedPredictedValue() {
      return `${(this.prediction * 100).toFixed(2)}%`;
    },
  },
  mounted: async function () {
    const model = await tf.loadLayersModel(
      'https://fit2getherapi.azurewebsites.net/model'
    );

    this.prepareData();
    const pred = model.predict(tf.tensor2d(this.processData(), [1, 14]));
    this.prediction = await pred.dataSync();
  },
  methods: {
    prepareData() {
      this.i_formData.generalData.age = this.i_formData.generalData.age / 5;
      this.i_formData.healthData.physHlth =
        this.i_formData.healthData.physHlth * 3;
      this.i_formData.healthData.mentHlth =
        this.i_formData.healthData.mentHlth * 3;
    },
    processData() {
      this.prepareData();
      return [
        this.i_formData.healthData.highBP,
        this.i_formData.healthData.highChol,
        this.i_formData.generalData.bmi,
        this.i_formData.healthData.smoker,
        this.i_formData.healthData.stroke,
        this.i_formData.healthData.physActivity,
        this.i_formData.healthData.fruits,
        this.i_formData.healthData.veggies,
        this.i_formData.healthData.genHlth,
        this.i_formData.healthData.mentHlth,
        this.i_formData.healthData.physHlth,
        this.i_formData.healthData.diffWalk,
        this.i_formData.healthData.sex,
        this.i_formData.generalData.age,
      ].map(Number);
    },
    parseFloat(str, val) {
      str = str.toString();
      str = str.slice(0, str.indexOf('.') + val + 1);
      return Number(str);
    },
  },
});
</script>
