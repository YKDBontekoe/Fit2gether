<template>
  <div class="container">
    <h1 class="text-center text-primary">FAQ</h1>
    <VAccordion
      title="How do we make our prediction?"
      content="We use an AI to make our prediction. The model is trained on data from the
      Behavioral Risk Factor Surveillance System survey that is collected
      annually by the CDC. The prediction is based on the data you enter in the
      form.

      The final prediction is based on 254.000 people who filled in the survey
      provided by the CDC."
    />
    <VAccordion
      title="How do we calculate the risk?"
      content=" When you have entered the data we will process the data on your local
      machine and run the data through our AI model. The model will then
      calculate a probability of you having a heart attack in the next 10 years.
      The higher the probability the higher the risk. The probability is a
      number between 0 - 1. We multiply the probability with 100 to get a
      percentage."
    />
    <VAccordion
      title="How do we calculate the tips?"
      content="The tips are based on the data you entered in the form. The tips are not
      based on the prediction."
    />
    <VAccordion
      title="How accurate is the prediction?"
      content="The prediction has an accuracy of 91% and thus
      should not be used as medical advice or as a replacement
      for a medical professional."
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
