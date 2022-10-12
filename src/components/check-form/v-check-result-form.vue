<template>
  <fieldset>
    <h2 class="fs-title">Results</h2>
    <h3 class="fs-subtitle">Your current health</h3>
    <p>{{ prediction }}</p>
    <p>{{ flattenObj() }}</p>
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
      prediction: '',
    };
  },
  async mounted() {
    const model = await tf.loadLayersModel(
      'https://fit2getherapi.azurewebsites.net/model'
    );

    const pred = model.predict(tf.tensor2d([this.flattenObj()], [1, 16]));
    this.prediction = await pred.dataSync();
  },
  methods: {
    flattenObj() {
      const flat = Object.values(this.formData.generalData).concat(
        Object.values(this.formData.healthData)
      );

      return flat
        .map(function (item) {
          return parseInt(item, 10);
        })
        .slice(0, 16);
    },
  },
});
</script>
