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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
            required
          />
        </div>
      </div>
      <div class="col order-1">
        <label for="BMI">Body Mass Index (BMI)</label>
        <input id="BMI" type="number" name="BMI (Body Mass Index)" required />

        <label for="GenHlth"
          >Would you say that in general your health is</label
        >
        <input id="GenHlth" type="number" name="General Health" required />

        <!--    -->
        <label for="MentHlth"
          >Now thinking about your mental health, which includes stress,
          depression, and problems with emotions, for how many days during the
          past 30 days was your mental health not good?</label
        >
        <input id="MentHlth" type="number" name="Mental Health" required />

        <label for="PhysHlth"
          >Now thinking about your physical health, which includes physical
          illness and injury, for how many days during the past 30 days was your
          physical health not good?</label
        >
        <input id="PhysHlth" type="number" name="Physical Health" required />

        <label for="Age">Age</label>
        <input id="Age" type="number" name="Age" required />
      </div>
    </div>
    <input
      type="button"
      value="Previous"
      class="previous action-button-previous"
      @click="$emit('update:previousModelValue', previousForm)"
    />
    <input
      type="button"
      value="Next"
      class="next action-button bg-primary"
      @click="$emit('update:nextModelValue', nextForm)"
    />
  </fieldset>
</template>

<script lang="ts">
import { FormStages } from '@/types/enums/FormStages';

export default {
  name: 'VCheckHealthForm',
  props: {
    nextModelValue: { type: String, default: '' },
    previousModelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:nextModelValue', 'update:previousModelValue'],
  computed: {
    nextForm() {
      return FormStages.Result;
    },
    previousForm() {
      return FormStages.Personal;
    },
  },
};
</script>

<style scoped></style>
