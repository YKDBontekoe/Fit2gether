<template>
  <div>
    <div class="container">
      <img src="@/assets/images/main-page-background.jpg" />
      <div class="move-to-middle">
        <NuxtLink to="/check" class="btn bg-primary">
          <span class="h4">Check your heart condition</span>
        </NuxtLink>
      </div>
    </div>
    <div class="justify-content-center row">
      <div class="card border-0 text-white mb-3" style="max-width: 18rem">
        <div class="card-body text-center text-black">
          <h5 class="card-title">Health Info</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        class="card border-0 text-white mb-3"
        style="max-width: 18rem; margin-inline: 10px"
      >
        <div class="card-body text-center text-black">
          <h5 class="card-title">Heart Info</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card border-0 text-white mb-3" style="max-width: 18rem">
        <div class="card-body text-center text-black">
          <h5 class="card-title">Sport Info</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-primary" style="width: 100%; min-height: 150px"></div>
    <h2>Hier komt de landing page met de onboarding shit</h2>
    <table>
      <ul>
        <li>Inspirerend plaatje van een hart ofz</li>
        <li>Knop met bekijk hart gezondheid voorspelling</li>
        <li>
          Uitleg waarom deze AI is ontwikkeld (in het kort: mensen leven steeds
          ongezonder)
        </li>
        <li>Uitleg over hoe de AI werkt in simpele noob taal</li>
        <li>
          Uitleg over waar de data afkomstig is en waarom het betrouwbaar is
        </li>
      </ul>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped></style>
