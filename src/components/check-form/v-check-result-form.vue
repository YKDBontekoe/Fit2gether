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

    const pred = model.predict(tf.tensor(this.flattenObj(), [15]));
    this.prediction = await pred.dataSync();
  },
  methods: {
    flattenObj() {
      return Object.entries(this.formData.generalData)
        .concat(Object.entries(this.formData.healthData))
        .flat(2);
    },
  },
});
</script>
