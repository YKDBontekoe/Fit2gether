<template>
  <fieldset>
    <h2 class="fs-title">Health Data</h2>
    <h3 class="fs-subtitle">Your current health</h3>
    <input type="text" name="twitter" placeholder="Twitter" />
    <input type="text" name="facebook" placeholder="Facebook" />
    <input type="text" name="gplus" placeholder="Google Plus" />
    <input
      type="button"
      name="previous"
      class="previous action-button-previous"
      value="Previous"
    />
    <input
      type="button"
      name="next"
      class="next action-button bg-primary"
      value="Next"
    />
    <input
      type="submit"
      name="submit"
      class="submit action-button"
      value="Submit"
    />
  </fieldset>
</template>

<script lang="ts">
export default {
  name: 'VCheckHealthForm',
}
</script>

<style scoped></style>
