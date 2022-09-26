<template>
  <form id="msform">
    <VCheckProgressBar />
    <VCheckPersonalForm />
    <VCheckHealthForm />
  </form>
</template>

<script lang="ts">
import VCheckPersonalForm from './v-check-personal-form'
import VCheckHealthForm from './v-check-health-form'
import VCheckProgressBar from './v-check-progress-bar'
import FormEmittersEnum from '../../types/enums/FormEmittersEnum'
export default {
  name: 'VCheckForm',
  components: { VCheckProgressBar, VCheckHealthForm, VCheckPersonalForm },
  data(){
    return{
      formData: ''
    }
  },
  created() {
    this.$on(FormEmittersEnum.PersonalEmitData, this.personalDataRetrieved)
  },
  methods: {
    personalDataRetrieved(data: PersonalCheckType){
      this.formData.personalData = data;
      console.log(data)
    }
  },
}
</script>
