<template>
  <div class="input-group">
    <VRadio
      v-for="option in options"
      :key="option"
      :option="option"
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
  },
};
</script>

<style scoped>
.input-group {
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
