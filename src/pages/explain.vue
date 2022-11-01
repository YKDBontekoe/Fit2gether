<template>
  <div class="container">
    <h1 class="text-center text-primary">FAQ</h1>
    <VAccordion
      title="How do we make our prediction?"
      content="We use an AI to make our prediction. The AI is based on data from the
      Behavioral Risk Factor Surveillance System survey that is collected
      annually by the CDC. The prediction is based on the data you enter in the
      form.

      The final prediction is based on 254.000 people who filled in the survey
      provided by the CDC in 2019. The survey contains 15 questions. The survey is available <a class='text-decoration-none fw-bold' href='https://www.cdc.gov/brfss/annual_data/annual_2019.html' target='_blank'>here</a>."
    />
    <VAccordion
      title="How do we calculate the risk?"
      content="We use the following formula to calculate the risk: we take the input of the form and compare it to the hundreds of thousands of people who filled in the survey. We then calculate the average of the people who have the same input as you.
      The average is the risk of having a heart attack in the next 10 years. The risk is given as: low, medium or high probability of heart disease in the next 10 years."
    />
    <VAccordion
      title="How do we calculate the tips?"
      content="The tips are based on the data you entered in the form. We use the data to calculate the risk of having a heart attack in the next 10 years. Based on the risk we give you tips on how to improve your health. These tips are <strong class='text-primary'>not</strong> meant to replace advice of a medical professional."
    />
    <VAccordion
      title="How accurate is the prediction?"
      content="The prediction has an accuracy of 91% and thus
      <strong class='text-primary'>should not be used as medical advice</strong> or as a replacement
      for a medical professional."
    />
    <VAccordion
      title="My prediction says that I have an high chance of an heart disease, what should I do?"
      content="Please consult a medical professional. The prediction is not meant to replace a medical professional. The prediction is meant to help and advice you to improve your health and not to replace a medical professional."
    />
    <div class="text-center">
      <img
        src="@/assets/images/faq-image.jpg"
        alt="privacy"
        class="faq-image"
      />
    </div>
  </div>
</template>

<script>
import VAccordion from '../components/v-accordion';
export default {
  name: 'ExplainPage',
  components: { VAccordion },
};
</script>

<style scoped>
.faq-image {
  height: 250px;
  width: auto;
  margin-bottom: 1rem;
}
.container {
  margin-top: 2rem;
}
</style>
