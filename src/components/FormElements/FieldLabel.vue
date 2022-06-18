<template>
  <div class="field-label">
    <Icon v-if="text" icon="bx:arrow-from-left" />
    <h4>
      {{ text }}
    </h4>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps(['text']);

</script>
