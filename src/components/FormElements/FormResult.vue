<template>
  <TypeBasedTransition :transition-type="'fadeUpDown'">
    <div v-if="formState.isLastField" class="form-complete">
      <pre> {{ store.formData }} </pre>
    </div>
  </TypeBasedTransition>
</template>
<script setup>
// Library
import { inject } from "vue";

// Transition - functional component
import TypeBasedTransition from "../Transitions/TypeBasedTransition";

// Pinia
import { useLeadStore } from "../../stores/LeadStore";

/**
 * Pinia
 */
const store = useLeadStore();

/**
 * Inject
 */
const formState = inject("formState");
</script>
