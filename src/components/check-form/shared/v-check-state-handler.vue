<template>
  <div>
    <!--    <input-->
    <!--      v-if="hasPrevious"-->
    <!--      type="button"-->
    <!--      value="Previous"-->
    <!--      class="previous action-button-previous"-->
    <!--      @click="$emit('update:previousModelValue', previousForm)"-->
    <!--    />-->
    <input
      type="submit"
      value="Next"
      class="next action-button bg-primary"
      @click="$emit('update:nextModelValue', nextForm)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VCheckStateHandler',
  props: {
    nextForm: { type: String, default: '' },
    previousForm: { type: String, default: '' },
    hasPrevious: { type: Boolean, default: true },
    nextModelValue: { type: String, default: '' },
    previousModelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:nextModelValue', 'update:previousModelValue'],
});
</script>

<style scoped></style>
