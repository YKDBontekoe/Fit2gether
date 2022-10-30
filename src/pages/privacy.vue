<template>
  <div class="container">
    <h1 class="text-center text-primary">Privacy Policy</h1>
    <VAccordion
      title="How do we store your data?"
      content="All
    data is stored on your device and is not sent to any server. The data is
    used to calculate your risk of having a heart attack in the next 10 years.
    The data is also used to give you tips on how to improve your health. The
    data is not used for any other purpose. The data is not shared with any
    third party."
    />
    <div class="text-center">
      <img
        src="@/assets/images/privacy-image.jpg"
        alt="privacy"
        class="privacy-image"
      />
    </div>
  </div>
</template>

<script>
import VAccordion from '../components/v-accordion';
export default {
  name: 'PrivacyPage',
  components: { VAccordion },
};
</script>

<style scoped>
.privacy-image {
  height: 200px;
  width: auto;
  margin-bottom: 1rem;
}

.container {
  margin-top: 2rem;
}
</style>
