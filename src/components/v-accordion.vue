<template>
  <div id="accordion" class="accordion accordion-flush">
    <div class="accordion-item">
      <h2 :id="accordionHeadingId" class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + accordionId"
          aria-expanded="false"
          :aria-controls="accordionId"
        >
          <span class="h4 text-primary">{{ title }}</span>
        </button>
      </h2>
      <div
        :id="accordionId"
        class="accordion-collapse collapse"
        :aria-labelledby="accordionHeadingId"
        data-bs-parent="#accordion"
      >
        <div class="accordion-body">
          <p v-html="content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VAccordion',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      accordionId: 'accordion-' + Math.random().toString(36).substr(2, 9),
      accordionHeadingId:
        'accordion-heading-' + Math.random().toString(36).substr(2, 9),
    };
  },
});
</script>
