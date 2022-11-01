<template>
  <div>
    <div class="container">
      <img src="@/assets/images/main-page-background.jpg" />
      <div class="move-to-middle" style="z-index: 1">
        <NuxtLink to="/check" class="btn bg-transparent">
          <span class="h5 text-white">Check your heart here</span>
        </NuxtLink>
      </div>
      <div class="heart-move-to-middle">
        <VHeart style="z-index: -1" />
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
        It helps you live a longer, more active life. It also helps you feel better about yourself."
          ><img
            src="@/assets/images/happy-heart-result.png"
            alt="Happy heart"
            class="card-img-top center-block"
          />
        </VInfoBox>
        <VInfoBox
          title="What is heart disease?"
          text="Heart disease is a general term for several types of heart conditions. These conditions include blood vessel diseases, such as coronary artery disease; heart rhythm problems (arrhythmias); and heart defects you are born with (congenital heart defects), among others."
          ><img
            class="card-img-top center-block"
            src="@/assets/images/sad-heart-result.png"
        /></VInfoBox>
        <VInfoBox
          title="What are the symptoms of heart disease?"
          text="Heart
      disease often has no symptoms. But when symptoms do occur, they may
      include chest pain or pressure, pain in your arms, back, neck, or jaw,
      shortness of breath, and breaking out in a cold sweat. Heart disease often
      has no symptoms."
          ><img
            class="card-img-top center-block"
            src="@/assets/images/heart-disease.png"
            alt="Heart disease"
          />
        </VInfoBox>
      </div>
    </div>
  </div>
</template>

<script>
import VHeart from '../components/v-heart';
export default {
  name: 'IndexPage',
  components: { VHeart },
};
</script>

<style scoped>
.card-img-top {
  height: 6rem;
  width: 4rem;
}
</style>
