<template>
  <div class="form-check form-check-inline">
    <label class="form-check-label" :for="GetId">
      {{ optionAlias }}
    </label>
    <input
      :id="getId"
      class="form-check-input"
      type="radio"
      :name="radioGroupName"
      :value="option"
      :required="getIsRequired"
      @change="$parent.$emit('input', option)"
    />
  </div>
</template>

<script>
export default {
  name: 'VRadio',
  props: {
    option: {
      required: true,
      type: Number,
    },
    optionAlias: {
      required: true,
      type: String,
    },
    radioGroupName: {
      required: true,
      type: String,
    },
    isRequired: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getId() {
      return 'id_' + this.radioGroupName + '_' + this.option;
    },
    getIsRequired() {
      return this.isRequired ? 'required' : '';
    },
  },
};
</script>

<style scoped>
label {
  cursor: pointer;
}
</style>
