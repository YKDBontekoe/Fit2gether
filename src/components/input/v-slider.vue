<template>
  <div>
    <label :for="id" class="form-label">{{ sliderText }}</label>
    <input
      :id="id"
      type="range"
      class="form-range border-0"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      :required="getIsRequired"
      @change="onChange"
    />
    <div class="row">
      <div class="col">
        <strong class="float-start text-muted">{{ badMinValueName }}</strong>
      </div>
      <div class="col">
        <strong class="text-primary">{{ s_value }}</strong>
      </div>
      <div class="col">
        <strong class="float-end text-muted">{{ goodMaxValueName }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSlider',
  props: {
    id: {
      required: true,
      type: String,
    },
    sliderText: {
      required: true,
      type: String,
    },
    minValue: {
      required: false,
      type: Number,
      default: 0,
    },
    maxValue: {
      required: false,
      type: Number,
      default: 10,
    },
    stepValue: {
      required: false,
      type: Number,
      default: 1,
    },
    goodMaxValueName: {
      required: false,
      type: String,
      default: 'Good',
    },
    badMinValueName: {
      required: false,
      type: String,
      default: 'Bad',
    },
    isRequired: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      s_value: 0,
    };
  },
  computed: {
    getIsRequired() {
      return this.isRequired ? 'required' : '';
    },
  },
  methods: {
    onChange(event) {
      this.s_value = event.target.value;
      this.$emit('input', event.target.value);
    },
  },
};
</script>
