<template>
  <div class="container">
    <img
      class="img-fluid"
      src="@/assets/images/check-page-background.jpg"
      style="display: block; margin-left: auto; margin-right: auto; width: 20%"
    />
    <VCheckForm />
  </div>
</template>

<script>
import VCheckForm from '../components/check-form/v-check-form';

export default {
  name: 'CheckPage',
  components: { VCheckForm },
};
</script>
