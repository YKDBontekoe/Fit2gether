<template>
  <input type="checkbox" :checked="isChecked" @change="change" />
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
  },
  computed: {
    isChecked() {
      return this.value === '1' || this.value === true;
    },
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.checked ? '1' : '0');
    },
  },
};
</script>
