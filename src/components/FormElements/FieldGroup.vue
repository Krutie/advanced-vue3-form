<template>
  <DataDrivenTransition :isNext="next">
    <div v-if="active" :key="fieldId" class="field-group">
      <slot />
    </div>
  </DataDrivenTransition>
</template>

<script setup>
import { computed } from "vue";

import DataDrivenTransition from "../Transitions/DataDrivenTransition";

/**
 * Props
 */
const props = defineProps({
  fieldId: {
    type: Number,
    default: null,
  },
  activeField: {
    type: Number,
    default: null,
  },
  next: {
    type: Boolean,
    default: true,
  },
});

/**
 * computed properties
 */
const active = computed(() => {
  return props.activeField === props.fieldId;
});
</script>
