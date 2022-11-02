<template>
  <div class="form-check form-check-inline">
    <input
      :id="getId"
      class="btn-check"
      type="radio"
      :name="radioGroupName"
      :value="option"
      :required="getIsRequired"
      :checked="option === 0"
      @change="$parent.$emit('input', option)"
    />
    <label class="btn btn-outline-primary" :for="getId">
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

.btn-outline-primary:active,
.btn-outline-primary:visited {
  color: white !important;
}
</style>
