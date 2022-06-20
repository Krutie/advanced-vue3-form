<template>
  <label class="field-label" :for="props.name">
    <Icon v-if="props.label" icon="bx:arrow-from-left" />
    <span>
      {{ props.label }} <span v-if="props.validation?.required"> * </span>
    </span>
  </label>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  props: {
    type: Object,
    default: null,
  },
});
</script>
