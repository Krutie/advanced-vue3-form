<template>
  <label class="field-label" :for="`${props.key}-${props.name}`">
    <Icon v-if="props.text" icon="bx:arrow-from-left" />
    <span>
      {{ props.text }} <span v-if="props.validation?.required"> * </span>
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
