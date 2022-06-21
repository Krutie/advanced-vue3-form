<template>
  <div class="info-block">
    <span v-html="props.field.text" />
  </div>
</template>

<script setup>
import { useFormField } from "../../../composables/useFormField";

const props = defineProps({
  field: {
    type: Object,
    default: null,
  },
  // text: {
  //   type: String,
  //   default: "",
  // },
  // validation: {
  //   type: Object,
  //   default: null,
  // },
});

useFormField(props);
</script>
