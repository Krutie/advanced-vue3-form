<template>
  <div class="info-block">
    <span v-html="text" />
  </div>
</template>

<script setup>
import { useFormField } from "../../../composables/useFormField";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  validation: {
    type: Object,
    default: null,
  },
});

useFormField(props);
</script>
