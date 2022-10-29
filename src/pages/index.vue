<template>
  <div>
    <div class="container">
      <img src="@/assets/images/main-page-background.jpg" />
      <div class="move-to-middle">
        <NuxtLink to="/check" class="btn bg-primary rounded-4">
          <span class="h4">Check your heart condition</span>
        </NuxtLink>
      </div>
    </div>
    <div class="bg-primary rounded-4" style="margin-top: 2rem">
      <div class="justify-content-center row">
        <h2 class="text-white text-center" style="margin-top: 1rem">
          Let's get fit together!
        </h2>
        <VInfoBox
          title="Why is a healthy heart important?"
          text="A healthy heart is important for your overall health.
        It helps you <strong>live a longer, more active life</strong>. It also helps you feel better about yourself."
          ><img
            src="@/assets/images/happy-heart-result.png"
            alt="Happy heart"
          />
        </VInfoBox>
        <VInfoBox
          title="What is heart disease?"
          text="Heart disease is a general term for several types of heart conditions. These conditions include blood vessel diseases, such as coronary artery disease; heart rhythm problems (arrhythmias); and heart defects you are born with (congenital heart defects), among others. Heart disease is a general term for several types of heart conditions. These conditions include blood vessel diseases, such as coronary artery disease; heart rhythm problems (arrhythmias); and heart defects you are born with (congenital heart defects), among others."
          ><img class="card-img-top" src="@/assets/images/sad-heart-result.png"
        /></VInfoBox>
        <VInfoBox
          title="What are the symptoms of heart disease?"
          text="Heart
      disease often has no symptoms. But when symptoms do occur, they may
      include chest pain or pressure, pain in your arms, back, neck, or jaw,
      shortness of breath, and breaking out in a cold sweat. Heart disease often
      has no symptoms. But when symptoms do occur, they may include chest pain
      or pressure, pain in your arms, back, neck, or jaw, shortness of breath,
      and breaking out in a cold sweat."
          ><img src="@/assets/images/heart-disease.jpg" alt="Heart disease" />
        </VInfoBox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style scoped>
.card-img-top {
  height: 10rem;
  object-fit: cover;
}
</style>
