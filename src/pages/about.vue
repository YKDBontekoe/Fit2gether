<template>
  <div class="container">
    <h1 class="text-center text-primary">About Fit2gether</h1>
    <VAccordion
      title="What is Fit2gether?"
      content="Fit2gether is a web application that helps you to calculate your risk of having a heart attack in the next 10 years. It also gives you tips on how to improve your health."
    />
    <VAccordion
      title="Who am I?"
      content="I am a student at the Avans
    Hogeschool in Breda, The Netherlands. I am studying Software Engineering and
    I am in my final year. I am currently doing my minor at the Avans
    Hogeschool. I am working on a project called Fit2gether. Fit2gether is a web
    application that helps you to calculate your risk of having a heart attack
    in the next 10 years. It also gives you tips on how to improve your health."
    />
    <VAccordion
      title="What is the purpose of Fit2gether?"
      content="The purpose of Fit2gether is to help people to improve their health. The application is not meant to replace a medical professional. The application is meant to help people to improve their health."
    />
    <div class="text-center">
      <img
        src="@/assets/images/about-image.jpg"
        alt="about"
        class="about-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-image {
  height: 250px;
  width: auto;
  margin-bottom: 1rem;
}
.container {
  margin-top: 2rem;
}
</style>
