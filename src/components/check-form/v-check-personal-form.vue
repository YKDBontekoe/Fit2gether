<template>
  <fieldset>
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">Tell us something more about you</h3>
    <input v-model="firstName" type="text" placeholder="First Name" required/>
    <input v-model="lastName" type="text" placeholder="Last Name" required/>
    <input v-model="emailAddress" type="email" placeholder="Email" required/>
    <input
      type="submit"
      name="next"
      class="next action-button bg-primary"
      value="Next"
      @click="onSubmit"
    />
  </fieldset>
</template>

<script lang="ts">
export default {
  name: 'VCheckPersonalForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      emailAddress: '',
    }
  },
  methods: {
    onSubmit() {
      const personalData: PersonalCheckType = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress
      };

      this.$emit(FormEmittersEnum.PersonalEmitData, personalData);
    },
  },
}
</script>

<style scoped></style>
