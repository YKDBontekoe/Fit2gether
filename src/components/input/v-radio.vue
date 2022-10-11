<template>
  <div class="form-check">
    <label class="form-check-label" :for="option">
      <input
        :id="option"
        class="form-check-input"
        type="radio"
        :name="radioGroupName"
        :value="option"
        @change="$parent.$emit('input', option)"
      />
      {{ optionAlias }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'VRadio',
  props: {
    option: {
      required: true,
      type: String,
    },
    optionAlias: {
      required: true,
      type: String,
    },
    radioGroupName: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
label {
  cursor: pointer;
}
</style>
