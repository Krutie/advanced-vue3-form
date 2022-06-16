<template>
  <DataDrivenTransition :isNext="formState.next">
    <div class="field-group" v-if="active" :key="fieldId">
      <slot />
    </div>
  </DataDrivenTransition>
</template>

<script setup>

import { computed, inject } from 'vue';

import DataDrivenTransition from "../Transitions/DataDrivenTransition"

/** 
 * Props
 */
const props = defineProps(["fieldId"]);

/**
 * Inject formState from parent component: FormTemplate.vue 
 */
const formState = inject('formState')

/** 
 * computed properties
 */
const active = computed(() => {
  return formState.value.activeField === props.fieldId
})
</script>
