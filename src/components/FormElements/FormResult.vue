<template>
  <TypeBasedTransition :transition-type="'fadeUpDown'">
    <div v-if="isLastField" class="form-complete">
      <pre> {{ store.formData }} </pre>
    </div>
  </TypeBasedTransition>
</template>
<script setup>
// Transition - functional component
import TypeBasedTransition from "../Transitions/TypeBasedTransition";

// Pinia
import { useLeadStore } from "../../stores/LeadStore";

defineProps({
  isLastField: {
    type: Boolean,
    default: false,
  },
});
/**
 * Pinia
 */
const store = useLeadStore();
</script>
