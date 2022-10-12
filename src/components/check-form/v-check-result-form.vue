<template>
  <div>
    <h1 class="fs-title">Results</h1>
    <p>
      Hallo <strong>{{ formData.personalData.firstName }} </strong>,<br />
      ik heb goed nieuws u gaat
      <strong>{{ predictedValue > 50 ? 'dood' : 'blijven leven' }} </strong> met
      <strong>{{ predictedValue }}%</strong> kans
    </p>

    <table class="justify-content-center">
      <tr v-for="item in flattenedObject" :key="item">
        <td v-for="value in item" :key="value">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
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
      i_formData: JSON.parse(JSON.stringify(this.formData)),
    };
  },
  computed: {
    predictedValue() {
      return this.parseFloat(this.prediction * 100, 2);
    },
    flattenedObject() {
      return Object.entries({
        ...this.formData.healthData,
        ...this.formData.generalData,
        ...this.formData.personalData,
      }).map(([position, name]) => ({
        position,
        name,
      }));
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
    parseFloat(str, val) {
      str = str.toString();
      str = str.slice(0, str.indexOf('.') + val + 1);
      return Number(str);
    },
  },
});
</script>
