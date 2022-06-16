<template>
  <div class="form-error-message">
    <TypeBasedTransition transition-type="fadeUpDown">
      <!-- This button called 'submit' method defined on form tag on FormTemplate -->
      <button class="form-button" v-if="formState.valid"> {{ buttonText }} </button>
      <span v-else>
        <slot />
      </span>
    </TypeBasedTransition>
  </div>
</template>

<script setup>

import { inject } from 'vue'

import TypeBasedTransition from "../Transitions/TypeBasedTransition"

defineProps(['buttonText'])

const formState = inject('formState')

</script>
