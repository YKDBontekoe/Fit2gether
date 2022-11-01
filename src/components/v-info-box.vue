<template>
  <div
    class="card border-0 text-white mb-3 rounded-5"
    style="max-width: 25rem; margin: 1rem; padding: 1rem"
  >
    <div style="margin: 10px">
      <slot />
    </div>
    <div class="card-body text-center text-black">
      <h5 class="card-title text-primary fw-bold">{{ title }}</h5>
      <p class="card-text fst-italic">
        <span v-html="limitedText" />
      </p>
      <button
        v-if="isTextLimited"
        class="btn btn-primary text-white"
        @click="expandText"
      >
        Expand to read more
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VInfoBox',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isTextLimited: false,
    };
  },
  computed: {
    limitedText() {
      return !this.isTextLimited
        ? this.text
        : this.text.substring(0, 150) + '...';
    },
  },
  mounted() {
    this.isTextLimited = this.text.length > 150;
  },
  methods: {
    expandText() {
      this.isTextLimited = false;
    },
  },
});
</script>
