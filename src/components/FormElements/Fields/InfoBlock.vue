<template>
  <div class="info-block">
    <span v-html="text" />
  </div>
</template>

<script setup>
import { inject } from "vue";

defineProps({
  text: {
    type: String,
    default: "",
  },
});

/**
 * Inject
 */
const validateField = inject("validateField");

// InfoBlock always validates to true
validateField(true);
</script>
