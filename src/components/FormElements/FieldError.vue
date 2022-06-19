<template>
  <div class="form-error-message">
    <TypeBasedTransition transition-type="fadeInOut">
      <button
        v-if="formState.valid"
        type="button"
        class="form-button"
        @click="$emit('next')"
      >
        {{ buttonText }}
      </button>
      <span v-else>
        <slot />
      </span>
    </TypeBasedTransition>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useKeyboardNav } from "../../composables/useKeyboardNav";

import TypeBasedTransition from "../Transitions/TypeBasedTransition";

defineProps({
  buttonText: {
    type: String,
    default: "Okay",
  },
});

const formState = inject("formState");

// Keyboard navigation - Left and Right arrow
const emits = defineEmits(["back", "next"]);
useKeyboardNav(emits, formState);
</script>
