<template>
  <fieldset>
    <h2 class="fs-title">Results</h2>
    <h3 class="fs-subtitle">Your current health</h3>
    <p>{{ predictedValue }}%</p>
    <p>{{ processData() }}</p>
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue';
import * as tf from '@tensorflow/tfjs';

export default defineComponent({
  name: 'VCheckResultForm',
  props: {
    formData: { type: Object, required: true },
  },
  data() {
    return {
      prediction: 0,
      i_formData: this.formData,
    };
  },
  computed: {
    predictedValue() {
      return this.prediction * 100;
    },
  },
  mounted: async function () {
    const model = await tf.loadLayersModel(
      'https://fit2getherapi.azurewebsites.net/model'
    );

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
      const mergedData = {
        ...this.i_formData.healthData,
        ...this.i_formData.generalData,
      };

      return Object.keys(mergedData).map(function (key) {
        return parseInt(mergedData[key]);
      });
    },
  },
});
</script>
