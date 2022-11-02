<template>
  <div class="btn-group" role="group">
    <VRadio
      v-for="(index, option) in options"
      :key="index"
      :option="option"
      :option-alias="optionsAlias[index]"
      :radio-group-name="radioGroupName"
    />
  </div>
</template>

<script>
import VRadio from './v-radio';
export default {
  name: 'VRadioGroup',
  components: { VRadio },
  props: {
    options: {
      required: true,
      type: Array,
    },
    optionsAlias: {
      required: true,
      type: Array,
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
};
</script>

<style scoped>
.d-flex {
  width: 50%;
  margin: 20px auto;
  padding: 15px 20px;

  display: flex;
  justify-content: space-between;
}

label {
  cursor: pointer;
}
</style>
