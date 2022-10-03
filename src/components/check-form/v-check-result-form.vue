<template>
  <fieldset>
    <h2 class="fs-title">Results</h2>
    <h3 class="fs-subtitle">Your current health</h3>
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
  async mounted() {
    const model = await tf.loadLayersModel(
      'https://public.db.files.1drv.com/y4mdCQSMd2JmPTajBjtcNPw05-xknPpm1Wx4GCXe7xXHtZJCNICqqGs3UlRNdivunrrA42Vu77XxYkGMs_lP5S9PG9Sw6nh6OnoIMTdJe0C6vH8PIpnmHQwdnJ636K43X1d1HPHdkM56XKAszdNo5Hv6LQtA9raM3EfeNenYdfOJiwlNLhGAMTyr1-jOKkjigT2vzByb8HDkoZZYH-EUuhgNE80VLJpv4-shz4Bgs2Oy10'
    );
    const prediction = model.predict(tf.tensor2d(Object.values(this.formData)));
    console.log(this.flattenObj());
  },
  methods: {
    flattenObj() {
      // get all values from formData object and nested objects and return them as an array
      const modelVals = {
        healthData: this.formData.healthData,
        generalData: this.formData.generalData,
      };
      return Object.values(modelVals).reduce((acc, val) => {
        if (typeof val === 'object') {
          return acc.concat(Object.values(val));
        }
        return acc.concat(val);
      }, []);
    },
  },
});
</script>
