<template>
  <table class="table">
    <tbody>
      <tr>
        <td v-if="formData.healthData.smoker === '1'">
          <p>
            <strong>Stop smoking</strong> - Smoking is the leading cause of lung
            cancer and other cancers, heart disease, stroke, and chronic
            obstructive pulmonary disease (COPD). Smoking also increases the
            risk of developing other serious health problems, such as diabetes,
            osteoporosis, and rheumatoid arthritis. Get help to quit smoking
            <strong
              ><a
                href="https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/index.html"
                target="_blank"
                style="text-decoration: none"
                >here</a
              ></strong
            >.
          </p>
        </td>
      </tr>
      <tr v-if="formData.healthData.highBP === '1'">
        <td>
          <p>
            <strong>Watch your blood pressure</strong> - High blood pressure is
            a major risk factor for heart disease and stroke. High blood
            pressure can be controlled with lifestyle changes and, if necessary,
            medications.
          </p>
        </td>
      </tr>
      <tr v-if="formData.healthData.highChol === '1'">
        <td>
          <p>
            <strong>Watch you cholesterol</strong> - High cholesterol is a major
            risk factor for heart disease and stroke. High cholesterol can be
            controlled with lifestyle changes and, if necessary, medications.
          </p>
        </td>
      </tr>
      <tr v-if="formData.healthData.fruits === '0'">
        <td>
          <p>
            <strong>Eat fruits daily</strong> - Fruits are an important part of
            a healthy diet. They are high in fiber, vitamins, and minerals.
            Fruits also contain phytochemicals that may help protect against
            heart diseases and other diseases.
          </p>
        </td>
      </tr>
      <tr v-if="formData.healthData.veggies === '0'">
        <td>
          <p>
            <strong>Eat vegetables daily</strong> - Vegetables are an important
            part of a healthy diet and may help protect against heart disease
            and other diseases.
          </p>
        </td>
      </tr>
      <tr v-if="formData.healthData.physActivity === '0'">
        <td>
          <p>
            <strong>Start exercising</strong> - Regular physical activity can
            help you maintain a healthy weight, reduce your risk of heart
            disease and stroke, and lower your blood pressure and cholesterol.
          </p>
        </td>
      </tr>
      <tr v-if="formData.healthData.mentHlth < 15">
        <td>
          <p>
            <strong>Focus on your mental health</strong> - Mental health is an
            important part of overall health. Mental health problems can affect
            your daily life, relationships, and physical health. Mental health
            problems can also make existing physical health problems worse.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'VResultTips',
  props: {
    formData: { type: Object, required: true },
  },
};
</script>

<style scoped></style>
