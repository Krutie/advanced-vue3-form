<template>
  <TypeBasedTransition :transitionType="'fadeUpDown'">
    <div v-if="formState.isLast" class="form-complete">
      <h1>Thank you!</h1>
      <pre> {{ store.formData }} </pre>
    </div>
  </TypeBasedTransition>
</template>
<script setup>

// Library
import { inject } from 'vue'

// Transition - functional component
import TypeBasedTransition from "../Transitions/TypeBasedTransition"

// Pinia
import { useLeadStore } from "../../stores/LeadStore";

/** 
 * Pinia
 */
const store = useLeadStore();

/**
 * Inject
 */
const formState = inject('formState')

</script>
