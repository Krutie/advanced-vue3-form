<template>
  <DataDrivenTransition :isNext="formState.next">
    <div v-if="active" :key="fieldId" class="field-group">
      <slot />
    </div>
  </DataDrivenTransition>
</template>

<script setup>
import { computed, inject } from "vue";

import DataDrivenTransition from "../Transitions/DataDrivenTransition";

/**
 * Props
 */
const props = defineProps({
  fieldId: {
    type: Number,
    default: null,
  },
});

/**
 * Inject formState from parent component: FormTemplate.vue
 */
const formState = inject("formState");

/**
 * computed properties
 */
const active = computed(() => {
  return formState.value.activeField === props.fieldId;
});
</script>
