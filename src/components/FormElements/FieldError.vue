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
        <div
          v-for="error of silentErrors"
          :key="error.$uid"
          class="input-errors error-msg"
        >
          <Icon icon="ep:warning-filled" />
          {{ error.$message }}
        </div>
      </span>
    </TypeBasedTransition>
  </div>
</template>

<script setup>
import { inject } from "vue";

// Components
import { Icon } from "@iconify/vue";
import TypeBasedTransition from "../Transitions/TypeBasedTransition";

// Composable
import { useKeyboardNav } from "../../composables/useKeyboardNav";

defineProps({
  buttonText: {
    type: String,
    default: "Okay",
  },
  silentErrors: {
    type: Array,
  },
});

const { formState } = inject("typeform");

// Keyboard navigation - Left and Right arrow
const emits = defineEmits(["back", "next"]);
useKeyboardNav(emits, formState);
</script>
