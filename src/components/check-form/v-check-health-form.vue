<template>
  <fieldset>
    <h2 class="fs-title">Health Data</h2>
    <h3 class="fs-subtitle">Your current health</h3>

    <div class="row">
      <div class="col order-0">
        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="HighBP"
              type="checkbox"
              name="High Blood Pressure"
              class="form-check-input"
              :value="formData.healthData.highBP"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('highBP', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="HighBP"
              >Do you have a high blood pressure (confirmed by a doctor)?</label
            ></span
          >
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="HighChol"
              type="checkbox"
              name="High Cholesterol"
              class="form-check-input"
              :value="formData.healthData.highChol"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('highChol', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="HighChol"
              >Have you EVER been told by a doctor, nurse or other health
              professional that your blood cholesterol is high?</label
            >
          </span>
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="Smoker"
              type="checkbox"
              class="form-check-input"
              name="Smoker"
              :value="formData.healthData.smoker"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('smoker', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="Smoker"
              >Have you smoked at least 100 cigarettes in your entire life?
              [Note: 5 packs = 100 cigarettes]</label
            >
          </span>
        </div>

        <div class="input-group">
          <span class="input-group-addon"
            ><input
              id="Stroke"
              type="checkbox"
              class="form-check-input"
              name="Stroke"
              :value="formData.healthData.stroke"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('stroke', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="Stroke"
              >Have you ever had a stroke?</label
            >
          </span>
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="Diabetes"
              type="checkbox"
              class="form-check-input"
              name="Diabetes"
              :value="formData.healthData.diabetes"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('diabetes', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="Diabetes"
              >you have diabetes</label
            >
          </span>
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="PhysActivity"
              type="checkbox"
              name="Physical Activity"
              class="form-check-input"
              :value="formData.healthData.physActivity"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('physActivity', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="PhysActivity"
              >Adults who reported doing physical activity or exercise during
              the past 30 days other than their regular job</label
            >
          </span>
        </div>
        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="Fruits"
              type="checkbox"
              class="form-check-input"
              name="Fruits"
              :value="formData.healthData.fruits"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('fruits', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="Fruits"
              >Consume Fruit 1 or more times per day</label
            >
          </span>
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="Veggies"
              type="checkbox"
              class="form-check-input"
              name="Veggies"
              :value="formData.healthData.veggies"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('veggies', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label class="form-check-label" for="Veggies"
              >Consume Vegetables 1 or more times per day</label
            ></span
          >
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <input
              id="DiffWalk"
              type="checkbox"
              class="form-check-input"
              name="Difficulty stairs"
              :value="formData.healthData.diffWalk"
              @input="
                $emit(
                  'update:formData',
                  updateProperty('diffWalk', $event.target.value)
                )
              "
            />
          </span>
          <span class="input-group-addon">
            <label for="DiffWalk"
              >Do you have serious difficulty walking or climbing stairs?</label
            >
          </span>
        </div>

        <div class="form-check">
          <label class="form-check-label" for="Sex"
            >Indicate sex of respondent</label
          >
          <input
            id="Sex"
            type="checkbox"
            class="form-check-input"
            name="Difficulty stairs"
            :value="formData.healthData.sex"
            @input="
              $emit(
                'update:formData',
                updateProperty('sex', $event.target.value)
              )
            "
          />
        </div>
      </div>
      <div class="col order-1">
        <label for="GenHlth"
          >Would you say that in general your health is</label
        >
        <input
          id="GenHlth"
          type="number"
          name="General Health"
          :value="formData.healthData.genHlth"
          required
          @input="
            $emit(
              'update:formData',
              updateProperty('genHlth', $event.target.value)
            )
          "
        />

        <label for="MentHlth"
          >Now thinking about your mental health, which includes stress,
          depression, and problems with emotions, for how many days during the
          past 30 days was your mental health not good?</label
        >
        <input
          id="MentHlth"
          type="number"
          name="Mental Health"
          :value="formData.healthData.menHlth"
          required
          @input="
            $emit(
              'update:formData',
              updateProperty('menHlth', $event.target.value)
            )
          "
        />

        <label for="PhysHlth"
          >Now thinking about your physical health, which includes physical
          illness and injury, for how many days during the past 30 days was your
          physical health not good?</label
        >
        <input
          id="PhysHlth"
          type="number"
          name="Physical Health"
          :value="formData.healthData.physHlth"
          required
          @input="
            $emit(
              'update:formData',
              updateProperty('physHlth', $event.target.value)
            )
          "
        />
      </div>
    </div>
    <VCheckStateHandler
      v-model:next-model-value="nextChildModelValue"
      v-model:previous-model-value="previousChildModelValue"
      :next-form="nextForm"
      :previous-form="previousForm"
    />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormStages } from '@/types/check-form/enums/FormStages';
import VCheckStateHandler from '@/components/check-form/shared/v-check-state-handler.vue';

export default defineComponent({
  name: 'VCheckHealthForm',
  components: { VCheckStateHandler },
  props: {
    formData: { type: Object, required: true },
    nextModelValue: { type: String, default: '' },
    previousModelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:nextModelValue', 'update:previousModelValue'],
  data() {
    return {
      i_formData: this.formData,
      nextChildModelValue: '',
      previousChildModelValue: '',
    };
  },
  computed: {
    nextForm() {
      return FormStages.Result;
    },
    previousForm() {
      return FormStages.General;
    },
  },
  watch: {
    nextChildModelValue(val) {
      this.$emit('update:nextModelValue', val);
    },
    previousChildModelValue(val) {
      this.$emit('update:previousModelValue', val);
    },
  },
  methods: {
    updateProperty(propName, propVal) {
      this.i_formData.healthData[propName] = propVal;
      return this.formData;
    },
  },
});
</script>

<style scoped></style>
